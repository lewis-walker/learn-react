import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { createStore } from 'redux';
import { Provider } from 'react-redux'

import { reducer } from './store';
import AppComponent from './components/app-component'

const store = createStore(reducer)
const rootElement = document.getElementsByTagName('body')[0]

ReactDOM.render(
  <Provider store={store}>
    <AppComponent />
  </Provider>,
  rootElement
)