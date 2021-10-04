import AsyncStorage from "@react-native-async-storage/async-storage"

const initialState = {
    loggedIn: null
}

const localStorage = (action) => {
    AsyncStorage.setItem('token', action.payload.token)
}

const cleanLocalStorage = async () => {
    await AsyncStorage.clear()
}

const userReducer = ( state = initialState, action) => {
    switch(action.type) {
        case 'LOGGIN':
            localStorage(action)
            return {
                ...state,
                loggedIn: action.payload
            }
        case 'LOG_OUT':
            cleanLocalStorage()
            return {
                ...state,
                loggedIn: null
            }
        default:
            return state
    }
}

export default userReducer