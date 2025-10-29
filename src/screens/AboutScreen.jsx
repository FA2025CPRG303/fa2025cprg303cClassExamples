import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { Button, Text, View } from 'react-native';
import EmployeeDisplayComp from '../components/employee-display';

let people = [
  {
    fname: 'John',
    age: 30,
    city: 'Calgary',
  },
  {
    fname: 'Alice',
    age: 25,
    city: 'Edmonton',
  },
  {
    fname: 'Frank',
    age: 35,
    city: 'Lethbridge',
  },
];

let person = {
  fname: 'Jane',
  age: 20,
  city: 'Calgary',
};

export default function AboutScreen() {
  const [peopleList, setPeopleList] = useState(people);
  const navigation = useNavigation();

  function addPerson() {
    let newEmployeeList = [...peopleList, person];
    setPeopleList(newEmployeeList);
  }

  return (
    <View>
      <Text>Our Team Members</Text>
      <EmployeeDisplayComp employeeList={peopleList} />
      <Button title='Add New Person' onPress={addPerson} />
    </View>
  );
}
