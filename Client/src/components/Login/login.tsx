import React, { useRef, useState } from 'react'
import {
    Text, View, ScrollView, TextInput,
    TouchableOpacity, StyleSheet, TouchableWithoutFeedback
} from 'react-native'

import { withTranslation } from 'react-i18next';
import Themes from '../../themes'
import ButtonBack from './../UI/buttonBack'
import Const from '../../const'
import SpinnerLoading from './../UI/spinnerLoading'
import AlertModal from './../Model/alertModal'
import Icon from './../UI/icon'
function Login(props) {
    const { t, onPressLogin, onPressLoginNumberPhone, onPressLoginFacebookAPI,
        isLoading, isShowModalFail, message, onPressButtonModal, onBack, onPressForgotPassword } = props;
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isSecureTextEntry, setIsSecureTextEntry] = useState(true)
    const refPassword = useRef()

    let isVisible = true

    const onLogin = () => {
        onPressLogin && onPressLogin(email, password)
    }

    const onLoginFacebook = () => {
        onPressLoginFacebookAPI && onPressLoginFacebookAPI()
    }

    const onLoginNumberPhone = () => {
        onPressLoginNumberPhone && onPressLoginNumberPhone()
    }

    const onSubmitEmail = () => {
        refPassword.current.focus()
    }

    if (email !== "" && password !== "") {
        isVisible = false
    }

    const onPressIcon = () => {
        setIsSecureTextEntry(!isSecureTextEntry)
    }

    return (
        <>
        <ScrollView>
            <SpinnerLoading isLoading={isLoading}
                source={require('../../assets/lotties/9844-loading-40-paperplane.json')}
            />
            <ButtonBack
                onPress={() => onBack && onBack()}
            />
            <Text style={styles.txtTitle}> {t('Sign In')} </Text>
            <TextInput style={styles.inpEmail}
                onSubmitEditing={() => onSubmitEmail()}
                placeholder={'Email'}
                onChangeText={(email) => setEmail(email)}
                keyboardType={'email-address'} />
            <View
                style={styles.inpPassword}>
                <TextInput
                    style={{ width: '90%', fontFamily: Themes.FontFamily.FontBoldSemi }}
                    onChangeText={(password) => setPassword(password)}
                    placeholder={t('Password')}
                    onSubmitEditing={() => !isVisible && onLogin()}
                    maxLength={Const.Common.MAX_LEN_PASSWORD}
                    secureTextEntry={isSecureTextEntry}
                    ref={refPassword}
                />
                <TouchableOpacity
                    onPress={() => onPressIcon()}>
                    {isSecureTextEntry ? <Icon
                        color={'black'}
                        size={23}
                        name={'eye-off-outline'}
                    /> : <Icon
                            color={'black'}
                            size={23}
                            name={'eye-outline'}
                        />}
                </TouchableOpacity>

            </View>
            <View style={{
                marginBottom: Themes.Const.MARGIN_TOP_V3,
                marginHorizontal: Themes.Const.MARGIN_HORIZONTAL
            }}>
                <TouchableOpacity style={styles.btnForgetPassword}
                    onPress={() => onPressForgotPassword && onPressForgotPassword()}
                >
                    <Text style={styles.txtForgetPassword}>{t("Forgot Password")} ?</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity
                disabled={isVisible}
                style={[styles2.btnSignInEmail, !isVisible ? { backgroundColor: Themes.Colors.PINK } : { backgroundColor: 'gray' }]}
                onPress={() => onLogin()}
            >
                <Text style={styles2.txtLoginEmail}>{t('Log In')}</Text>
            </TouchableOpacity>
            <Text style={styles.txtOr}> {t('OR')} </Text>
            {/* <TouchableOpacity style={styles.btnSignInPhone}
                onPress={() => onLoginNumberPhone()}
            >
                <Text style={styles.txtPhone}>{t('Login with phone number')}</Text>
            </TouchableOpacity> */}

            <AlertModal
                visible={isShowModalFail}
                urlImage={require('../../assets/images/warning.png')}
                title={"Error"}
                detail={message}
                textButton={"Try Again"}
                colorButton={"#FF0000"}
                onPressButton={onPressButtonModal}
            />
        </ScrollView>
        </>
    );
}


const styles = StyleSheet.create({
    btnForgetPassword: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: Themes.Const.MARGIN_TOP_V3,
        width: 150,
        marginTop: 10,
        position: 'absolute',
        right: 0
    },
    txtForgetPassword: {
        color: Themes.Colors.GRAY_BRIGHT_I,
        fontSize: 14,
        fontFamily: Themes.FontFamily.FontThinDefault
    },
    txtTitle: {
        ...Themes.Styles.Title
    },
    inpEmail: {
        ...Themes.Styles.TextInput,
        marginTop: Themes.Const.MARGIN_TOP_V3,
    },
    inpPassword: {
        ...Themes.Styles.TextInput,
        marginTop: Themes.Const.MARGIN_TOP,
        flexDirection: 'row',
        alignItems: 'center'
    },
  
    txtOr: {
        alignSelf: 'center',
        marginTop: Themes.Const.MARGIN_V1,
        marginBottom: Themes.Const.MARGIN_V1
    },
   

})
const styles2 = {
    btnSignInEmail: {
        ...Themes.Styles.Button,
    },
    txtLoginEmail: {
        ...Themes.Styles.TextButton
    },
    btnSignInPhone: {
        ...Themes.Styles.ButtonBottom,
        width: 210,
    },
    txtPhone: {
        ...Themes.Styles.TextButtonBottom
    }
}
export default withTranslation()(Login)
