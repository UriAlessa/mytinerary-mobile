import React from 'react'
import { View, StyleSheet, ImageBackground, Image, Text } from 'react-native'
import { Title, Drawer, } from 'react-native-paper'
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'
import Icon from 'react-native-vector-icons/Ionicons'
import { connect } from 'react-redux'
import userActions from '../redux/actions/userActions'

function DrawerStyle(props) {
    return(
        <View style={{ flex: 1 }}>
      <ImageBackground source={{uri: 'https://i.imgur.com/2dszfRv.jpg'}} style={{height: 230, width: 280, justifyContent: 'flex-end'}}>
        <View style={{ marginLeft: 15, flexDirection: 'column' }}>
          <Title style={styles.title}>{!props.loggedIn ? 'Welcome!' : 'Welcome, ' + props.loggedIn.userFirstName}</Title>
        </View>
      </ImageBackground>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <Drawer.Section>
            <DrawerItem icon={({ color, size }) => ( <Icon name="home-outline" color={color} size={size} /> )} label="Home" onPress={() => { props.navigation.navigate('Home') }} />
            <DrawerItem icon={({ color, size }) => ( <Icon name="business-outline" color={color} size={size} /> )} label="Cities" onPress={() => { props.navigation.navigate('Cities') }} />
            {!props.loggedIn
              ?<>
                <DrawerItem icon={({ color, size }) => ( <Icon name="log-in-outline" color={color} size={size} /> )} label="LogIn" onPress={() => { props.navigation.navigate('LogIn') }} />
                <DrawerItem icon={({ color, size }) => ( <Icon name="person-add-outline" color={color} size={size} /> )} label="SignUp" onPress={() => { props.navigation.navigate('SignUp') }} />
              </>
              : <DrawerItem
              icon={({ color, size }) => (
                <Icon
                  name="log-out-outline"
                  color={color}
                  size={size}
                />
              )}
              label="Log Out"
              onPress={() => props.logOut()}
            />
            }
          </Drawer.Section>
          {props.loggedIn 
          && <Drawer.Section style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <Image style={{width: 150, height: 150, borderRadius: 100, marginVertical: 10}} source={{ uri: `${props.loggedIn.userImage}` }} />
                <Text>Logged as, {props.loggedIn.userFirstName}</Text>
              </Drawer.Section>}
        </View>
      </DrawerContentScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
    },
    userInfoSection: {
      paddingLeft: 20,
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#6200EE',
      marginBottom: 10,
      marginLeft: 10
    }
  });

const mapStateToProps = (state) => {
  return {
    loggedIn: state.user.loggedIn
  }
}

const mapDispatchToProps = {
  logOut: userActions.logOut
}

  export default connect(mapStateToProps, mapDispatchToProps)(DrawerStyle)