import { StyleSheet } from "react-native";
import React, { useState } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, ScrollView } from 'react-native';

const GroupScreen = () => {
  const [groupName, setGroupName] = useState('');
  const [groupDescription, setGroupDescription] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [members, setMembers] = useState([{
    name: 'John Doe',
    profilePic: 'https://tinyurl.com/42evm3m3',
    active: true
  }, {
    name: 'Jane Doe',
    profilePic: 'https://tinyurl.com/42evm3m3',
    active: false
  }, {
    name: 'Bob Smith',
    profilePic: 'https://tinyurl.com/42evm3m3',
    active: true
  }]);
  const [selectedMembers, setSelectedMembers] = useState([]);

  const handleAddMember = member => {
    if (!selectedMembers.includes(member)) {
      setSelectedMembers([...selectedMembers, member]);
    }
  };

  const handleRemoveMember = member => {
    setSelectedMembers(selectedMembers.filter(m => m !== member));
  };

  return <ScrollView style={_styles.xKrQBmmT}>
      <View style={_styles.HpRkRTvB}>
        <TouchableOpacity>
          <Image source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} style={_styles.rHmymetx} />
          <Text style={_styles.RgbShBUU}>Edit Group Image</Text>
        </TouchableOpacity>
      </View>
      <View style={_styles.VcFUDNhv}>
        <Text style={_styles.QKnzpsoE}>Name of the group</Text>
        <TextInput value={groupName} onChangeText={text => setGroupName(text)} placeholder="Enter group name" style={_styles.RSSZCbAt} />
        <Text style={_styles.ekrwrodx}>Group Description</Text>
        <TextInput value={groupDescription} onChangeText={text => setGroupDescription(text)} placeholder="Enter group description" style={_styles.okskIiDC} multiline />
        <Text style={_styles.VXpejTpY}>Add members</Text>
        <View style={_styles.FUVjceji}>
          <TextInput value={searchQuery} onChangeText={text => setSearchQuery(text)} placeholder="Search for users" style={_styles.GFpvmirp} />
          <TouchableOpacity style={_styles.xBlkqMRB}>
            <Text style={_styles.nwwcOxXi}>Search</Text>
          </TouchableOpacity>
        </View>
        <ScrollView horizontal style={_styles.ZSWbUUkx}>
          {members.filter(member => member.active && !selectedMembers.includes(member)).map(member => <TouchableOpacity key={member.name} onPress={() => handleAddMember(member)}>
                <View style={_styles.wallBPgk}>
                  <Image source={{
              uri: member.profilePic
            }} style={_styles.vqDeEuaK} />
                  <Text style={_styles.jEhWSNwS}>{member.name}</Text>
                </View>
              </TouchableOpacity>)}
        </ScrollView>
        <Text style={_styles.XgDRUtRo}>List of members</Text>
        <ScrollView horizontal style={_styles.JsqbleZI}>
          {selectedMembers.map(member => <TouchableOpacity key={member.name} onPress={() => handleRemoveMember(member)}>
              <View style={_styles.zSeelVsG}>
                <Image source={{
              uri: member.profilePic
            }} style={_styles.kJePhEJT} />
                <Text style={_styles.dpbjeGDF}>{member.name}</Text>
              </View>
            </TouchableOpacity>)}
        </ScrollView>
        <TouchableOpacity style={_styles.myxYptCS}>
          <Text style={_styles.sOcdBisZ}>Create group</Text>
        </TouchableOpacity>
        <TouchableOpacity style={_styles.eZMIrdrh}>
          <Text style={_styles.pbtgWaRW}>Leave group</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>;
};

export default GroupScreen;

const _styles = StyleSheet.create({
  xKrQBmmT: {
    flex: 1
  },
  HpRkRTvB: {
    alignItems: "center",
    marginVertical: 20
  },
  rHmymetx: {
    width: 150,
    height: 150,
    borderRadius: 75
  },
  RgbShBUU: {
    marginTop: 10,
    fontSize: 18
  },
  VcFUDNhv: {
    paddingHorizontal: 20
  },
  QKnzpsoE: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10
  },
  RSSZCbAt: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingHorizontal: 10
  },
  ekrwrodx: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10
  },
  okskIiDC: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingHorizontal: 10,
    height: 100
  },
  VXpejTpY: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10
  },
  FUVjceji: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10
  },
  GFpvmirp: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingHorizontal: 10,
    flex: 1
  },
  xBlkqMRB: {
    marginLeft: 10
  },
  nwwcOxXi: {
    color: "blue"
  },
  ZSWbUUkx: {
    marginBottom: 10
  },
  wallBPgk: {
    alignItems: "center",
    marginRight: 20
  },
  vqDeEuaK: {
    width: 60,
    height: 60,
    borderRadius: 30
  },
  jEhWSNwS: {
    marginTop: 5
  },
  XgDRUtRo: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10
  },
  JsqbleZI: {
    marginBottom: 10
  },
  zSeelVsG: {
    alignItems: "center",
    marginRight: 20
  },
  kJePhEJT: {
    width: 60,
    height: 60,
    borderRadius: 30
  },
  dpbjeGDF: {
    marginTop: 5
  },
  myxYptCS: {
    backgroundColor: "green",
    paddingVertical: 10,
    borderRadius: 5
  },
  sOcdBisZ: {
    color: "white",
    textAlign: "center",
    fontSize: 18
  },
  eZMIrdrh: {
    backgroundColor: "red",
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 10
  },
  pbtgWaRW: {
    color: "white",
    textAlign: "center",
    fontSize: 18
  }
});