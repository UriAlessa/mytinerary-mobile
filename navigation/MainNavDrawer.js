import {createDrawerNavigator} from '@react-navigation/drawer'
import Cities from '../screens/Cities'
import React, {useEffect} from 'react'
import MainNavStack, { NavigatorCities, NavigatorCity, NavigatorHome, NavigatorLogIn, NavigatorSignUp } from './MainNavStack'
import DrawerStyle from '../components/DrawerStyle'
import LogIn from '../screens/LogIn'
import SignUp from '../screens/SignUp'
import { connect } from 'react-redux'
import userActions from '../redux/actions/userActions'

const Drawer = createDrawerNavigator()

const Navigator = (props) => {
    useEffect(() => {
        props.logginLS()
    }, [])

    const loginLs = async () =>{
        const token = await AsyncStorage.getItem('token')
        if(token){
            logginLS(token)
        }
    }

    return (
        <Drawer.Navigator drawerContent={props =><DrawerStyle {...props} />}>
            <Drawer.Screen name='Home' component={NavigatorHome} />
            <Drawer.Screen name='Cities' component={NavigatorCities} options={{headerShown: false}} />
            <Drawer.Screen name='LogIn' component={NavigatorLogIn} options={{headerShown: false}} />
            <Drawer.Screen name='SignUp' component={NavigatorSignUp} options={{headerShown: false}} />
        </Drawer.Navigator>
    )
}

    const mapStateToProps = (state) => {
        return {
            loggedIn: state.user.loggedIn
        }
    }

    const mapDispatchToProps = {
        logginLS: userActions.logginLS,
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigator);