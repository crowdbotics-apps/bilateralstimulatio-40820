import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const PaymentScreen = () => {
  const [amount, setAmount] = useState(50);
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardSelection = card => {
    setSelectedCard(card);
  };

  const handlePayment = () => {// handle payment logic here
  };

  return <View style={styles.container}>
      <View style={styles.amountContainer}>
        <Text style={styles.amountText}>Amount to be paid:</Text>
        <Text style={styles.amountValue}>${amount}</Text>
      </View>
      <View style={styles.cardContainer}>
        <TouchableOpacity style={[styles.card, selectedCard === 'visa' && styles.selectedCard]} onPress={() => handleCardSelection('visa')}>
          <Image source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} style={styles.cardImage} />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.card, selectedCard === 'mastercard' && styles.selectedCard]} onPress={() => handleCardSelection('mastercard')}>
          <Image source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} style={styles.cardImage} />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.card, selectedCard === 'amex' && styles.selectedCard]} onPress={() => handleCardSelection('amex')}>
          <Image source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} style={styles.cardImage} />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.payButton} onPress={handlePayment}>
        <Text style={styles.payButtonText}>Pay</Text>
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
  amountContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30
  },
  amountText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginRight: 10
  },
  amountValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#007AFF'
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30
  },
  card: {
    width: 100,
    height: 60,
    borderRadius: 10,
    backgroundColor: '#F2F2F2',
    justifyContent: 'center',
    alignItems: 'center'
  },
  selectedCard: {
    borderWidth: 2,
    borderColor: '#007AFF'
  },
  cardImage: {
    width: 50,
    height: 30
  },
  payButton: {
    backgroundColor: '#007AFF',
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: 'center'
  },
  payButtonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold'
  }
});
export default PaymentScreen;