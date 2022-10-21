import { View, Text, ActivityIndicator, ScrollView, RefreshControl } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Container, Content } from '../../components/Container'
import { Heading1, Heading2, Paragraph } from '../../components/Heading'
import Card, { CardBox } from '../../components/Card'
import { colors } from '../../assets/theme'
import api from '../../config/api'



import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { produto } from '../../interfaces/iProdutos'
import currency  from 'currency-formatter'
import { useNavigation } from '@react-navigation/native'

export default function Produtos() {
  const [produtos, setProdutos] = useState<produto[]>([])
  const [loading, setLoading] = useState(true)

  const navigation = useNavigation()

  useEffect(() => {
    setLoading(true)
    api.get('/produtos').then(response => {
      setProdutos(response.data)
      setLoading(false)
    }).catch(error => {
      setLoading(false)
      console.log(error.message)
    })
  }, [])

  async function atualizar() {
    setLoading(true)
    await api.get('/produtos').then(response => {
      setProdutos(response.data)
      setLoading(false)
    }).catch(error => {
      setLoading(false)
      console.log(error.message)
    })
  }
  

  return (
    <Container>
      <Content>
        <Heading1 theme={{ color: colors.white, marginBottom: 20, }}>Produtos</Heading1>
        <ScrollView refreshControl={
          <RefreshControl
            tintColor={colors.white}
            refreshing={loading}
            onRefresh={atualizar}
          />}>

          {produtos.map((venda, index) => (
            <View style={{ marginTop: 10, marginBottom: 10 }} key={index}>
              <CardBox onPress={()=>{
                navigation.navigate('produto' as never, {id: venda.id} as never)
              }}>
                <View>
                  <Heading2 theme={{ textTransform: 'capitalize', fontsize: 12, color: colors.grayLight }}>{venda.nome}</Heading2>

                  <View style={{ display: 'flex', flexDirection: 'row' }}>
                    <Paragraph theme={{
                      fontSize: 14,
                      color: colors.grayDark,

                    }}>
                      {venda.estoque !== undefined ? `${venda.estoque} em estoque no total.` : ``}
                    </Paragraph>
                    <Paragraph theme={{
                      fontSize: 14,
                      color: colors.grayDark,
                      marginLeft: 15
                    }}>
                      {currency.format(venda.custo, { locale: 'pt-BR' })}

                    </Paragraph>

                    <Paragraph theme={{
                      fontSize: 14,
                      color: venda.ativo ? colors.greenDark : colors.redDark,
                      marginLeft: 15
                    }}>
                      {venda.ativo ? `Ativo` : `Inativo`}

                    </Paragraph>
                  </View>

                  <View style={{ marginTop: 15, display: 'flex', flexDirection: 'row' }}>
                    <Heading2 theme={{
                      color: colors.white,
                      fontWeight: 'bold',
                    }}>Preço:</Heading2>
                    <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-end' }}>
                      <Heading2 theme={{
                        marginLeft: 5,
                        color: colors.grayLight,
                        fontWeight: 'light',
                      }}>
                        {currency.format(venda.venda, { locale: 'pt-BR' })}
                      </Heading2>
                      <Paragraph theme={{
                        marginLeft: 5,
                        color: colors.grayDark,
                      }}>
                        {venda.embalagem}
                      </Paragraph>
                    </View>
                  </View>

                </View>


                <View>
                  <FontAwesome5 name="chevron-right" color={colors.greenDark} size={23} />
                </View>

              </CardBox>
            </View>
          ))}

          {loading && <ActivityIndicator size='large' color={colors.purpleLight} />}
        </ScrollView>
      </Content>
    </Container>
  )
}