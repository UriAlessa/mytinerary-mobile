import React from 'react'
import { StyleSheet, Text, View, ImageBackground, Dimensions, ToastAndroid } from 'react-native'
import {TouchableOpacity } from 'react-native-gesture-handler'

const CityCard =({city})=>{ 

    return (
        <View style={styles.container}>
          <TouchableOpacity onPress={check}>
              <ImageBackground style={styles.image} imageStyle={{borderRadius: 30}} source={{ uri: city.imagen}}>
                <View style={styles.card}>
                  <Text style={styles.text}>{city.nombreCiudad}</Text>
                </View>
              </ImageBackground>
        </TouchableOpacity>
       </View>
    )

}

export default CityCard

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      margin: 15,
    },
    image: {
      width: 350,
      height: 150, 
    },
    card: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'flex-start'
    },
  
    text: {
      color: 'white',
      fontSize: 15,
      padding: 8,
      backgroundColor: 'rgba(16,16,16,0.5)',
      borderRadius: 15,
      marginLeft: 10,
      overflow: 'hidden'
    }
})
