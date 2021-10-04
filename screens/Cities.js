import { StyleSheet, Text, SafeAreaView, FlatList, Dimensions} from 'react-native'
import React,{ useEffect, useState } from 'react'
import { Avatar, Button, Card, Title, Paragraph, Searchbar, ActivityIndicator, Colors } from 'react-native-paper';
import axios from 'axios'
import {connect} from 'react-redux'
import citiesActions from '../redux/actions/citiesActions';
import Icon from 'react-native-vector-icons/Ionicons'

const LeftContent = props => <Avatar.Icon {...props} icon="city" />

const Cities = (props) => {
   const width = Dimensions.get('window').width
   const [search, setSearch] = useState("")

   const filterHandler = (e) => {
      props.citiesFilter(e)
      setSearch(e)
   }

   const loading = () => {
      if(props.allCities.length === 0){
         return <ActivityIndicator animating={true} color={'white'} />
      }
      if(props.filteredCities.length === 0){
         return <Text style={styles.noCitiesFound}><Icon style={{marginRight: 10}} name="sad-outline" color={'white'} size={24} /> Oops! City not found.</Text>
      }
   }

   useEffect(() => {
      props.getCities()
   }, [])

   return (
      <SafeAreaView style={styles.mainContainer}>
         <Text style={styles.texto}>Cities</Text>
         <Searchbar
            placeholder="Search cities..."
            onChangeText={filterHandler}
            value={search}
            style={{marginVertical: 10}}
         />
         {loading()}
         <FlatList
            data={props.filteredCities}
            keyExtractor={(city) => city._id}
            renderItem={({ item }) => {
               return (
                  <Card style={{marginBottom: 20}}>
                  <Card.Title title={item.city} subtitle={'Currency: ' + item.money} left={LeftContent} />
                  <Card.Content>
                     <Title>{item.country}</Title>
                     <Paragraph>{item.description}</Paragraph>
                  </Card.Content>
                  <Card.Cover source={{ uri: `${item.src}` }} />
                  <Card.Actions>
                     <Button onPress={() => props.navigation.navigate("City", { city: item })}>View More</Button>
                  </Card.Actions>
               </Card>
               )
            }}
         />
      </SafeAreaView>
   )
}

const mapStateToProps = (state) => {
   return {
      allCities: state.cities.allCities,
      filteredCities: state.cities.filteredCities
   }
}

const mapDispatchToProps = {
   getCities: citiesActions.getCities,
   citiesFilter: citiesActions.filteredCities
}

export default connect(mapStateToProps, mapDispatchToProps)(Cities)

const styles = StyleSheet.create({
   mainContainer: {
      flex: 1,
      backgroundColor: 'darkblue',
      alignItems: 'center',
   },
      texto: {
         color: 'white',
         fontSize: 25,
         fontWeight: 'bold',
         marginVertical: 10
   },
      card: {
         width: '80%',
         flexDirection: 'row',
         alignItems: 'center',
         justifyContent: 'space-between',
         height: 100,
         borderStyle: 'solid',
         borderColor: 'yellow',
         borderWidth: 5,
         marginBottom: 5,
         paddingHorizontal: 5,
   },
      textoCard: {
         color: 'white',
         fontSize: 20,
         width: '60%',
   },
      noCitiesFound: {
         color: 'white',
         fontWeight: 'bold',
         fontSize: 24,
   }
})