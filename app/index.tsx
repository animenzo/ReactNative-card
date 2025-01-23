import { Image, StyleSheet, TouchableOpacity, View, Text, TextInput, ScrollView, Alert } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation } from 'expo-router';
import {LoginError} from './interface/LoginError'
import axios from 'axios';
// interface LoginError {
//   email?: string;
//   password?: string;
// }



export default function HomeScreen() {
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<LoginError>({});
  const navigation = useNavigation();
  
  const validation = () => {
    

    const newErrors: LoginError = {};
    if (email.length < 1) {newErrors.email = "Email is required."}
    if (password.length<1) {newErrors.password = "Password is required."} 
    setErrors(newErrors);
    console.log(email,password)
  };




  const goToSignup = ()=>{
    navigation.navigate('(screen)',{
      screen: 'signup'
    })
  }
   
    const handlePress = () => {
     if(email.length !== 0 && password.length !== 0){
      navigation.navigate("(tabs)",{
        screen: "homescreen",
      
    }); 
     }
      // console.log("Login button pressed");
     

    };
  
  

  useEffect(()=>{

    validation()
    
  },[email,password])

  console.log(email,password);
  return (
    <ScrollView style={styles.main}>
      <View style={styles.container}>
       
        <Image
          source={{
            uri: 'https://img.freepik.com/free-psd/instagram-application-logo_23-2151544094.jpg',
          }}
          style={styles.profileImage}
        />

        {/* Login Form */}
        <View style={styles.formContainer}>
          <Text style={styles.title}>Login</Text>

          {/* Email */}
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.inputField}
            placeholder="Enter your email"
            placeholderTextColor="#888"
            value={email}
            onChangeText={(email) => setemail(email)} // Updates state
          />

          {errors.email && <Text style={{ color: "red" }}>{errors.email}</Text>}

          {/* Password */}
          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.inputField}
            placeholder="Enter your password"
            placeholderTextColor="#888"
            secureTextEntry={true}
            value={password}
            onChangeText={(password)=>setPassword(password)} // Updates state
          />
          {errors.password && <Text style={{ color: "red" }}>{errors.password}</Text>}


          <TouchableOpacity onPress={handlePress} style={styles.loginButton}>
            <Text style={styles.loginButtonText}>Login</Text>
          </TouchableOpacity>
          <View style={{flexDirection:"row",marginTop:10}}>
            <Text>Don't have an account?</Text>
          <TouchableOpacity onPress={goToSignup}>
            <Text style={{color:"blue",fontWeight:600}}> Sign up</Text>
          </TouchableOpacity>
          </View>
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
})