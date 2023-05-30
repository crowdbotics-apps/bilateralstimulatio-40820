import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const WelcomeScreen = () => {
  const navigation = useNavigation();
  const [showWelcome, setShowWelcome] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);
  return <View style={styles.container}>
      {showWelcome ? <Image source={{
      uri: 'https://tinyurl.com/42evm3m3'
    }} style={styles.image} /> : <Pressable onPress={() => {
      navigation.navigate("Untitled2");
    }}><View style={styles.content}>
          <Text style={styles.title}>Welcome to My App</Text>
          <Text style={styles.subtitle}>Login or Sign Up to Continue</Text>
        </View></Pressable>}
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover'
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10
  },
  subtitle: {
    fontSize: 18,
    color: '#666'
  }
});
export default WelcomeScreen;