import React, { useState } from 'react'
import { Provider as PaperProvider, Button } from 'react-native-paper'
import {NavigationContainer} from '@react-navigation/native'
import Navigator from './navigation/MainNavDrawer'

const App = () => {
  return (
      <NavigationContainer>
        <Navigator />
      </NavigationContainer>
  )
}

export default App