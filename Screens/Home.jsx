import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Home Screen!</Text>
      <Text style={styles.description}>
        Explore our products, check out your account, and enjoy shopping!
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
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#333', // Darker text for contrast
    textAlign: 'center',
    paddingHorizontal: 20,
  },
});
