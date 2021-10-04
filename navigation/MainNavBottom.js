import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MainNavStack from './MainNavStack'
import Cities from '../screens/Cities'
import LogIn from '../screens/LogIn'

const Bottom = createMaterialBottomTabNavigator()

const Navigator = () => {
    return (
        <Bottom.Navigator  initialRouteName="Home" shifting={true} sceneAnimationEnabled={false} barStyle={{ backgroundColor: '#6200EE' }} >
            <Bottom.Screen name='Home' component={MainNavStack} options={{ tabBarIcon: 'home'}} />
            <Bottom.Screen name='Cities' component={Cities} options={{tabBarIcon: 'city'}}/>
            <Bottom.Screen name='Account' component={LogIn} options={{tabBarIcon: 'account'}}/>
        </Bottom.Navigator>
    )
}

export default Navigator