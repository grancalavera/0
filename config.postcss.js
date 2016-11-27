module.exports = {
  use:
  [ 'postcss-import'
  , 'postcss-cssnext'
  ]
, input: ['src/app.css', 'src/lib.css']
, dir: 'dist/'
, map: 'file'
, 'local-plugins': true
}
