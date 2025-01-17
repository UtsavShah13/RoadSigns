import React from "react";
import { View, Text, StyleSheet, Image } from 'react-native';

const DetailScreen = ({ route }) => {
  const { item } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Image style={styles.image} source={item.image}
          resizeMode='cover' />
      </View>
      <View style={styles.item}>
        <Text style={styles.title}>{item.name}</Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.detail}>{item.detail}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  detail: {
    fontSize: 16,
    color: '#666',
  },
  image: {
    borderRadius: 20,
    height: 150,
    width: 150,
  },
  item: {
    backgroundColor: 'lightblue',
    padding: 10,
    borderRadius: 5,
  }
});

export default DetailScreen;