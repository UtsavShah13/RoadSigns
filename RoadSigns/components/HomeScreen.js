

import React from 'react';
import { Image, SafeAreaView, Text, View, StyleSheet, TouchableOpacity, ScrollView, Button } from 'react-native';
import RowWithImageAndName from './RowWithImageAndName';
import SignsListScreen from './SignsList';

import { DefaultStyleSheet } from '../utils/styles';


const HomeScreen = ({ navigation }) => {

  const RenderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.row}
      onPress={() => navigation.navigate('Signs')}>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate('Signs')}
        >
          <Image
          style={styles.image}
            source={{uri: 'https://uniquepavingmaterials.com/wp-content/uploads/2015/07/44.jpg'}}
            >
            </Image>
            <Text style={styles.text}> Move to Signs </Text>
        </TouchableOpacity>

        <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate('Signs')}
        >
          <Image
          style={styles.image}
            source={{uri: 'https://www.involve.me/img/containers/assets/fun-quiz.png/57d859b8cb79457f8d13f925f8ceedcc.webp'}}
            >
            </Image>
            <Text style={styles.text}> Move to quizzes </Text>
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
container: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#f0f0f0',
},
button: {
  alignItems: 'center',
  margin: 20,
}, 
image: {
  width: 100,
  height: 100,
  marginBottom: 10,
},
text: {
  fontSize: 16,
  fontWeight: 'bold'
}
});

export default HomeScreen;