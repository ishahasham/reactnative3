import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Contact() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contact Us</Text>
      <Text style={styles.description}>
        We'd love to hear from you! If you have any questions or feedback, please reach out to us at:
      </Text>
      <Text style={styles.email}>support@example.com</Text>
      <Text style={styles.description}>
        You can also follow us on our social media channels for updates.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8ff', 
    padding: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#560CCE',
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    color: '#333', 
    textAlign: 'center',
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  email: {
    fontSize: 18,
    color: '#560CCE', 
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
