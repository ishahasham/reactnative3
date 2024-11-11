import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
  TouchableOpacity,
  ScrollView,
  Image,
  PermissionsAndroid,
  Platform,
  Alert,
} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import Card from '../Components/Card';
import DiscountCard from '../Components/DiscountCard';
import { data } from '../Data/data';

export default function Home({ navigation }) {
  const [products, setProducts] = useState(data); 
  const [selectedCategory, setSelectedCategory] = useState('');
  const [location, setLocation] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  
  useEffect(() => {
    console.log(data); // Check the raw data
    setProducts(data);
  }, []);

  const categoryImages = {
    burger: require('../Images/burger.png'),
    dessert: require('../Images/cak.png'),
    mexican: require('../Images/mexican1.png'),
    sushi: require('../Images/sushi.png'),
    pasta: require('../Images/pasta.png'),
  };

  
  const requestLocationPermission = async () => {
    if (Platform.OS === 'android') {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Location Permission',
          message: 'This app needs access to your location to show nearby services.',
          buttonPositive: 'OK',
        },
      );
      return granted === PermissionsAndroid.RESULTS.GRANTED;
    }
    return true;
  };

  const getCurrentLocation = async () => {
    const hasPermission = await requestLocationPermission();
    if (hasPermission) {
      Geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ Lat: latitude, Long: longitude });
        },
        (error) => {
          Alert.alert('Error', 'Failed to get location');
        },
        { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
      );
    }
  };

  const renderItem = ({ item }) => (
    <Card title={item.title} price={item.price} image={item.image} desc={item.description}/>
  );

  const renderCategoryItem = ({ item }) => (
    <TouchableOpacity onPress={() => setSelectedCategory(item)}>
      <View style={styles.categoryItem}>
        <View style={styles.categoryIcon}>
          <Image source={categoryImages[item]} style={styles.logo} />
        </View>
        <Text style={styles.categoryText}>{item.charAt(0).toUpperCase() + item.slice(1)}</Text>
      </View>
    </TouchableOpacity>
  );

  const filteredProducts = selectedCategory
    ? products.filter(product =>
        product.category.toLowerCase().includes(selectedCategory.toLowerCase())
      )
    : products;

  return (
    <ScrollView style={styles.container}>
      {/* Location Bar */}
      <View style={styles.locationContainer}>
        <Text style={styles.locationText}>{location ? location : 'Fetching location...'}</Text>
      </View>

      {/* Search Section */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Your order?"
          placeholderTextColor="#ffff"
          value={searchQuery}
          onChangeText={(text) => setSearchQuery(text)}
        />

      </View>

      {/* Categories Section */}
      <Text style={styles.sectionTitle}>Categories</Text>
      <FlatList
        data={["burger", "dessert", "mexican", "sushi", "pasta"]}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={renderCategoryItem}
        style={styles.categoryContainer}
        contentContainerStyle={{ paddingHorizontal: 10 }}
      />

      {/* Discount Cards Section */}
      <Text style={styles.sectionTitle}>Discounts</Text>
      <FlatList
        data={[
          { discount: '30%', description: 'Discount on local burgers', image: require('../Images/burger.png') },
          { discount: '25%', description: 'Delicious desserts on sale', image: require('../Images/cak.png') },
          { discount: '20%', description: 'Mexican flavors for less', image: require('../Images/mexican1.png') },
        ]}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <DiscountCard discount={item.discount} description={item.description} image={item.image} />
        )}
        style={styles.discountContainer}
      />

     {/* all data */}
     <View style={styles.container}>
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
  locationContainer: {
    marginVertical: 10,
  },
  locationText: {
    color: 'white',
    fontSize: 14,
    opacity: 0.8,
  },
  searchContainer: {
    flexDirection: 'row',
    backgroundColor: '#2a2d44',
    borderRadius: 10,
    alignItems: 'center',
    paddingHorizontal: 10,
    marginVertical: 15,
  },
  searchInput: {
    flex: 1,
    color: 'white',
    paddingVertical: 10,
  },
  logo: {
    width: 50,
    height: 50,
  },
  qrIcon: {
    width: 24,
    height: 24,
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    borderRadius: 5,
    marginLeft: 10,
  },
  sectionTitle: {
    color: 'white',
    fontSize: 18,
    marginVertical: 10,
  },
  categoryContainer: {
    marginVertical: 10,
  },
  categoryItem: {
    alignItems: 'center',
    marginHorizontal: 10,
  },
  categoryIcon: {
    width: 50,
    height: 50,
    backgroundColor: '#444',
    borderRadius: 10,
    marginBottom: 5,
  },
  categoryText: {
    color: 'white',
    fontSize: 14,
  },
  productList: {
    marginTop: 10,
  },
  row: {
    justifyContent: 'space-between',
  },
});