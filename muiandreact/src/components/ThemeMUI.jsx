import React from "react";
import App from "../App";
// Theme MUI
import {createTheme,ThemeProvider} from "@mui/material/styles";
import CssBaseLine from "@mui/material/CssBaseline";

// object MUI for custom theme, i am trying to naming the variables is free



let ThemeMUI = createTheme({
        pallete : {
            mode : 'dark',
        }
    })
    return ThemeMUI;

