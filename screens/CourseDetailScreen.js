import React from 'react';
import { SafeAreaView, Text, StyleSheet, View, Image } from 'react-native';

const CourseDetailScreen = () => {
    const course = {
        title: 'Mobile Device Application Development',
        description: 'Learn how to develop mobile applications using modern frameworks and tools.',
        instructor: 'John Doe',
        duration: '10 hours',
        level: 'Beginner',
    };

    return (
        <SafeAreaView style={styles.container}>
            {/* Hình ảnh khóa học */}
            <Image source={{ uri: 'https://via.placeholder.com/400x200.png?text=Course+Image' }} style={styles.image} />

            {/* Tiêu đề khóa học */}
            <Text style={styles.header}>{course.title}</Text>

            {/* Chi tiết khóa học */}
            <View style={styles.detailContainer}>
                <Text style={styles.label}>Description:</Text>
                <Text style={styles.value}>{course.description}</Text>

                <Text style={styles.label}>Instructor:</Text>
                <Text style={styles.value}>{course.instructor}</Text>

                <Text style={styles.label}>Duration:</Text>
                <Text style={styles.value}>{course.duration}</Text>

                <Text style={styles.label}>Level:</Text>
                <Text style={styles.value}>{course.level}</Text>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        paddingTop: 40, // Thêm khoảng cách từ trên xuống
    },
    image: {
        width: '100%',
        height: 200,
        borderBottomLeftRadius: 16,
        borderBottomRightRadius: 16,
        marginBottom: 16,
    },
    header: {
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
        color: '#007bff', // Màu xanh dương cho tiêu đề
    },
    detailContainer: {
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 16,
        marginHorizontal: 16,
        marginTop: 20, // Hạ phần chi tiết xuống thấp hơn
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 4,
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#007bff', // Màu xanh dương cho nhãn
        marginTop: 12,
    },
    value: {
        fontSize: 16,
        color: '#333',
        marginTop: 4,
    },
});

export default CourseDetailScreen;