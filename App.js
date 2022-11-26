import { StyleSheet, Text, View, TextInput } from 'react-native';
import React, {useState} from 'react';

export default function App() {
 
  const [age, setAge] = useState('');
  const [lower, setLower] = useState(0);
  const [upper,setUpper] = useState(0);

  function calculate(text) {
    setAge(text);
    setLower(((220 - text) * 0.65));
    setUpper(((220 - text) * 0.85));
  }
  return (
    <View style={styles.container}>
      <Text style={styles.field}>Age:</Text>
      <TextInput style={styles.field} value={age} onChangeText={text => calculate(text)}
      keyboardType='numeric'></TextInput>
      <Text style={styles.field}>Hr limits:</Text>
      <Text style={styles.field}>{lower.toFixed(0)} - {upper.toFixed(0)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    marginLeft: 10,
  },
  field: {
    marginBottom: 10,
  },
});
