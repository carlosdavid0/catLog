import React from 'react';
import styled from 'styled-components/native';
import { colors } from '../assets/theme';
import { getStatusBarHeight } from 'react-native-status-bar-height'


export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: ${colors.dark};
    padding-top: ${getStatusBarHeight()}px;
   `
export const Content = styled.View`
    flex: 1;
    padding-top: ${getStatusBarHeight()}px;
    padding-left: 15px;
    padding-right: 10px;
`