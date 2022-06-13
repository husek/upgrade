import { useState } from 'react';

const getDefaultTheme = () => {
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) return 'dark';
  return 'light';
}

const useTheme = (initialTheme = localStorage.getItem('lastTheme') ?? getDefaultTheme()) => {
  const [theme, setTheme] = useState(initialTheme);

  const themeHandler = newTheme => {
    setTheme(newTheme);
    localStorage.setItem('lastTheme', newTheme);
  }

  return [theme, themeHandler];
};


export default useTheme;
