import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { ActivityIndicator } from 'react-native-paper'
import Carousel from 'react-native-snap-carousel'

const CarouselImages = ({images, height, width}) => {

    const renderItem = ({item}) => {
        return (
            <Image style={{width, height}} PlaceholderContent={<ActivityIndicator color='purple' />} source={{uri: item}} />
        )
    }

    return (
        <Carousel 
        layout={'tinder'} 
        data={images}
        sliderWidth={width}
        itemWidth={width}
        itemHeight={height}
        renderItem={renderItem}
        autoplay={true}
        autoplayInterval={3000}
        loop={true}
        />
    )
}

export default CarouselImages

const styles = StyleSheet.create({})
