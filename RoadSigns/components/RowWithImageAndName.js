import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const RowWithImageAndName = ({ name, imageSource }) => {
  return ( 
    <View style ={styles.row}> 
      <Image source={imageSource} style = {styles.image}></Image>
      <Text style = {styles.name}>{name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    // borderBottomWidth: 1,
    // borderBottomColor: 
  }, 
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  name: {
    fontSize: 16,
    color: '#333',
  }
});

export default RowWithImageAndName;