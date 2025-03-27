import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ActivityIndicator, Alert } from 'react-native';
import { fetchEmployeeById, updateEmployee } from '../api/api';

const EmployeeDetail = ({ route, navigation }) => {
    const { id } = route.params;
    const [employee, setEmployee] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const [isSaving, setIsSaving] = useState(false);

    useEffect(() => {
        const loadEmployee = async () => {
            const data = await fetchEmployeeById(id);
            setEmployee(data);
        };
        loadEmployee();
    }, [id]);

    const handleSave = async () => {
        if (employee) {
            setIsSaving(true);
            try {
                // Gửi yêu cầu cập nhật lên API (giả lập)
                const response = await updateEmployee(id, {
                    employee_name: employee.employee_name,
                    employee_age: employee.employee_age || 0,
                    employee_salary: employee.employee_salary || 0,
                    profile_image: employee.profile_image || "",
                });

                // Giả lập thành công bất kể phản hồi từ API
                setEmployee({
                    ...employee,
                    employee_name: employee.employee_name,
                    employee_age: employee.employee_age,
                    employee_salary: employee.employee_salary,
                });

                // Hiển thị thông báo thành công
                Alert.alert('Success', 'Employee updated successfully!', [
                    { text: 'OK', onPress: () => navigation.goBack() },
                ]);
            } catch (error) {
                console.error('An error occurred while updating the employee:', error);

                // Hiển thị thông báo lỗi
                Alert.alert('Error', 'An error occurred while updating the employee.');
            } finally {
                setIsSaving(false);
            }
        }
    };

    if (!employee) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#007bff" />
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Name:</Text>
            <TextInput
                style={styles.input}
                value={employee.employee_name}
                editable={isEditing}
                onChangeText={(text) => setEmployee({ ...employee, employee_name: text })}
            />
            <Text style={styles.label}>Age:</Text>
            <TextInput
                style={styles.input}
                value={employee.employee_age?.toString() || '0'} // Đảm bảo giá trị mặc định
                editable={isEditing}
                keyboardType="numeric"
                onChangeText={(text) =>
                    setEmployee({
                        ...employee,
                        employee_age: parseInt(text) || 0, // Đảm bảo giá trị hợp lệ
                    })
                }
            />
            <Text style={styles.label}>Salary:</Text>
            <TextInput
                style={styles.input}
                value={employee.employee_salary?.toString() || '0'} // Đảm bảo giá trị mặc định
                editable={isEditing}
                keyboardType="numeric"
                onChangeText={(text) =>
                    setEmployee({
                        ...employee,
                        employee_salary: parseInt(text) || 0, // Đảm bảo giá trị hợp lệ
                    })
                }
            />
            <TouchableOpacity
                style={[styles.button, isSaving && styles.buttonDisabled]}
                onPress={() => (isEditing ? handleSave() : setIsEditing(true))}
                disabled={isSaving}
            >
                <Text style={styles.buttonText}>
                    {isEditing ? (isSaving ? 'Saving...' : 'Save') : 'Edit'}
                </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, backgroundColor: '#f8f9fa' },
    label: { fontSize: 16, fontWeight: 'bold', marginTop: 16, color: '#333' },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 12,
        marginTop: 8,
        borderRadius: 8,
        backgroundColor: '#fff',
        fontSize: 16,
    },
    loadingContainer: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    button: {
        marginTop: 20,
        padding: 15,
        borderRadius: 8,
        backgroundColor: '#007bff',
        alignItems: 'center',
    },
    buttonDisabled: {
        backgroundColor: '#99cfff',
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default EmployeeDetail;