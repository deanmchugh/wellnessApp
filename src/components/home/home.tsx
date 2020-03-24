import React from 'react'
import {SafeAreaView, View, Text} from 'react-native'
import Header from '../header/header'

export default function HomeScreen() {
    return (
      <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Header />
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>Home!</Text>
        </View>
      </SafeAreaView>
    );
  }