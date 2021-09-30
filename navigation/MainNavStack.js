import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Cities from '../screens/Cities'
import Home from '../screens/Home'
import React from 'react'
import { Text } from 'react-native'
import MainNavDrawer from './MainNavDrawer'


const Stack = createNativeStackNavigator()

const Navigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='home'component={Home} options={{headerShown: false}} />
            <Stack.Screen name='cities'component={Cities} options={{headerShown: false}} />
        </Stack.Navigator>
    )
}

export default Navigator