import nextConfig from 'eslint-config-next';
import simpleImportSort from 'eslint-plugin-simple-import-sort';

const eslintConfig = [
  {
    ignores: [
      'node_modules/**',
      'src/components/ui/**',
      'Help Files/**',
      '.next/**',
    ],
  },
  ...nextConfig,
  {
    plugins: {
      'simple-import-sort': simpleImportSort,
    },
    rules: {
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
    },
  },
];

export default eslintConfig;
