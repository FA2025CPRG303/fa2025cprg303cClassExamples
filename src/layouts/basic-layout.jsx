import { ScrollView, Text, View } from "react-native";

export default function BasicLayout({children}){

    return(
        <ScrollView>
            <View>
                <Text>This is a header</Text>
            </View>
            {children}
            <View>
                <Text>This is a footer</Text>
            </View>
            <View style={{height:100}}></View>
        </ScrollView>
    );
}