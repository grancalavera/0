import jsdom from 'jsdom'

const documentString = `
<!DOCTYPE html>
<html>
<head>
  <title>Document</title>
</head>
<body>
</body>
</html>
`

global.document = jsdom.jsdom(documentString)
global.window = global.document.defaultView
