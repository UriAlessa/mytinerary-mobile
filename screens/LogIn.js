import React, { useState } from 'react'
import { ImageBackground, StyleSheet, Text, View, Dimensions, Pressable} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { TextInput, Button } from 'react-native-paper';
import userActions from '../redux/actions/userActions';
import { connect } from 'react-redux';

const LogIn = (props) => {
    const [error, setError] = useState('')
    const [user, setUser] = useState({username: '', password: ''})

    const submitBtn = async ()=>{
      const response = await props.logIn(user)
      if(!response.data.success) {
        setError(response.data.error)
      } else {
        setUser('')
        props.navigation.navigate('Home')
      }
    }
    return (
        <View style={styles.container}>
            <ImageBackground style={styles.image} source={{uri: 'https://i.imgur.com/SIb9VDM.jpg'}}>
                <View style={styles.content}>
                    <Text style={styles.text}>Log In</Text>
                    <View>
                        <TextInput mode='outlined' dense={true} label='Username' value={user.username} style={styles.input} onChangeText={(value)=>setUser({...user, username: value})}/>
                        <TextInput mode='outlined' label="Password" secureTextEntry value={user.password} style={styles.input} onChangeText={(value)=>setUser({...user, password: value})}/>
                    </View>
                    {error !== '' && <Text style={{color: 'red', fontSize: 20, textAlign: 'center'}}>{error}</Text>}
                    <TouchableOpacity onPress={submitBtn}>
                        <Button style={styles.button} icon="login" mode="contained">Log in</Button>
                    </TouchableOpacity>
                    <Pressable style={styles.button} onPress={()=> navigation.navigate('SignUp')}>
                        <Button style={styles.button} icon="account-edit" mode="contained" onPress={() => props.navigation.navigate('SignUp')}>New here? Create an account now!</Button>
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
      height: 45
    },
    button: {
      marginTop: 10
    },
  })

  const mapStateToProps = (state) =>{
    return {
      loggedUser: state.user.loggedIn
    }
  }
  
const mapDispatchToProps = {
  logIn: userActions.logIn
}

export default connect(mapStateToProps, mapDispatchToProps)(LogIn)