import css from '@eslint/css'
import js from '@eslint/js'
import eslintConfigPrettier from 'eslint-config-prettier/flat'
import jsdoc from 'eslint-plugin-jsdoc'
import eslintPluginJsonc from 'eslint-plugin-jsonc'
import perfectionist from 'eslint-plugin-perfectionist'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'
import { defineConfig, globalIgnores } from 'eslint/config'
import globals from 'globals'
import * as jsoncParser from 'jsonc-eslint-parser'

export default defineConfig([
  globalIgnores([
    'dist/**',
    '.parcel-cache/**',
    'node_modules/**',
    '.vscode/**'
  ]),
  {
    files: ['**/*.{js,mjs,cjs}'],
    plugins: { js },
    extends: ['js/recommended'],
    languageOptions: { globals: globals.browser },
    rules: {
      'no-dupe-args': ['error'],
      'no-dupe-class-members': ['error'],
      'no-dupe-keys': ['error'],
      'no-ex-assign': ['error'],
      'no-magic-numbers': ['error'],
      'no-self-compare': ['error'],
      'no-sparse-arrays': ['error'],
      'no-this-before-super': ['error'],
      'no-unreachable': ['error'],
      'no-useless-assignment': ['error'],
      'no-var': ['error'],
      'no-unsafe-finally': ['error'],
      'prefer-const': [
        'error',
        {
          destructuring: 'any',
          ignoreReadBeforeAssign: false
        }
      ],
      'no-useless-rename': [
        'error',
        {
          ignoreDestructuring: false,
          ignoreImport: false,
          ignoreExport: false
        }
      ],
      'no-useless-constructor': ['error'],
      quotes: ['error', 'single', { allowTemplateLiterals: true }],
      semi: ['error']
    }
  },
  {
    files: ['**/*.json'],
    languageOptions: {
      parser: jsoncParser, // Set this parser.
      parserOptions: {
        jsonSyntax: 'JSON'
      }
    }
  },
  {
    files: ['**/*.{js,mjs,cjs}'],
    plugins: {
      perfectionist
    },
    rules: {
      'perfectionist/sort-imports': [
        'error',
        {
          type: 'natural',
          order: 'asc'
        }
      ]
    }
  },
  {
    ...jsdoc.configs['flat/recommended-error'],
    files: ['**/*.{js,mjs,cjs}'],
    rules: {
      'jsdoc/check-access': ['error'],
      'jsdoc/check-alignment': ['error'],
      'jsdoc/check-param-names': ['error'], // Recommended
      'jsdoc/check-property-names': ['error'], // Recommended
      'jsdoc/check-tag-names': ['error'], // Recommended
      'jsdoc/check-syntax': ['error'],
      'jsdoc/check-types': ['error'], // Recommended
      'jsdoc/check-values': ['error'],
      'jsdoc/empty-tags': ['error'], // Recommended
      'jsdoc/implements-on-classes': ['error'], // Recommended
      'jsdoc/multiline-blocks': ['error'], // Recommended
      'jsdoc/no-multi-asterisks': ['error'], // Recommended
      'jsdoc/no-undefined-types': ['error'], // Recommended
      'jsdoc/require-asterisk-prefix': ['error'],
      'jsdoc/require-description': ['error'],
      'jsdoc/require-jsdoc': ['error'], // Recommended
      'jsdoc/require-param': ['error'], // Recommended
      'jsdoc/require-param-description': ['error'], // Recommended
      'jsdoc/require-param-name': ['error'], // Recommended
      'jsdoc/require-param-type': ['error'], // Recommended
      'jsdoc/require-property': ['error'], // Recommended
      'jsdoc/require-property-description': ['error'], // Recommended
      'jsdoc/require-property-name': ['error'], // Recommended
      'jsdoc/require-property-type': ['error'], // Recommended
      'jsdoc/require-returns': ['error'], // Recommended
      'jsdoc/require-returns-check': ['error'], // Recommended
      'jsdoc/require-returns-description': ['error'], // Recommended
      'jsdoc/require-returns-type': ['error'], // Recommended
      'jsdoc/require-yields': ['error'], // Recommended
      'jsdoc/require-yields-check': ['error'], // Recommended
      'jsdoc/tag-lines': ['error'], // Recommended
      'jsdoc/valid-types': ['error'], // Recommend
      'jsdoc/check-indentation': ['error'],
      'jsdoc/check-line-alignment': ['error'],
      'jsdoc/check-template-names': ['error'],
      'jsdoc/convert-to-jsdoc-comments': ['error'],
      'jsdoc/escape-inline-tags': ['error'],
      'jsdoc/imports-as-dependencies': ['error'],
      'jsdoc/informative-docs': ['error'],
      'jsdoc/lines-before-block': ['error'],
      'jsdoc/match-description': ['error'],
      'jsdoc/match-name': ['error'],
      'jsdoc/no-bad-blocks': ['error'],
      'jsdoc/no-blank-block-descriptions': ['error'],
      'jsdoc/no-defaults': ['error'],
      'jsdoc/no-restricted-syntax': ['error'],
      'jsdoc/no-types': ['error'],
      'jsdoc/reject-any-type': ['error'],
      'jsdoc/reject-function-type': ['error'],
      'jsdoc/require-description-complete-sentence': ['error'],
      'jsdoc/require-example': ['error'],
      'jsdoc/require-hyphen-before-param-description': ['error'],
      'jsdoc/require-next-description': ['error'],
      'jsdoc/require-next-type': ['error'],
      'jsdoc/require-rejects': ['error'],
      'jsdoc/require-template': ['error'],
      'jsdoc/require-template-description': ['error'],
      'jsdoc/require-throws': ['error'],
      'jsdoc/require-throws-description': ['error'],
      'jsdoc/require-throws-type': ['error'],
      'jsdoc/sort-tags': ['error'],
      'jsdoc/text-escaping': ['error'],
      'jsdoc/type-formatting': ['error']
    }
  },
  {
    extends: ['css/recommended'],
    files: ['**/*.css'],
    language: 'css/css',
    plugins: { css },
    languageOptions: {
      customSyntax: {
        atrules: {
          'custom-media': {
            prelude: '<media-query-list>'
          }
        }
      }
    },
    rules: {
      'css/prefer-logical-properties': 'error'
    }
  },
  {
    rules: {
      'jsonc/auto': ['error'],
      'jsonc/no-bigint-literals': ['error'],
      'jsonc/no-binary-expression': ['error'],
      'jsonc/no-binary-numeric-literals': ['error'],
      'jsonc/no-comments': ['error'],
      'jsonc/no-escape-sequence-in-identifier': ['error'],
      'jsonc/no-hexadecimal-numeric-literals': ['error'],
      'jsonc/no-infinity': ['error'],
      'jsonc/no-nan': 'error',
      'jsonc/no-number-props': ['error'],
      'jsonc/no-numeric-separators': ['error'],
      'jsonc/no-octal-numeric-literals': ['error'],
      'jsonc/no-parenthesized': ['error'],
      'jsonc/no-plus-sign': ['error'],
      'jsonc/no-regexp-literals': ['error'],
      'jsonc/no-template-literals': ['error'],
      'jsonc/no-undefined-value': ['error'],
      'jsonc/no-unicode-codepoint-escapes': ['error'],
      'jsonc/sort-keys': ['error'],
      'jsonc/sort-array-values': [
        'error',
        {
          pathPattern: '^files$', // Hits the files property
          order: { type: 'asc', natural: true, caseSensitive: true }
        },
        {
          pathPattern: '^keywords$', // Hits the keywords property
          order: { type: 'asc', natural: true, caseSensitive: true }
        }
      ],
      'jsonc/array-bracket-newline': ['error'],
      'jsonc/array-bracket-spacing': ['error'],
      'jsonc/array-element-newline': ['error'],
      'jsonc/comma-dangle': ['error'],
      'jsonc/comma-style': ['error'],
      'jsonc/indent': ['error'],
      'jsonc/key-spacing': ['error'],
      'jsonc/no-dupe-keys': ['error'],
      'jsonc/no-floating-decimal': ['error'],
      'jsonc/no-irregular-whitespace': ['error'],
      'jsonc/no-multi-str': ['error'],
      'jsonc/no-octal': ['error'],
      'jsonc/no-sparse-arrays': ['error'],
      'jsonc/no-useless-escape': ['error'],
      'jsonc/object-curly-newline': ['error'],
      'jsonc/object-curly-spacing': ['error'],
      'jsonc/object-property-newline': ['error'],
      'jsonc/quote-props': ['error'],
      'jsonc/quotes': ['error'],
      'jsonc/space-unary-ops': ['error']
    }
  },
  eslintConfigPrettier,
  eslintPluginPrettierRecommended,
  ...eslintPluginJsonc.configs['recommended-with-json']
])
