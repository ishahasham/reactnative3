// Products.jsx
import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import axios from 'axios';
import Card from '../Components/Card';


export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(response => setProducts(response.data))
      .catch(error => console.error(error));
  }, []);

  const renderItem = ({ item }) => (
    <Card title={item.title} price={item.price} image={item.image} />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
        numColumns={2} // Set number of columns to 2
        columnWrapperStyle={styles.row} // Add styles for the row
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f8f8ff', // Light background for contrast
  },
  row: {
    justifyContent: 'space-between', // Space out the cards
  },
});
