import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function About() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About Us</Text>
      <Text style={styles.description}>
        Welcome to our e-commerce app! We are dedicated to providing you with the best online shopping experience.
        Our mission is to deliver high-quality products at affordable prices. Thank you for choosing us!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8ff', // Light background for contrast
    padding: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#560CCE', // Primary color
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    color: '#333', // Darker text for contrast
    textAlign: 'center',
    paddingHorizontal: 10,
  },
});
