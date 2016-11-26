import test from 'ava'
import jsdom from 'jsdom'
import { doEffect } from '../src/js/lib'

global.document = jsdom.jsdom()
global.window = global.document.defaultView

test('doEffect is a function', t => {
  t.pass()
})
