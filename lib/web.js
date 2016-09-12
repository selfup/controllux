import Immutable from 'immutable'

window.Controllux = {
  createController: (appState, actions) => {
  	return new class {
      constructor(appState, actions) {
        this.mutabilityCheck(appState)
        this.appState = appState
        this.actions = actions
      }

      send(message, arg) {
        this.appState = this.actions[message](this.appState, arg)
        this.mutabilityCheck()
        this.render(this.appState.toObject())
      }

      sub(fn) {
        fn(this.appState.toObject())
        this.render = fn
      }

      mutabilityCheck(appState = this.appState) {
        if (!appState._root.entries) return console.error(
          'Use `createStore` to create immutable stores please'
        )
      }
    }(appState, actions)
  },
  createStore: obj => {
    return Immutable.Map(obj)
  }
}
