module.exports = {
  env: {
    node: true,
    es2021: true,
    jest: true
  },
  extends: [
    'eslint:recomended',
    'standard-with-typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'prettier',
    'plugin:jest/recommended',
    'plugin:promise/recommended'
  ],
  parser: "@typescript-eslint/parser",
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: "./tsconfig.eslint.json"
  },
  plugins: ['@typescript-eslint', 'prettier', 'import', 'eslint-comments', 'jest', 'promise'],
  rules: {
    "prettier/prettier": "error",
    "import/prefer-default-export": "off",
    "import/no-default-export": "error",
    "no-use-before-define": [
        "error",
        {
            "functions": false,
            "classes": true,
            "variables": true
        }
    ],
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-use-before-define": [
        "error",
        {
            "functions": false,
            "classes": true,
            "variables": true,
            "typedefs": true
        }
      ],
      "import/no-extraneous-dependencies": "off"
    },
    "settings": {
      "import/resolver": {
        "typescript": {
          "alwaysTryTypes": true,
          "project": "./tsconfig.json"
        }
    }
}
}
