/**
*
* CustomSelect
*
*/

import { InputField, SelectField, SvgIcon } from 'components';
import ModalWindow from 'components/ModalWindow/ModalWindow';
import React, {FC} from 'react';
import { useState } from 'react';
import { components } from 'react-select';
import { useForm } from 'react-hook-form';
import { useEffect } from 'react';

interface IProps {
  options : any;
  handleChange: (e: any) => void;
  customOption?: boolean;
  customOptionHandler?: (customOption: string, editOption?: null|string) => void;
  multiSelectOption?: boolean;
  isMulti?:boolean;
  isClearable?:boolean;
  isSearchable?:boolean;
  value:any[];
  name: string;
}


const CustomSelect:FC<IProps> = (props: IProps) => {
  const customStyles : {[k: string]: any} = {};
  
  const CustomMenuList = props => {
    const customStyle = {
      padding: "8px 12px",
      cursor: "pointer",
      borderTop: "2px solid #e8eef2"
    }
    return (
      <components.MenuList {...props}>
        {props.children}
        <div style={customStyle} data-cy='new-option' onClick={() => {
          props.selectProps.openModal();
          setInputData('');
          setEditOption(null);
        }}>New...</div>
      </components.MenuList>
    );
  };
  
  const CustomOption = props => {
    return (
      <>
        <components.Option {...props}>
          {props.label}
          <span className='float-right' onClick={() => {
              props.selectProps.openModal();
              setInputData(props.label);
              props.selectProps.editOption(props.label);
            }} >
            <SvgIcon size={20} icon='light-pen-dark' />
          </span>
        </components.Option>
      </>
    );
  };
  
  const MultiSelectOptions = props => {
    const selectedValues = props.selectProps.value || [];
    const currentOption = props.data;
    const checkIfSelected = selectedValues.some( ({value}) => currentOption.value === value);
    return (
      <>
        <components.Option {...props}>
          {
          checkIfSelected && 
            <span>
              <SvgIcon size={20} icon={'light-check-dark'} />{' '}
            </span>
          }
          {props.label}
        </components.Option>
      </>
    )
  }
  
  const CustomValueContainer = props => {
    let values = props.getValue();
    let valueLabel = '';
  
    if (values.length > 0) valueLabel += props.selectProps.getOptionLabel(values[0]);
    if (values.length > 1) valueLabel += ` +${values.length - 1}`;
  
    // Keep standard placeholder and input from react-select
    let childsToRender = React.Children.toArray(props.children).filter(
      (child: any) => ['Input', 'DummyInput', 'Placeholder'].indexOf(child && child.type ? child.type.name : '') >= 0
    );
    let optionText = valueLabel.split('+');
    let addedText = optionText.length > 1 && valueLabel.substring(valueLabel.indexOf('+'));
  
    return (
      <components.ValueContainer {...props}>
        {valueLabel && (
          <>
            <div className='col-md-11 pl-0 text-overflow-ellipsis'>{optionText[0]}</div>
            <span>{addedText}</span>
          </>
        )}
        {childsToRender}
      </components.ValueContainer>
    );
  };
  let customComponents = {};
  const [showModal, setShowModal] = useState(false);
  const [inputData, setInputData] = useState('');

  useEffect(() => {
    
  }, [inputData])

  const { register } = useForm({
    mode: 'onChange',
  });

  if(props.customOption) {
    customComponents = {
      MenuList : CustomMenuList,
      Option : CustomOption
    }
  }
  if(props.multiSelectOption) {
    customComponents = {
      Option : MultiSelectOptions,
      ValueContainer : CustomValueContainer
    }
    customStyles.multiValueRemove = defaultStyles => {
      return {
        ...defaultStyles,
        display: 'none'
      };
    }
    customStyles.multiValue = defaultStyles => {
      return {
        ...defaultStyles,
        backgroundColor: '#fff',
      };
    }
    customStyles.option = (defaultStyles, state) => {
      return {
        ...defaultStyles,
        backgroundColor: state.isSelected ? '#fff' : defaultStyles.backgroundColor,
        color: state.isSelected ? '#38444c' : defaultStyles.color,
        '&:active': {
          backgroundColor: '#DEEBFF',
        },
      }
    };
    customStyles.control = (defaultStyles) => {
      return {
        ...defaultStyles,
        height: '30px',
        minHeight: '30px'
      }
    }
    customStyles.container = (defaultStyles) => {
      return {
        ...defaultStyles,
        height: '30px',
        minHeight: '30px',
      }
    }
    customStyles.valueContainer = (defaultStyles) => {
      return {
        ...defaultStyles,
        height: '30px',
        minHeight: '30px'
      }
    }
    customStyles.indicatorSeparator = (defaultStyles) => {
      return {
        ...defaultStyles,
        display: 'none'
      }
    }
    customStyles.indicatorsContainer = (defaultStyles) => {
      return {
        ...defaultStyles,
        height: '30px',
        minHeight: '30px'
      }
    }
    // customStyles.input = (defaultStyles) => {
    //   return {
    //     ...defaultStyles,
    //     height: '30px',
    //     minHeight: '30px'
    //   }
    // }
    
  }

  customStyles.menuPortal = defaultStyles => ({ ...defaultStyles, zIndex: 9999 });
  const isSelectAllSelected = () => {
		return props.value.length === 0;
	};
  
	const getValue = () => (isSelectAllSelected() && props.multiSelectOption ? props.options.length > 0 ? [props.options[0]] : props.options : props.value);
	const getOptions = () => [...props.options];
  const handleChange = (newValue, actionMeta: any) => {
    if(props.multiSelectOption) {
      props.handleChange(newValue ? newValue : []);
    } else {
      props.handleChange(newValue);
    }
  }
  const [editOption, setEditOption] = useState<null|string>(null);

  return (
  <div id="custom-select" data-cy="custom-select">
    <SelectField
      closeMenuOnSelect={true}
      isMulti={props.isMulti}
      isClearable={props.isClearable} 
      hideSelectedOptions={false}
      styles={customStyles}
      isSearchable={props.isSearchable}
      components={customComponents}
      placeholder='Select'
      openModal={()=>setShowModal(true)}
      editOption={(option)=>setEditOption(option)}
      menuPortalTarget={document.querySelector("body")}
			value={getValue()}
			options={getOptions()}
      onChange={handleChange}
      name={props.name}
      classNamePrefix={`alarm-suppress`}
    />
    {showModal && 
        <ModalWindow
        onHide={()=>setShowModal(false)}
        show={true}
        size='sm'
        heading={(editOption ?'Edit' : 'Add') + ' New Reason'}
			  dialogClassName={'edit-dialog'}
        actionButtons={true}
        >
          <InputField
            register={register}
            placeHolder={`Reason`}
            type={`text`}
            name={`suppressReason`}
            value={inputData}
            onChange={(val) => {
              setInputData(val.target.value);
            }}></InputField>
          <div className='modal-footer'>
            <button className='btn' onClick={()=>setShowModal(false)}>
              Cancel
            </button>
            <button className='btn' onClick={()=>{
              setShowModal(false);
              if(props.customOptionHandler)
                props.customOptionHandler(inputData, editOption);
              }}>
              {editOption ?'Update' : 'Add'}
            </button>
          </div>
      </ModalWindow>}
  </div>
  );
};

export default CustomSelect;