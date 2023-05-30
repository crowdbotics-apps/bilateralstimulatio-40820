import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const PrivacySettingsScreen = () => {
  const [permissions, setPermissions] = useState([{
    name: 'Camera',
    enabled: true
  }, {
    name: 'Location',
    enabled: false
  }, {
    name: 'Contacts',
    enabled: true
  }, {
    name: 'Microphone',
    enabled: false
  }]);

  const togglePermission = index => {
    const newPermissions = [...permissions];
    newPermissions[index].enabled = !newPermissions[index].enabled;
    setPermissions(newPermissions);
  };

  return <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Privacy Settings</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
          euismod libero, ac malesuada velit bibendum vel. Sed euismod euismod
          libero, ac malesuada velit bibendum vel.
        </Text>
        {permissions.map((permission, index) => <TouchableOpacity key={permission.name} style={styles.permission} onPress={() => togglePermission(index)}>
            <Text style={styles.permissionText}>{permission.name}</Text>
            <View style={[styles.permissionToggle, permission.enabled ? styles.enabled : styles.disabled]} />
          </TouchableOpacity>)}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Agree</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.backButton}>
        <Image source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} style={styles.backIcon} />
      </TouchableOpacity>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  header: {
    backgroundColor: '#F5F5F5',
    paddingVertical: 20,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  content: {
    flex: 1,
    padding: 16
  },
  text: {
    marginBottom: 24
  },
  permission: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16
  },
  permissionText: {
    flex: 1,
    fontSize: 16
  },
  permissionToggle: {
    width: 40,
    height: 24,
    borderRadius: 12,
    borderWidth: 1,
    marginLeft: 16
  },
  enabled: {
    backgroundColor: '#4CAF50',
    borderColor: '#4CAF50'
  },
  disabled: {
    backgroundColor: '#E5E5E5',
    borderColor: '#E5E5E5'
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 24
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 16,
    padding: 8
  },
  backIcon: {
    width: 24,
    height: 24
  }
});
export default PrivacySettingsScreen;