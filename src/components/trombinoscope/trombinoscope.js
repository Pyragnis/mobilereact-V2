import React, { useState, useEffect } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import axios from 'axios';

const Trombinoscope = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios.get('https://hp-api.onrender.com/api/characters')
      .then(response => {
        setCharacters(response.data);
        console.log(response.data)
        console.log(characters);
      })
      .catch(error => {
        console.log(error);
        console.log(characters);
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
