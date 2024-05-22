import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Introduction from '../../components/Introduction/introduction';
import SingInOrUp from '../../components/SingInOrUp/signInOrUp.Controller'
import Login from '../../components/Login/login.controller'
import BottomNavigation from './bottomNavigation'
import SignUpPhone from '../../components/SignUpPhone/signUpPhone'

import Splash from '../../components/Splash/splash.controller'

import SignUpEmail from '../../components/SignUpEmail/signUpEmail.Controller'
import Const from '../../const'

const Stack = createStackNavigator();

// locale language
import { setI18nConfig, translate } from '../../translations';
import '/src/translations/i18n';
import * as RNLocalize from 'react-native-localize';
const useForceUpdate = () => useState()[1];

export default function screensNavigation() {
    const forceUpdate = useForceUpdate();

    useEffect(() => {
        setI18nConfig()
    }, [])

    useEffect(() => {
        RNLocalize.addEventListener('change', () => handleLocalizationChange());
        return () => {
            RNLocalize.removeEventListener(
                'change',
                () => handleLocalizationChange(),
            );
        }
    })

    const handleLocalizationChange = () => {
        setI18nConfig();
        forceUpdate();
    };

    return (
        <>
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
            >

                <Stack.Screen
                    name={Const.NameScreens.Splash}
                    component={Splash}
                />
                <Stack.Screen
                    name={Const.NameScreens.SingInOrUp}
                    component={SingInOrUp}
                />
                <Stack.Screen
                    name={Const.NameScreens.SignUpEmail}
                    component={SignUpEmail}
                />
                <Stack.Screen
                    name={Const.NameScreens.Login}
                    component={Login}
                />
            </Stack.Navigator>
        </NavigationContainer>
        </>
    );
}
