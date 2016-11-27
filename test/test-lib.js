import test from 'ava'
import './helpers/browser'
import { helloWorld } from '../src/lib'

test('helloWorld produces a side effect', t => {

  const target = document.createElement('div')
  t.falsy(target.innerHTML, 'No side effect should have been produced')

  helloWorld(target)
  t.truthy(target.innerHTML, 'A side effect should have been produced')
})
