import React, { useState } from 'react';
import { View, FlatList, StyleSheet, ScrollView, TextInput } from 'react-native';
import Card from '../Components/Card';
import { data } from '../Data/data';


export default function Carts() {
  const [products, setProducts] = useState(data); // Set the data array as the initial state
  const [searchQuery, setSearchQuery] = useState('');

  const renderItem = ({ item }) => (
    <Card title={item.title} price={item.price} image={item.image} desc={item.description}/>
  );

  return (
    <ScrollView style={styles.container}>

    {/* Search Section */}
    <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Your order?"
          placeholderTextColor="#ffff"
          value={searchQuery}
          onChangeText={(text) => setSearchQuery(text)}
        />
        <View style={styles.qrIcon}></View>
      </View>

    
    <View >
      <FlatList
        data={products}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
        numColumns={1} 
      />
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(10, 12, 32)',
    padding: 20,

  },
});
