module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
        'plugin:i18next/recommended',
        'eslint:recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    ignorePatterns: ['.fttemplates/*'],
    plugins: [
        'react',
        '@typescript-eslint',
        'i18next',
        'react-hooks',
        'feature-sliced-design',
        'unused-imports',
        'simple-import-sort',
    ],
    rules: {
        'react/jsx-indent': 'off',
        'react/jsx-indent-props': 'off',
        indent: 'off',
        'react/jsx-filename-extension': [
            2,
            { extensions: ['.js', '.jsx', '.tsx'] },
        ],
        'import/no-unresolved': 'off',
        'import/prefer-default-export': 'off',
        'react/require-default-props': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/jsx-props-no-spreading': 'off',
        'react/function-component-definition': 'off',
        'no-shadow': 'off',
        'import/extensions': 'off',
        'import/no-extraneous-dependencies': 'off',
        'no-underscore-dangle': 'off',
        'jsx-a11y/no-noninteractive-element-interactions': 'off',
        'i18next/no-literal-string': [
            'error',
            {
                markupOnly: true,
                ignoreAttribute: [
                    'data-testid',
                    'aria-label',
                    'to',
                    'as',
                    'view',
                    'target',
                    'direction',
                    'justify',
                    'align',
                    'gap',
                    'role',
                    'titleSize',
                ],
            },
        ],
        'linebreak-style': ['off', 'windows'],
        'operator-linebreak': ['off', 'after'],
        'comma-dangle': ['off', 'never'],
        'implicit-arrow-linebreak': ['off', 'beside'],
        'object-curly-newline': ['off'],
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'error',
        'no-param-reassign': ['off'],
        'no-undef': 'off',
        'feature-sliced-design/relative-path-within-slice': [
            'error',
            { alias: '@' },
        ],
        'feature-sliced-design/layers-hierarchy': [
            'error',
            { alias: '@', ignoredImports: ['**/StoreProvider'] },
        ],

        // 'feature-sliced-design/public-api-slice-import': [
        //     'warn',
        //     {
        //         alias: '@',
        //         testFiles: [
        //             '**/*.test.ts',
        //             '**/*.test.tsx',
        //             '**/StoreDecorator.tsx',
        //         ],
        //     },
        // ],
        // 'no-unused-vars': 'off', // or "@typescript-eslint/no-unused-vars": "off",
        // 'unused-imports/no-unused-imports': 'error',
        // 'unused-imports/no-unused-vars': [
        //     'warn',
        //     {
        //         vars: 'all',
        //         varsIgnorePattern: '^_',
        //         args: 'after-used',
        //         argsIgnorePattern: '^_',
        //     },
        // ],
        'import/order': 'off',
        'simple-import-sort/imports': [
            'error',
            {
                groups: [
                    ['^react', '^@/?\\w'],
                    ['^'],
                    ['^\\.'],
                    ['.module.scss'],
                ],
            },
        ],
    },
    globals: {
        __IS_DEV__: true,
        __PROJECT__: true,
    },
    overrides: [
        {
            files: ['**/src/**/*.test.{ts,tsx}'],
            rules: {
                'i18next/no-literal-string': 'off',
            },
        },
    ],
};
