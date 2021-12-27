import React from 'react'
import { View, Text } from 'react-native';
import SearchBar from '../components/SearchBar';

export default function Browse() {
    return (
        <View>
             <SearchBar />
            <Text>This is browse page</Text>
            <Text>Here is categories of services provided: </Text>
        </View>
    )
}
