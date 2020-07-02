import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {NavigationContainer} from '@react-navigation/native';

import CartScreen from './src/containers/CartScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './src/containers/HomeScreen';
import DrinkScreen from './src/containers/DrinkScreen';
import FoodSreen from './src/containers/FoodSreen';

const Tab = createBottomTabNavigator();


class FoodCart extends Component{
    
    render() {
        return (
           <NavigationContainer>
               <Tab.Navigator tabBarOptions={{activeTintColor:'black',activeBackgroundColor:'skyblue'}}>
                   <Tab.Screen name="Home" component={HomeScreen} options={{
                       
                   }} />
                   <Tab.Screen name="Foods" component={FoodSreen} />
                   <Tab.Screen name="Drinks" component={DrinkScreen} />
                   <Tab.Screen name="Carts" component={CartScreen} />
               </Tab.Navigator>
           </NavigationContainer>
        )
    }
}
export default FoodCart;