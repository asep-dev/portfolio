'use client';
import React, { createContext, useContext, ReactNode, useEffect } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

type Theme = 'light' | 'dark';
interface ThemeContextProps {
   theme: Theme;
   toggleTheme: () => void;
}
const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
   const [theme, setTheme] = useLocalStorage<Theme>(
      'theme',
      window.matchMedia('(prefers-color-scheme: dark)').matches
         ? 'dark'
         : 'light'
   );

   const toggleTheme = () => {
      setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
      if (theme === 'dark') {
         document.documentElement.classList.add('dark');
      } else {
         document.documentElement.classList.remove('dark');
      }
   };
   return (
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
         {children}
      </ThemeContext.Provider>
   );
};

export const useTheme = (): ThemeContextProps => {
   const context = useContext(ThemeContext);
   if (!context) {
      throw new Error('useTheme must be used within a ThemeProvider');
   }
   return context;
};
