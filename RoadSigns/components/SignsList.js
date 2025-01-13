import React from 'react';
import { FlatList, SafeAreaView, Text, View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import RowWithImageAndName from './RowWithImageAndName';

import { DefaultStyleSheet } from '../utils/styles';

const DATA = [
  { id: '1', name: 'John Doe', image: require('../assets/profile2.jpeg'), detail: 'This is detail about Jane Smith.' },
  { id: '2', name: 'Jane Smith', image: require('../assets/profile2.jpeg'), detail: 'This is detail about Jane Smith.' },
  { id: '3', name: 'Jane Smith1', image: require('../assets/profile2.jpeg'), detail: 'This is detail about Jane Smith.' },
  { id: '4', name: 'Jane Smith2', image: require('../assets/profile2.jpeg'), detail: 'This is detail about Jane Smith.' },
  { id: '5', name: 'Jane Smith3', image: require('../assets/profile2.jpeg'), detail: 'This is detail about Jane Smith.' },
  { id: '6', name: 'Jane Smith4', image: require('../assets/profile2.jpeg'), detail: 'This is detail about Jane Smith.' },
  { id: '7', name: 'Jane Smith5', image: require('../assets/profile2.jpeg'), detail: 'This is detail about Jane Smith.' },
  { id: '8', name: 'Jane Smith6', image: require('../assets/profile2.jpeg'), detail: 'This is detail about Jane Smith.' },
  { id: '9', name: 'Jane Smith7', image: require('../assets/profile2.jpeg'), detail: 'This is detail about Jane Smith.' },
  { id: '10', name: 'Jane Smith8', image: require('../assets/profile2.jpeg'), detail: 'This is detail about Jane Smith.' },
  { id: '11', name: 'Jane Smith9', image: require('../assets/profile2.jpeg'), detail: 'This is detail about Jane Smith.' }
];

const SignsListScreen = ({ navigation }) => {

  const RenderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.row}
      onPress={() => navigation.navigate('Details', { item })}>
      <RowWithImageAndName name={item.name} imageSource={item.image} />
    </TouchableOpacity>
  );

  return (
    <SafeAreaView
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      { <ScrollView
        style={{ flex: 1 }}
      >
        <View style={{ flexDirection: 'row', marginLeft: 6, padding: 10 }}>
          <Text style={[DefaultStyleSheet.boldText, DefaultStyleSheet.rightSpacing]}>Signs</Text>
          <Text style={[DefaultStyleSheet.boldText]}>Descriptions</Text>
        </View>
        {DATA.map((item, index) => (
          <View
            key={index}
          >
            <RenderItem item={item} />
          </View>
        ))}

      </ScrollView> }
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  row: {
    padding: 0,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  text: {
    fontSize: 16,
  },
});

export default SignsListScreen;
