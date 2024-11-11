import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ImageBackground } from 'react-native';
import axios from 'axios';

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {

    //  try {
    //    const response = await axios.post('http://192.168.35.183:5020/api/login', { obj: { email, password } });

    //    if (response.data.token) {
    //     navigation.navigate('Dashboard');
    //    } else {
    //      alert('Login failed');
    //    }
    //  } catch (error) {
    //    console.error(error);
    //    alert('Error logging in');
    //  }
    navigation.navigate('Dashboard');
  };

  return (
    <ImageBackground source={require('../Images/background.jpg')} style={styles.backgroundImage}>
        <View style={styles.container}>
          <Image source={require('../Images/logo.png')} style={styles.logo} />
          <Text style={styles.welcomeText}>Deliver your Favourite Food</Text>
        
          <View style={styles.box}>
          <Text style={styles.heading}>Login</Text>
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
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>
         {/* Sign Up link */}
         <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
            <Text style={styles.signUpText}>Don't have an account? Sign Up</Text>
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
    padding: 10,
  },
  box: {
    width: '90%',
    padding: 20,
    backgroundColor: 'rgb(29, 16, 45)', 
    borderRadius: 15,
    alignItems: 'center',
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
  heading: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 30,
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
  signUpText: {
    color: '#ffff',
    marginTop: 10,
    fontSize: 16,
  },
});
