// screens/HomeScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  const handleNext = () => {
    navigation.navigate('Map', { name, surname, latitude, longitude });
  };

  return (
    <View style={styles.container}>
      <Text>Nombre:</Text>
      <TextInput style={styles.input} value={name} onChangeText={setName} />
      <Text>Apellido:</Text>
      <TextInput style={styles.input} value={surname} onChangeText={setSurname} />
      <Text>Latitud:</Text>
      <TextInput style={styles.input} value={latitude} onChangeText={setLatitude} keyboardType="numeric" />
      <Text>Longitud:</Text>
      <TextInput style={styles.input} value={longitude} onChangeText={setLongitude} keyboardType="numeric" />
      <Button title="Siguiente" onPress={handleNext} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
});

export default HomeScreen;
