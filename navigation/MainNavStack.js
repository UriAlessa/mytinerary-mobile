import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Cities from '../screens/Cities'
import Home from '../screens/Home'
import React from 'react'
import { Text } from 'react-native'
import MainNavDrawer from './MainNavDrawer'
import LogIn from '../screens/LogIn'
import SignUp from '../screens/SignUp'
import City from '../screens/City'
import Icon from 'react-native-vector-icons/Ionicons'
import LogoMenu, { ArrowBack } from '../components/LogoMenu'


const Stack = createNativeStackNavigator()

export const NavigatorHome = (props) => {
    return (
        <Stack.Navigator>
            <Stack.Screen navigation={props.navigation} name='Home' component={Home} options={{title: 'Mytinerary', headerShown: false}} />
        </Stack.Navigator>
    )
}

export const NavigatorCities = (props) => {
    return (
        <Stack.Navigator screenOptions={{
            headerStyle: {
               backgroundColor: "white",
            },
            headerTintColor: "black",
            headerTitleStyle: {
               fontSize: 35,
            },
            headerRight: () => <LogoMenu navigation={props.navigation} />
         }}>
            <Stack.Screen name='Cities' component={Cities} options={{title: 'Cities', headerLeft: () => <ArrowBack navigation={props.navigation} to={'Home'}/>}} />
            <Stack.Screen name='City' component={City} options={{title: 'City'}} />
        </Stack.Navigator>
    )
}

export const NavigatorLogIn = (props) => {
    return (
        <Stack.Navigator navigation={props.navigation} screenOptions={{
            headerStyle: {
                backgroundColor: "white",
            },
            headerTintColor: "black",
            headerTitleStyle: {
                fontSize: 35,
            },
            headerRight: () => <LogoMenu navigation={props.navigation} />
        }}>
            <Stack.Screen name='login' component={LogIn} options={{title: 'Log In', headerLeft: () => <ArrowBack navigation={props.navigation} to={'Home'}/>}} />
        </Stack.Navigator>
    )
}

export const NavigatorSignUp = (props) => {
    return (
        <Stack.Navigator navigation={props.navigation} screenOptions={{
            headerStyle: {
               backgroundColor: "white",
            },
            headerTintColor: "black",
            headerTitleStyle: {
               fontSize: 35,
            },
            headerRight: () => <LogoMenu navigation={props.navigation} />
         }}>
            <Stack.Screen name='SignUp' component={SignUp} options={{title: 'Sign Up', headerLeft: () => <ArrowBack navigation={props.navigation} to={'Home'}/>}} />
        </Stack.Navigator>
    )
}

export default NavigatorHome