import React, { useState } from 'react'
import Login from './login'
import Const from '../../const'
import { useDispatch, useSelector } from 'react-redux'
import { pushDataLoginFB, insertDataLoginEmail } from '../../slice/loginSlice'
import { pushDataAgeAndGender } from '../../slice/preferenceSlice'
import Api from '../../api'
import {jwtDecode} from "jwt-decode";
import { saveStorage, saveDataUserStorage } from '../../configs/AsyncStorage'

/**
 * UNIT TEST
 * no input : FInish
 * no input email: FInish
 * no input password : finish
 */


let minAgeInit = 18
let maxAgeInit = 60
let maxDistanceInit = 255
let minDistanceInit = 0
export default function LoginController(props) {
    const { navigation } = props
    const [isLoading, setIsLoading] = useState(false)
    const [isShowModalFail, setIsShowModalFail] = useState(false)
    const [message, setMessage] = useState('')

    const dispatch = useDispatch()

    /**
     * email, birthday, gender, picture, religious, work,
     *  job, education, politics, hight level .., ethnicity, kids, family plan, 
     */
   

    const saveGender = (gender) => {
        let genderOpposite
        if (gender === 'male') {
            genderOpposite = 'female'
        }
        else {
            genderOpposite = 'male'
        }
        const data = {
            gender: genderOpposite,
            minAge: minAgeInit,
            maxAge: maxAgeInit,
            minDistance: minDistanceInit,
            maxDistance: maxDistanceInit
        }
        saveDataUserStorage(Const.StorageKey.CODE_PREFERENCES, [genderOpposite, minAgeInit, maxAgeInit, minDistanceInit, maxDistanceInit])
        dispatch(pushDataAgeAndGender(data))
    }

    const switchNavigationScreen = (json) => {
        const { email, dateOfBirth, gender, photoUrl, location, latitude, longitude } = json
        if (email === null) {
            navigation.navigate(Const.NameScreens.EmailAddress)
        }
        else if (dateOfBirth === null) {
            navigation.navigate(Const.NameScreens.Birthday)
        }
        else if (gender === null) {
            navigation.navigate(Const.NameScreens.Gender)
        }
        else if (photoUrl === null) {
            navigation.navigate(Const.NameScreens.Picture)
        }
        else if (location === null || (latitude === 0.0 || longitude === 0.0)) {
            navigation.replace(Const.NameScreens.EditLocation, { isLogin: true })
        }
        else {
            navigation.navigate(Const.NameScreens.BottomNavigation)
        }
    }

    const handleBeforeLogin = (jwtToken, id, gender) => {
        const dataToken = jwtDecode(jwtToken)
        saveDataUserStorage(Const.StorageKey.CODE_LOGIN_TOKEN, [jwtToken, id, dataToken.exp])
        saveGender(gender)
    }

    const requestApiSuccess = (json) => {
        if (json.status === "Active") {
            const { jwtToken, id, dateOfBirth, gender, name } = json
            handleBeforeLogin(jwtToken, id, gender)
            dispatch(insertDataLoginEmail(json))
            switchNavigationScreen(json)
        } else {
            setIsShowModalFail(true)
            json.errors !== undefined ? setMessage(json.errors.email[0]) : setMessage(json.message)
        }

    }

    const requestApiFail = (error) => {
        setIsShowModalFail(true)
        setMessage("Network connect fail")
    }

    const onPressLogin = (email, password) => {
        setIsLoading(true)
        Api.RequestApi.postRequestApi(Api.Url.URL_SIGN_IN_EMAIL, {
            email: email.toLowerCase(),
            password: password
        })
            .then((response) => response.json())
            .then((json) => requestApiSuccess(json))
            .catch((error) => requestApiFail(error))
            .finally(() => setIsLoading(false));
        // loginSuccessWithEmail(email)
        // navigation.navigate(Const.NameScreens.BottomNavigation)

    }

    const onPressLoginNumberPhone = () => {
        navigation.navigate(Const.NameScreens.CodePhone)
    }

  
    const onPressButtonModal = () => {
        setIsShowModalFail(false)
    }

    const onBack = () => {
        if (navigation.canGoBack()) {
            navigation.goBack()
        } else {
            navigation.replace(Const.NameScreens.SingInOrUp)
        }
    }

    const onPressForgotPassword = () => {
        navigation.navigate(Const.NameScreens.ForgetPassword)
    }

    return (
        <Login
            isLoading={isLoading}
            onPressLogin={onPressLogin}
            onPressLoginNumberPhone={onPressLoginNumberPhone}
            isShowModalFail={isShowModalFail}
            message={message}
            onBack={onBack}
            onPressButtonModal={onPressButtonModal}
            onPressForgotPassword={onPressForgotPassword}
        />
    )
}
