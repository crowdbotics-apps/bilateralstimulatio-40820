import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const OnboardingScreen = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex(activeIndex + 1);
  };

  const handlePrevious = () => {
    setActiveIndex(activeIndex - 1);
  };

  const handleGetStarted = () => {// handle get started button press
  };

  const slides = [{
    image: 'https://tinyurl.com/42evm3m3',
    text: 'Welcome to our app!'
  }, {
    image: 'https://tinyurl.com/42evm3m3',
    text: 'Discover new features and functions'
  }, {
    image: 'https://tinyurl.com/42evm3m3',
    text: 'Get started now!'
  }];
  return <View style={styles.container}>
      <View style={styles.carouselContainer}>
        <Image source={{
        uri: slides[activeIndex].image
      }} style={styles.image} />
        <Text style={styles.text}>{slides[activeIndex].text}</Text>
      </View>
      <View style={styles.buttonsContainer}>
        {activeIndex !== 0 && <TouchableOpacity style={styles.button} onPress={handlePrevious}>
            <Text style={styles.buttonText}>Previous</Text>
          </TouchableOpacity>}
        {activeIndex !== slides.length - 1 ? <TouchableOpacity style={styles.button} onPress={handleNext}>
            <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity> : <TouchableOpacity style={styles.button} onPress={handleGetStarted}>
            <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>}
      </View>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  carouselContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    width: '80%',
    height: '60%',
    resizeMode: 'contain'
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingBottom: 20,
    width: '100%'
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  }
});
export default OnboardingScreen;