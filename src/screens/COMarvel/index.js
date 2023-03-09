import React, { useState } from 'react';
import { View, Image, TextInput, StyleSheet,TouchableOpacity,Text } from 'react-native';
import MarvelCara from '../MarvelCara';
import { useNavigation } from '@react-navigation/native';

const index = () => {
  const navigation = useNavigation();
  const [UserName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  

  const handleLogin = () => {
    // Gérer l'authentification de l'utilisateur
    if (!UserName || !password || UserName.length < 5 || password.length < 8) {
      setError('Formulaire non valide');
    } else {
      navigation.navigate('MarvelCara');
    }
    
  }

  return (
    <View style={styles.container}>
      <Image
        source={require('./../../../public/marvel_logo.png')}
        style={styles.logo}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="UserName"
          onChangeText={setUserName}
          value={UserName}
        />
        <TextInput
          style={styles.input}
          placeholder="Mot de passe"
          onChangeText={setPassword}
          value={password}
          secureTextEntry
        />
        {error ? <Text style={styles.error}>{error}</Text> : null}
      </View>
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Se connecter</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 50,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  button: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default index;
