import { Text, View } from 'react-native';
import dogData from '../assets/data/dog-data.json'
import { useState } from 'react';
import DogListComp from '../components/adoption/dog-list';
import DogFormComp from '../components/adoption/dog-form';

export default function AdoptionScreen() {

    const [dogList, setDogList] = useState(
        dogData.map( (dog) => ({...dog}) )
    );

    function addNewDog(dogObj){
      let newDogList = [...dogList, dogObj];
      setDogList(newDogList);
    }

  return (
    <View>
      <Text>Dogs for Adoption</Text>
      <DogListComp dogArray={dogList} />
      <DogFormComp newDogFunc={addNewDog} />
    </View>
  );
}
