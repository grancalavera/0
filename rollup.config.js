import babel from 'rollup-plugin-babel'

export default {
  entry: 'src/main.js',
  dest: 'dist/main.js',
  format: 'umd',
  moduleName: 'zero',
  sourceMap: true,
  plugins: [ babel({
    "presets": [["es2015", { "modules": false }]],
    "plugins": ["external-helpers"],
    "babelrc": false
  }) ],
  globals: {
  }
}
