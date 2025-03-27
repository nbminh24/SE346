import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
import { fetchEmployees } from '../api/api';
import { useFocusEffect } from '@react-navigation/native';

const EmployeeList = ({ navigation }) => {
    const [employees, setEmployees] = useState([]);
    const [loading, setLoading] = useState(true);

    const loadEmployees = async () => {
        setLoading(true);
        try {
            const data = await fetchEmployees();
            setEmployees(data);
        } catch (error) {
            console.error('Failed to load employees:', error);
        } finally {
            setLoading(false);
        }
    };

    // Làm mới danh sách khi màn hình được focus
    useFocusEffect(
        React.useCallback(() => {
            loadEmployees();
        }, [])
    );

    const renderItem = ({ item }) => (
        <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate('EmployeeDetail', { id: item.id })}
        >
            <Text style={styles.name}>{item.employee_name}</Text>
            <Text style={styles.age}>Age: {item.employee_age}</Text>
        </TouchableOpacity>
    );

    if (loading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#007bff" />
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={employees}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderItem}
                contentContainerStyle={styles.list}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#f8f9fa' },
    list: { padding: 16 },
    item: {
        padding: 16,
        marginBottom: 12,
        borderRadius: 8,
        backgroundColor: '#ffffff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    name: { fontSize: 18, fontWeight: 'bold', color: '#007bff' },
    age: { fontSize: 14, color: '#6c757d' },
    loadingContainer: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});

export default EmployeeList;