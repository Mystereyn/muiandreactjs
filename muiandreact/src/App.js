import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
function App() {
  return (
    <div className="App">
      <div className= "btn">
          <Button variant="contained"> 
              this is a contained Button
          </Button>
      </div>
      <div className="box">
      <Box
      sx={{
        width: 300,
        height: 300,
        backgroundColor: 'primary.dark',
        '&:hover': {
          backgroundColor: 'primary.main',
          opacity: [0.9, 0.8, 0.7],
        },
      }}
    />
      </div>
    </div>
  );
}

export default App;
