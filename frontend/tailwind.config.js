/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  safelist: [
    // Max-width classes for boxed blocks
    'max-w-xs',
    'max-w-sm',
    'max-w-md',
    'max-w-lg',
    'max-w-xl',
    'max-w-2xl',
    'max-w-3xl',
    'max-w-4xl',
    'max-w-5xl',
    'max-w-6xl',
    'max-w-7xl',
    'max-w-full',
    // Padding classes
    'py-0', 'py-1', 'py-2', 'py-3', 'py-4', 'py-6', 'py-8', 'py-10', 'py-12', 'py-16', 'py-20', 'py-24', 'py-32',
    'px-0', 'px-1', 'px-2', 'px-3', 'px-4', 'px-6', 'px-8', 'px-10', 'px-12', 'px-16', 'px-20', 'px-24', 'px-32',
    // Margin classes
    'mt-0', 'mt-1', 'mt-2', 'mt-3', 'mt-4', 'mt-6', 'mt-8', 'mt-10', 'mt-12', 'mt-16', 'mt-20', 'mt-24', 'mt-32',
    'mb-0', 'mb-1', 'mb-2', 'mb-3', 'mb-4', 'mb-6', 'mb-8', 'mb-10', 'mb-12', 'mb-16', 'mb-20', 'mb-24', 'mb-32',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
