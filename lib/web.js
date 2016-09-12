import Immutable from 'immutable'

window.Controllux = {
  createController: (appState, actions) => {
    return new class {
      constructor(appState, actions) {
        if (this.mutableCheck(appState)) return
        this.appState = appState
        this.actions = actions
      }

      send(message, arg) {
        const newState = this.actions[message](this.appState, arg)
        if (this.mutableCheck(newState)) return
        this.appState = newState
        this.render(this.appState.toObject())
      }

      sub(fn) {
        fn(this.appState.toObject())
        this.render = fn
      }

      mutableCheck(appState = this.appState) {
        if (!Immutable.Map.isMap(appState)) {
          console.error('Not Immutable')
          return true
        }
        if (Immutable.Map.isMap(appState)) return false
      }
    }(appState, actions)
  },
  createStore: obj => { return Immutable.Map(obj) },
  imut: (() => { return Immutable })()
}
