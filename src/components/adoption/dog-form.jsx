import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
export default function DogFormComp({ newDogFunc }) {
  const [dogName, setDogName] = useState('');
  const [dogAge, setDogAge] = useState('');
  const [dogBreed, setDogBreed] = useState('');
  const handleDogNameChange = input => setDogName(input);
  function handleSubmit() {
    let newDogObj = {
      dogName: dogName,
      dogAge: dogAge,
      dogBreed: dogBreed,
    };
    // alert(
    //   ` Name: ${newDogObj.dogName} | Age: ${newDogObj.dogAge} | Breed: ${newDogObj.dogBreed} `,
    // );
    newDogFunc(newDogObj);
    //form reset
    setDogName("");
    setDogAge("");
    setDogBreed("");
  }
  return (
    <View>
      <Text style={dogFormStyles.heading}>Add a Dog for Adoption</Text>
      <Text style={dogFormStyles.label}>Dog Name:</Text>
      <TextInput
        style={dogFormStyles.input}
        onChangeText={setDogName}
        value={dogName}
      />
      <Text style={dogFormStyles.label}>Dog Age:</Text>
      <TextInput
        style={dogFormStyles.input}
        onChangeText={setDogAge}
        value={dogAge}
        keyboardType="numeric"
      />
      <Text style={dogFormStyles.label}>Dog Breed:</Text>
      <TextInput
        style={dogFormStyles.input}
        onChangeText={setDogBreed}
        value={dogBreed}
      />
      <Button title="Add new dog" onPress={handleSubmit} />
    </View>
  );
}
const dogFormStyles = StyleSheet.create({
  heading: {
    fontSize: 20,
  },
  label: {
    fontSize: 14,
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
  },
});
