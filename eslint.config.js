import antfu from '@antfu/eslint-config'

export default antfu(
  {
    unocss: true,
    ignores: [
      '**/public',
      '**/node_modules',
      '**/dist*',
      '**/src/ui/shadcn/ui',
      '**/@generated/**',
    ],
  },
  {
    rules: {
      'eslint-comments/no-unlimited-disable': 'off',
      'node/prefer-global/process': 'off',
      'style/max-statements-per-line': ['error', { max: 2 }],
      'curly': ['error', 'all'],
      'no-undef': 'off',
      'new-cap': 'off',
      'no-console': 'off',
      'unicorn/error-message': 'off',
      'unused-imports/no-unused-vars': 'off',
      'ts/no-unused-expressions': ['error', {
        allowShortCircuit: true,
        allowTernary: true,
      }],
    },
  },
  {
    files: [
      '**/src/**/*.vue',
    ],
    rules: {
      'vue/block-order': ['error', {
        order: ['route', 'script', 'template', 'style'],
      }],
    },
  },
)
