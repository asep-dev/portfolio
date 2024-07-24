import type { Config } from 'tailwindcss';

const config: Config = {
   darkMode: 'class',
   content: [
      './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
      './src/components/**/*.{js,ts,jsx,tsx,mdx}',
      './src/app/**/*.{js,ts,jsx,tsx,mdx}',
   ],
   theme: {
      extend: {
         backgroundImage: {
            hero: "url('/hero.png')",
         },
         colors: {
            border: 'rgb(var(--border) / <alpha-value>)',
            black: 'rgb(var(--color-black) / <alpha-value>)',
            white: 'rgb(var(--color-white) / <alpha-value>)',
            yellow: 'rgb(var(--color-yellow) / <alpha-value>)',
            background: 'rgb(var(--color-background) / <alpha-value>)',
            foreground: 'rgb(var(--color-foreground) / <alpha-value>)',
            primary: 'rgb(var(--color-primary) / <alpha-value>)',
            muted: {
               DEFAULT: 'rgb(var(--muted) / <alpha-value>)',
               foreground: 'rgb(var(--muted-foreground))',
            },
         },
         fontSize: {
            '4.5xl': '2.7rem',
         },
      },
   },
   plugins: [],
};
export default config;
