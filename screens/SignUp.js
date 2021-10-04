
import React, { useState } from 'react'
import { ImageBackground, StyleSheet, Text, View, Dimensions, Pressable, ToastAndroid } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { connect } from 'react-redux'
import { TextInput, Button } from 'react-native-paper'
import userActions from '../redux/actions/userActions'

const SignUp = (props) => {

    const [user, setUser] = useState({userFirstName: '', userLastName: '', username: '', email: '', password: '', userImage: '', country: 'Mobile'})
    const [error, setError] = useState([])
    const signup=async()=>{
        const response = await props.signUp(user)
        if (response.data.success) {
          setUser('')
          props.navigation.navigate('Home')
        }
        if (response.data.error === 'Username already in use, try another.') {
          return ToastAndroid.showWithGravity('Account alredy in use, try another', ToastAndroid.SHORT, ToastAndroid.TOP)
        }
        if (!response.data.success) {
        response.data.errors.map((error) => {
            return setError(error.message)
          })
        }
    }

    return (
        <View style={styles.container}>
            <ImageBackground style={styles.image} source={{uri: 'https://i.imgur.com/SIb9VDM.jpg'}} >
                {error.length > 0 && <Text style={{color: 'red', fontSize: 23, textAlign: 'center'}}>{error}</Text>}
                <View style={styles.content}>
                    <Text style={styles.text}>Create an account!</Text>
                    <View style={styles.form}>
                        <TextInput mode='outlined' label='Firstname' style={styles.input} value={user.userFirstName} onChangeText={(value)=>setUser({...user, userFirstName: value})}/>
                        <TextInput mode='outlined' label='Lastname' style={styles.input} value={user.userLastName} onChangeText={(value)=>setUser({...user, userLastName: value})}/>
                        <TextInput mode='outlined' label='Username'  value={user.username} style={styles.input} onChangeText={(value)=>setUser({...user, username: value})}/>
                        <TextInput mode='outlined' label='Email' style={styles.input} value={user.email} onChangeText={(value)=>setUser({...user, email: value})}/>
                        <TextInput mode='outlined' label='Password' secureTextEntry value={user.password} style={styles.input} onChangeText={(value)=>setUser({...user, password: value})}/>
                        <TextInput mode='outlined' label='Image URL'  value={user.userImage} style={styles.input} onChangeText={(value)=>setUser({...user, userImage: value})}/>
                    </View>
                    <TouchableOpacity onPress={signup}>
                        <Button style={styles.button} icon="account-edit" mode="contained" >Sign Up</Button>
                    </TouchableOpacity>
                    <Pressable style={styles.button} onPress={()=> props.navigation.navigate('LogIn')}>
                        <Button style={styles.button} icon="login" mode="contained" onPress={() => props.navigation.navigate('LogIn')}>Already have an account? Log in now!</Button>
                    </Pressable>
                </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    content: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: -70
    },
    text:{
      color: '#6200EE',
      fontSize: 28,
      marginBottom: 10,
      fontWeight: 'bold'
    },
    form: {
      justifyContent: 'space-evenly',
      width: '90%',
      alignItems: 'center',
      borderRadius:15
    },
    image: {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
    },
    input: {
      width: 330,
      height: 45,
      marginBottom: 15
    },
    button: {
      marginTop: 10
    },
  })

const mapDispatchToProps = {
  signUp: userActions.signUp
}


export default connect(null, mapDispatchToProps)(SignUp)