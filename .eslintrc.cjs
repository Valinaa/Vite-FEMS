module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    es2020: true,
  },
  extends: [
    "airbnb-typescript",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "airbnb-base",
    "plugin:vue/vue3-recommended",
    "plugin:prettier/recommended",
  ],
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
    ecmaVersion: 2020,
    sourceType: "module",
  },
  plugins: ["vue", "html", "@typescript-eslint", "import"],
  rules: {
    // disallow reassignment of function parameters
    // disallow parameter object manipulation except for specific exclusions
    "import/no-unresolved": [
      2,
      {
        ignore: [
          "unplugin-vue-components/vite",
          "unplugin-vue-components/resolvers",
          "unplugin-icons/vite",
          "unplugin-icons/resolver",
          "unplugin-auto-import/vite",
        ],
      },
    ],
    "no-param-reassign": [
      "error",
      {
        props: true,
        ignorePropertyModificationsFor: [
          "state", // for vuex state
          "acc", // for reduce accumulators
          "e", // for e.returnvalue
        ],
      },
    ],
    // allow debugger during development
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    // ? 不需要
    "space-before-function-paren": 0, // 函数定义时括号前面要不要有空格
    "comma-dangle": 0, // 对象字面量项尾可有逗号
    "eol-last": 0, // 文件以单一的换行符结束
    "no-extra-semi": 0, // 可以多余的冒号
    semi: 0, // 语句可以不需要分号结尾
    eqeqeq: 0, // 必须使用全等
    "one-var": 0, // 连续声明
    //    "vue/html-closing-bracket-newline": "off",
    "no-undef": 0, // 可以 有未定义的变量

    // todo 警告
    "no-extra-boolean-cast": 1, // 不必要的bool转换
    "no-extra-parens": 1, // 非必要的括号
    "no-empty": 1, // 块语句中的内容不能为空
    "no-use-before-define": [1, "nofunc"], // 未定义前不能使用
    complexity: [1, 10], // 循环复杂度
    "global-require": 1, // 所有调用require()都位于模块的顶层
    "no-unused-vars": 1, // 不能有声明后未被使用的变量或参数

    //! 错误
    camelcase: [2, { properties: "always" }], // 为属性强制执行驼峰命名
    "prettier/prettier": ["error"],
    "no-constant-condition": 2, // 禁止在条件中使用常量表达式 if(true) if(1)
    "no-dupe-args": 2, // 函数参数不能重复
    "no-dupe-keys": 2, // 在创建对象字面量时不允许键重复 {a:1,a:1}
    "no-duplicate-case": 2, // switch中的case标签不能重复
    "no-empty-character-class": 2, // 正则表达式中的[]内容不能为空
    "no-invalid-regexp": 2, // 禁止无效的正则表达式
    "no-func-assign": 2, // 禁止重复的函数声明
    "valid-typeof": 2, // 必须使用合法的typeof的值
    "no-unreachable": 2, // 不能有无法执行的代码
    "no-unexpected-multiline": 2, // 避免多行表达式
    "no-sparse-arrays": 2, // 禁止稀疏数组， [1,,2]
    "no-shadow-restricted-names": 2, // 严格模式中规定的限制标识符不能作为声明时的变量名使用
    "no-cond-assign": 2, // 禁止在条件表达式中使用赋值语句
    "no-native-reassign": 2, // 不能重写native对象

    // 代码风格
    "no-else-return": 1, // 如果if语句里面有return,后面不能跟else语句
    "no-multi-spaces": 1, // 不能用多余的空格
    "key-spacing": [
      1,
      {
        // 对象字面量中冒号的前后空格
        beforeColon: false,
        afterColon: true,
      },
    ],
    "block-scoped-var": 2, // 块语句中使用var
    "consistent-return": 2, // return 后面是否允许省略
    "accessor-pairs": 2, // 在对象中使用getter/setter
    "dot-location": [2, "property"], // 对象访问符的位置，换行的时候在行首还是行尾
    "no-lone-blocks": 2, // 禁止不必要的嵌套块
    "no-labels": 2, // 禁止标签声明
    "no-extend-native": 2, // 禁止扩展native对象
    "no-floating-decimal": 2, // 禁止省略浮点数中的0 .5 3.
    "no-loop-func": 2, // 禁止在循环中使用函数（如果没有引用外部变量不形成闭包就可以）
    "no-new-func": 2, // 禁止使用new Function
    "no-self-compare": 2, // 不能比较自身
    "no-sequences": 2, // 禁止使用逗号运算符
    "no-throw-literal": 2, // 禁止抛出字面量错误 throw "error"
    "no-return-assign": [2, "always"], // return 语句中不能有赋值表达式
    "no-redeclare": [
      2,
      {
        // 禁止重复声明变量
        builtinGlobals: true,
      },
    ],
    "no-unused-expressions": [
      2,
      {
        // 禁止无用的表达式
        allowShortCircuit: true,
        allowTernary: true,
      },
    ],
    "no-useless-call": 2, // 禁止不必要的call和apply
    "no-useless-concat": 2,
    "no-void": 2, // 禁用void操作符
    "no-with": 2, // 禁用with
  },
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
    "import/resolver": {
      typescript: {
        // always try to resolve types under `<root>@types` directory even it doesn't contain any source code
        alwaysTryTypes: true,
      },
    },
  },
};
