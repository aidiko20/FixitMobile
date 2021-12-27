import React from 'react'
import { View, Text } from 'react-native'
import CompanyItem from '../components/CompanyItem';

export default function Main() {
    return (
        <View>
            <Text>This is main page</Text>
            <CompanyItem />
        </View>
    )
}
