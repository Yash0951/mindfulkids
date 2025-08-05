/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "var(--color-border)", /* white-10 */
        input: "var(--color-input)", /* cosmic-surface */
        ring: "var(--color-ring)", /* cyan-bright */
        background: "var(--color-background)", /* cosmic-dark */
        foreground: "var(--color-foreground)", /* cosmic-light */
        primary: {
          DEFAULT: "var(--color-primary)", /* cosmic-primary */
          foreground: "var(--color-primary-foreground)", /* white */
        },
        secondary: {
          DEFAULT: "var(--color-secondary)", /* twilight-blue */
          foreground: "var(--color-secondary-foreground)", /* cosmic-light */
        },
        destructive: {
          DEFAULT: "var(--color-destructive)", /* red-400 */
          foreground: "var(--color-destructive-foreground)", /* white */
        },
        muted: {
          DEFAULT: "var(--color-muted)", /* cosmic-primary */
          foreground: "var(--color-muted-foreground)", /* gray-400 */
        },
        accent: {
          DEFAULT: "var(--color-accent)", /* cyan-bright */
          foreground: "var(--color-accent-foreground)", /* cosmic-dark */
        },
        popover: {
          DEFAULT: "var(--color-popover)", /* twilight-blue */
          foreground: "var(--color-popover-foreground)", /* cosmic-light */
        },
        card: {
          DEFAULT: "var(--color-card)", /* cosmic-surface */
          foreground: "var(--color-card-foreground)", /* cosmic-light */
        },
        success: {
          DEFAULT: "var(--color-success)", /* green-400 */
          foreground: "var(--color-success-foreground)", /* cosmic-dark */
        },
        warning: {
          DEFAULT: "var(--color-warning)", /* amber-400 */
          foreground: "var(--color-warning-foreground)", /* cosmic-dark */
        },
        error: {
          DEFAULT: "var(--color-error)", /* red-400 */
          foreground: "var(--color-error-foreground)", /* white */
        },
        conversion: {
          DEFAULT: "var(--color-conversion)", /* pink-400 */
          foreground: "var(--color-conversion-foreground)", /* white */
        },
        surface: {
          DEFAULT: "var(--color-surface)", /* cosmic-surface */
          foreground: "var(--color-surface-foreground)", /* cosmic-light */
        },
        'text-primary': "var(--color-text-primary)", /* cosmic-light */
        'text-secondary': "var(--color-text-secondary)", /* gray-400 */
        'magical-glow': "var(--color-magical-glow)", /* cyan-glow */
        'magical-particle': "var(--color-magical-particle)", /* white-30 */
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        heading: ['Nunito', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        accent: ['Comfortaa', 'cursive'],
        cta: ['Nunito', 'sans-serif'],
      },
      fontSize: {
        'hero': ['3rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display': ['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'heading-1': ['2rem', { lineHeight: '1.3' }],
        'heading-2': ['1.5rem', { lineHeight: '1.4' }],
        'heading-3': ['1.25rem', { lineHeight: '1.5' }],
        'body-lg': ['1.125rem', { lineHeight: '1.6' }],
        'body': ['1rem', { lineHeight: '1.6' }],
        'body-sm': ['0.875rem', { lineHeight: '1.5' }],
        'caption': ['0.75rem', { lineHeight: '1.4' }],
      },
      fontWeight: {
        'light': '300',
        'normal': '400',
        'medium': '500',
        'semibold': '600',
        'bold': '700',
        'extrabold': '800',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      animation: {
        'breathe': 'breathe 4s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite',
        'constellation': 'constellation 2s ease-in-out infinite',
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'scale-in': 'scaleIn 0.2s ease-out',
      },
      keyframes: {
        breathe: {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.8' },
          '50%': { transform: 'scale(1.05)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '33%': { transform: 'translateY(-10px) rotate(1deg)' },
          '66%': { transform: 'translateY(5px) rotate(-1deg)' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 20px var(--color-magical-glow)' },
          '50%': { boxShadow: '0 0 30px var(--color-accent), 0 0 40px var(--color-magical-glow)' },
        },
        constellation: {
          '0%': { opacity: '0.3', transform: 'scale(0.8)' },
          '50%': { opacity: '1', transform: 'scale(1.1)' },
          '100%': { opacity: '0.3', transform: 'scale(0.8)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      backdropBlur: {
        'xs': '2px',
      },
      boxShadow: {
        'magical': '0 0 20px var(--color-magical-glow)',
        'cosmic': '0 4px 6px rgba(0, 0, 0, 0.07), 0 1px 3px rgba(0, 0, 0, 0.06)',
        'glow-sm': '0 0 10px var(--color-accent)',
        'glow-md': '0 0 20px var(--color-accent)',
        'glow-lg': '0 0 30px var(--color-accent)',
        'inner-glow': 'inset 0 0 10px var(--color-magical-glow)',
      },
      backgroundImage: {
        'cosmic-gradient': 'linear-gradient(135deg, var(--color-background) 0%, var(--color-primary) 100%)',
        'twilight-gradient': 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%)',
        'magical-gradient': 'linear-gradient(135deg, var(--color-accent) 0%, var(--color-conversion) 100%)',
      },
      transitionTimingFunction: {
        'magical': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'breathe': 'cubic-bezier(0.4, 0.0, 0.2, 1)',
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
  ],
}