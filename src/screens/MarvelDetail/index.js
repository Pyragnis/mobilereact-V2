import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import axios from 'axios';
import CryptoJS from 'crypto-js';

const DetailMarvel = ({ route }) => {
  const [character, setCharacter] = useState(null);
  const publicKey = 'cb25a38ebaa9e077c373504fb7a4da29';
  const privateKey = 'e33a0b034d4c5b9ebd3560cb8d776daddecb1001';
  const timestamp = Date.now();
  const hash = CryptoJS.MD5(timestamp + privateKey + publicKey).toString();
  const id = route.params.id;
  const url = `https://gateway.marvel.com/v1/public/characters/${id}?apikey=${publicKey}&hash=${hash}&ts=${timestamp}`;

  useEffect(() => {
    axios.get(url)
      .then(response => {
        setCharacter(response.data.data.results[0]);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  if (!character) {
    return (
      <View style={styles.loading}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: character.thumbnail.path + '.' + character.thumbnail.extension }}
        style={styles.image}
      />
      <Text style={styles.name}>{character.name}</Text>
      <Text style={styles.description}>{character.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 10,
  },
  loading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  name: {
    marginTop: 20,
    fontSize: 24,
    fontWeight: 'bold',
  },
  description: {
    marginTop: 10,
    fontSize: 16,
    textAlign: 'center',
  },
});

export default DetailMarvel;
