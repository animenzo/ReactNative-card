import { Image, StyleSheet, TouchableOpacity,View,Text,TextInput,ScrollView, ImageBackground } from 'react-native';
import React from 'react';
import { useNavigation } from 'expo-router';


const image = {uri: 'https://static.vecteezy.com/system/resources/previews/030/663/661/non_2x/calming-anime-background-high-quality-free-photo.jpg'};

export default function HomeScreen() {
  const navigation = useNavigation();
  const handlePress = ()=>{
    console.log("Hey");
    navigation.navigate("(screen)",{
      screen:"profile",
      params:{
        name:"john",
        age:21
      }
    })
  }
  
  return (
  <ScrollView style={styles.main}>
 <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      
    
    <View style={styles.titleContainer}>
      <Image
          source={{
            uri: 'https://rukminim2.flixcart.com/image/850/1000/xif0q/poster/f/q/1/small-pack-of-1-naruto-poster-anime-poster-hd-photos-for-wall-original-imaeg638g5ugeakj.jpeg?q=20&crop=false',
          }}
          style={{width: 200, height: 200}}
        />
      <View style={styles.subView}>
        <Text style={styles.title} >Sign Up</Text>
        
        <Text style={styles.text}>Username</Text>
        <TextInput style={styles.fields} placeholder='Username'></TextInput>

        <Text style={styles.text}>Age</Text>
        <TextInput style={styles.fields} placeholder='age'></TextInput>

        <Text style={styles.text}>Email</Text>
        <TextInput style={styles.fields} placeholder='email'></TextInput>

        <Text style={styles.text}>Password</Text>
        <TextInput style={styles.fields} placeholder='password'></TextInput>
        
        <TouchableOpacity onPress={handlePress} style={styles.submit}>
          
        <Text style={styles.loginText}>Register</Text>
        </TouchableOpacity>
      </View>
      
    </View>
    </ImageBackground>
    
    </ScrollView>

  );
}


const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    resizeMode: 'cover', // Ensures the image scales proportionally to cover the entire area
    width: '100%',      // Make the image fill the width of the container
    height: '200%'
  },
  titleContainer: {
    
    boxSizing:'border-box',
    backgroundColor:'zinc',
    height: '100%',
    width:'90%',
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    flexDirection:'column',
  },

  subView:{
    backgroundColor:'orange',
    borderColor:'black',
    borderWidth:2,
    minWidth:450,
    minHeight:100,
    marginTop:'1%',
    borderRadius: 10,
    shadowColor:'#ff6f3c',
    shadowOpacity:0.8,
    shadowRadius:10,
    elevation:10,
    shadowOffset:{width:5,height:5}
    
  },
  title:{
    color:'white',
    marginLeft:170,
    fontSize:38,
    fontWeight:'bold',
    marginBottom:20,
    elevation:10,
    shadowColor:'#ff6f3c',
    
  },
  fields:{
    backgroundColor:'white',
    marginLeft:20,
    marginRight:20,
    padding:10,
    color:'grey',
    fontSize:16,
    borderRadius: 10,
    shadowColor:'#000',
    shadowOpacity:0.8,
    shadowRadius:10,

    // elevation:10,
    shadowOffset:{width:5,height:5},
  },
  text:{
    color:'black',
    margin:10,
    fontSize:24,
    fontWeight:'bold',
    marginLeft:170
  },
  submit:{
    marginTop:55,
    backgroundColor:'cyan',
    margin:70,
    padding:10,
    borderRadius: 10,
    shadowColor:'#000',
    shadowOpacity:0.8,
    shadowRadius:10,
    // elevation:10,
    shadowOffset:{width:5,height:5}
    
    
  },
  loginText:{
    fontWeight:'bold',
    fontSize:18,
    marginLeft:120,
  }



  

});
