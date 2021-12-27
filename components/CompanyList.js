import React from 'react'
import { View, Text, ScrollView } from 'react-native';
import CompanyItem from './CompanyItem';

export default function CompanyList() {
    return (
        <ScrollView>
        <View>
            <CompanyItem />
        </View>
        </ScrollView>
    )
}
