
import React, { useEffect, useState } from 'react'
import { Container, Content } from '../../../components/Container'
import { Heading1, Heading2, Heading3, Heading4, Paragraph } from '../../../components/Heading'
import { useNavigation, useRoute } from '@react-navigation/native'
import api from '../../../config/api'
import { IVendas } from '../../../interfaces/iVendas'
import { Dimensions, FlatList, ScrollView, Text, TouchableOpacity, View, ActivityIndicator } from 'react-native'
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5'
import { colors } from '../../../assets/theme'
import currency from 'currency-formatter'
import { BackHandler } from 'react-native'

import moment from 'moment'

export default function Venda() {
    const route = useRoute()
    const navigation = useNavigation()
    const [venda, setVenda] = useState<IVendas>()

    useEffect(() => {
        const { id } = route.params as unknown as { id: number }

        api.get(`/vendas/${id}`).then(response => {
            setVenda(response.data)

        }).catch(error => {
            navigation.goBack()
        })

    }, [])

    BackHandler.addEventListener('hardwareBackPress', () => {
        navigation.goBack()

        return true
    })

    return (
        <Container>
            {venda ? (
                <Content>
                    <View style={{ display: 'flex', flexDirection: 'row' }}>
                        <FontAwesome5Icon name='arrow-left' size={20} onPress={() => navigation.goBack()} color={colors.grayLight} />
                        <Heading1 theme={{
                            marginLeft: 10,
                            color: colors.light
                        }}>Venda</Heading1>
                    </View>

                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
                        <View style={{ display: 'flex', flexDirection: 'column' }}>
                            <Heading1 theme={{ color: colors.grayLight, fontSize: 16, fontWeight: 'light' }}>Cliente</Heading1>
                            <View style={{
                                width: Dimensions.get('screen').width * 0.5,
                            }}>
                                <Heading2 theme={{ color: colors.light, fontSize: 16 }}>{venda?.nome_cliente}</Heading2>
                            </View>
                        </View>
                        <View style={{ display: 'flex', flexDirection: 'column' }}>
                            <Heading1 theme={{ color: colors.grayLight, fontSize: 16, fontWeight: 'light' }}>Data</Heading1>
                            <Heading1 theme={{ color: colors.light, fontSize: 16 }}>{moment(venda?.created_at).format('DD/MM/YYYY HH:mm')}</Heading1>

                        </View>
                    </View>

                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
                        <View style={{ display: 'flex', flexDirection: 'column' }}>
                            <Heading1 theme={{ color: colors.grayLight, fontSize: 16, fontWeight: 'light' }}>Forma de pagamento</Heading1>
                            <Heading1 theme={{ color: colors.light, fontSize: 16 }}>{venda?.forma_pagamento}</Heading1>
                        </View>
                        <View style={{ display: 'flex', flexDirection: 'column' }}>
                            <Heading1 theme={{ color: colors.grayLight, fontSize: 16, fontWeight: 'light' }}>Valor</Heading1>
                            <Heading1 theme={{ color: colors.light, fontSize: 16 }}>{currency.format(venda.total, {
                                locale: 'pt-BR',
                                decimal: ',',
                            })}</Heading1>


                        </View>
                    </View>

                    <View style={{ marginTop: 25 }}>
                        <Heading3 theme={{
                            color: colors.grayLight,

                        }}>Produtos</Heading3>
                        <FlatList
                            style={{ maxHeight: 170 }}
                            horizontal
                            showsVerticalScrollIndicator={false}
                            data={venda?.produtos}
                            initialNumToRender={3}
                            keyExtractor={(_, index) => `venda_${index}`}
                            showsHorizontalScrollIndicator={true}
                            ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
                            contentContainerStyle={{
                                display: 'flex',
                                height: 170,
                                flexDirection: 'row',
                                marginTop: 10,

                                justifyContent: 'space-between'
                            }} renderItem={(item) => {

                                return (
                                    <TouchableOpacity
                                        style={{ backgroundColor: colors.card, minWidth: Dimensions.get('window').width / 1.7, padding: 10, borderRadius: 8, display: 'flex', justifyContent: 'center' }}>

                                        <View style={{ maxWidth: Dimensions.get('window').width / 2 }}>
                                            <Heading2 theme={{
                                                color: colors.light,
                                                fontWeight: 'bold',
                                                fontSize: 10,
                                                marginBottom: 5,

                                            }}>#{item.item.codigo}</Heading2>
                                        </View>
                                        <View style={{ maxWidth: Dimensions.get('window').width / 2 }}>
                                            <Heading2 theme={{
                                                color: colors.light,
                                                fontWeight: 'bold',
                                                fontSize: 16,

                                            }}>{item.item.descricao}</Heading2>
                                        </View>

                                        <View style={{ maxWidth: Dimensions.get('window').width / 2, marginTop: 10 }}>
                                            <Heading4 theme={{
                                                fontWeight: 'light',
                                                color: colors.grayLight,
                                            }}>
                                                {currency.format(item.item.preco, { locale: 'pt-br' })} x {item.item.qtd} = {(item.item.preco * item.item.qtd).toLocaleString('pt-br', {
                                                    maximumFractionDigits: 2,
                                                    minimumFractionDigits: 2,
                                                    style: 'currency',
                                                    currency: 'BRL'

                                                })}
                                            </Heading4>
                                        </View>
                                    </TouchableOpacity>
                                )
                            }} />
                    </View>


                    <View style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', flexDirection: 'row', marginTop: 10 }}>
                        <TouchableOpacity disabled={venda.status !== 'pendente' ? true : false} style={{ minWidth: 130, backgroundColor: venda.status !== 'pendente' ? colors.redLighter : "#dc1226", padding: 15, borderRadius: 8, display: 'flex', alignItems: 'center' }}>
                            <FontAwesome5Icon name='times-circle' size={54} color={colors.light} />
                            <Paragraph theme={{
                                color: colors.light,
                            }}>
                                Rejeitar
                            </Paragraph>
                        </TouchableOpacity>

                        <TouchableOpacity disabled={venda.status !== 'pendente' ? true : false}  style={{ minWidth: 130, backgroundColor: venda.status !== 'pendente' ? colors.greenLight: colors.greenDark, padding: 15, borderRadius: 8, display: 'flex', alignItems: 'center' }}>
                            <FontAwesome5Icon name='check-circle' size={54} color={colors.light} />
                            <Paragraph theme={{
                                color: colors.light,
                            }}>
                                Aprovar
                            </Paragraph>
                        </TouchableOpacity>

                    </View>


                </Content>
            ) : (
                <View style={{ display: 'flex', justifyContent: 'center' }}>
                    <ActivityIndicator size={'large'} color={colors.purple} />
                </View>
            )}
        </Container>
    )
}


