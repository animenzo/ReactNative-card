import { Image, StyleSheet, TouchableOpacity, View, Text, TextInput, ScrollView } from 'react-native';
import React from 'react';

import { useNavigation } from 'expo-router';
import { useRoute } from '@react-navigation/native';
export default function HomeScreen() {
  const navigation = useNavigation();
 
  const handlePress = () => {
    console.log("Login button pressed");
    navigation.navigate("(screen)",{
      
    }); // Replace "(screen)" with your target screen name.
  };
  return (
    <ScrollView style={styles.main}>
      <View style={styles.container}>
        {/* Profile Image */}
        <Image
          source={{
            uri: 'https://rukminim2.flixcart.com/image/850/1000/xif0q/poster/f/q/1/small-pack-of-1-naruto-poster-anime-poster-hd-photos-for-wall-original-imaeg638g5ugeakj.jpeg?q=20&crop=false',
          }}
          style={styles.profileImage}
        />

        {/* Login Form */}
        <View style={styles.formContainer}>
          <Text style={styles.title}>Login</Text>

          {/* Username */}
          <Text style={styles.label}>Username</Text>
          <TextInput style={styles.inputField} placeholder="Enter your username" placeholderTextColor="#888" />

          {/* Password */}
          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.inputField}
            placeholder="Enter your password"
            placeholderTextColor="#888"
            secureTextEntry={true}
          />

          {/* Login Button */}
          <TouchableOpacity onPress={handlePress} style={styles.loginButton}>
            <Text style={styles.loginButtonText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 40,
    backgroundColor: '#fff',
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
  },
  formContainer: {
    width: '90%',
    maxWidth: 400,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#555',
  },
  inputField: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 8,
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 15,
    fontSize: 16,
    color: '#333',
  },
  loginButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  loginButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
});
