import {createDrawerNavigator} from '@react-navigation/drawer'
import React, {useEffect} from 'react'
import { NavigatorCities, NavigatorHome, NavigatorLogIn, NavigatorSignUp } from './MainNavStack'
import DrawerStyle from '../components/DrawerStyle'
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
            props.logginLS(token)
        }
    }

    return (
        <Drawer.Navigator drawerContent={props =><DrawerStyle {...props} />} screenOptions={{headerStyle: {
            backgroundColor: '#6200EE'
        }, headerTitleStyle: {
            color: 'white'
        }, }}>
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