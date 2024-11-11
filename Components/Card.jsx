import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Card({id, title, price, image, desc }) { 
  const navigation = useNavigation();
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.productImage} />

      <Text style={styles.title}>{title}</Text>
      <Text style={styles.text}>{desc}</Text>
      
      <TouchableOpacity style={styles.orderButton}
      onPress={() => navigation.navigate('Order', { id, title, price, image, description: desc })}>
        <Text style={styles.orderButtonText}>Order Now</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 15,
    margin: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    borderRadius: 10,
    width: '90%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  productImage: {
    width: '100%',
    height: 120,
    resizeMode: 'cover',
    borderRadius: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginVertical: 8,
    textAlign: 'center',
  },
  text:{
    fontSize:15,
    color: '#333',
    textAlign:'center',
    marginBottom:8
  },
  price: {
    fontSize: 16,
    color: '#888',
    marginBottom: 10,
  },
  orderButton: {
    backgroundColor: 'rgb(10, 12, 32)',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  orderButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
