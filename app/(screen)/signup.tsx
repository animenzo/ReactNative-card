import {
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  TextInput,
  ScrollView,
  Alert,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "expo-router";
import { LoginError } from "../interface/LoginError";
import axios from "axios";
// interface LoginError {
//   email?: string;
//   password?: string;
// }

export default function HomeScreen() {
  const [username, setUsername] = useState("");
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setage] = useState("");
  const [errors, setErrors] = useState<LoginError>({});
  const navigation = useNavigation();

  const validation = () => {
    const newErrors: LoginError = {};

    if (username.length < 1) {
      newErrors.username = "Username is required";
    }
    if (email.length < 1) {
      newErrors.email = "Email is required";
    }
    if (age.length < 1) {
      newErrors.age = `Age is required and should be in number`;
    }
    if (password.length < 1) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);
  };

  const handlePress = () => {
    if (email.length !== 0 && password.length !== 0) {
      navigation.navigate("(screen)", {
        screen: "profile",
        
      });
    }

    // console.log("Login button pressed");
  };

  const goToLogin = () => {
    navigation.navigate("index");
  };

  useEffect(() => {
    validation();
  }, [username, age, email, password]);

  return (
    <ScrollView style={styles.main}>
      <View style={styles.container}>
        <Image
          source={{
            uri: "https://logos-world.net/wp-content/uploads/2020/05/Instagram-Logo-2016-present.png",
          }}
          style={styles.profileImage}
        />

        {/* Login Form */}
        <View style={styles.formContainer}>
          <Text style={styles.title}>Sign Up</Text>
          {/* Name */}
          <Text style={styles.label}>Username</Text>
          <TextInput
            style={styles.inputField}
            placeholder="Enter your username"
            placeholderTextColor="#888"
            value={email}
            onChangeText={(name) => setUsername(name)} // Updates state
          />

          {errors.username && (
            <Text style={{ color: "red" }}>{errors.username}</Text>
          )}

          {/* age */}
          <Text style={styles.label}>Age</Text>
          <TextInput
            style={styles.inputField}
            placeholder="Enter your age"
            placeholderTextColor="#888"
            value={email}
            onChangeText={(name) => setUsername(name)} // Updates state
          />

          {errors.username && (
            <Text style={{ color: "red" }}>{errors.username}</Text>
          )}

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
            onChangeText={(password) => setPassword(password)} // Updates state
          />
          {errors.password && (
            <Text style={{ color: "red" }}>{errors.password}</Text>
          )}

          <TouchableOpacity onPress={handlePress} style={styles.loginButton}>
            <Text style={styles.loginButtonText}>Sign Up</Text>
          </TouchableOpacity>
          <View style={{ flexDirection: "row", marginTop: 10 }}>
            <Text>Already have an account?</Text>
            <TouchableOpacity onPress={goToLogin}>
              <Text style={{ color: "blue", fontWeight: 600 }}>Login</Text>
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
    backgroundColor: "#fff",
    height:"100%",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 60,
    backgroundColor: "#fff",
      marginBottom:20,

  },
  profileImage: {
    width: 190,
    height: 70,
    marginBottom: 5,
  },
  formContainer: {
    width: "90%",
    maxWidth: 400,
    backgroundColor: "#f9f9f9",
    borderRadius: 10,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#333",
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#555",
  },
  inputField: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 8,
    borderColor: "#ddd",
    borderWidth: 1,
    marginBottom: 5,
    fontSize: 16,
    color: "#333",
  },
  loginButton: {
    backgroundColor: "#4CAF50",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },
  loginButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
});
