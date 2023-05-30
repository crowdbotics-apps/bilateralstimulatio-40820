import { StyleSheet } from "react-native";
import React, { useState } from 'react';
import { View, Text, TextInput, Image, FlatList, TouchableOpacity } from 'react-native';
const musicList = [{
  id: '1',
  title: 'Song 1',
  duration: '3:45',
  image: 'https://tinyurl.com/42evm3m3'
}, {
  id: '2',
  title: 'Song 2',
  duration: '4:20',
  image: 'https://tinyurl.com/42evm3m3'
}, {
  id: '3',
  title: 'Song 3',
  duration: '2:55',
  image: 'https://tinyurl.com/42evm3m3'
}, {
  id: '4',
  title: 'Song 4',
  duration: '5:10',
  image: 'https://tinyurl.com/42evm3m3'
}, {
  id: '5',
  title: 'Song 5',
  duration: '3:30',
  image: 'https://tinyurl.com/42evm3m3'
}];

const MusicScreen = () => {
  const [searchText, setSearchText] = useState('');
  const [filteredMusicList, setFilteredMusicList] = useState(musicList);

  const handleSearch = text => {
    setSearchText(text);
    const filteredList = musicList.filter(music => music.title.toLowerCase().includes(text.toLowerCase()));
    setFilteredMusicList(filteredList);
  };

  const renderMusicItem = ({
    item
  }) => <View style={_styles.GEKWIxON}>
      <Image source={{
      uri: item.image
    }} style={_styles.GNPbkFbB} />
      <View style={_styles.dJAPWkBr}>
        <Text style={_styles.JtLfeeFg}>{item.title}</Text>
        <Text style={_styles.gVRnFQqC}>{item.duration}</Text>
      </View>
      <TouchableOpacity style={_styles.kcEzsIGV}>
        <Text style={_styles.wNqDbTpw}>Play</Text>
      </TouchableOpacity>
      <TouchableOpacity style={_styles.vzVeSkeW}>
        <Text style={_styles.RwqFemmD}>Pause</Text>
      </TouchableOpacity>
      <TouchableOpacity style={_styles.VqRfJGls}>
        <Text style={_styles.JxEecvhM}>Stop</Text>
      </TouchableOpacity>
    </View>;

  return <View style={_styles.OqJISfwp}>
      <TextInput placeholder="Search" value={searchText} onChangeText={handleSearch} style={_styles.lwjJuwnP} />
      <Text style={_styles.QUzIFWGB}>Music List</Text>
      <FlatList data={filteredMusicList} renderItem={renderMusicItem} keyExtractor={item => item.id} showsVerticalScrollIndicator={false} />
    </View>;
};

export default MusicScreen;

const _styles = StyleSheet.create({
  GEKWIxON: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10
  },
  GNPbkFbB: {
    width: 50,
    height: 50,
    marginRight: 10
  },
  dJAPWkBr: {
    flex: 1
  },
  JtLfeeFg: {
    fontSize: 16
  },
  gVRnFQqC: {
    fontSize: 12,
    color: "gray"
  },
  kcEzsIGV: {
    backgroundColor: "green",
    padding: 10,
    borderRadius: 5
  },
  wNqDbTpw: {
    color: "white"
  },
  vzVeSkeW: {
    backgroundColor: "gray",
    padding: 10,
    borderRadius: 5,
    marginLeft: 10
  },
  RwqFemmD: {
    color: "white"
  },
  VqRfJGls: {
    backgroundColor: "red",
    padding: 10,
    borderRadius: 5,
    marginLeft: 10
  },
  JxEecvhM: {
    color: "white"
  },
  OqJISfwp: {
    flex: 1,
    padding: 20
  },
  lwjJuwnP: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    padding: 10,
    marginBottom: 20
  },
  QUzIFWGB: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20
  }
});