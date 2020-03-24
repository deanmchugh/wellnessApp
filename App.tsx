import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './src/components/home/home'
import TaskScreen from './src/components/tasks/tasks'
import SleepScreen from './src/components/sleepCycle/sleep'


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Tasks" component={TaskScreen} />
        <Tab.Screen name='Sleep' component={SleepScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}