module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true
    },
    extends: [
        'eslint:recommended',
        'plugin:vue/vue3-essential',
        'plugin:@typescript-eslint/recommended'
    ],
    overrides: [],
    /* 指定如何解析语法。*/
    parser: 'vue-eslint-parser',
    /* 优先级低于parse的语法解析配置 */
    parserOptions: {
        parser: '@typescript-eslint/parser',
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    plugins: ['vue', '@typescript-eslint'],
    rules: {
        '@typescript-eslint/ban-types': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-use-before-define': 'off',
        'vue/multi-word-component-names': [
            'error',
            {
                ignores: ['index'] //需要忽略的组件名
            }
        ]
    }
};
