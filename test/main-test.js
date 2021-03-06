const chai = require('chai')
const assert = chai.assert
const Controllux = require('../lib/main')

describe('user uses controllux', function () {
  const { createStore, createController, imut } = Controllux
  // imut is now Immutable JS

  const counterState = createStore({number: 0})

  const actions = {
    UP: (state, num) => {
    	const { number } = state.toObject()
      return state.set('number', number + 1)
    },
    DOWN: (state, num) => {
    	const { number } = state.toObject()
      return state.set('number', number - 1)
    }
  }

  const render = newState => {
    document.getElementById('num').innerHTML = newState.number
  }

  window.app = {}
  window.app.counter = createController(counterState, actions)
  window.app.counter.sub(render)

  it('properly exposes Immutable JS', () => {
    const imutTest = imut.Map({ok: 'nice'})

    assert.instanceOf(imutTest, imut.Map)
    assert.deepEqual(imutTest.toObject(), {ok: 'nice'})
  })

  it('basic functionality is a go', () => {
    assert.deepEqual(app.counter.appState.toObject(), {number: 0})
    app.counter.send('UP', 1)

    assert.deepEqual(app.counter.appState.toObject(), {number: 1})
    app.counter.send('DOWN', 1)

    assert.deepEqual(app.counter.appState.toObject(), {number: 0})
    assert.deepEqual(app.counter.render, render)

    for (const i in [...Array(10).keys()]) app.counter.send('UP', 1)
    assert.deepEqual(app.counter.appState.toObject(), {number: 10})

    for (const i in [...Array(10).keys()]) app.counter.send('DOWN', 1)
    assert.deepEqual(app.counter.appState.toObject(), {number: 0})
  })
})
