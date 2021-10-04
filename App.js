import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import Navigator from './navigation/MainNavDrawer'
import rootReducer from './redux/reducers/rootReducer'
import {applyMiddleware, createStore} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import { ToastProvider } from "react-native-toast-notifications"

const store = createStore(rootReducer, applyMiddleware(thunk))

const App = () => {
  return (
    <ToastProvider>
      <Provider store={store}>
          <NavigationContainer>
            <Navigator />
          </NavigationContainer>
        </Provider>
    </ToastProvider>
  )
}

export default App