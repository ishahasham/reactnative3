import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home';
import Carts from './Carts';
import AddCart from './AddCart';
import ProductDetail from './ProductDetail';
import Checkout from './Checkout';
import Account from './Account';
import Support from './Support';


const Tab = createBottomTabNavigator();

export default function Dashboard() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: '#ccc',
        tabBarStyle: {
          backgroundColor: 'rgb(10, 12, 32)',
          borderTopColor: 'transparent',
        },
      }}
    >
      <Tab.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Tab.Screen name="Browse" component={Carts} />
      <Tab.Screen name="Order" component={AddCart} />
      <Tab.Screen name="Support" component={Support} options={{ headerShown: false }} />
      <Tab.Screen name="Account" component={Account} options={{ headerShown: false }}/>
      <Tab.Screen name="ProductDetail" component={ProductDetail} options={{ tabBarButton: () => null }} />
      <Tab.Screen name="Checkout" component={Checkout} options={{ tabBarButton: () => null }} />

    </Tab.Navigator>
  );
}
