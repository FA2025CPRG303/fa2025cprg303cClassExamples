import { useNavigation } from "@react-navigation/native";
import { Button, FlatList, Text, View } from "react-native";

export default function ContactScreen(){

    const navigation = useNavigation();

    let myArray = [];
    for (let i = 0; i < 400; i++) {
        let thisText = `Item ${i}`;
        myArray.push(thisText);
    }

    return(
        <View>
            <Text>this is the contact screen!</Text>
            <Button title="Go to About" onPress={ () => navigation.navigate('About') } />
            <Button title="Go Back" onPress={ () => navigation.goBack() } />
            <Button title="Go Home" onPress={ () => navigation.popTo('Home') } />
            <Button title="Go Home" onPress={ () => navigation.popToTop() } />
                <Text>this is the about screen!</Text>
            <Button title="Go to Contact" onPress={ () => navigation.navigate('Contact') } />
            <FlatList 
                data={myArray} 
                renderItem={ ({item}) => <Text>{item}</Text> }
                keyExtractor={ (item, index) => index }
            />
        </View>
    );
}