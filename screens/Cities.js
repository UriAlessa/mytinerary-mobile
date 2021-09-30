import {
    StyleSheet,
    Image,
    Text,
    View,
    SafeAreaView,
    StatusBar,
    Platform,
    ScrollView,
    FlatList,
 } from 'react-native'
import React,{ useEffect, useState } from 'react'
import CityCard from '../components/CityCard'
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

const Cities = (props) => {
    const [articulos, setArticulos] = useState([])

    useEffect(() => {
       fetch('http://apipetshop.herokuapp.com/api/articulos')
          .then((res) => res.json())
          .then((data) =>
             setArticulos(data.response.filter((e) => e.tipo == 'Medicamento'))
          )
    }, [])
    console.log(articulos)
 
    return (
       <SafeAreaView style={styles.mainContainer}>
          <Text style={styles.texto}>Farmacia</Text>
          <Button
             title='Home'
             onPress={() => {
                props.navigation.navigate('welcome')
             }}
          />
          <FlatList
             data={articulos}
             keyExtractor={(articulo) => articulo._id}
             renderItem={({ item }) => {
                return (
                   <View style={styles.card}>
                      <Text style={styles.textoCard}>{item.nombre}</Text>
                      <Button
                         title='Ver +'
                         onPress={() => {
                            props.navigation.navigate('articulo', {
                               id: item._id,
                            })
                         }}
                      />
                   </View>
                )
             }}
          />
       </SafeAreaView>
    )
}

export default Cities

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
 })