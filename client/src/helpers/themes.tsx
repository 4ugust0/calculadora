import React from "react";
import { ThemeProvider } from "styled-components";

export const theme = {
    colors: {
        colorWhite: '#D9D9D9;',
        colorBgButtons: '#343a40;',
        colorBgCalculator: '#212529',
        colorDisplayNumber:'#f5f8fa'
    },
    fontSize: {
        main: '1.7rem'
    },
    focusBorder: {
        buttons: 'rgba(118, 118, 118,0.7)'
    },
    boxShadow: {
        main: 'rgba(0, 0, 0, 0.24) 0px 3px 8px'
    },
    borderRadius: {
        main: '0.20rem'
    },
    buttonsMod: {      
        width: '3.8rem',
        height: '3rem',
        buttonLargeWidth: '8.1rem',
        heightLarge: '7rem'
    }
}

const Theme = ({children}: any) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
)

export default Theme