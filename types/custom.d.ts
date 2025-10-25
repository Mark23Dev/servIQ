// This declaration tells TypeScript that importing files ending in .css is a valid action.
// It treats them as modules, which resolves the "Cannot find module" error for CSS imports.
declare module '*.css';
