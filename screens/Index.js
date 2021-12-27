import React from 'react'
import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SearchBar from '../components/SearchBar';
import CompanyList from '../components/CompanyList';
import Browse from './Browse';
import Account from './Account';
import Main from './Main';

const Tab = createBottomTabNavigator();

export default function Index() {

    return (

            <Tab.Navigator>
                <Tab.Screen name="Main" component={Main} />
                <Tab.Screen name="Browse" component={Browse} />
                <Tab.Screen name="Account" component={Account} />
            </Tab.Navigator>


    )
}
