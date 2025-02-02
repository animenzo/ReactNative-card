import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "expo-router";
import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  ScrollView,
} from "react-native";

interface story{
  uri:string;
  text:string;
}

export default function HomeScreen() {
  const [likes, setLikes] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const [selectedStory, setSelectedStory] = useState<story | null>(null);

  const handleLike = () => {
    if (likes) {
      setLikes(false);
      setLikeCount((prev) => prev - 1);
    } else {
      setLikes(true);
      setLikeCount((prev) => prev + 1);
    }
  };

  const navigation = useNavigation();

  const stories = [
    {
      uri: "https://preview.redd.it/the-greatest-estate-developer-lord-lloyd-i-truly-recommend-v0-2ug47h71yv4b1.jpg?width=1080&crop=smart&auto=webp&s=fd4d92a5b978f54a640d239c28e15becbee8f4b7",
      text: "King"
    },
    {
      uri: "https://i.pinimg.com/736x/fb/5d/a1/fb5da1234d0be9d73e9770a91c7ffa28.jpg",
      text: "User  2"
    },
    {
      uri: "https://miro.medium.com/v2/resize:fit:1400/0*t6LoBcV9x8VLGjZX",
      text: "User  3"
    }
  ];

  return (
    <ScrollView style={styles.main}>
      {/* Stories */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.storiesContainer}
      >
        {stories.map((story, index) => (
          <TouchableOpacity key={index} onPress={() => setSelectedStory(story.uri)}>
            <View style={styles.story}>
              <Image source={{ uri: story.uri }} style={styles.storyImage} />
              <Text style={styles.storyText}>{story.text}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Full Image Display */}
      {selectedStory && (
        <View style={styles.fullImageContainer}>
          <Image source={{ uri: selectedStory }} style={styles.fullImage} />
          <TouchableOpacity onPress={() => setSelectedStory(null)} style={styles.closeButton}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* Posts */}
      <View style={styles.post}>
        {/* Post Header */}
        <View style={styles.postHeader}>
          <Image source={{ uri: "https://i.redd.it/8cct5gxru3na1.jpg" }} style={styles.postProfilePic} />
          <Text style={styles.postUser }>User  1</Text>
        </View>

        {/* Post Image */}
        <Image source={{ uri: "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2023/11/7-most-iconic-black-haired-manhwa-characters.jpg" }} style={styles.postImage} />

        {/* Post Actions */}
        <View style={styles.postActions}>
          <TouchableOpacity onPress={handleLike}>
            <Text style={styles.actionButton}>
              <MaterialIcons
                name={likes ? "favorite" : "favorite-border"}
                size={24}
                color={likes ? "red" : "black"}
              />
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.actionButton}><MaterialIcons size={24} name="comment" /></Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.actionButton}><MaterialIcons size={24} name="share" /></Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.saveButton}>
            <Text style={styles.actionButton}><MaterialIcons size={24} name="bookmark-border" /></Text>
          </TouchableOpacity>
        </View>

        {/* Post Caption and Comments */}
        <Text style={{ paddingLeft: 15 }}>{likeCount} {likeCount === 1 ? "like" : "likes"}</Text>
        <TouchableOpacity>
          <Text style={styles.viewComments}>View all 10 comments</Text>
        </TouchableOpacity>
      </View>

      {/* Additional Posts can be added here... */}

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#fff",
  },
  storiesContainer: {
    flexDirection: "row",
    paddingTop: 20,
    paddingBottom: 10,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
  },
  story: {
    alignItems: "center",
    marginHorizontal: 10,
  },
  storyImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: "#ff8501",
  },
  storyText: {
    fontSize: 12,
    marginTop: 5,
  },
  fullImageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  fullImage: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
  },
  closeButton: {
    marginTop: 10,
    padding: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 5,
  },
  closeButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  post: {
    backgroundColor: "#fff",
    marginVertical: 10,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  postHeader: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  postProfilePic: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  postUser :{
    fontSize: 16,
    fontWeight: "bold",
  },
  postImage: {
    width: "100%",
    height: 250,
    resizeMode: "cover",
  },
  postActions: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  actionButton: {
    fontSize: 20,
    marginRight: 15,
  },
  saveButton: {
    marginLeft: "auto",
  },
  viewComments: {
    paddingHorizontal: 10,
    color: "gray",
    marginVertical: 5,
  },
});