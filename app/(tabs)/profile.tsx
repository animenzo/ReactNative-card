import { MaterialIcons } from "@expo/vector-icons";
import { RouteProp, useRoute } from "@react-navigation/native";
import { useNavigation } from "expo-router";
import React, { useState } from "react";

import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";

const userData = [
  {
    id:1,
    image:"https://images.wondershare.com/filmora/article-images/2-kakashi-hatake.jpg"
  },
  
]


export default function ProfileScreen() {
  const [selected,setSelected] = useState(1)
  const route =
    useRoute<RouteProp<{ params: { name: String; age: Number } }, "params">>();
  const { name, age } = route.params || {};
  const navigation = useNavigation();

  const handleLogOut = () => {
    console.log("Logout button pressed");
    navigation.navigate("index", {});
  };

  const handleEditProfile = ()=>{
    navigation.navigate('(screen)',{
      screen:'edit'
    })
  }



  return (
    <ScrollView style={styles.main}>
      <View style={{paddingTop:10}}>
        <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
          <Text style={{fontSize:25,fontWeight:500,color:'#000'}}>piyush</Text>
          <View style={{flexDirection:'row',alignItems:"center"}}>
            <TouchableOpacity style={{marginLeft:5}}><Text>
            <MaterialIcons name="add" size={28}/></Text></TouchableOpacity>
            <TouchableOpacity><Text>
            <MaterialIcons name="menu" size={28}  />
              </Text></TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.profileContainer}>
        <Image
          source={{
            uri: "https://i.pinimg.com/736x/0d/bf/f6/0dbff6db19f1e53b0552b60fb6edae47.jpg",
          }}
          style={styles.instaImage}
        />
        <View style={{width:75,alignItems:'center'}}>
          <Text style={styles.profileStats}>4</Text>
          <Text style={{fontSize:16,fontWeight:400,color:'#333'}}>Posts</Text>
        </View>

        <View style={{width:75,alignItems:'center'}}>
          <Text style={styles.profileStats}>489</Text>
          <Text style={{fontSize:16,fontWeight:400,color:'#333'}}>Followers</Text>
        </View>

        <View style={{width:75,alignItems:'center'}}>
          <Text style={styles.profileStats}>145</Text>
          <Text style={{fontSize:16,fontWeight:400,color:'#333'}}>Following</Text>
        </View>
      </View>
      <View >
        <Text style={{fontSize:18,color:'black',marginTop:10}}>Piyush Tailor</Text>
        <Text style={{fontSize:16,color:'black'}}>piyush.tailor@gmail.com
        </Text>
        <Text style={{fontSize:18}}>See Translation</Text>
        <View style={styles.profileButton}>
          <TouchableOpacity onPress={handleEditProfile}>
          <Text style={{backgroundColor:'#E1E1E1',width:150,paddingHorizontal:10,paddingVertical:8,borderRadius:5,textAlign:'center'}}>Edit Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity>
          <Text style={{backgroundColor:'#E1E1E1',width:150,paddingHorizontal:10,paddingVertical:8,borderRadius:5,textAlign:'center'}}>Share Profile</Text>
          </TouchableOpacity>
          
          </View>
      </View>
      <View style={{marginTop:10}}>
      <View style={{flexDirection:'row',justifyContent:"space-between",width:196,paddingBottom:15}}>
      
        <TouchableOpacity ><Text style={{alignSelf:'center'}}>          <MaterialIcons size={28} name="grid-on"></MaterialIcons>
        </Text>

        </TouchableOpacity>
        <TouchableOpacity ><Text style={{alignSelf:'center'}}>             <MaterialIcons size={28} name="account-box"></MaterialIcons>
        </Text>
        </TouchableOpacity>

      </View>

     <View>
      <Image style={{height:130,width:130}} source={{uri:'https://images.wondershare.com/filmora/article-images/2-kakashi-hatake.jpg'}}></Image>
     </View>
      </View>
      
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 10,
  },
  profileContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop:20
  },
  instaImage: {
    height: 80,
    width: 80,
    borderRadius:'50%'
  },
  profileStats:{
    fontSize: 24,
    color: '#000',
    fontWeight:600
  },
  profileButton:{
    flexDirection:'row',
    marginTop:15,
    justifyContent:'space-between',
    marginHorizontal:15
  }
});
