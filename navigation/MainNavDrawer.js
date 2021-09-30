import {createDrawerNavigator} from '@react-navigation/drawer'
import Cities from '../screens/Cities'
import Home from '../screens/Home'
import React from 'react'
import MainNavBottom from './MainNavBottom'
import Icon from 'react-native-vector-icons/Ionicons';

const Drawer = createDrawerNavigator()

const Navigator = () => {
    return (
        <Drawer.Navigator screenOptions={{
            drawerStyle: {
                backgroundColor: '#c6cbef',
                width: 240,
            }
        }}>
            <Drawer.Screen name='Home' component={MainNavBottom} options={{drawerIcon: config => <Icon
                size={23}
                name={'home-outline'}></Icon>}} />
            <Drawer.Screen name='Cities' component={Cities} options={{drawerIcon: config => <Icon
                size={23}
                name={'business-outline'}></Icon>}} />
            <Drawer.Screen name='Login'component={Cities} options={{drawerIcon: config => <Icon
                size={23}
                name={'log-in-outline'}></Icon>}} />
            <Drawer.Screen name='Signup'component={Cities} options={{drawerIcon: config => <Icon
                size={22}
                name={'person-add-outline'}></Icon>}} />
        </Drawer.Navigator>
    )
}

export default Navigator