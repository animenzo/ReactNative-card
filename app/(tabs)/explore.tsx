import { MaterialIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import {
  Image,
  StyleSheet,
  View,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  Text,
  TextInput,
} from 'react-native';

export default function Explore() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  const images = [
    {
      uri: 'https://preview.redd.it/cnsixl9gw7a51.png?width=640&crop=smart&auto=webp&s=0529a38a528c736567fad013a4d2a022854cb949',
      description: 'Anime Character with a bright background.',
    },
    {
      uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIHlx0PRqAwes9kwlJZntxpIM7HI-h0n0kKw&s',
      description: 'Funny anime expression.',
    },
    {
      uri: 'https://wallpapers.com/images/featured/funny-anime-background-w749pb5tp6nd3ouw.jpg',
      description: 'Funny anime background scene.',
    },
    {
      uri: 'https://wallpapers.com/images/hd/funny-anime-konata-izumi-v06qxk4edblfnmu7.jpg',
      description: 'Konata Izumi anime character.',
    },
    {
      uri: 'https://wallpapers.com/images/featured/funny-anime-9vnia7uc4fa7w7x2.jpg',
      description: 'Funny anime character with vibrant colors.',
    },
    {
      uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIyA7M_OrHsT1-6duxqMV8f4cI0D-aSMB8iQ&s',
      description: 'Anime landscape with stunning visuals.',
    },
  ];

  const handleImageClick = (image: string): void => {
    setSelectedImage(image);
  };

  const handleCloseImage = (): void => {
    setSelectedImage(null);
  };

  return (
    <ScrollView style={styles.main}>
      <View>
        <TextInput 
          placeholder='  Search' 
          style={styles.searchInput}
        />
      </View>

      {/* Full Image Display */}
      {selectedImage && (
        <View style={styles.fullImageContainer}>
          <TouchableOpacity onPress={handleCloseImage} style={styles.closeButton}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
          <Image source={{ uri: selectedImage }} style={styles.fullImage} />
          <Text style={styles.imageDescription}>
            {images.find((img) => img.uri === selectedImage)?.description}
          </Text>
        </View>
      )}

      <View style={styles.explore}>
        {images.map((image, index) => (
          <TouchableOpacity
            key={index}
            style={styles.exploreImage}
            onPress={() => handleImageClick(image.uri)}
          >
            <Image
              source={{ uri: image.uri }}
              style={styles.image}
            />
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  searchInput: {
    backgroundColor: "white",
    paddingVertical: 10,
    marginHorizontal: 10,
    borderRadius: 20,
    marginTop: 10,
    borderWidth: 1,
    borderColor: "#333",
    paddingHorizontal: 10,
    color: "#333",
  },
  explore: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    margin: 10,
    padding: 2,
  },
  exploreImage: {
    marginRight: 3,
    width: '30%',
    marginBottom: 2,
  },
  image: {
    width: '100%',
    height: 220,
  },
  fullImageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 5,
  },
  fullImage: {
    width: Dimensions.get('window').width * 0.8,
    height: Dimensions.get('window').height * 0.5,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  imageDescription: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
    marginVertical: 10,
  },
  closeButton: {
    backgroundColor: '#ff8501',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  closeButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});