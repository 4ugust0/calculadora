import styled from "styled-components";

export const Container = styled.section`
    padding: 1rem 2%;
`

export const Buttons = styled.button<{width: string, height: string}>`
    margin-top: 1rem;
    width: ${props => props.width};
    height: ${props => props.height};
    padding: 1rem;
    box-shadow: ${({theme: {boxShadow}}) => boxShadow.main};
    border-radius: ${({theme: {borderRadius}}) => borderRadius.main};
    background-color: ${({theme: {colors}}) => colors.colorBgButtons};
    border: 0;

    cursor: pointer;


    &:focus{
        border: 2px solid ${({theme: {focusBorder}}) => focusBorder.buttons};
    }
`