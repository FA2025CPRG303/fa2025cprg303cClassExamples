import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function MyComponent() {
  function sayHello() {
    alert('Hello World!');
  }

  return (
    <View>
      
      <Button title="Press me!" onPress={sayHello} />
      <Pressable onPress={sayHello} style={styles.myButton}>
        <Text style={{ color: 'white', textAlign: 'center' }}>
          I'm a pressable!
        </Text>
      </Pressable>
      <SimpleFormComp />
      <Text>Simple Form</Text>
      <Text>Name:</Text>
      <TextInput style={myStyles.myInput} placeholder="John Smith" />
      <Text>Phone Number:</Text>
      <TextInput style={myStyles.myInput} keyboardType="numeric" />
      <Text>Password:</Text>
      <TextInput style={myStyles.myInput} secureTextEntry={true} />
    </View>
  );
}

const myStyles = StyleSheet.create({
  myInput: {
    borderWidth: 2,
    borderColor: 'blue',
  },
  
  myButton: {
    backgroundColor: 'green',
    padding: 10,
    marginTop: 10,
  },
});
