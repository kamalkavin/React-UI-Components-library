import React from 'react';
import { defaultTheme, darkTheme } from '../src/themes';
import { setClassNamePrefix } from 'ui-box';
import { ThemeContext } from '../src/commons';
import './story.style.css';

const withThemeProvider = (Story, context) => {
  setClassNamePrefix('gm-');
  const theme = context.globals.theme === 'dark' ? darkTheme : defaultTheme
  return (
    <ThemeContext.Provider value={{ theme: theme }}>
      <Story {...context} />
    </ThemeContext.Provider>
  )
}

export const decorators = [withThemeProvider]

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Component Library Theme',
    defaultValue: 'default',
    toolbar: {
      icon: 'paintbrush',
      items: ['default', 'dark']
    }
  }
}