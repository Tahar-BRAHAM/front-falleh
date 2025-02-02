import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/auth/Login";
import Register from "../screens/auth/Register";
import Home from "../screens/Home";
import EmployeeNavigator from "./EmployeeNavigator";

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////   TeamWork makes the dream Work        //////////////////////////////////////////////////
/////////////////////////////////////////////////        Riadh & Khalil & Tahar          ///////////////////////////////////////////////////
////////////////////////////////////////////////              HighFalleh                ////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const Stack = createNativeStackNavigator();

export const SignOutNavigator = (props) => {
  var user = props.user;
  var setUser = props.setUser;
  return (
    <Stack.Navigator initialRouteName="login">
      <Stack.Screen
        name="login"
        component={Login}
        options={{ title: "LOGIN" }}
        initialParams={{ setUser: setUser, user: user }}
      />
      <Stack.Screen
        name="register"
        component={Register}
        initialParams={{ setUser: setUser, user: user }}
      />
    </Stack.Navigator>
  );
};
export const SignInNavigator = (props) => {
  var user = props.user;
  var setUser = props.setUser;
  console.log(user, "principalnav");
  return (
    <Stack.Navigator
      initialRouteName="home"
      screenOptions={
        {
          headerShown: false,
        }
      }
    >
      <Stack.Screen
        name="home"
        component={Home}
        // options={{ title: `Welcome ${props.user.userFullName}`,headerTitleAlign:"center"}} 
        initialParams={{ setUser: setUser, user: user }}
      />
      <Stack.Screen
        name="StackEmployees"
        component={EmployeeNavigator}
        options={{
          title: "Employees",
          headerStyle: {
            backgroundColor: "#fff",
          },
          headerTintColor: "black",
          headerTitleStyle: {
            fontWeight: "bold",
          
          },
          headerTitleAlign:"center"
        }}
        initialParams={{ setUser: setUser, user: user }}
      />
      {/* <Stack.Screen
        name="messages"
        component={MessagesNavigator}
        options={{ title: 'Messages' }}
      /> */}
    </Stack.Navigator>
  );
};
