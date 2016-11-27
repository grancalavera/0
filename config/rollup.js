import babel from 'rollup-plugin-babel'

const entry = process.env.entry

export default {
  entry: `src/${ entry }`
, dest: `dist/${ entry }`
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
, external:
  [ 'd3-selection'
  ]
, globals:
  { 'd3-selection': 'd3'
  }
}
