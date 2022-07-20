const { join } = require("path");

module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
  },
  extends: ["standard"],
  parser: "@babel/eslint-parser",
  parserOptions: {
    babelOptions: {
      cwd: join(__dirname, ".."),
    },
    ecmaVersion: "latest",
    requireConfigFile: false,
    sourceType: "module",
  },
  plugins: ["html"],
  root: true,
  rules: {
    //https://eslint.org/docs/latest/rules/
    /* eslint-disable quote-props */

    //Require or disallow newline at the end of files
    "eol-last": ["error", "never"],
    //Require error handling in callbacks
    "handle-callback-err": ["error", "err"],
    indent: ["error", "tab"],
    // Require or disallow an empty line between class members
    "lines-between-class-members": ["error", "never"],
    // Enforce newlines between operands of ternary expressions
    "multiline-ternary": ["off"],
    //This rule aims to disallow async Promise executor functions.
    "no-async-promise-executor": ["off"],
    //Disallow the use of console
    "no-console": ["off"],
    // Disallows directly modifying the prototype of builtin objects.
    "no-extend-native": ["off"],
    //This rule disallows unnecessary semicolons.
    "no-extra-semi": ["error"],
    //Disallow new operators with the Function object
    "no-new": ["off"],
    //使用新运算符创建对象时，将_uproto_uu设置为对象构造函数的原始“prototype”属性。对象getPrototypeOf是获取对象原型的首选方法。要更改对象的原型，请使用object。setPrototypeOf。
    "no-proto": ["off"],
    // This rule aims to eliminate assignments from return statements. As such, it will warn whenever an assignment is found as part of return.
    //This is the default option. It disallows assignments unless they are enclosed in parentheses.
    "no-return-assign": ["off"],
    // If an arrow function body is a statement rather than a block, and that statement contains a sequence, you need to use double parentheses around the statement to indicate that the sequence is intentional.
    "no-sequences": ["off"],
    // This rule looks for tabs anywhere inside a file: code, comments or anything else.
    "no-tabs": ["off"],
    //This rule disallows unreachable code after return, throw, continue, and break statements. This rule also flags definitions of instance fields in subclasses whose constructors don’t have super() calls.
    "no-unreachable": ["error"],
    //This rule flags class constructors that can be safely removed without changing how the class works.
    "no-useless-constructor": ["off"],
    //This rule is aimed at discouraging the use of var and encouraging the use of const or let instead.
    "no-var": ["error"],
    //This rule enforces consistent spacing inside braces of object literals, destructuring assignments, and import/export specifiers.
    "object-curly-spacing": ["error", "always"],
    //This rule enforces a consistent linebreak style for operators.
    //???
    "operator-linebreak": ["error", "before"],
    quotes: ["error", "double"],
    semi: ["error", "always"],
    "sort-keys": ["error", "asc", { caseSensitive: false, natural: true }],
    //This rule aims to enforce consistent spacing before function parentheses and as such, will warn whenever whitespace doesn’t match the preferences specified.
    "space-before-function-paren": ["error", "never"],
    //This rule controls spacing around colons of case and default clauses in switch statements. This rule does the check only if the consecutive tokens exist on the same line.
    "switch-colon-spacing": ["error"],
    /* eslint-enable quote-props */
  },
};
