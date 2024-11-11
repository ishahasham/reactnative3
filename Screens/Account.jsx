import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Account = ({ navigation }) => {
  const handleLogout = () => {
    alert("You've been logged out");
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <View style={styles.profileSection}>
        <Text style={styles.name}>Account</Text>
      </View>

      <View style={styles.optionsSection}>
        
        <TouchableOpacity style={styles.option} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.optionText}>Home</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.option} onPress={() => navigation.navigate('Support')}>
          <Text style={styles.optionText}>Help & Support</Text>
        </TouchableOpacity>
      </View>

      {/* Logout Button */}
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutButtonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: 'rgb(10, 12, 32)' },
  profileSection: { alignItems: 'center', marginVertical: 20 },
  name: { fontSize: 24, fontWeight: 'bold', color: 'white' },
  email: { fontSize: 16, color: '#ccc', marginTop: 5 },

  optionsSection: { marginTop: 30 },
  option: {
    padding: 15,
    backgroundColor: 'rgb(33, 24, 80)',
    borderRadius: 5,
    marginBottom: 15,
    alignItems: 'center',
  },
  optionText: { color: 'white', fontSize: 16, fontWeight: 'bold' },

  logoutButton: {
    marginTop: 30,
    padding: 15,
    backgroundColor: '#ff4d4d',
    borderRadius: 5,
    alignItems: 'center',
  },
  logoutButtonText: { color: 'white', fontSize: 16, fontWeight: 'bold' },
});

export default Account;
