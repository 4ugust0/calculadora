import React from "react";
import Theme, { theme } from "../../helpers/themes";
import { Buttons, Container } from "../_addOns_/container";
import { Box, ContainerButtons, Display } from "./style";

export const Calculator: React.FC = ()=> {


    return (
    <Container>
        <Theme>
            <Box>
                <Display>0</Display>
                <ContainerButtons>
                    <Buttons 
                        width={theme.buttonsMod.buttonLargeWidth} 
                        height={theme.buttonsMod.height} 
                    >C</Buttons>

                    <Buttons
                        width={theme.buttonsMod.width} 
                        height={theme.buttonsMod.height} 
                    >/</Buttons>

                    <Buttons
                        width={theme.buttonsMod.width} 
                        height={theme.buttonsMod.height} 
                    >X</Buttons>

                    <Buttons
                        width={theme.buttonsMod.width} 
                        height={theme.buttonsMod.height} 
                    >7</Buttons>

                    <Buttons
                        width={theme.buttonsMod.width} 
                        height={theme.buttonsMod.height} 
                    >8</Buttons>

                    <Buttons
                        width={theme.buttonsMod.width} 
                        height={theme.buttonsMod.height} 
                    >9</Buttons>

                    <Buttons
                        width={theme.buttonsMod.width} 
                        height={theme.buttonsMod.height} 
                    >-</Buttons>

                    <Buttons 
                        width={theme.buttonsMod.width} 
                        height={theme.buttonsMod.height} 
                    >4</Buttons>

                    <Buttons
                        width={theme.buttonsMod.width} 
                        height={theme.buttonsMod.height} 
                    >5</Buttons>

                    <Buttons
                        width={theme.buttonsMod.width} 
                        height={theme.buttonsMod.height} 
                    >6</Buttons>

                    <Buttons
                        width={theme.buttonsMod.width} 
                        height={theme.buttonsMod.height} 
                    >+</Buttons>

                    <Buttons
                        width={theme.buttonsMod.width} 
                        height={theme.buttonsMod.height} 
                    >1</Buttons>

                    <Buttons
                        width={theme.buttonsMod.width} 
                        height={theme.buttonsMod.height} 
                    >2</Buttons>

                    <Buttons
                        width={theme.buttonsMod.width} 
                        height={theme.buttonsMod.height} 
                    >3</Buttons>

                    <Buttons
                        width={theme.buttonsMod.width} 
                        height={theme.buttonsMod.height} 
                    >.</Buttons>

                    <Buttons
                        width={theme.buttonsMod.buttonLargeWidth} 
                        height={theme.buttonsMod.height} 
                    >0</Buttons>

                    <Buttons
                        width={theme.buttonsMod.buttonLargeWidth} 
                        height={theme.buttonsMod.height} 
                    >=</Buttons>
                </ContainerButtons>
            </Box>
        </Theme>
    </Container>
    )
}