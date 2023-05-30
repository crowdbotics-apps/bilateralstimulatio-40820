import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

const TermsAndConditionsScreen = () => {
  const [isChecked, setIsChecked] = useState(false);
  return <View style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>Terms and Conditions</Text>
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, sapien vel
          ullamcorper malesuada, velit elit lacinia nunc, vel tincidunt sapien enim vel mauris.
          Nullam euismod, sapien vel ullamcorper malesuada, velit elit lacinia nunc, vel tincidunt
          sapien enim vel mauris.
        </Text>
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, sapien vel
          ullamcorper malesuada, velit elit lacinia nunc, vel tincidunt sapien enim vel mauris.
          Nullam euismod, sapien vel ullamcorper malesuada, velit elit lacinia nunc, vel tincidunt
          sapien enim vel mauris.
        </Text>
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, sapien vel
          ullamcorper malesuada, velit elit lacinia nunc, vel tincidunt sapien enim vel mauris.
          Nullam euismod, sapien vel ullamcorper malesuada, velit elit lacinia nunc, vel tincidunt
          sapien enim vel mauris.
        </Text>
        <View style={styles.checkboxContainer}>
          <TouchableOpacity style={styles.checkbox} onPress={() => setIsChecked(!isChecked)}>
            {isChecked && <View style={styles.checkedBox} />}
          </TouchableOpacity>
          <Text style={styles.checkboxText}>I agree to the terms and conditions</Text>
        </View>
      </ScrollView>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Back</Text>
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
    marginBottom: 20
  },
  text: {
    fontSize: 16,
    marginBottom: 10
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#000',
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  checkedBox: {
    width: 12,
    height: 12,
    borderRadius: 3,
    backgroundColor: '#000'
  },
  checkboxText: {
    fontSize: 16
  },
  button: {
    backgroundColor: '#000',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    color: '#fff',
    fontSize: 16
  }
});
export default TermsAndConditionsScreen;