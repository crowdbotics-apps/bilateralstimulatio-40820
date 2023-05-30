import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const ScreenComponent = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleEmailChange = text => {
    setEmail(text);
  };

  const handleMessageChange = text => {
    setMessage(text);
  };

  const handleSubmit = () => {
    console.log(`Email: ${email}\nMessage: ${message}`);
  };

  return <View style={styles.container}>
      <Text style={styles.title}>Contact Us</Text>
      <TextInput style={styles.input} placeholder="Email Address" onChangeText={handleEmailChange} value={email} />
      <TextInput style={styles.input} placeholder="Message" onChangeText={handleMessageChange} value={message} multiline={true} numberOfLines={4} />
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => console.log('Go back')}>
        <Text style={styles.buttonText}>Back</Text>
      </TouchableOpacity>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#007AFF',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  }
});
export default ScreenComponent;