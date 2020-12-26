import React from 'react';
import { StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, Splash, Akun, Pesanan, Login, Register, Kiloan, VIP, Satuan, Karpet } from '../pages';
import { BottomNavigator } from '../components/';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
    return (
        <Tab.Navigator tabBar={props => <BottomNavigator {...props} />}>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Pesanan" component={Pesanan} />
            <Tab.Screen name="Akun" component={Akun} />
        </Tab.Navigator>
    );
};


const Router = () => {
    return (
        <Stack.Navigator initialRouteName="Splash">
            <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
            <Stack.Screen name="MainApp" component={MainApp} options={{ headerShown: false }} />
            <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
            <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
            <Stack.Screen name="Kiloan" component={Kiloan} options={{ headerShown: false }} />
            <Stack.Screen name="Satuan" component={Satuan} options={{ headerShown: false }} />
            <Stack.Screen name="VIP" component={VIP} options={{ headerShown: false }} />
            <Stack.Screen name="Karpet" component={Karpet} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
};

export default Router;

const styles = StyleSheet.create({});