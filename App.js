import React from 'react';
import { View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login, Signup, Welcome, HomePage, BreakfastPage, WeekPlanning, FirstPage, TermsAndConditions, Dinner, NextPage, MenuSelection } from './screens'; 

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="HomePage"
          component={HomePage}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="BreakfastPage"
          component={BreakfastPage}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="WeekPlanning"
          component={WeekPlanning}
          options={{
            headerShown: false,
          }} 
        />
        <Stack.Screen
          name="FirstPage"
          component={FirstPage}
          options={{
            headerShown: false,
          }}
        />
         <Stack.Screen
          name="Dinner"
          component={Dinner}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="TermsAndConditions"
          component={TermsAndConditions}
          options={{
            headerShown: false,
          }}
        />   
        <Stack.Screen
          name="NextPage"
          component={NextPage}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="MenuSelection"
          component={MenuSelection}
          options={{
            headerShown: false,
          }}
        />  
      </Stack.Navigator>
      <View style={{ flex: 1 }}>
        <StatusBar barStyle="dark-content" />
        {/* Your MenuPage Component */}
        {/* You can include the MenuPage component here or use it within the navigation */}
        {/* <MenuPage /> */}
      </View>
    </NavigationContainer>
  );
};

export default App;
