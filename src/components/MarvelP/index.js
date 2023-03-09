import React, { useState, useEffect } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import axios from 'axios';
import CryptoJS from 'crypto-js';



const Trombinoscope = () => {
  const [characters, setCharacters] = useState([]);
  const publicKey = 'cb25a38ebaa9e077c373504fb7a4da29';
  const privateKey = 'e33a0b034d4c5b9ebd3560cb8d776daddecb1001';
  const timestamp = Date.now();
  const hash = CryptoJS.MD5(timestamp + privateKey + publicKey).toString();
  const url = `https://gateway.marvel.com/v1/public/characters?apikey=${publicKey}&hash=${hash}&ts=${timestamp}`;

  useEffect(() => {
    axios.get(url)
      .then(response => {
        setCharacters(response.data);
        console.log(response.data)
      
      })
      .catch(error => {
        console.log(error);
        
      });
  }, []);

  return (
    <View style={styles.container}>
      {Array.isArray(characters) && characters.map((character) => (
        <View key={character.name} style={styles.character}>
          <Image
            source={{ uri: character.image }}
            style={styles.image}
          />
          <Text style={styles.name}>{character.name}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignItems: 'center',
    },
    character: {
      margin: 10,
      alignItems: 'center',
    },
    image: {
      width: 100,
      height: 100,
      borderRadius: 50,
    },
    name: {
      marginTop: 10,
      fontSize: 16,
      fontWeight: 'bold',
    },
  });
  
  export default Trombinoscope;
