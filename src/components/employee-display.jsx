import { Text, View } from "react-native";

export default function EmployeeDisplayComp({employeeList = []}){

    return(
        <View>
            {
                employeeList.map( (employee, index) => (
                    <View key={index}>
                        <Text>Name:{employee.fname}</Text>
                        <Text>Age:{employee.age}</Text>
                        <Text>City:{employee.city}</Text>
                    </View>
                ) )
            }
        </View>
    );
}