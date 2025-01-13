import React from "react";
import { View, Text, StyleSheet } from 'react-native';

const DetailScreen = ({ route }) => {
    const { item } = route.params;
  
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.detail}>{item.detail}</Text>
      </View>
    );
  };

const styles = StyleSheet.create({
    container: {
      flex: 1,
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
  });
  
  export default DetailScreen;