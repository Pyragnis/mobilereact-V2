import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import axios from 'axios';
import CryptoJS from 'crypto-js';
import { useNavigation } from '@react-navigation/native';

const MarvelP = () => {
  const [characters, setCharacters] = useState([]);
  const publicKey = 'cb25a38ebaa9e077c373504fb7a4da29';
  const privateKey = 'e33a0b034d4c5b9ebd3560cb8d776daddecb1001';
  const timestamp = Date.now();
  const hash = CryptoJS.MD5(timestamp + privateKey + publicKey).toString();
  const url = `https://gateway.marvel.com/v1/public/characters?apikey=${publicKey}&hash=${hash}&ts=${timestamp}`;

  useEffect(() => {
    axios.get(url)
      .then(response => {
        setCharacters(response.data.data.results);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const navigation = useNavigation();

  const handlePress = (id) => {
    navigation.navigate('MarvelDetail', { id: id });
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {characters.map((character, index) => {
        const isFirstItem = index % 3 === 0;
        return (
          <TouchableOpacity key={character.id} style={[styles.character, isFirstItem && styles.firstItem]} onPress={() => handlePress(character.id)}>
            <Image
              source={{ uri: character.thumbnail.path + '.' + character.thumbnail.extension }}
              style={styles.image}
            />
            <Text style={styles.name}>{character.name}</Text>
          </TouchableOpacity>
        )
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  character: {
    width: '30%',
    margin: 5,
    alignItems: 'center',
  },
  firstItem: {
    marginLeft: 0,
  },
  image: {
    width: '100%',
    height: 100,
    borderRadius: 50,
  },
  name: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default MarvelP;

