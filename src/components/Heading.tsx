import styled from "styled-components/native";

interface ITextProps {
    theme: {
        color?: string;
        fontSize?: number | string;
        fontWeight?: string;
        textAlign?: string;
        lineHeight?: number;
        letterSpacing?: number;
        textTransform?: string;
        margin?: string;
        marginTop?: number;
        marginBottom?: number;
        marginLeft?: number;
        marginRight?: number;
        padding?: number;
        paddingTop?: number;
        paddingBottom?: number;
        paddingLeft?: number;
        paddingRight?: number;

    }


}


export const Heading1 = styled.Text<ITextProps>`
    font-size: ${props => props.theme.fontSize || 32}px;
    font-weight: ${props => props.theme.fontWeight || 'bold'};
    color: ${props => props.theme.color || '#000'};
    text-align: ${props => props.theme.textAlign || 'left'};
    line-height: ${props => props.theme.lineHeight || 32}px;
    letter-spacing: ${props => props.theme.letterSpacing || 0}px;
    text-transform: ${props => props.theme.textTransform || 'none'};
    margin: ${props => props.theme.margin || '0'}px;
    margin-top: ${props => props.theme.marginTop || 0}px;
    margin-bottom: ${props => props.theme.marginBottom || 0}px;
    margin-left: ${props => props.theme.marginLeft || 0}px;
    margin-right: ${props => props.theme.marginRight || 0}px;
    padding: ${props => props.theme.padding || 0}px;
    padding-top: ${props => props.theme.paddingTop || 0}px;
    padding-bottom: ${props => props.theme.paddingBottom || 0}px;
    padding-left: ${props => props.theme.paddingLeft || 0}px;
    padding-right: ${props => props.theme.paddingRight || 0}px;

  


`

export const Heading2 = styled.Text<ITextProps>`
    font-size: ${props => props.theme.fontSize || 24}px;
    font-weight: ${props => props.theme.fontWeight || 'bold'};
    color: ${props => props.theme.color || '#000'};
    text-align: ${props => props.theme.textAlign || 'left'};
    line-height: ${props => props.theme.lineHeight || 24}px;
    letter-spacing: ${props => props.theme.letterSpacing || 0}px;
    text-transform: ${props => props.theme.textTransform || 'none'};
    margin: ${props => props.theme.margin || '0'}px;
    margin-top: ${props => props.theme.marginTop || 0}px;
    margin-bottom: ${props => props.theme.marginBottom || 0}px;
    margin-left: ${props => props.theme.marginLeft || 0}px;
    margin-right: ${props => props.theme.marginRight || 0}px;
    padding: ${props => props.theme.padding || 0}px;
    padding-top: ${props => props.theme.paddingTop || 0}px;
    padding-bottom: ${props => props.theme.paddingBottom || 0}px;
    padding-left: ${props => props.theme.paddingLeft || 0}px;
    padding-right: ${props => props.theme.paddingRight || 0}px;
  
`

export const Heading3 = styled.Text<ITextProps>`
    font-size: ${props => props.theme.fontSize || 20}px;
    font-weight: ${props => props.theme.fontWeight || 'bold'};
    color: ${props => props.theme.color || '#000'};
    text-align: ${props => props.theme.textAlign || 'left'};
    line-height: ${props => props.theme.lineHeight || 20}px;
    letter-spacing: ${props => props.theme.letterSpacing || 0}px;
    text-transform: ${props => props.theme.textTransform || 'none'};
    margin: ${props => props.theme.margin || '0'}px;
    margin-top: ${props => props.theme.marginTop || 0}px;
    margin-bottom: ${props => props.theme.marginBottom || 0}px;
    margin-left: ${props => props.theme.marginLeft || 0}px;
    margin-right: ${props => props.theme.marginRight || 0}px;
    padding: ${props => props.theme.padding || 0}px;
    padding-top: ${props => props.theme.paddingTop || 0}px;
    padding-bottom: ${props => props.theme.paddingBottom || 0}px;
    padding-left: ${props => props.theme.paddingLeft || 0}px;
    padding-right: ${props => props.theme.paddingRight || 0}px;
  

`

export const Heading4 = styled.Text<ITextProps>`
    font-size: ${props => props.theme.fontSize || 16}px;
    font-weight: ${props => props.theme.fontWeight || 'bold'};
    color: ${props => props.theme.color || '#000'};
    text-align: ${props => props.theme.textAlign || 'left'};
    line-height: ${props => props.theme.lineHeight || 16}px;
    letter-spacing: ${props => props.theme.letterSpacing || 0}px;
    text-transform: ${props => props.theme.textTransform || 'none'};
    margin: ${props => props.theme.margin || '0'}px;
    margin-top: ${props => props.theme.marginTop || 0}px;
    margin-bottom: ${props => props.theme.marginBottom || 0}px;
    margin-left: ${props => props.theme.marginLeft || 0}px;
    margin-right: ${props => props.theme.marginRight || 0}px;
    padding: ${props => props.theme.padding || 0}px;
    padding-top: ${props => props.theme.paddingTop || 0}px;
    padding-bottom: ${props => props.theme.paddingBottom || 0}px;
    padding-left: ${props => props.theme.paddingLeft || 0}px;
    padding-right: ${props => props.theme.paddingRight || 0}px;
  

`

export const Heading5 = styled.Text<ITextProps>`
    font-size: ${props => props.theme.fontSize || 14}px;
    font-weight: ${props => props.theme.fontWeight || 'bold'};
    color: ${props => props.theme.color || '#000'};
    text-align: ${props => props.theme.textAlign || 'left'};
    line-height: ${props => props.theme.lineHeight || 14}px;
    letter-spacing: ${props => props.theme.letterSpacing || 0}px;
    text-transform: ${props => props.theme.textTransform || 'none'};
    margin: ${props => props.theme.margin || '0'}px;
    margin-top: ${props => props.theme.marginTop || 0}px;
    margin-bottom: ${props => props.theme.marginBottom || 0}px;
    margin-left: ${props => props.theme.marginLeft || 0}px;
    margin-right: ${props => props.theme.marginRight || 0}px;
    padding: ${props => props.theme.padding || 0}px;
    padding-top: ${props => props.theme.paddingTop || 0}px;
    padding-bottom: ${props => props.theme.paddingBottom || 0}px;
    padding-left: ${props => props.theme.paddingLeft || 0}px;
    padding-right: ${props => props.theme.paddingRight || 0}px;
  

`

export const Heading6 = styled.Text<ITextProps>`
    font-size: ${props => props.theme.fontSize || 12}px;
    font-weight: ${props => props.theme.fontWeight || 'bold'};
    color: ${props => props.theme.color || '#000'};
    text-align: ${props => props.theme.textAlign || 'left'};
    line-height: ${props => props.theme.lineHeight || 12}px;
    letter-spacing: ${props => props.theme.letterSpacing || 0}px;
    text-transform: ${props => props.theme.textTransform || 'none'};
    margin: ${props => props.theme.margin || '0'}px;
    margin-top: ${props => props.theme.marginTop || 0}px;
    margin-bottom: ${props => props.theme.marginBottom || 0}px;
    margin-left: ${props => props.theme.marginLeft || 0}px;
    margin-right: ${props => props.theme.marginRight || 0}px;
    padding: ${props => props.theme.padding || 0}px;
    padding-top: ${props => props.theme.paddingTop || 0}px;
    padding-bottom: ${props => props.theme.paddingBottom || 0}px;
    padding-left: ${props => props.theme.paddingLeft || 0}px;
    padding-right: ${props => props.theme.paddingRight || 0}px;
  

`
export const Paragraph = styled.Text<ITextProps>`
    font-size: ${props => props.theme.fontSize || 14}px;
    font-weight: ${props => props.theme.fontWeight || 'normal'};
    color: ${props => props.theme.color || '#000'};
    text-align: ${props => props.theme.textAlign || 'left'};
    line-height: ${props => props.theme.lineHeight || 20}px;
    letter-spacing: ${props => props.theme.letterSpacing || 0}px;
    text-transform: ${props => props.theme.textTransform || 'none'};
    margin: ${props => props.theme.margin || '0'}px;
    margin-top: ${props => props.theme.marginTop || 0}px;
    margin-bottom: ${props => props.theme.marginBottom || 0}px;
    margin-left: ${props => props.theme.marginLeft || 0}px;
    margin-right: ${props => props.theme.marginRight || 0}px;
    padding: ${props => props.theme.padding || 0}px;
    padding-top: ${props => props.theme.paddingTop || 0}px;
    padding-bottom: ${props => props.theme.paddingBottom || 0}px;
    padding-left: ${props => props.theme.paddingLeft || 0}px;
    padding-right: ${props => props.theme.paddingRight || 0}px;

`

