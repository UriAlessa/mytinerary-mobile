import { ToastAndroid } from "react-native"
import axios from 'axios'
import AsyncStorage from "@react-native-async-storage/async-storage"

const userActions = {
    signUp: (user) => {
        return async (dispatch) => {
            try {
                const response = await axios.post('https://mytinerary-alessandro.herokuapp.com/api/user/signup', {...user})
                if (!response.data.success) {
                    return response
                }
                dispatch({type: 'LOGGIN', payload: response.data.response})
                ToastAndroid.showWithGravity('Account created!', ToastAndroid.SHORT, ToastAndroid.TOP)
                return response
            } catch (error) {
                ToastAndroid.showWithGravity('Something went wrong! Try later.', ToastAndroid.SHORT, ToastAndroid.TOP)
            }
        }
    },
    logIn: (user) => {
        return async (dispatch) => {
            try {
                const response = await axios.post('https://mytinerary-alessandro.herokuapp.com/api/user/login', {...user})
                if(!response.data.success){
                    return response
                }
                dispatch({ type: 'LOGGIN', payload: response.data.response})
                ToastAndroid.showWithGravity(`Welcome back ${response.data.response.userFirstName}`, ToastAndroid.SHORT, ToastAndroid.TOP)
                return response
            } catch (error) {
                ToastAndroid.showWithGravity('Error', ToastAndroid.SHORT, ToastAndroid.TOP)
            }
        } 
    },
    logginLS: (token) => {
        return async (dispatch) => {
            try {
                const response = await axios.get('https://mytinerary-alessandro.herokuapp.com/api/verifyToken', {token}, { 
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            dispatch({type: 'LOGGIN', payload: {response: {...response.data.response}}})
            }catch(error){
                if (err.response.status === 401) {
                AsyncStorage.clear()
                return true
                }
            }
        }
    },
    logOut: () => {
        return(dispatch) => {
            dispatch({type: 'LOG_OUT'})
            ToastAndroid.showWithGravity('Bye!', ToastAndroid.SHORT, ToastAndroid.TOP)
        }
    }
}

export default userActions