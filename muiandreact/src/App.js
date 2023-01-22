import {ThemeProvider, createTheme} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";


let theme = createTheme({
  palette : {
    mode : "dark",
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main> Testing theme</main>
    </ThemeProvider>
  );
}

export default App;
