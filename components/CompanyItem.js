import React from 'react'
import { View, Text, Image, ScrollView, StyleSheet, ImageBackground } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function CompanyItem() {

    const companies = [
          {
            companyName: "Roofing company",
            address: "123 Main Str",
            phoneNumber: "123456789",
            service: "Roofing",

          },

    ]

    return (
        <SafeAreaView>
            <ScrollView>
        <View>
            <Text>Company name: {companies[0].companyName}</Text>
            <Text>Company Address: {companies[0].address}</Text>
            <Text>Company Phone Number: {companies[0].phoneNumber}</Text>
            <Text>Provided services: {companies[0].service}</Text>
        </View>
            <View style={styles.image}>
                <Image source={require("../images/random.png")}></Image>
            </View>
            </ScrollView>
        </SafeAreaView>

    )
    }

    const styles = StyleSheet.create({
    image: {
        alignItems: 'center',
        height: 200,
        marginBottom: 20

    },
})

    
