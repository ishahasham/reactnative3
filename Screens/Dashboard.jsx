import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Products from './Products';

const Tab = createBottomTabNavigator();

export default function Dashboard() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="About" component={About} />
      <Tab.Screen name="Contact" component={Contact} />
      <Tab.Screen name="Products" component={Products} />
    </Tab.Navigator>
  );
}
