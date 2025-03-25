import React, { useState } from "react";
import { View } from "react-native";
import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <View style={{ flex: 1 }}>{isLoggedIn ? <HomeScreen /> : <LoginScreen onLogin={() => setIsLoggedIn(true)} />}</View>
  );
};

export default App;