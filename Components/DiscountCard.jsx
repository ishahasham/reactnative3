import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

export default function DiscountCard({ discount, description, image }) {
  return (
    <View style={styles.card}>
      <View style={styles.rowContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.discountText}>{discount} OFF</Text>
          <Text style={styles.descriptionText}>{description}</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Order Now</Text>
          </TouchableOpacity>
        </View>
        <Image source={image} style={styles.image} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#1a1a2e',
    padding: 20,
    borderRadius: 10,
    width: 250,
    marginRight: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textContainer: {
    flex: 1,
    marginRight: 10,
  },
  discountText: {
    fontSize: 24,
    color: '#ffffff',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  descriptionText: {
    fontSize: 14,
    color: '#b0b0b0',
    marginBottom: 15,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  button: {
    backgroundColor: '#3366ff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginTop: 10,
    alignSelf: 'flex-start',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
