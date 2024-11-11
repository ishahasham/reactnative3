import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Checkout = ({ route }) => {
  const { totalAmount } = route.params;
  const navigation = useNavigation();
  const [paymentMethod, setPaymentMethod] = useState('');
  const [name, setName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

  const handlePayment = () => {
    if (!paymentMethod) {
      alert('Please select a payment method');
      return;
    }
  
    if (paymentMethod === 'Credit Card') {
      if (!name || !cardNumber || !expiryDate || !cvv) {
        alert('Please fill in all credit card details');
        return;
      }
    }
  
    alert(`Payment of $${totalAmount} with ${paymentMethod} processed successfully`);
    navigation.navigate('Home'); // Navigate to Home after payment
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.totalText}>Total Amount: ${totalAmount}</Text>

      <Text style={styles.heading}>Select Payment Method:</Text>
      <View style={styles.paymentOptions}>
        <TouchableOpacity
          style={[styles.paymentOption, paymentMethod === 'Credit Card' && styles.selectedOption]}
          onPress={() => setPaymentMethod('Credit Card')}
        >
          <Text style={styles.paymentOptionText}>Credit Card</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.paymentOption, paymentMethod === 'PayPal' && styles.selectedOption]}
          onPress={() => setPaymentMethod('PayPal')}
        >
          <Text style={styles.paymentOptionText}>PayPal</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.paymentOption, paymentMethod === 'Cash' && styles.selectedOption]}
          onPress={() => setPaymentMethod('Cash')}
        >
          <Text style={styles.paymentOptionText}>Cash on Delivery</Text>
        </TouchableOpacity>
      </View>

      {paymentMethod === 'Credit Card' && (
        <View style={styles.cardDetails}>
          <TextInput
            style={styles.input}
            placeholder="Name on Card"
            value={name}
            onChangeText={setName}
            placeholderTextColor="#fff"
          />
          <TextInput
            style={styles.input}
            placeholder="Card Number"
            value={cardNumber}
            keyboardType="numeric"
            onChangeText={setCardNumber}
            placeholderTextColor="#fff"
          />
          <View style={styles.inputRow}>
            <TextInput
              style={[styles.input, { flex: 0.45 }]}
              placeholder="Expiry Date (MM/YY)"
              value={expiryDate}
              onChangeText={setExpiryDate}
              placeholderTextColor="#fff"
            />
            <TextInput
              style={[styles.input, { flex: 0.45 }]}
              placeholder="CVV"
              value={cvv}
              keyboardType="numeric"
              onChangeText={setCvv}
              placeholderTextColor="#fff"
            />
          </View>
        </View>
      )}

      <TouchableOpacity style={styles.confirmButton} onPress={handlePayment}>
        <Text style={styles.confirmButtonText}>Confirm Payment</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: 'rgb(10, 12, 32)' },
  totalText: { fontSize: 20, fontWeight: 'bold', marginBottom: 30, color: '#fff' },
  heading: { fontSize: 18, fontWeight: 'bold', marginVertical: 15, color: '#fff' },
  paymentOptions: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 },
  paymentOption: {
    flex: 1,
    paddingVertical: 12,
    marginHorizontal: 5,
    backgroundColor: 'rgb(33, 24, 80)',
    borderRadius: 5,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  selectedOption: { backgroundColor: 'rgb(10, 12, 32)' },
  paymentOptionText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
  cardDetails: { marginVertical: 25 },
  input: {
    padding: 12,
    borderRadius: 5,
    marginBottom: 15,
    borderColor: 'rgb(33, 24, 80)',
    borderWidth: 1,
    fontSize: 16,
    color: '#fff',
  },
  inputRow: { flexDirection: 'row', justifyContent: 'space-between' },
  confirmButton: {
    backgroundColor: '#fff',
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 30,
  },
  confirmButtonText: { color: 'rgb(33, 24, 80)', fontWeight: 'bold', fontSize: 18 },
});

export default Checkout;
