import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Picker } from 'react-native';

const EditProfileScreen = () => {
  const [pushNotification, setPushNotification] = useState('0-24');
  const [hour, setHour] = useState('0');
  const [minute, setMinute] = useState('0');
  return <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Edit Profile</Text>
      </View>
      <View style={styles.content}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Subscription</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Unsubscribe</Text>
        </TouchableOpacity>
        <View style={styles.dropdownContainer}>
          <Text style={styles.dropdownLabel}>Push notification</Text>
          <Picker selectedValue={pushNotification} onValueChange={itemValue => setPushNotification(itemValue)} style={styles.dropdown}>
            <Picker.Item label="0-24" value="0-24" />
            <Picker.Item label="0-12" value="0-12" />
            <Picker.Item label="12-24" value="12-24" />
          </Picker>
        </View>
        <View style={styles.dropdownContainer}>
          <Text style={styles.dropdownLabel}>Hour</Text>
          <Picker selectedValue={hour} onValueChange={itemValue => setHour(itemValue)} style={styles.dropdown}>
            {Array.from(Array(24).keys()).map(hour => <Picker.Item key={hour} label={hour.toString()} value={hour.toString()} />)}
          </Picker>
        </View>
        <View style={styles.dropdownContainer}>
          <Text style={styles.dropdownLabel}>Minute</Text>
          <Picker selectedValue={minute} onValueChange={itemValue => setMinute(itemValue)} style={styles.dropdown}>
            {Array.from(Array(60).keys()).map(minute => <Picker.Item key={minute} label={minute.toString()} value={minute.toString()} />)}
          </Picker>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Privacy policy</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Terms and Conditions</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Change password</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Invite Friends</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Send Feedback</Text>
        </TouchableOpacity>
        <View style={styles.dropdownContainer}>
          <Text style={styles.dropdownLabel}>My preference</Text>
          <Picker selectedValue={'Preference 1'} onValueChange={() => {}} style={styles.dropdown}>
            <Picker.Item label="Preference 1" value="Preference 1" />
            <Picker.Item label="Preference 2" value="Preference 2" />
            <Picker.Item label="Preference n" value="Preference n" />
          </Picker>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Parameter for a daily motivational quote</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Delete account</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Log out</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  header: {
    backgroundColor: '#f2f2f2',
    paddingVertical: 20,
    paddingHorizontal: 10
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  content: {
    padding: 20
  },
  button: {
    backgroundColor: '#4d4dff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginVertical: 10
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  dropdownContainer: {
    marginVertical: 10
  },
  dropdownLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5
  },
  dropdown: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5
  }
});
export default EditProfileScreen;