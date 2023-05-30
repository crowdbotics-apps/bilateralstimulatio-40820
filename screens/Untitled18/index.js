import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const ScreenComponent = () => {
  const [email, setEmail] = useState('');

  const handleSend = () => {// handle send functionality
  };

  return <View style={styles.container}>
      <Text style={styles.title}>Send invite link</Text>
      <Text style={styles.subtitle}>Display app-share link</Text>
      <TouchableOpacity style={styles.copyButton}>
        <Text style={styles.copyButtonText}>Copy</Text>
      </TouchableOpacity>
      <TextInput style={styles.input} placeholder="Email address" value={email} onChangeText={setEmail} />
      <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
        <Text style={styles.sendButtonText}>Send</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.closeButton}>
        <Text style={styles.closeButtonText}>Close</Text>
      </TouchableOpacity>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 30
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 20
  },
  copyButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 20
  },
  copyButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 20
  },
  sendButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 20
  },
  sendButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  closeButton: {
    backgroundColor: '#ccc',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5
  },
  closeButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});
export default ScreenComponent;