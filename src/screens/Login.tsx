import { View, Text, SafeAreaView, StyleSheet, TextInput, KeyboardAvoidingView, TouchableWithoutFeedback, Platform, Keyboard, TouchableOpacity, ActivityIndicator } from 'react-native'
import React, { useRef, useState, useEffect } from 'react'
import { colors } from '../assets/theme'
import { useNavigation } from '@react-navigation/native';
import api from '../config/api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import useToken from '../hook/useToken';
import notification from '../components/Notification';
export default function Login() {
    const navigation = useNavigation()
    const [login, setLogin] = useState('')
    const [loading, setLoading] = useState(false)
    const [password, setPassword] = useState('')

    useEffect(() => {
      



    }, [])

    function auth() {
        api.post('/login', {
            email: login,
            password: password
        }).then(async (response) => {
            api.defaults.headers.Authorization = `${response.data.token}`
            const token = response.data.token

            await AsyncStorage.setItem('@angelim/token', `${token}`)
            navigation.navigate('dashboard' as never)


        }).catch(() => {
           
        })
    }




    return (

        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <SafeAreaView style={style.container}>
                {loading ? <ActivityIndicator color={colors.purpleLight} /> : (
                    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>

                        <View >
                            <Text style={style.Heading}>Comercial Angelim</Text>
                        </View>



                        <View style={style.content}>
                            <View>
                                <Text style={style.subHeading}>Login</Text>
                                <TextInput style={style.input} placeholder="Digite seu email" placeholderTextColor={'#dddddd'} onChangeText={e => {
                                    setLogin(e)
                                }} />
                            </View>

                            <View>
                                <Text style={style.subHeading}>Senha</Text>
                                <TextInput style={style.input} secureTextEntry placeholder="Digite sua senha" placeholderTextColor={'#dddddd'} onChangeText={(e) => {
                                    setPassword(e)
                                }} />
                            </View>


                            <View>
                                <TouchableOpacity style={style.button}
                                    onPress={auth}>
                                    <Text style={style.buttonText}>Entrar</Text>
                                </TouchableOpacity>
                            </View>

                        </View>
                    </KeyboardAvoidingView>

                )}


            </SafeAreaView>
        </TouchableWithoutFeedback>




    )
}

//onPress={() => {
// 


const style = StyleSheet.create({
    container: {

        backgroundColor: colors.dark,
        flex: 1,
        justifyContent: 'center',

    },
    content: {
        marginHorizontal: 15,
        marginVertical: 20,

    },
    Heading: {
        textAlign: 'center',
        fontSize: 20,
        color: colors.white,
        fontWeight: 'bold',
    },
    subHeading: {
        fontSize: 15,
        color: colors.white,
        fontWeight: 'bold',
    },
    input: {
        borderBottomWidth: 1,
        color: colors.white,
        borderBottomColor: colors.white,
        height: 40,
        borderRadius: 5,
        marginVertical: 10,
        paddingHorizontal: 5,
    },
    button: {
        backgroundColor: colors.purpleDark,
        height: 40,
        borderRadius: 5,
        marginVertical: 10,
        paddingHorizontal: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: colors.white,
        fontWeight: 'bold',
    }

})