import styled from "styled-components";

export const Box = styled.div`
    width: 18.5rem;
    padding: 0.90rem;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);

    font-size: ${({theme: {fontSize}}) => fontSize.main};
    box-shadow: ${({theme: {boxShadow}}) => boxShadow.main};
    border-radius: ${({theme: {borderRadius}}) => borderRadius.main};
    background-color: ${({theme: {colors} }) => colors.colorBgCalculator };
`

export const ContainerButtons = styled.div`

    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

`

export const Display =  styled.div`
    width: 100%;
    height: 2.5rem;
    padding: 0.20rem;
    box-shadow: ${({theme: {boxShadow}}) => boxShadow.main};
    border-radius: ${({theme: {borderRadius}}) => borderRadius.main};
    background-color: ${({theme: {colors}}) => colors.colorDisplayNumber};
    color: #757474;
    text-align: right;
`