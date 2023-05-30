import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const ScreenComponent = () => {
  return <View style={styles.container}>
      <Image source={{
      uri: 'https://tinyurl.com/42evm3m3'
    }} style={styles.image} />
      <Text style={styles.title}>Title</Text>
      <Text style={styles.duration}>Duration</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Stop</Text>
      </TouchableOpacity>
      <Text style={styles.instruction}>Instruction</Text>
      <Text style={styles.text}>Textual</Text>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10
  },
  duration: {
    fontSize: 18,
    marginBottom: 30
  },
  button: {
    backgroundColor: '#000',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 20
  },
  buttonText: {
    color: '#fff',
    fontSize: 18
  },
  instruction: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10
  },
  text: {
    fontSize: 14,
    textAlign: 'center'
  }
});
export default ScreenComponent;