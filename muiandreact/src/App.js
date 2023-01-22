import CustomeTheme from "./components/ThemeMUI";

function App() {
  return (
    <ThemeProvider theme={ThemeMUI}>
      <CssBaseline />
      <main> Testing theme</main>
    </ThemeProvider>
  );
}

export default App;
