
import React, { useEffect, useState, useRef } from 'react'
import { Text, View, StyleSheet, Image, FlatList, ImageBackground, Dimensions, ToastAndroid, TouchableOpacity, Alert} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Avatar, Button, Card, Title, Paragraph, TextInput } from 'react-native-paper';
import commentAction from '../redux/actions/commentAction'
import {connect} from 'react-redux'
import likesActions from '../redux/actions/likesActions';
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons"

const ItineraryCard =(props)=>{
  const LeftContent = props => <Avatar.Icon {...props} icon="city" />
  const itinerary = props.itinerary
  const activities = itinerary.activities
  const [comment, setComment] = useState({comment: '', userImage: '', userFirstName: '' })
  const comments = itinerary.comments
  const [liked, setLiked] = useState('')

  useEffect(()=> {
    if(props.loggedIn){
      setLiked(props.loggedIn.id)
    }
  },[props.loggedIn])

  const sendComment = async () => {
    if (props.loggedIn) {
      setComment({comment: comment, userImage: props.loggedIn.userImage, userFirstName: props.loggedIn.userFirstName})
    } else {
      return ToastAndroid.showWithGravity('You need to log in!', ToastAndroid.SHORT, ToastAndroid.TOP)
    }
    itinerary.comments.push({...comment, userImage: props.loggedIn.userImage, userFirstName: props.loggedIn.userFirstName})
    let response = await props.postComment(comment, props.loggedIn.token, itinerary._id)
  }

  const addLike = async () => {
    itinerary.likes.push(props.loggedIn.id)
    props.like(itinerary._id, props.loggedIn.token)
    ToastAndroid.showWithGravity('Liked', ToastAndroid.SHORT, ToastAndroid.TOP)
  }

  const dislike = async () => {
    itinerary.likes.pop(props.loggedIn.id)
    props.dislike(itinerary._id, props.loggedIn.token)
    ToastAndroid.showWithGravity('Disliked', ToastAndroid.SHORT, ToastAndroid.TOP)
  }


    return (
    <View style={styles.container}>
      <View style={styles.content}> 
        <Text style={styles.title}>{itinerary.itineraryName}</Text>
        <Image style={styles.image} source={{uri: itinerary.authorPic}} />
        <Text style={styles.name}>{itinerary.authorName}</Text>
        <View style={{flexDirection: 'row'}}>
          {itinerary.likes.includes(liked) 
          ? <Text><FontAwesome onPress={props.loggedIn && dislike} size={25} color={'red'} name="heart"/>{itinerary.likes.length}</Text>
          : <Text><FontAwesome onPress={props.loggedIn && addLike} size={25} color={'red'} name="heart-o" />{itinerary.likes.length}</Text>}
          <Icon size={25} color={'white'} name="clock-outline"/><Text style={{marginLeft: 3,marginRight: 10, fontSize:18, color: 'white'}}>{itinerary.duration} hs</Text>
          {[...Array(itinerary.price)].map((m, i) => {
          return <Icon key={i} size={25} color={'green'} name="cash"/>})}
        </View>
        <Title style={{color: 'white', marginVertical: 15, fontWeight: 'bold'}}>Activities!</Title>
      {activities.length === 0 
        ?<Text style={styles.noActivityFound}><Icon size={20} color={'red'} name="emoticon-sad-outline"/> No activities found for this itinerary!</Text>
        : <FlatList
              data={activities}
              keyExtractor={(activity) => activity._id}
              renderItem={({ item }) => {
                  return (
                    <Card style={{marginVertical: 10, width: Dimensions.get('window').width}}>
                      <Card.Title titleStyle={{fontSize: 15}} title={item.title} left={LeftContent} />
                      <Card.Cover source={{ uri: item.image }} />
                  </Card>
                  )
              }}
          />}
          <Title style={{color: 'white'}}>Comments</Title>
          {
            comments.length === 0 
            ? <Text style={styles.noActivityFound}><Icon size={20} color={'red'} name="emoticon-sad-outline"/> There is no comments yet! Be the first!</Text>
            : <FlatList
            data={comments}
            keyExtractor={(comment) => comment._id}
            renderItem={({ item }) => {
                return (
                  <View style={styles.commentCard}>
                    <View>
                      <Image style={{width: 65, height: 65, borderRadius: 100}} source={{uri: item.userImage}} />
                    </View>
                    <View style={styles.userCommentInfo}>
                      <View style={{flexDirection: 'row'}}>
                        <Text style={{marginRight: 5, fontWeight: 'bold'}}>{item.userFirstName}</Text>
                        <Text style={{fontWeight: 'bold'}}>{item.userLastName}</Text>
                      </View>
                      <Text style={{marginTop: 5}}>{item.comment}</Text>
                    </View>
                  </View>
                )
            }}
            />
          }
      </View>
          <TextInput style={{width: 250}} mode='outlined' dense={true} label='Comment' disabled={props.loggedIn ? false : true} value={comment.comment} onChangeText={(value)=>setComment({...comment, comment: value})} right={<TextInput.Icon onPress={sendComment} name="send" />} />
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
      flex:1,
      marginHorizontal: 30,
      marginBottom: 30
    },
    content: {
      alignItems: 'center',
      backgroundColor: '#6200EE',
      borderRadius: 10,
      elevation: 50,
      padding: 5
    },
    image: {
      width:100,
      height:100,
      borderRadius: 50,
      margin: 15
    },
    title: {
      textAlign: 'center',
      fontSize: 23,
      color: 'white'
    },
    name: {
      fontSize:20,
      color: 'white',
      marginBottom: 10
    },
    noActivityFound: {
      fontWeight: 'bold',
      fontSize: 20,
      color: 'white',
      
    },
    commentCard: {
      display: 'flex',
      flexDirection: 'row',
      backgroundColor: '#fff',
      width: 300,
      minHeight: 65,
      borderRadius: 5,
      padding: 5,
      marginVertical: 10
    },
    userCommentInfo: {
      alignSelf: 'flex-start',
      padding: 10
    }
  })

const mapStateToProps = (state) =>{
  return {
    loggedIn: state.user.loggedIn,
    allComments: state.comments.allComments,
    itineraries: state.likes.itineraries
  }
}

const mapDispatchToProps = {
  postComment: commentAction.postComment,
  like: likesActions.like,
  dislike: likesActions.dislike
}

export default connect(mapStateToProps, mapDispatchToProps)(ItineraryCard)