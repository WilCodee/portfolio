import { combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

type initialNav = {
  nav: boolean
}

type actionProps = {
  type: string
}
const navInitialState: initialNav = {
  nav: false,
}

const navMobileReducer = (state = navInitialState, action: actionProps) => {
  switch (action.type) {
    case 'NAV_MOBILE_SEE':
      return {
        nav: (state.nav = true),
      }

    case 'NAV_MOBILE_NOT_SEE':
      return {
        nav: (state.nav = false),
      }
  }
  return state
}

export default createStore(
  combineReducers({
    navMobileReducer,
  }),
  composeWithDevTools()
)
