import { useNavigation } from '@react-navigation/core';
import React from 'react'
import { View, SafeAreaView, TextInput, StyleSheet, Text, Image, TouchableOpacity } from 'react-native'

export default function Login() {
  
  const navigation = useNavigation();

    return (
        <SafeAreaView style={{ flex: 1 }} backgroundColor="#60a3bc">
        <View style={styles.container}>
            <Image source={require('../images/logo.png')} style={styles.image}></Image>
            <TextInput style={styles.input} autoCapitalize="none" textContentType="emailAddress" placeholder="Email"></TextInput>
            <TextInput style={styles.input} autoCapitalize="none" textContentType="password" placeholder="Password"></TextInput>
            <TouchableOpacity onPress={() => {
              navigation.navigate("Index")}}>
              <Text style={styles.input}>Log in</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => {
                navigation.navigate("Signup")
            }}><Text style={styles.button}>If you don't have an account, please sign up here</Text></TouchableOpacity>
        </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
      },
      image: {
          height: 200,
          width: 240,
          margin: 10,

      },
    input: {
      alignSelf: 'center',
      textAlign: 'center',
      height: 40,
      width: 200,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      borderRadius: 20,
    },
    button: {
      alignItems: 'center',
      margin: 10,
      fontSize: 12,
    }
  });
