import { View, Text,Image,StyleSheet } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './src/components/includes/Home';
import Cart from './src/components/screens/Cart';
import Search from './src/components/includes/Search';
import Profile from './src/components/includes/Profile';
import HomeIcon from "./src/assets/icons/Property 1=home g.svg"
import HomeIconFill from "./src/assets/icons/Property 1=home g-1.svg"
import SearchIcon from './src/assets/icons/Property 1=search g.svg';
import SearchIconFill from './src/assets/icons/Property 1=search b.svg';
import ProfileIcon from './src/assets/icons/Property 1=profile g.svg';
import ProfileIconFill from './src/assets/icons/Property 1=profile b.svg';


export default function App() {
  
  const HomeStackNavigator = createNativeStackNavigator();
  const Tab = createBottomTabNavigator ();

  const HomeTabs = () => {
    return (
      <Tab.Navigator  screenOptions={({route})=>({
    tabBarActiveTintColor:'black',
    tabBarInactiveTintColor:'gray',
    tabBarIcon:({focused})=> {
      let IconPath;
      if(route.name === 'home'){
        IconPath = focused ? <HomeIconFill/> : <HomeIcon/>
      }
      else if(route.name === 'search'){
        IconPath = focused ? <SearchIconFill/> :<SearchIcon/>
      }
      else{
        IconPath = focused ? <Profile/> : <ProfileIconFill/>
      }
      return<Image style={styles.image} source={IconPath} />

      
    }
      })}>
        <Tab.Screen name='home'    options={{headerShown:false,}} component={Home}/>
        <Tab.Screen name='search' options={{headerShown:false,}} component={Search}/>
        <Tab.Screen name='profile' options={{headerShown:false,}} component={Profile}/>
      </Tab.Navigator>
    );
  }

  return (


 
    <NavigationContainer>
      <HomeStackNavigator.Navigator>
        < HomeStackNavigator.Screen options={{headerShown:false,}}  name='homes' component={HomeTabs}/>
        < HomeStackNavigator.Screen options={{headerShown:false,}} name='cart' component={Cart} />
      </HomeStackNavigator.Navigator>
    </NavigationContainer>
  
  );
}

const styles = StyleSheet.create(

  {
    image:{
      width:22,
      height:22
    }
  }
)
