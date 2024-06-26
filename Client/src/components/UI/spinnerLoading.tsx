import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Spinner from 'react-native-loading-spinner-overlay';
import AnimLottieView from './animLottieView'
import Themes from '../../themes'

export default function spinnerLoading(props) {
    const { isLoading, source, style } = props
    return (
        <Spinner
            visible={isLoading}
            textContent={'Loading...'}
            textStyle={Themes.Styles.SpinnerTextStyle}
        >
            {/* {
                isType1 && <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <AnimLottieView
                        source={require('/src/assets/lotties/9844-loading-40-paperplane.json')} />
                </View> ||
                isType2 && <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <AnimLottieView
                        style={{ width: 100, height: 100 }}
                        source={require('/src/assets/lotties/8734-loading.json')} />
                </View>
            } */}
            <View style={styles.container}>
                <AnimLottieView
                    style={{ ...style }}
                    source={source} />
            </View>
        </Spinner>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, justifyContent: 'center', alignItems: 'center' 
    },
})
