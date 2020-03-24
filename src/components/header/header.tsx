import React from 'react'
import {View, Text} from 'react-native'

export default function Header() {
    return (
        <View style={{flexDirection: 'row', height: 50, borderWidth: 1, borderColor: 'red'}}>
            <View style={{flex: 1, borderColor: 'red', borderWidth: 1}}></View>
            <View style={{flex: 2, justifyContent: 'center', borderColor: 'red', borderWidth: 1}}>
                <Text style={{textAlign: 'center'}}>Title</Text>
            </View>
            <View style={{flex: 1, borderColor: 'red', borderWidth: 1}}></View>
        </View>
    )
}