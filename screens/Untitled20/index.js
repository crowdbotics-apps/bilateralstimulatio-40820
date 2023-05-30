import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

const SubscriptionScreen = () => {
  const navigation = useNavigation();
  const [cardNumber, setCardNumber] = useState('');
  const [cvvNumber, setCvvNumber] = useState('');
  return <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Choose a subscription tier</Text>
      </View>
      <View style={styles.tiersContainer}>
        <View style={styles.tier}>
          <Image style={styles.tierImage} source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} />
          <Text style={styles.tierTitle}>Basic</Text>
          <Text style={styles.tierPrice}>$9.99/month</Text>
        </View>
        <View style={styles.tier}>
          <Image style={styles.tierImage} source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} />
          <Text style={styles.tierTitle}>Premium</Text>
          <Text style={styles.tierPrice}>$19.99/month</Text>
        </View>
        <View style={styles.tier}>
          <Image style={styles.tierImage} source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} />
          <Text style={styles.tierTitle}>Ultimate</Text>
          <Text style={styles.tierPrice}>$29.99/month</Text>
        </View>
      </View>
      <View style={styles.formContainer}>
        <Text style={styles.formLabel}>Credit Card Number</Text>
        <TextInput style={styles.formInput} value={cardNumber} onChangeText={setCardNumber} keyboardType="numeric" />
        <Text style={styles.formLabel}>CVV Number</Text>
        <TextInput style={styles.formInput} value={cvvNumber} onChangeText={setCvvNumber} keyboardType="numeric" />
        <TouchableOpacity style={styles.payButton}>
          <Pressable onPress={() => {
          navigation.navigate("Untitled21");
        }}><Text style={styles.payButtonText}>Pay</Text></Pressable>
        </TouchableOpacity>
      </View>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 40
  },
  header: {
    marginBottom: 20
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  tiersContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 40
  },
  tier: {
    flex: 1,
    alignItems: 'center'
  },
  tierImage: {
    width: 100,
    height: 100,
    marginBottom: 10
  },
  tierTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5
  },
  tierPrice: {
    fontSize: 16,
    color: '#888'
  },
  formContainer: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 20
  },
  formLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5
  },
  formInput: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20
  },
  payButton: {
    backgroundColor: '#007AFF',
    borderRadius: 5,
    padding: 10,
    alignItems: 'center'
  },
  payButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  }
});
export default SubscriptionScreen;