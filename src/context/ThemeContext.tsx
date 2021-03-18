import React, { createContext, useCallback, useEffect, useState } from 'react';

export type ThemeType = 'light' | 'dark';

export interface ITheme {
  theme: ThemeType;
  handleChangeTheme: () => void;
}

const initialData: ITheme = {
  theme: 'light',
  handleChangeTheme: () => console.log('handleChangeTheme'),
};

export const ThemeContext = createContext<ITheme>(initialData);

export const ThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState<ThemeType>('light');

  const changedTheme = useCallback(() => {
    const themeFromLocal = localStorage.getItem('theme');
    const themeFromMedia = window.matchMedia('(prefers-color-scheme: dark)')
      .matches;
    if (themeFromLocal === 'dark' || (!themeFromLocal && themeFromMedia)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    setTheme(themeFromLocal as ThemeType);
  }, []);

  useEffect(() => {
    changedTheme();
  }, [changedTheme]);

  const handleChangeTheme = () => {
    localStorage.theme = theme === 'dark' ? 'light' : 'dark';
    changedTheme();
  };

  return (
    <ThemeContext.Provider value={{ theme, handleChangeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
