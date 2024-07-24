'use client';
import { useState, useEffect } from 'react';

const useLocalStorage = <T,>(
   key: string,
   initialValue: T
): [T, (value: T | ((val: T) => T)) => void] => {
   console.log(initialValue);

   const [storedValue, setStoredValue] = useState<T>(() => {
      try {
         const item = window.localStorage.getItem(key);
         return item ? JSON.parse(item) : initialValue;
      } catch (error) {
         return initialValue;
      }
   });

   useEffect(() => {
      if (typeof window === 'undefined') {
         return; // Avoid setting localStorage during SSR
      }
      try {
         window.localStorage.setItem(key, JSON.stringify(storedValue));
      } catch (error) {
         console.error('Error setting localStorage key “' + key + '”: ', error);
      }
   }, [key, storedValue]);

   return [storedValue, setStoredValue];
};

export default useLocalStorage;
