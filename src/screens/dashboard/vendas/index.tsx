import { View, Text, ActivityIndicator, ScrollView, RefreshControl } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Container, Content } from '../../../components/Container'
import { Heading1, Heading2 } from '../../../components/Heading'
import Card from '../../../components/Card'
import { colors } from '../../../assets/theme'
import api from '../../../config/api'
import moment from 'moment'

import { IVendas } from '../../../interfaces/iVendas'
import { useNavigation } from '@react-navigation/native'


export default function Vendas() {
  const navigation = useNavigation()
  const [vendas, setVendas] = useState<IVendas[]>([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {

    setLoading(true)
    api.get('/vendas').then(response => {
      setVendas(response.data)

      setLoading(false)
    }).catch(error => {
      setLoading(false)
      console.log(error.message)
    })
  }, [])

  async function atualizar() {
    setLoading(true)
    await api.get('/vendas').then(response => {
      setVendas(response.data)
      setLoading(false)
    }).catch(error => {
      setLoading(false)
      console.log(error.message)
    })
  }


  return (
    <Container>
      <Content>
        <Heading1 theme={{ color: colors.white, marginBottom: 20, }}>Vendas</Heading1>
        <ScrollView refreshControl={
          <RefreshControl
            tintColor={colors.white}
            refreshing={loading}
            onRefresh={atualizar}
          />}>

          {vendas.map((venda, index) => (
            <View style={{ marginTop: 10, marginBottom: 10 }} key={venda.id}>
              <Card key={index} Client={venda?.nome_cliente} Date={venda.created_at} Payment={venda.forma_pagamento} Value={venda.total} status={venda.status} onPress={() => {
                navigation.navigate('venda' as never, { id: venda.id } as never)

              }} />
            </View>
          ))}
          {loading && <ActivityIndicator size='large' color={colors.purpleLight} />}
        </ScrollView>
      </Content>
    </Container>
  )
}