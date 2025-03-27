import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';

const Notification = ({ message, type = 'success', onClose }) => {
    const opacity = new Animated.Value(0);

    useEffect(() => {
        // Hiệu ứng fade-in
        Animated.timing(opacity, {
            toValue: 1,
            duration: 300,
            useNativeDriver: true,
        }).start();

        // Tự động đóng sau 3 giây
        const timer = setTimeout(() => {
            Animated.timing(opacity, {
                toValue: 0,
                duration: 300,
                useNativeDriver: true,
            }).start(() => {
                onClose();
            });
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <Animated.View style={[styles.container, styles[type], { opacity }]}>
            <Text style={styles.text}>{message}</Text>
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 50,
        left: 20,
        right: 20,
        padding: 15,
        borderRadius: 8,
        zIndex: 1000,
    },
    success: {
        backgroundColor: '#4caf50',
    },
    error: {
        backgroundColor: '#f44336',
    },
    text: {
        color: '#fff',
        fontSize: 16,
        textAlign: 'center',
    },
});

export default Notification;