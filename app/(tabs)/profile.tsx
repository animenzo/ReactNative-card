import { RouteProp, useRoute } from '@react-navigation/native';
import { useNavigation } from 'expo-router';
import React from 'react';

import { StyleSheet, View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';

export default function ProfileScreen() {
const route = useRoute<RouteProp<{params:{name:String, age:Number}},'params'>>();
 const {name, age} = route.params||{}
  const navigation = useNavigation();
  
    const handlePress = () => {
      console.log("Logout button pressed");
      navigation.navigate("index",{
      }); 
    };

  return (
    <ScrollView style={styles.main}>
       <TouchableOpacity onPress={handlePress}>
                <Text style={styles.signOut}>Sign Out{name}</Text>
          </TouchableOpacity>
      <View style={styles.profileHeader}>
        
        <Image
          style={styles.profileImage}
          source={{
            uri: 'https://beebom.com/wp-content/uploads/2024/06/giyu-tomioka-demon-slayer.jpg?w=1024', 
          }}
        />
        <View style={styles.statsContainer}>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>60</Text>
            <Text style={styles.statLabel}>Posts</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>200</Text>
            <Text style={styles.statLabel}>Followers</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>237</Text>
            <Text style={styles.statLabel}>Following</Text>
          </View>
        </View>
      </View>

      {/* Bio Section */}
      <View style={styles.bioSection}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.bioText}>
          Developer | Tech Enthusiast |
        </Text>
        <Text style={styles.contactInfo}>Email: something@gmail.com</Text>
        <Text style={styles.contactInfo}>Phone: 8888888888</Text>
      </View>

    
    </ScrollView>
  );
}

const styles = StyleSheet.create({
 signOut:{
    fontSize: 20,
    fontWeight: 'bold',
    color:"red",
    margin:10
  },
  main: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginRight: 20,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flex: 1,
  },
  statBox: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  statLabel: {
    fontSize: 14,
    color: '#777',
  },
  bioSection: {
    padding: 20,
    backgroundColor: '#fff',
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  bioText: {
    fontSize: 14,
    color: '#555',
    marginBottom: 10,
  },
  contactInfo: {
    fontSize: 14,
    color: '#555',
  },


});
