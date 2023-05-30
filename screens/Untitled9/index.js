import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const ScreenComponent = () => {
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isTrial, setIsTrial] = useState(true);

  const handleSubscribe = () => {
    setIsSubscribed(true);
    setIsTrial(false);
  };

  return <View style={styles.container}>
      {isTrial && <View style={styles.notificationContainer}>
          <Text style={styles.notificationText}>
            You have 30 days free trial period
          </Text>
          <TouchableOpacity style={styles.okButton}>
            <Text style={styles.okButtonText}>OK</Text>
          </TouchableOpacity>
        </View>}
      {!isSubscribed && !isTrial && <View style={styles.notificationContainer}>
          <Text style={styles.notificationText}>
            Your subscription has ended
          </Text>
          <TouchableOpacity style={styles.okButton}>
            <Text style={styles.okButtonText}>OK</Text>
          </TouchableOpacity>
        </View>}
      <Image source={{
      uri: 'https://tinyurl.com/42evm3m3'
    }} style={styles.image} />
      <TouchableOpacity style={styles.subscribeButton} onPress={handleSubscribe}>
        <Text style={styles.subscribeButtonText}>Subscribe</Text>
      </TouchableOpacity>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  notificationContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: '#f2f2f2',
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  notificationText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333'
  },
  okButton: {
    backgroundColor: '#333',
    padding: 10,
    borderRadius: 5
  },
  okButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  },
  image: {
    width: '80%',
    height: '50%',
    resizeMode: 'contain'
  },
  subscribeButton: {
    backgroundColor: '#333',
    padding: 10,
    borderRadius: 5,
    marginTop: 20
  },
  subscribeButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  }
});
export default ScreenComponent;