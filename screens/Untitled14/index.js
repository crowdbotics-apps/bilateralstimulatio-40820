import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native';

const VisionScreen = () => {
  const [visionName, setVisionName] = useState('');
  const [selectedShape, setSelectedShape] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const [savedCreations, setSavedCreations] = useState([]);

  const handleSave = () => {
    const newCreation = {
      name: visionName,
      shape: selectedShape,
      image: selectedImage
    };
    setSavedCreations([...savedCreations, newCreation]);
    setVisionName('');
    setSelectedShape('');
    setSelectedImage(null);
  };

  const handleRemove = index => {
    const newCreations = [...savedCreations];
    newCreations.splice(index, 1);
    setSavedCreations(newCreations);
  };

  return <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Name of the Vision</Text>
      <TextInput style={styles.input} value={visionName} onChangeText={setVisionName} placeholder="Enter vision name" />
      <Text style={styles.title}>Shape</Text>
      <View style={styles.shapeContainer}>
        <TouchableOpacity style={[styles.shape, selectedShape === 'Shape 1' && styles.selectedShape]} onPress={() => setSelectedShape('Shape 1')} />
        <TouchableOpacity style={[styles.shape, selectedShape === 'Shape 2' && styles.selectedShape]} onPress={() => setSelectedShape('Shape 2')} />
        {
        /* Add more shapes here */
      }
      </View>
      <Text style={styles.title}>Pictures</Text>
      <TouchableOpacity style={styles.imageContainer} onPress={() => console.log('Upload image')}>
        {selectedImage ? <Image source={{
        uri: selectedImage
      }} style={styles.image} /> : <Image source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} style={styles.imagePlaceholder} />}
        <Image source={{
        uri: 'https://tinyurl.com/4j8z7z5r'
      }} style={styles.plusIcon} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleSave}>
        <Text style={styles.buttonText}>Save</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => console.log('Cancel')}>
        <Text style={styles.buttonText}>Cancel</Text>
      </TouchableOpacity>
      <Text style={styles.title}>List of my saved creations</Text>
      {savedCreations.map((creation, index) => <View key={index} style={styles.savedCreation}>
          <Text style={styles.savedCreationName}>{creation.name}</Text>
          <TouchableOpacity style={styles.removeButton} onPress={() => handleRemove(index)}>
            <Text style={styles.removeButtonText}>Remove</Text>
          </TouchableOpacity>
        </View>)}
    </ScrollView>;
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    alignItems: 'center'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10
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
  shapeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20
  },
  shape: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5
  },
  selectedShape: {
    backgroundColor: '#ccc'
  },
  imageContainer: {
    width: '100%',
    height: 200,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 5
  },
  imagePlaceholder: {
    width: 50,
    height: 50,
    resizeMode: 'contain'
  },
  plusIcon: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
    position: 'absolute'
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#ccc',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff'
  },
  savedCreation: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10
  },
  savedCreationName: {
    fontSize: 16
  },
  removeButton: {
    backgroundColor: 'red',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5
  },
  removeButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff'
  }
});
export default VisionScreen;