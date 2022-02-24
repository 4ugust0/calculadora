import { createGlobalStyle } from "styled-components";
import { theme } from "../../helpers/themes";

export default createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: arial;
        color: ${theme.colors.colorWhite} ;
    }

    body{
        background-color: ${theme.colors.colorWhite};
    }


`