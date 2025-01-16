import { useNavigation } from 'expo-router';
import React from 'react';

import {
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  ScrollView,
} from 'react-native';

export default function HomeScreen() {

  const navigation = useNavigation();
  
    const profilePress = () => {
      console.log("Login button pressed");
      navigation.navigate("(screen)",{
        screen: "profile",
      }); // Replace "(screen)" with your target screen name.
    };


  return (
    <ScrollView style={styles.main}>


      
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>MySocial</Text>
        <TouchableOpacity>
          <Text style={styles.headerAction}>+</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottomNav}>
        <TouchableOpacity>
          <Text style={styles.navItem}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity >
          <Text style={styles.navItem} >Search</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.navItem} onPress={profilePress}>Profile</Text>
        </TouchableOpacity>
      </View>

      {/* Stories */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.storiesContainer}>
        <View style={styles.story}>
          <Image source={{ uri: ' ' }} style={styles.storyImage} />
          <Text style={styles.storyText}>User 1</Text>
        </View>
        <View style={styles.story}>
          <Image source={{ uri: ' ' }} style={styles.storyImage} />
          <Text style={styles.storyText}>User 2</Text>
        </View>
        <View style={styles.story}>
          <Image source={{ uri: ' ' }} style={styles.storyImage} />
          <Text style={styles.storyText}>User 3</Text>
        </View>
      </ScrollView>

      {/* Posts */}
      <View style={styles.post}>
        {/* Post Header */}
        <View style={styles.postHeader}>
          <Image source={{ uri: '' }} style={styles.postProfilePic} />
          <Text style={styles.postUser}>User 1</Text>
        </View>

        {/* Post Image */}
        <Image source={{ uri: '' }} style={styles.postImage} />

        {/* Post Actions */}
        <View style={styles.postActions}>
          <TouchableOpacity>
            <Text style={styles.actionButton}>❤️</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.actionButton}>💬</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.saveButton}>
            <Text style={styles.actionButton}>🔖</Text>
          </TouchableOpacity>
        </View>

        {/* Post Caption and Comments */}
        <Text style={styles.postCaption}>
          <Text style={styles.postUser}>User 1: </Text>
          This is a sample post caption.
        </Text>
        <TouchableOpacity>
          <Text style={styles.viewComments}>View all 10 comments</Text>
        </TouchableOpacity>
        <Text style={styles.comment}>
          <Text style={styles.commentUser}>User 2: </Text>
          Amazing post!
        </Text>
       
      </View>
      <View style={styles.post}>
        {/* Post Header */}
        <View style={styles.postHeader}>
          <Image source={{ uri: '' }} style={styles.postProfilePic} />
          <Text style={styles.postUser}>User 1</Text>
        </View>

        {/* Post Image */}
        <Image source={{ uri: '' }} style={styles.postImage} />

        {/* Post Actions */}
        <View style={styles.postActions}>
          <TouchableOpacity>
            <Text style={styles.actionButton}>❤️</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.actionButton}>💬</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.saveButton}>
            <Text style={styles.actionButton}>🔖</Text>
          </TouchableOpacity>
        </View>

        {/* Post Caption and Comments */}
        <Text style={styles.postCaption}>
          <Text style={styles.postUser}>User 1: </Text>
          This is a sample post caption.
        </Text>
        <TouchableOpacity>
          <Text style={styles.viewComments}>View all 10 comments</Text>
        </TouchableOpacity>
        <Text style={styles.comment}>
          <Text style={styles.commentUser}>User 2: </Text>
          Amazing post!
        </Text>
       
      </View>

     
      
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  headerAction: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  storiesContainer: {
    flexDirection: 'row',
    paddingVertical: 10,
    backgroundColor: '#fff',
  },
  story: {
    alignItems: 'center',
    marginHorizontal: 10,
  },
  storyImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#ff8501',
  },
  storyText: {
    fontSize: 12,
    marginTop: 5,
  },
  post: {
    backgroundColor: '#fff',
    marginVertical: 10,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  postHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  postProfilePic: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  postUser: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  postImage: {
    width: '100%',
    height: 250,
    resizeMode: 'cover',
  },
  postActions: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  actionButton: {
    fontSize: 20,
    marginRight: 15,
  },
  saveButton: {
    marginLeft: 'auto',
  },
  postCaption: {
    paddingHorizontal: 10,
    fontSize: 14,
  },
  viewComments: {
    paddingHorizontal: 10,
    color: 'gray',
    marginVertical: 5,
  },
  comment: {
    paddingHorizontal: 10,
    fontSize: 14,
    marginVertical: 2,
  },
  commentUser: {
    fontWeight: 'bold',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  navItem: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
