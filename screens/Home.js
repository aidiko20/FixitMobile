import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { View, Text, SafeAreaView, TouchableOpacity, Image, StyleSheet } from 'react-native'


export default function Home() {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={{ flex: 1 }} backgroundColor="#60a3bc">
        <View style={{alignItems: "center"}}>
        <Image source={require('../images/logo.png')} style={styles.image}></Image>
            <TouchableOpacity onPress={() => {
                navigation.navigate("Login")
            }}>
                <Text style={styles.button}>Log In</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
                navigation.navigate("Signup")
            }}>
                <Text style={styles.button}>Sign Up</Text>
            </TouchableOpacity>
        </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    button: {
        alignSelf: 'center',
        textAlign: 'center',
        height: 40,
        width: 200,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 20,
      },
      image: {
        height: 200,
        width: 300,
        marginTop: 180,
        marginBottom: 20

    },
})


