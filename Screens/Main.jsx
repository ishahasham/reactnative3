import React from 'react';
import { View, Text, Button, StyleSheet, Image, ImageBackground, TouchableOpacity } from 'react-native';

export default function Main({ navigation }) {
  return (
    <ImageBackground source={require('../Images/background.jpg')} style={styles.backgroundImage}>
      <View style={styles.container}>
        <Image source={require('../Images/logo.png')} style={styles.logo} />
        <Text style={styles.welcomeText}>Deliver your Favourite Food</Text>
        
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Signup')}>
          <Text style={styles.buttonText}>Signup</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
   
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
 
  },
  logo: {
    width: 100,
    height: 100, 
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#ffff',
    marginBottom: 40,
    textAlign: 'center',
     fontFamily:"cursive"
  },
  button: {
    backgroundColor: '#130718',
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily:"san-serif"
  },
});
