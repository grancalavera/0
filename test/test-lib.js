import test from 'ava'
import './helpers/browser'
import { helloWorld } from '../src/lib'

test('helloWorld produces a side effect', t => {
  const target = document.createElement('div')
  helloWorld(target)
  t.is(target.innerHTML, '<h1>Hello World</h1>')
})
