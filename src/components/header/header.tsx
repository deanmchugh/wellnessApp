import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

export default function Header() {
    return (
        <View style={styles.container}>
            <View style={styles.sectionWidthOne}></View>
            <View style={styles.sectionTitle}>
                <Text style={styles.title}>Title</Text>
            </View>
            <View style={styles.sectionWidthOne}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row', 
        height: 50, 
        borderWidth: 1, 
        borderColor: 'red'
    },
    sectionWidthOne: {
        flex: 1,
        borderColor: 'red',
        borderWidth: 1
    },
    sectionTitle: {
        flex: 2, 
        justifyContent: 'center',
        borderColor: 'red', 
        borderWidth: 1
    },
    title: {
        textAlign: 'center'
    }
})