import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const ProductDetail = ({ route, navigation }) => {
  const { id, title, price, image } = route.params;
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

  const totalAmount = (price * quantity).toFixed(2);

  return (
    <View style={styles.container}>
      <Image source={image} style={styles.productImage} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.price}>${price}</Text>
      <View style={styles.quantityContainer}>
        <TouchableOpacity style={styles.quantityButton} onPress={decreaseQuantity}>
          <Text style={styles.quantityText}>-</Text>
        </TouchableOpacity>
        <Text style={[styles.quantity, { color: '#fff' }]}>{quantity}</Text>
        <TouchableOpacity style={styles.quantityButton} onPress={increaseQuantity}>
          <Text style={styles.quantityText}>+</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.total}>Total: ${totalAmount}</Text>
      <TouchableOpacity
        style={styles.checkoutButton}
        onPress={() => navigation.navigate('Checkout', { totalAmount })}
      >
        <Text style={styles.checkoutButtonText}>Proceed to Checkout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', padding: 20, backgroundColor: 'rgb(10, 12, 32)' },
  productImage: { width: '90%', height: 220, borderRadius: 10, marginBottom: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10, color: '#fff' },
  price: { fontSize: 20, color: '#fff', marginBottom: 15 },
  quantityContainer: { flexDirection: 'row', alignItems: 'center', marginVertical: 20 , },
  quantityButton: { paddingHorizontal: 10, paddingVertical: 5,color: '#fff', backgroundColor: '#ddd', borderRadius: 5 },
  quantityText: { fontSize: 20, fontWeight: 'bold' },
  quantity: { fontSize: 20, marginHorizontal: 20 },
  total: { fontSize: 18, fontWeight: 'bold', marginVertical: 20 },
  checkoutButton: { backgroundColor: '#fff', padding: 15, borderRadius: 5 },
  checkoutButtonText: { color: 'black', fontSize: 16, fontWeight: 'bold' },
});

export default ProductDetail;
