import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { validatePassword } from "../credentials/passwordUtils";
import { VALID_CREDENTIALS } from "../credentials/credentials";

const LoginScreen = ({ onLogin }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);

    const handleLogin = () => {
        if (username === VALID_CREDENTIALS.username && validatePassword(password, VALID_CREDENTIALS.password)) {
            setError(false);
            onLogin();
        } else {
            setError(true);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <Text style={styles.label}>Username</Text>
            <TextInput
                value={username}
                onChangeText={setUsername}
                placeholder="Enter your username"
                style={[styles.input, error && styles.inputError]}
                placeholderTextColor="#888"
            />
            <Text style={styles.label}>Password</Text>
            <TextInput
                value={password}
                onChangeText={setPassword}
                placeholder="Enter your password"
                secureTextEntry
                style={[styles.input, error && styles.inputError]}
                placeholderTextColor="#888"
            />
            {error && <Text style={styles.errorText}>Invalid username or password</Text>}
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Confirm and Continue</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: "center", paddingHorizontal: 20 },
    title: { fontSize: 28, fontWeight: "bold", textAlign: "center", marginBottom: 40, color: "#333" },
    label: { fontSize: 16, fontWeight: "500", marginBottom: 5, color: "#333" },
    input: { padding: 12, borderWidth: 1, borderColor: "#ccc", borderRadius: 8, backgroundColor: "#fff", fontSize: 16, marginBottom: 15 },
    inputError: { borderColor: "red" },
    errorText: { color: "red", textAlign: "center", marginBottom: 10 },
    button: { backgroundColor: "#007bff", padding: 15, borderRadius: 8, alignItems: "center", marginTop: 20 },
    buttonText: { color: "#fff", fontSize: 18, fontWeight: "bold" },
});

export default LoginScreen;
