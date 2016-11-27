import babel from 'rollup-plugin-babel'

const pkg = require('./package.json')
const entry = process.env.entry

export default {
  entry: `src/${ entry }`
, dest: `dist/${ entry }`
, format: 'umd'
, moduleName: moduleName(pkg.name)
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

function moduleName(packageName) {
  const n = packageName.split('/')
  return n[1] || n[0]
}
