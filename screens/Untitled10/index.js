import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const BilateralScreen = () => {
  return <View style={styles.container}>
      <View style={styles.header}>
        <Image source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} style={styles.logo} />
        <Text style={styles.appName}>Bilateral</Text>
        <Image source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} style={styles.profilePic} />
        <Text style={styles.userName}>John Doe</Text>
      </View>
      <View style={styles.content}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Bilateral Music</Text>
          <Image source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} style={styles.buttonImage} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Bilateral Vibration</Text>
          <Image source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} style={styles.buttonImage} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Vision Studio</Text>
          <Image source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} style={styles.buttonImage} />
        </TouchableOpacity>
        <Text style={styles.quote}>Daily Motivational Quote</Text>
      </View>
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navButton}>
          <Text style={styles.navButtonText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Text style={styles.navButtonText}>Community Chat</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Text style={styles.navButtonText}>Meatballs Menu</Text>
        </TouchableOpacity>
      </View>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20
  },
  logo: {
    width: 30,
    height: 30,
    marginRight: 10
  },
  appName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginRight: 'auto'
  },
  profilePic: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginLeft: 'auto',
    marginRight: 10
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    padding: 10,
    borderRadius: 10,
    marginBottom: 20
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 'auto'
  },
  buttonImage: {
    width: 30,
    height: 30
  },
  quote: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    paddingVertical: 10
  },
  navButton: {
    alignItems: 'center'
  },
  navButtonText: {
    fontSize: 16,
    fontWeight: 'bold'
  }
});
export default BilateralScreen;