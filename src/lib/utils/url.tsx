export const isValidURL = (url: string): boolean => {
   const regex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
   return regex.test(url);
};
