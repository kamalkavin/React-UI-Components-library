import XLSX from 'xlsx';
let downloadFormat = 'xlsx';

export const downloadTable = (columns, data) => {
	if (columns === 'setFormat') {
		downloadFormat = data;
		return;
	}
	let compatibleData: any = [];
	data.forEach((row, rowIndex) => {
		let obj: any = {};
		columns
			.filter(
				(col) => col.column.id != 'selection' && col.column.id != 'expander' && col.column.id != 'headerMenu'
			)
			.forEach((col, index) => {
				col = col.column;
				const key = col.id ? col.id : col.accessor;
				const header = col.Header;
				if (col['exportCallback']) {
					const entity = {
						cell: {
							value: row[key],
						},
						original: {
							data: row,
						},
						row: {
							original: row,
						},
					};
					obj[header] = col['exportCallback'](entity);
				} else if (!col['tooltip']) {
					obj[header] = row[key];
				} else if (col['tooltip'] === 'cell' && typeof col['Cell'] === 'function') {
					const entity = {
						cell: {
							value: row[key],
						},
						original: {
							data: row,
						},
						row: {
							original: row,
						},
					};
					obj[header] = col['Cell'](entity);
				} else {
					obj[header] = col['tooltip'](row);
				}
			});
		compatibleData.push(obj);
	});

	if (downloadFormat === 'csv') {
		let csvContent = '';
		const strMimeType = 'application/octet-stream;charset=utf-8';

		csvContent += Object.keys(compatibleData[0]).join(',') + '\r\n';
		compatibleData.forEach(function (rowArray) {
			let row = Object.values(rowArray)
				.map((item = '') => {
					return '"' + item + '"';
				})
				.join(',');
			csvContent += row + '\r\n';
		});
		const link = document.createElement('a');
		let rawFile;
		if ('download' in link) {
			const blob = new Blob(['\uFEFF', csvContent], { type: strMimeType });
			rawFile = URL.createObjectURL(blob);
			link.setAttribute('download', 'my_data.csv');
		} else {
			rawFile = 'data: ' + strMimeType + ',' + encodeURIComponent(csvContent);
			link.setAttribute('target', '_blank');
		}
		link.setAttribute('href', rawFile);
		document.body.appendChild(link); // Required for FF

		link.click();
		return;
	}
	let wb = XLSX.utils.book_new();
	let ws1 = XLSX.utils.json_to_sheet(compatibleData);
	XLSX.utils.book_append_sheet(wb, ws1, 'React Table Data');
	XLSX.writeFile(wb, `download.xlsx`);
};
