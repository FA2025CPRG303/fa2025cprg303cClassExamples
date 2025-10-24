import { useNavigation } from "@react-navigation/native";
import { Button, Text, View } from "react-native";

export default function ContactScreen(){

    const navigation = useNavigation();

    return(
        <View>
            <Text>this is the contact screen!</Text>
            <Button title="Go to About" onPress={ () => navigation.navigate('About') } />
            <Button title="Go Back" onPress={ () => navigation.goBack() } />
            <Button title="Go Home" onPress={ () => navigation.popTo('Home') } />
            <Button title="Go Home" onPress={ () => navigation.popToTop() } />
        </View>
    );
}