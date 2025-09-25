import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals"),
  {
    rules: {
      // Disable the unescaped entities rule for faster builds
      "react/no-unescaped-entities": "off",
      // Allow unused variables for cleaner code during development
      "@typescript-eslint/no-unused-vars": "warn",
    },
  },
];

export default eslintConfig;