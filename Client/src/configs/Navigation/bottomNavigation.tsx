import React, { useEffect } from 'react'
import 'react-native-gesture-handler';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import Icon from '../../components/UI/icon'
import Themes from '../../themes'
import Const from '../../const'
import { withTranslation } from 'react-i18next';
import { checkPermission, messageListener } from '../../configs/FirebaseMessage'
import { readStorage, saveStorage } from '../../configs/AsyncStorage'
import Api from '../../api'
// import { messageListener } from '/src/configs/FirebaseMessage'
import { useSelector } from 'react-redux'

const Tab = createMaterialBottomTabNavigator();
const theme = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
        ...DefaultTheme.colors,
        // primary: 'yellow',
        // accent: 'green',
    },
}

let token
function MyTabs(props) {
    const { t, navigation } = props
    const dataStore = useSelector(state => state.login)
    const getDataStore = () => {
        if (dataStore.length > 0) {
            const { jwtToken } = dataStore[0]
            token = jwtToken
        }
        else {
            return null // empty data
        }
    }

    const getDataOpenApp = (data) => {
        // console.log(`data456: ${data}`);
        // console.log(data.name)
        // const [name] = JSON.parse(data.body)
        // console.log(`name: ${name}`);
        if (data !== undefined) {
            // const data = {
            //     ...data.body
            // }
            // console.log(data.body.name)
            // console.log()
            navigation.navigate(Const.NameScreens.MatchTogether, { data: JSON.parse(data.body) })
            // const [name] = JSON.parse(data)
            // console.log(`name--------------: ${name}`);
        }
    }

    //TODO: update key + remove key
    const connectFirebaseMessages = (frmToken) => {
        checkPermission()
            .then(frmKey => {
                if (frmToken !== undefined) {
                    if (frmToken !== frmKey) {
                        console.log('update key')
                    }
                }
                else {
                    console.log('save frmKey')
                    const params = {
                        token: token,
                        tokenFcm: frmKey
                    }
                    Api.RequestApi.postFcmTokenApiRequest(params)
                        .then(res => {
                            saveStorage(Const.StorageKey.CODE_FRM_TOKEN, frmKey)
                        })
                        .catch(err => {
                            console.log(err)
                        })
                }
                messageListener(getDataOpenApp)
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {

        const getFcmToken = async () => {
            const fcmToken = await readStorage(Const.StorageKey.CODE_FRM_TOKEN)
            connectFirebaseMessages(fcmToken)
        }

        getDataStore()
        connectServerMess(token)
        getFcmToken()
    }, [])
    return (
        <PaperProvider theme={theme}>
            <Tab.Navigator
                initialRouteName={Const.NameScreens.Discover}
                activeColor={Themes.Colors.PINK_DARK}
                barStyle={{ backgroundColor: 'white' }}
            >
                <Tab.Screen
                    name={Const.NameScreens.Discover}
                    component={Discover}
                    options={{
                        tabBarLabel: t(Const.NameScreens.Discover),
                        tabBarIcon: ({ color }) => (
                            <Icon name="search-outline" color={color} size={26} />
                        ),
                    }}
                />
                <Tab.Screen
                    name={Const.NameScreens.Prospects}
                    component={Prospects}
                    options={{
                        tabBarLabel: t(Const.NameScreens.Prospects),
                        tabBarIcon: ({ color }) => (
                            <Icon name="heart-outline" color={color} size={26} />
                        ),
                    }}
                />
                {/* <Tab.Screen
                    name={Const.NameScreens.Dates}
                    component={Dates}
                    options={{
                        tabBarLabel: t(Const.NameScreens.Dates),
                        tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcons name="human-female-female" color={color} size={26} />
                        ),
                    }}
                /> */}
                <Tab.Screen
                    name={Const.NameScreens.Chats}
                    component={Chats}
                    options={{
                        tabBarLabel: t(Const.NameScreens.Chats),
                        tabBarIcon: ({ color }) => (
                            <Icon name="message-circle-outline" color={color} size={26} />
                        ),
                    }}
                />
                <Tab.Screen
                    name={Const.NameScreens.Settings}
                    component={Settings}
                    options={{
                        tabBarLabel: t(Const.NameScreens.Settings),
                        tabBarIcon: ({ color }) => (
                            <Icon name="settings-outline" color={color} size={26} />
                        ),
                    }}
                />
            </Tab.Navigator>
        </PaperProvider>

    );
}

export default withTranslation()(MyTabs)

function connectServerMess(token: any) {
    throw new Error('Function not implemented.');
}
