import { View, Text } from 'react-native'
import React from 'react'
import styled from 'styled-components/native'
import { Heading2, Heading5, Paragraph } from './Heading'
import { colors } from '../assets/theme'

interface CardProps {
    Client: string, Date: Date, Payment: string, Value: number, status: string; onPress?: () => void
}

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import moment from 'moment'

export default function Card(props: CardProps) {
    return (
        <CardBox onPress={props.onPress}>

            <CardContent>
                <View>
                    <Heading5 theme={{ color: colors.grayLighter, fontWeight: 'light', }}>Cliente:</Heading5>
                    <Heading2 theme={{ color: colors.white, marginTop: 10, marginBottom: 10 }}>{props.Client}</Heading2>
                </View>

                <View style={{ display: 'flex', flexDirection: 'row' }}>
                    <Paragraph theme={{
                        fontSize: 14,
                        color: colors.grayDark,

                    }}>
                        {moment(props.Date).format('DD/MM/YYYY [às] HH:mm')}
                    </Paragraph>
                    <Paragraph theme={{
                        fontSize: 14,
                        color: colors.grayDark,
                        marginLeft: 15
                    }}>
                        {props.Payment}
                    </Paragraph>
                    <Paragraph theme={{
                        fontSize: 14,
                        color: props.status === 'aprovado' && colors.green || props.status === 'pendente' && colors.yellow || props.status === 'cancelado' && colors.red || colors.grayDark,
                        marginLeft: 15
                    }}>
                        {props.status}
                    </Paragraph>
                </View>

                <View style={{ marginTop: 15, display: 'flex', flexDirection: 'row' }}>
                    <Heading2 theme={{
                        color: colors.white,
                        fontWeight: 'bold',
                    }}>Total:</Heading2>
                    <Heading2 theme={{
                        marginLeft: 5,
                        color: colors.grayLight,
                        fontWeight: 'light',
                    }}>
                        {props.Value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
                    </Heading2>
                </View>
            </CardContent>

            <View>
                <FontAwesome5 name="chevron-right" color={colors.greenDark} size={23} />
            </View>

        </CardBox>
    )
}



export const CardBox = styled.TouchableOpacity`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border-radius: 8px;
    background-color: ${colors.card};
    padding: 15px;
    min-height: 150px;
`


const CardContent = styled.View`
    

`

