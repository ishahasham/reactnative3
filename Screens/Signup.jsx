import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground, Image } from 'react-native';
import axios from 'axios';


export default function Signup({ navigation }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async () => {

    // try {
    //   const response = await axios.post('http://192.168.35.183:5020/api/signup', { obj: { name, email, password } });
    //   if (response.data.message === 'User registered successfully') {
    //     navigation.navigate('Login');
    //   } else {
    //     alert('Signup failed');
    //   }
    // } catch (error) {
    //   console.error(error);
    //   alert('Error signing up');
    // }
    
    navigation.navigate('Login');
  };

  return (
    <ImageBackground source={require('../Images/background.jpg')} style={styles.backgroundImage}>
      <View style={styles.container}>
      <Image source={require('../Images/logo.png')} style={styles.logo} />
      <Text style={styles.welcomeText}>Deliver your Favourite Food</Text>
        
        <View style={styles.box}>
          
        <Text style={styles.heading}>Signup</Text>
          <TextInput
            style={styles.input}
            placeholder="Name"
            value={name}
            onChangeText={(text) => setName(text)}
            placeholderTextColor="#aaa"
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={(text) => setEmail(text)}
            placeholderTextColor="#aaa"
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry
            placeholderTextColor="#aaa"
          />
          <TouchableOpacity style={styles.button} onPress={handleSignup}>
            <Text style={styles.buttonText}>Signup</Text>
          </TouchableOpacity>
        </View>
            {/* Login link */}
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.loginText}>Already have an account? Login</Text>
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
    color: '#fff',
    marginBottom: 35,
    textAlign: 'center',
    fontFamily: "cursive",
  },
  box: {
    width: '90%',
    padding: 20,
    backgroundColor: 'rgb(29, 16, 45)',
    borderRadius: 15,
    alignItems: 'center',
  },
  heading: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 30,
    textAlign: 'center',
    fontFamily: "sans-serif",
  },
  input: {
    width: '100%',
    padding: 15,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 10,
    backgroundColor: 'transparent',
    color: '#fff',
    fontSize: 16,
  },
  button: {
    backgroundColor: '#560CCE',
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  loginText: {
    color: '#ffff',
    marginTop: 10,
    fontSize: 16,
  },
});
