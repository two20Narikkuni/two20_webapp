import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

// Load Next.js core rules without TypeScript rules
const eslintConfig = [
  ...compat.extends("next/core-web-vitals"),
];

// Disable specific TypeScript rules
eslintConfig.push({
  rules: {
    '@typescript-eslint/no-explicit-any': 'off', // Disable the rule for 'any'
    '@typescript-eslint/no-unused-vars': 'off', // Disable unused vars
    '@typescript-eslint/explicit-module-boundary-types': 'off', // Disable explicit module boundary types
    '@typescript-eslint/no-inferrable-types': 'off', // Disable inferrable types
    '@typescript-eslint/ban-ts-comment': 'off', // Disable ban on ts comments
    '@typescript-eslint/no-empty-function': 'off', // Disable empty function checks
    '@typescript-eslint/no-empty-interface': 'off', // Disable empty interface checks
    '@typescript-eslint/no-non-null-assertion': 'off', // Disable non-null assertion checks
    '@typescript-eslint/no-var-requires': 'off', // Disable no-var-requires checks
    // Add more rules to disable as needed
  },
});

// Export the configuration
export default eslintConfig;
