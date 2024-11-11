import React from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import { resdata } from '../Data/resdata';
import { useNavigation } from '@react-navigation/native';

const AddCart = ({ route }) => {
  const { id, title, price, image, description } = route.params;
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.container}>
      <View style={styles.productContainer}>
        {image ? (
          <Image source={image} style={styles.productImage} />
        ) : (
          <Text style={styles.noDataText}>Image not available</Text>
        )}
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
        <TouchableOpacity style={styles.orderButton}
      onPress={() => navigation.navigate('ProductDetail', { id, title, price, image})}>
        <Text style={styles.orderButtonText}>Add to Cart</Text>
      </TouchableOpacity>
      </View>

      <Text style={styles.featuredTitle}>Featured Products</Text>
      {resdata && resdata.length === 0 ? (
        <Text style={styles.noDataText}>There is nothing in order</Text>
      ) : (
        <FlatList
          data={resdata}
          horizontal
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.featuredCard}>
              {item.image ? (
                <Image source={item.image} style={styles.featuredImage} />
              ) : (
                <Text style={styles.noDataText}>No image</Text>
              )}
              <Text style={styles.featuredTitle}>{item.title || 'No title'}</Text>
              <Text style={styles.featuredPrice}>${item.price || 'N/A'}</Text>
            </TouchableOpacity>
          )}
          showsHorizontalScrollIndicator={false}
        />
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'rgb(10, 12, 32)'},
  productContainer: { alignItems: 'center', padding: 20 },
  productImage: {
    width: '90%',
    height: 220,
    borderRadius: 12,
    marginBottom: 20,
    resizeMode: 'contain',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  title: { fontSize: 26, fontWeight: '600', color: '#fff', textAlign: 'center', marginBottom: 8 },
  description: { fontSize: 16, textAlign: 'center', color: '#fff', lineHeight: 22, marginBottom: 15, paddingHorizontal: 20 },
  price: { fontSize: 20, color: '#444', fontWeight: '500', marginBottom: 25 },
  featuredTitle: { fontSize: 20, fontWeight: 'bold', marginLeft: 20, marginTop: 20, marginBottom: 10 },
  noDataText: { fontSize: 18, color: '#888', textAlign: 'center', marginVertical: 20 },
  featuredCard: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    marginHorizontal: 10,
    width: 140,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  orderButton: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  orderButtonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
  featuredImage: { width: 100, height: 100, borderRadius: 8, marginBottom: 8 },
  featuredPrice: { fontSize: 16, color: '#888' },

});

export default AddCart;
