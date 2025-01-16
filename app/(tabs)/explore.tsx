import React from 'react';
import {
  Image,
  StyleSheet,
  View,
  ScrollView,
  Dimensions,
} from 'react-native';



export default function Explore() {

  const images = [
    'https://preview.redd.it/cnsixl9gw7a51.png?width=640&crop=smart&auto=webp&s=0529a38a528c736567fad013a4d2a022854cb949',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIHlx0PRqAwes9kwlJZntxpIM7HI-h0n0kKw&s',
    'https://wallpapers.com/images/featured/funny-anime-background-w749pb5tp6nd3ouw.jpg',
    'https://wallpapers.com/images/hd/funny-anime-konata-izumi-v06qxk4edblfnmu7.jpg',
    'https://wallpapers.com/images/featured/funny-anime-9vnia7uc4fa7w7x2.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIyA7M_OrHsT1-6duxqMV8f4cI0D-aSMB8iQ&s'

  ]
  return (
    <ScrollView style={styles.main}>
      <View style={styles.explore}>
       
       {
        images.map((image,index)=>(
          <View key={index} style={styles.exploreImage}>
         
          <Image
            source={{
              uri: image,
            }}
            style={styles.image}
          />
        </View>
        ))
       }
       

        <View style={styles.exploreImage}>
          <Image
            source={{
              uri: 'https://img.freepik.com/free-photo/illustration-anime-city_23-2151779669.jpg',
            }}
            style={styles.image}
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  explore: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    margin:10, 
    padding: 2,
  },
  exploreImage: {
    marginRight:3,
    width: "30%",
    marginBottom: 2, 
  },
  image: {
    width: '100%',
    height: 220,
    
  },
});
