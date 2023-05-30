import { Pressable } from "react-native";
import { StyleSheet } from "react-native";
import React, { useState } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
const tones = [{
  id: 1,
  title: 'Tone 1',
  duration: '0:30',
  image: 'https://tinyurl.com/42evm3m3'
}, {
  id: 2,
  title: 'Tone 2',
  duration: '0:45',
  image: 'https://tinyurl.com/42evm3m3'
}, {
  id: 3,
  title: 'Tone 3',
  duration: '1:00',
  image: 'https://tinyurl.com/42evm3m3'
}];

const Screen = () => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = text => {
    setSearchText(text);
  };

  return <View style={_styles.JqlvDkwj}>
      <TextInput style={_styles.tfgKJxmG} onChangeText={handleSearch} value={searchText} placeholder="Search" />
      <Text style={_styles.qaHXMFxi}>List of Tones/Vibrations</Text>
      {tones.map(tone => <Pressable><View key={tone.id} style={_styles.MzOFvrUA}>
          <Image source={{
          uri: tone.image
        }} style={_styles.ENSuyQSJ} />
          <View>
            <Text style={_styles.PiCsjOKT}>{tone.title}</Text>
            <Text style={_styles.PdVkAYmv}>{tone.duration}</Text>
            <TouchableOpacity style={_styles.DKXncYFN}>
              <Text style={_styles.rivKvWCp}>Play</Text>
            </TouchableOpacity>
          </View>
        </View></Pressable>)}
    </View>;
};

export default Screen;

const _styles = StyleSheet.create({
  JqlvDkwj: {
    flex: 1,
    padding: 20
  },
  tfgKJxmG: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 20
  },
  qaHXMFxi: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20
  },
  MzOFvrUA: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20
  },
  ENSuyQSJ: {
    width: 80,
    height: 80,
    marginRight: 20
  },
  PiCsjOKT: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10
  },
  PdVkAYmv: {
    fontSize: 16,
    marginBottom: 10
  },
  DKXncYFN: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5
  },
  rivKvWCp: {
    color: "white"
  }
});