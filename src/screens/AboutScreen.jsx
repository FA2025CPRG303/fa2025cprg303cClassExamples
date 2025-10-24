import { useNavigation } from "@react-navigation/native";
import { Button, FlatList, Text, View } from "react-native";

export default function AboutScreen(){

    const navigation = useNavigation();

    const myArray = ['Item One', 'Item Two', 'Item Three', 'Item Four'];
    let array2 = [];
    for (let i = 0; i < 400; i++) {
        let thisText = `Item ${i}`;
        array2.push(thisText);
    }

    return(
        <View>
            <Text>this is the about screen!</Text>
            <Button title="Go to Contact" onPress={ () => navigation.navigate('Contact') } />
            <FlatList 
                data={array2} 
                renderItem={ ({item}) => <Text>{item}</Text> }
                keyExtractor={ (item, index) => index }
            />
        </View>
    );
}