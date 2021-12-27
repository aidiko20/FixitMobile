import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { View, Text, SafeAreaView, Image, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native'

export default function Signup() {

  const navigation = useNavigation();
    return (
        <SafeAreaView style={{ flex: 1 }} backgroundColor="#60a3bc">
          <View style={styles.container}>
              <ScrollView>
            <Image source={require('../images/logo.png')} style={styles.image}></Image>
            <TextInput style={styles.input} autoCapitalize="none" textContentType="emailAddress" placeholder="Email"></TextInput>
            <TextInput style={styles.input} autoCapitalize="none" textContentType="password" placeholder="Password"></TextInput>
            <TextInput style={styles.input} textContentType="organizationName" placeholder="Company Name"></TextInput>
            <TextInput style={styles.input} textContentType="streetAddressLine1" placeholder="Address"></TextInput>
            <TextInput style={styles.input} textContentType="addressCity" placeholder="City"></TextInput>
            <TextInput style={styles.input} textContentType="addressState" placeholder="State"></TextInput>
            <TextInput style={styles.input} textContentType="postalCode" placeholder="Zip Code"></TextInput>
            <TextInput style={styles.input} textContentType="telephoneNumber" placeholder="Phone Number"></TextInput>

            <TouchableOpacity onPress={() => {
                navigation.navigate("Main")
            }}><Text style={styles.input}>Sign Up</Text></TouchableOpacity> 
            <TouchableOpacity onPress={() => {
                navigation.navigate("Login")
            }}><Text style={styles.button}>If you have an account, please log in here</Text></TouchableOpacity>
              </ScrollView>
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
          alignSelf: 'center',
          height: 200,
          width: 240,
          margin: 10,

      },
    input: {
      alignSelf: 'center',
      textAlign: 'center',
      height: 40,
      width: 200,
      margin: 8,
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
