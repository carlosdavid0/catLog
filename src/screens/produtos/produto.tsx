import { View, Text } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Container, Content } from '../../components/Container'
import { Heading1, Paragraph } from '../../components/Heading'
import { colors } from '../../assets/theme'
import api from '../../config/api'

import { produto } from '../../interfaces/iProdutos'
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5'

import currency from 'currency-formatter'

export default function Produto() {
    const route = useRoute()
    const navigation = useNavigation()
    const [produtos, setProdutos] = useState<produto>()

    const { id } = route.params as unknown as { id: number }

    useEffect(() => {
        api.get(`/produtos/${id}`).then(response => {
            setProdutos(response.data)
        })
    }, [])



    return (
        <Container>
            <Content>
                <View style={{ display: 'flex', flexDirection: 'row' }}>
                    <FontAwesome5Icon name='arrow-left' size={20} onPress={() => navigation.goBack()} color={colors.grayLight} />
                    <Heading1 theme={{ marginLeft: 10, color: colors.light }}>
                        Produto
                    </Heading1>
                </View>

                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
                    <View style={{ display: 'flex', flexDirection: 'column' }}>
                        <Heading1 theme={{ color: colors.grayLight, fontSize: 18, fontWeight: '700' }}>Nome</Heading1>
                        <Paragraph theme={{ color: colors.grayLightest, fontWeigth: 'light' }}>{produtos?.nome}</Paragraph>

                    </View>
                </View>



                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
                    <View style={{ display: 'flex', flexDirection: 'column' }}>
                        <Heading1 theme={{ color: colors.grayLight, fontSize: 18, fontWeight: '700' }}>Emabalagem</Heading1>
                        <Paragraph theme={{ color: colors.grayLightest, fontWeigth: 'light' }}>
                            {produtos?.embalagem}
                        </Paragraph>
                    </View>

                    <View style={{ display: 'flex', flexDirection: 'column' }}>
                        <Heading1 theme={{ color: colors.grayLight, fontSize: 18, fontWeight: '700' }}>Custo</Heading1>
                        <Paragraph theme={{ color: colors.grayLightest, fontWeigth: 'light' }}>
                            {currency.format(produtos?.custo || 0, { code: 'BRL' })}
                        </Paragraph>
                    </View>

                    <View style={{ display: 'flex', flexDirection: 'column' }}>
                        <Heading1 theme={{ color: colors.grayLight, fontSize: 18, fontWeight: '700' }}>Venda</Heading1>
                        <Paragraph theme={{ color: colors.grayLightest, fontWeigth: 'light' }}>
                            {currency.format(produtos?.venda || 0, { code: 'BRL' })}
                        </Paragraph>
                    </View>


                </View>
              



            </Content>
        </Container>
    )
}