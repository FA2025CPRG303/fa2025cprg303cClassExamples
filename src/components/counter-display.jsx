import { Text, View } from "react-native";
export default function CounterDisplayComp( {counterInt} ){
    return(
        <View>
            <Text style={{fontSize:40}}>{counterInt}</Text>
        </View>
    );
}