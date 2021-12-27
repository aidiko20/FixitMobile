import React from 'react'
import { SafeAreaView, StyleSheet, TextInput, View } from 'react-native';

export default function SearchBar() {
    return (
        <View>
          <TextInput style={style.input} placeholder="Search" accessibilityRole="search">  
          </TextInput>
        </View>
    )
}
 const style = StyleSheet.create ({
    input: {
        alignSelf: 'center',
        textAlign: 'center',
        height: 40,
        width: 350,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 20,
      },
 })