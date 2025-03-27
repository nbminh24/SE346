import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./screens/LoginScreen";
import EmployeeList from "./screens/EmployeeList";
import EmployeeDetail from "./screens/EmployeeDetail";

const Stack = createNativeStackNavigator();

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (!isLoggedIn) {
    return <LoginScreen onLogin={() => setIsLoggedIn(true)} />;
  }

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          {/* Màn hình danh sách nhân viên */}
          <Stack.Screen
            name="EmployeeList"
            component={EmployeeList}
            options={{ title: "Employee List" }}
          />
          {/* Màn hình chi tiết nhân viên */}
          <Stack.Screen
            name="EmployeeDetail"
            component={EmployeeDetail}
            options={{ title: "Employee Detail" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;