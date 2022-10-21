import { useNavigation } from '@react-navigation/native'
import React from 'react'
import api from '../config/api'
import useToken from './useToken'

export default function usePage(page: string) {
  const navigation = useNavigation()
  useToken().then((token) => {
    if (!token) {
      navigation.navigate('Login' as never)
    } else {
      api.post('/verify', {
        token: token
      }).then((response) => {
        if (response.data.status == 401 || response.data.status == 403 || response.data.status == 404) {
          navigation.navigate('Login' as never)
        } else {
          navigation.navigate(page as never)
        }
      }).catch(() => {
        navigation.navigate('Login' as never)
      })
    }
  }).catch(() => {
    navigation.navigate('Login' as never)
  })

  return(
    <></>
  )
}


