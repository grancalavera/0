import babel from 'rollup-plugin-babel'

export default {
  entry: `src/js/${process.env.entry}.js`
, dest: `dist/${process.env.entry}.js`
, format: 'umd'
, moduleName: 'zero'
, sourceMap: true
, plugins:
  [ babel(
    { 'presets': [['es2015', {'modules': false }]]
    , 'plugins': ['external-helpers']
    , 'babelrc': false
    })
  ]
, globals: {}
}

