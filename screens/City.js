import React, { useEffect, useState } from 'react'
import {
   StyleSheet,
   Text,
   View,
   Dimensions,
   ImageBackground,
   ScrollView
} from 'react-native'
import ItineraryCard from '../components/ItineraryCard'

import {Title} from 'react-native-paper'

const City = (props) => {
  console.log(props)
    const city = props.route.params.city
    console.log(city)
    const [itineraries, setItineraries] = useState([])

    useEffect(()=>{
      fetch('https://mytinerary-alessandro.herokuapp.com/api/itineraries/'+city._id)
      .then(response => response.json())
      .then(data => setItineraries(data.response))
      .catch(error => console.log(error))
    },[])
    
    return (
        <View style={styles.container}>
          <View style={{backgroundColor: '#6200EE', height: 200}}>
            <ImageBackground style={styles.image} imageStyle={{borderBottomLeftRadius: 15, borderBottomRightRadius: 15}} source={{uri: city.src}}>
              <View style={styles.title}>
                <Text style={styles.text}>{city.city+', '+city.country}</Text>
              </View>
            </ImageBackground>
          </View>
          <ScrollView>
            <Title style={styles.itinerariesTitle}>Itineraries</Title>
              {itineraries.map((itinerary) => <ItineraryCard key={itinerary._id} itinerary={itinerary}/> )}
          </ScrollView>
        </View>
      )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    image: {
      width: Dimensions.get('window').width,
      height: 190,
    },
    title: {
      flex: 1,
      justifyContent: 'flex-end',
    },
    text: {
      color: 'white',
      marginTop: -60,
      fontSize: 25,
      backgroundColor: 'rgba(16,16,16,0.7)',
      width: '100%',
      textAlign: 'center'
    },
    itinerariesTitle: {
      color: '#6200EE',
      fontWeight: 'bold',
      textAlign: 'center',
      fontSize: 28,
      marginVertical: 20
    }
  })

 
 export default City