import { Text, View } from "react-native";
export default function DogCardComp({dogObj}){
    const {dogName,dogAge:age,dogBreed:breed} = dogObj;
    return(
        <View>
            <Text style={{fontSize: 20, color:'blue'}}>{dogObj.dogName}</Text>
            <Text>Age: {age}</Text>
            <Text>Breed: {breed}</Text>
        </View>
    );
}