/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          1: 'hsl(var(--chart-1))',
          2: 'hsl(var(--chart-2))',
          3: 'hsl(var(--chart-3))',
          4: 'hsl(var(--chart-4))',
          5: 'hsl(var(--chart-5))',
        },
      },
      typography: {
        DEFAULT: {
          css: {
            color: 'hsl(var(--foreground))', // Cor padrão do texto
            a: {
              color: 'hsl(var(--primary))', // Cor dos links
              '&:hover': {
                color: 'hsl(var(--primary-foreground))', // Cor do link ao passar o mouse
              },
            },
            h1: { color: 'hsl(var(--foreground))' }, // Cor para h1
            h2: { color: 'hsl(var(--foreground))' }, // Cor para h2
            h3: { color: 'hsl(var(--foreground))' }, // Cor para h3
            h4: { color: 'hsl(var(--foreground))' }, // Cor para h4
            h5: { color: 'hsl(var(--foreground))' }, // Cor para h5
            h6: { color: 'hsl(var(--foreground))' }, // Cor para h6
            strong: { color: 'hsl(var(--foreground))' }, // Cor para strong
            blockquote: {
              color: 'hsl(var(--muted-foreground))', // Cor para citação
            },
            code: {
              color: 'hsl(var(--primary))', // Cor para código
            },
            pre: {
              backgroundColor: 'hsl(var(--background))', // Fundo para o pre
            },
          },
        },
      },
    },
  },
  plugins: [require('tailwindcss-animate'), require('@tailwindcss/typography')],
};
