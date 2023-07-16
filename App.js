import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './src/components/includes/Home';
import Cart from './src/components/screens/Cart';
import Search from './src/components/includes/Search';
import Profile from './src/components/includes/Profile';

export default function App() {
  
  const HomeStackNavigator = createNativeStackNavigator();
  const Tab = createBottomTabNavigator ();

  const HomeTabs = () => {
    return (
      <Tab.Navigator>
        <Tab.Screen name='home' component={Home}/>
        <Tab.Screen name='search' component={Search}/>
        <Tab.Screen name='profile' component={Profile}/>
      </Tab.Navigator>
    );
  }

  return (


 
    <NavigationContainer>
      <HomeStackNavigator.Navigator>
        < HomeStackNavigator.Screen name='home' component={HomeTabs}/>
        < HomeStackNavigator.Screen name='cart' component={Cart} />
      </HomeStackNavigator.Navigator>
    </NavigationContainer>
  
  );
}
