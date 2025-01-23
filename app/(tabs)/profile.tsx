import { MaterialIcons } from "@expo/vector-icons";
import { RouteProp, useRoute } from "@react-navigation/native";
import { useNavigation } from "expo-router";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";

export default function ProfileScreen() {
  const [username, setUsername] = useState("Piyush Tailor");
  const [bio, setBio] = useState("piyush.tailor@gmail.com");
  const [profileImage, setProfileImage] = useState("https://i.pinimg.com/736x/0d/bf/f6/0dbff6db19f1e53b0552b60fb6edae47.jpg");
  
  const route = useRoute<RouteProp<{ params: { username: string; bio: string; profileImage: string } }, "params">>();
  const navigation = useNavigation();

  useEffect(() => {
    if (route.params) {
      const { username, bio, profileImage } = route.params;
      setUsername(username);
      setBio(bio);
      setProfileImage(profileImage);
    }
  }, [route.params]);

  const handleLogOut = () => {
    console.log("Logout button pressed");
    navigation.navigate("index", {});
  };

  const handleEditProfile = () => {
    navigation.navigate('(screen)', {
      screen:'edit',
      username,
      bio,
      profileImage,
    });
  };

  return (
    <ScrollView style={styles.main}>
      <View style={{ paddingTop: 10 }}>
        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
          <Text style={{ fontSize: 25, fontWeight: "500", color: '#000' }}>{username}</Text>
          <View style={{ flexDirection: 'row', alignItems: "center" }}>
            <TouchableOpacity style={{ marginRight: 10 }} onPress={handleLogOut}>
              <Text style={{ color: 'white', backgroundColor: "red", fontSize: 20, fontWeight: "600", marginLeft: 10, borderRadius: 10, paddingHorizontal: 5 }}>
                Log out
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text>
                <MaterialIcons name="menu" size={28} />
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.profileContainer}>
        <Image
          source={{ uri: profileImage }}
          style={styles.instaImage}
        />
        <View style={{ width: 75, alignItems: 'center' }}>
          <Text style={styles.profileStats}>2</Text>
          <Text style={{ fontSize: 16, fontWeight: 400, color: '#333' }}>Posts</Text>
        </View>

        <View style={{ width: 75, alignItems: 'center' }}>
          <Text style={styles.profileStats}>489</Text>
          <Text style={{ fontSize: 16, fontWeight: 400, color: '#333' }}>Followers</Text>
        </View>

        <View style={{ width: 75, alignItems: 'center' }}>
          <Text style={styles.profileStats}>145</Text>
          <Text style={{ fontSize: 16, fontWeight: 400, color: '#333' }}>Following</Text>
        </View>
      </View>
      <View>
        <Text style={{ fontSize: 18, color: 'black', marginTop: 10 }}>{username}</Text>
        <Text style={{ fontSize: 16, color: 'black' }}>{bio}</Text>
        <Text style={{ fontSize: 18 }}>See Translation</Text>
        <View style={styles.profileButton}>
          <TouchableOpacity onPress={handleEditProfile}>
            <Text style={{ backgroundColor: '#E1E1E1', width: 150, paddingHorizontal: 10, paddingVertical: 8, borderRadius: 5, textAlign: 'center' }}>Edit Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={{ backgroundColor: '#E1E1E1', width: 150, paddingHorizontal: 10, paddingVertical: 8, borderRadius: 5, textAlign: 'center' }}>Share Profile</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ marginTop: 10 }}>
        <View style={{ flexDirection: 'row', justifyContent: "space-between", width: 196, paddingBottom: 15 }}>
          <TouchableOpacity>
            <Text style={{ alignSelf: 'center' }}>
              <MaterialIcons size={28} name="grid-on" />
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={{ alignSelf: 'center' }}>
              <MaterialIcons size={28} name="account-box" />
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: "row" }}>
          <Image style={{ height: 130, width: 130, marginRight: 5 }} source={{ uri: 'https://images.wondershare.com/filmora/article-images/2-kakashi-hatake.jpg' }} />
          <Image style={{ height: 130, width: 130, marginRight: 5 }} source={{ uri: 'https://images.wondershare.com/filmora/article-images/2-kakashi-hatake.jpg' }} />
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
    marginTop: 20
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
