import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const Support = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    if (!name || !email || !message) {
      alert('Please fill in all fields');
      return;
    }

    alert('Message sent successfully!');
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Help & Support</Text>

      <View style={styles.contactForm}>
        <Text style={styles.subHeading}>Contact Us</Text>
        <TextInput
          style={styles.input}
          placeholder="Name"
          value={name}
          onChangeText={setName}
          placeholderTextColor="#ccc"
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          placeholderTextColor="#ccc"
          keyboardType="email-address"
        />
        <TextInput
          style={[styles.input, styles.messageInput]}
          placeholder="Your Message"
          value={message}
          onChangeText={setMessage}
          placeholderTextColor="#ccc"
          multiline
        />
        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitButtonText}>Send Message</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.faqSection}>
        <Text style={styles.subHeading}>Frequently Asked Questions</Text>
        <Text style={styles.faqItem}>Q: How can I track my order?</Text>
        <Text style={styles.faqAnswer}>A: You can track your order in the 'Order History' section in your account.</Text>
        
        <Text style={styles.faqItem}>Q: What payment methods do you accept?</Text>
        <Text style={styles.faqAnswer}>A: We accept credit cards, PayPal, and cash on delivery.</Text>
        
        <Text style={styles.faqItem}>Q: How can I contact customer support?</Text>
        <Text style={styles.faqAnswer}>A: You can use the contact form above or email us at support@example.com.</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: 'rgb(10, 12, 32)' },
  heading: { fontSize: 24, fontWeight: 'bold', color: 'white', marginBottom: 20 },
  subHeading: { fontSize: 18, fontWeight: 'bold', color: 'white', marginTop: 20, marginBottom: 10 },

  contactForm: { marginBottom: 30 },
  input: {
    padding: 12,
    borderRadius: 5,
    marginBottom: 15,
    borderColor: 'rgb(33, 24, 80)',
    borderWidth: 1,
    fontSize: 16,
    color: 'white',
  },
  messageInput: { height: 100, textAlignVertical: 'top' },
  submitButton: {
    backgroundColor: 'rgb(33, 24, 80)',
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  submitButtonText: { color: 'white', fontSize: 16, fontWeight: 'bold' },

  faqSection: { marginTop: 20 , marginBottom:30},
  faqItem: { color: '#fff', fontSize: 16, fontWeight: 'bold', marginTop: 10 },
  faqAnswer: { color: '#ccc', fontSize: 14, marginBottom: 10 },
});

export default Support;
