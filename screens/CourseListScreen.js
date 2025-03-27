import React from 'react';
import { SafeAreaView, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';

const courses = [
    { id: 'SE346', title: 'Mobile Device Application Development', description: 'Develop mobile applications using modern frameworks.' },
    { id: 'SE407', title: 'Mobile Pervasive Computing', description: 'Explore ubiquitous computing and mobile systems.' },
    { id: 'SE501', title: 'Internship', description: 'Gain real-world experience through industry internship programs.' }

];

const CourseListScreen = ({ navigation }) => {
    const renderCourseItem = ({ item }) => (
        <TouchableOpacity
            style={styles.courseItem}
            onPress={() => navigation.navigate('screen2')} // Điều hướng đến CourseDetailScreen
        >
            <Text style={styles.courseTitle}>{item.title}</Text>
            <Text style={styles.courseDescription}>{item.description}</Text>
        </TouchableOpacity>
    );

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.header}>Courses</Text>
            <FlatList
                data={courses}
                renderItem={renderCourseItem}
                keyExtractor={(item) => item.id.toString()}
                contentContainerStyle={styles.listContainer}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    header: {
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 20,
        color: '#007bff', // Màu xanh dương cho tiêu đề
    },
    listContainer: {
        paddingHorizontal: 16,
    },
    courseItem: {
        backgroundColor: '#fff',
        padding: 16,
        marginVertical: 8,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
        borderLeftWidth: 4,
        borderLeftColor: '#007bff', // Dải màu xanh dương bên trái
    },
    courseTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#007bff', // Màu xanh dương cho tiêu đề khóa học
    },
    courseDescription: {
        fontSize: 14,
        color: '#666',
        marginTop: 4,
    },
});

export default CourseListScreen;