import fetch from 'node-fetch';
import { configure, message, get, set, lift } from '../src'
import log from './log'

// Test data
const state = {
  isLoading: false,
  result: {
    t: 'b'
  }
}

configure({
  flow: 'sync'
})

const clear = message.construct({ type: 'clearResults' }, state)
const search = message.construct({ type: 'searchAddress' }, state)
const test = message.construct({ a: 100, b: 200 }, state)

const getGithub = lift(() => fetch('https://github.com/').then(res => res.text()))

// Lenses
const summate = (x, y) => x + y
const sum = lift(summate)

// Test flows
const testFlow = set(
  'result.summ',
  sum(get('a'), get('b'))
)

log(test)
log(testFlow(test))
