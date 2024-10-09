import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function Main({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome to My E-commerce App</Text>
      
      <View style={styles.buttonContainer}>
        <Button title="Login" onPress={() => navigation.navigate('Login')} color="#560CCE" />
      </View>
      
      <View style={styles.buttonContainer}>
        <Button title="Signup" onPress={() => navigation.navigate('Signup')} color="#560CCE" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f8f8ff', 
  },
  welcomeText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#560CCE',
    marginBottom: 40,
    textAlign: 'center',
  },
  buttonContainer: {
    width: '80%', 
    marginVertical: 10, 
    borderRadius: 10,
    overflow: 'hidden', 
  },
});
