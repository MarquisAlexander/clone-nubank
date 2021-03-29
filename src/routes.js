import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from './pages/Home';
import Profile from './pages/Profile';
import MyKeysPix from './pages/Profile/MyKeysPix';

const Stack = createStackNavigator();

function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                mode="modal"
                screenOptions={{
                    headerShown: false,
                }}
            >
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Profile" component={Profile} />
                <Stack.Screen name="MyKeysPix" component={MyKeysPix} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes;