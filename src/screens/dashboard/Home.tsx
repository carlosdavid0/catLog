import { View, Text, Button, BackHandler } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Container, Content } from '../../components/Container'
import { Heading1, Heading2 } from '../../components/Heading'
import { colors } from '../../assets/theme'
import { StatusBar } from 'expo-status-bar'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native'
import api from '../../config/api'
import notification from '../../components/Notification'
import { iUserDTO } from '../../interfaces/iUsuarios'

export default function Home() {
  const navigation = useNavigation()
  const [user, setUser] = useState<iUserDTO>()

  BackHandler.addEventListener('hardwareBackPress', () => {
    BackHandler.exitApp()

    return true
  })


  useEffect(() => {
    api.get('/user').then(response => {
      setUser(response.data)
    }).catch(error => {
      navigation.navigate('Login' as never)
    })
  }, [])


  return (
    <Container>
      <StatusBar animated style='inverted' />
      <Content>
        <Heading1 theme={{ color: colors.grayLight, fontWeight: 'light' }}>Olá,</Heading1>
        <Heading1 theme={{ color: colors.light }}>{user?.name}</Heading1>
      </Content>



    </Container>
  )
}