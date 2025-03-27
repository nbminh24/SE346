import * as React from 'react';
import { SafeAreaView, Text, TouchableOpacity } from 'react-native';

function Navigation({ navigation }) {
    return (
        <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Navigation Component</Text>
            <TouchableOpacity onPress={() => navigation.navigate('EmployeeList')}>
                <Text>Go to Employee List</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

export default Navigation;