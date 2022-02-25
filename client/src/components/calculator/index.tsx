import React, { useState } from "react";
import Theme, { theme } from "../../helpers/themes";
import { Buttons, Container } from "../_addOns_/container";
import { Box, ContainerButtons, Display } from "./style";

export const Calculator: React.FC = ()=> {

    const [NumberY, setNumberY] = useState('')
    const [NumberX, setNumberX] = useState('')
    const [takeOperators, setTakeOperators] = useState('')

    const erase = () =>  {
        setNumberY('')
        setNumberX('')
        setTakeOperators('')
    }

    const takeNumber = (number:any)=> {
        if(!takeOperators) {
            setNumberX(NumberX + number.target.value)
        }else{
            setNumberY(NumberY + number.target.value)
        }
    }

    const takeOperator = (operator:any)=> {
        setTakeOperators(operator.target.value)
    }

    const equals = () => {

        let numX = parseFloat(NumberX)
        let numY = parseFloat(NumberY)
        let result = 0

        switch (takeOperators) {
            case '+':
                result = numX + numY
                break;
            case '-':
                result = numX - numY
                break;
            case '*': 
                result = numX * numY
                break;
            case '/':
                result = numX / numY
                break;
            default:
                break;
        }

        setNumberY('')
        setTakeOperators('')

        setNumberX(result.toString())
    }

    return (
    <Container>
        <Theme>
            <Box>
                <Display>{NumberX} {takeOperators} {NumberY}</Display>
                <ContainerButtons>
                    <Buttons 
                        onClick={erase}
                        width={theme.buttonsMod.buttonLargeWidth} 
                        height={theme.buttonsMod.height}
                    >C</Buttons>

                    <Buttons
                        onClick={takeOperator}
                        width={theme.buttonsMod.width} 
                        height={theme.buttonsMod.height} 
                        value="/"
                    >÷</Buttons>

                    <Buttons
                        onClick={takeOperator}
                        width={theme.buttonsMod.width} 
                        height={theme.buttonsMod.height}
                        value="*"
                    >X</Buttons>

                    <Buttons
                        onClick={takeNumber}
                        width={theme.buttonsMod.width} 
                        height={theme.buttonsMod.height}
                        value="7"
                    >7</Buttons>

                    <Buttons
                        onClick={takeNumber}
                        width={theme.buttonsMod.width} 
                        height={theme.buttonsMod.height}
                        value="8"
                    >8</Buttons>

                    <Buttons
                        onClick={takeNumber}
                        width={theme.buttonsMod.width} 
                        height={theme.buttonsMod.height} 
                        value="9"
                    >9</Buttons>

                    <Buttons
                        onClick={takeOperator}
                        width={theme.buttonsMod.width} 
                        height={theme.buttonsMod.height}
                        value="-"
                    >-</Buttons>

                    <Buttons 
                        onClick={takeNumber}
                        width={theme.buttonsMod.width} 
                        height={theme.buttonsMod.height}
                        value="4"
                    >4</Buttons>

                    <Buttons
                        onClick={takeNumber}
                        width={theme.buttonsMod.width} 
                        height={theme.buttonsMod.height}
                        value="5" 
                    >5</Buttons>

                    <Buttons
                        onClick={takeNumber}
                        width={theme.buttonsMod.width} 
                        height={theme.buttonsMod.height}
                        value="6"
                    >6</Buttons>

                    <Buttons
                        onClick={takeOperator}
                        width={theme.buttonsMod.width} 
                        height={theme.buttonsMod.height}
                        value="+" 
                    >+</Buttons>

                    <Buttons
                        onClick={takeNumber}
                        width={theme.buttonsMod.width} 
                        height={theme.buttonsMod.height}
                        value="1"
                    >1</Buttons>

                    <Buttons
                        onClick={takeNumber}
                        width={theme.buttonsMod.width} 
                        height={theme.buttonsMod.height}
                        value="2"
                    >2</Buttons>

                    <Buttons
                        onClick={takeNumber}
                        width={theme.buttonsMod.width} 
                        height={theme.buttonsMod.height}
                        value="3"
                    >3</Buttons>

                    <Buttons
                        onClick={takeNumber}
                        width={theme.buttonsMod.width} 
                        height={theme.buttonsMod.height}
                        value="." 
                    >.</Buttons>

                    <Buttons
                        onClick={takeNumber}
                        width={theme.buttonsMod.buttonLargeWidth} 
                        height={theme.buttonsMod.height}
                        value="0" 
                    >0</Buttons>

                    <Buttons
                        onClick={equals}
                        width={theme.buttonsMod.buttonLargeWidth} 
                        height={theme.buttonsMod.height}
                    >=</Buttons>
                </ContainerButtons>
            </Box>
        </Theme>
    </Container>
    )
}