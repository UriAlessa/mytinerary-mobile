import React,{ useEffect, useState } from 'react'
import { ImageBackground, StyleSheet, Dimensions, View, Text, Image, FlatList } from 'react-native'
import { Button, Title } from 'react-native-paper';
import { connect } from 'react-redux';
import CarouselImages from '../components/CarouselImages';

const Home = (props) => {

    const images = ['https://i.imgur.com/QOC9Xvp.jpg', 'https://i.imgur.com/hyCOgch.jpg', 'https://i.imgur.com/TvYaNdb.jpg']

    return (
        <View style={styles.mainContainer}>
            <View style={{flex: 1}}>
                <ImageBackground style={styles.image} source={require('../assets/hero.jpg')}>
                    <View style={styles.content}>
                        <View style={{alignItems: 'center'}}>
                            <Image style={styles.brandLogo} source={{uri: 'https://i.imgur.com/BXhPNNK.png'}} />
                            <Text style={styles.h1}>Find your perfect trip, designed by insiders who know and love their cities.</Text>
                        </View>
                        <View>
                            <Button style={styles.ctaButton} icon="city" mode="contained" dark onPress={() => props.navigation.navigate('cities')}> start now! </Button>
                        </View>
                    </View>
                </ImageBackground>
                <View style={styles.carouselContainer}>
                    <Title style={styles.carouselTitle}>Popular Mytineraries!</Title>
                    <CarouselImages images={images} height={180} width={380} />
                </View>
            </View>
        </View>
    )
}

// const mapDispatchToProps = {
//     getCities: citiesActions.getCities
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Home)
export default Home

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1
    },
    image: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        padding: 5,
        flex: 1
    },
    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        width: '100%',
        padding: 10,
    },
    brandLogo: {
        width: 200, 
        height: 40, 
        marginBottom: 25,
    },
    h1: {
        color: '#fff',
        fontSize: 18,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        borderRadius: 20,
        padding: 5,
        textAlign: 'center'
    },
    carouselContainer: {
        height: 240,
        alignItems: 'center',
        padding: 1,
        width: Dimensions.get('window').width,
        marginBottom: 10
    },
    carouselTitle: {
        textAlign: 'center',
        color: '#6200EE',
        fontSize: 26,
    },
    ctaButton: {
        justifyContent: 'center',
        height: 55,
        width: 200
    }
})
