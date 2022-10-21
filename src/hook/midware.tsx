import { useNavigation } from '@react-navigation/native'
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { View, Dimensions } from 'react-native'
import { colors } from '../assets/theme'
import { Container } from '../components/Container'
import api from '../config/api'
import useToken from './useToken'
import LottieView from 'lottie-react-native';

export default function Middleware() {
    const navigation = useNavigation()
    const animation = useRef(null);
    const [loading, setLoading] = useState(false)
    useLayoutEffect(() => {

        useToken().then((token) => {
            if (!token) {
                navigation.navigate('login' as never)
            } else {
                api.post('/verify', {
                    token: token
                }).then((response) => {
                    if (response.data.status == 401 || response.data.status == 403 || response.data.status == 404) {
                        navigation.navigate('login' as never)
                    } else {
                        api.defaults.headers.common['Authorization'] = `${token}`
                        navigation.navigate('dashboard' as never)

                    }
                }).catch(() => {

                    navigation.navigate('login' as never)
                })
            }
        }).catch(() => {
            navigation.navigate('login' as never)
        })

    }, [])

    return (
        <Container>
            <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: 'auto', minHeight: Dimensions.get('screen').height / 1.5 }}>
                <LottieView
                    autoPlay
                    ref={animation}
                    style={{
                        width: 200,
                        height: 200,

                    }}

                    source={require('../assets/middware.json')}
                />

            </View>
        </Container>
    )
}


