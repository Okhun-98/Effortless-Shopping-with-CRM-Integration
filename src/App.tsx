import { BrowserRouter } from "react-router-dom";
import { Router } from "../src/Router/Router";
import { StyledEngineProvider } from "@mui/material";
import { Navbar } from "../src/component/navbar/Navbar";
const App: React.FC = () => {
  return (
    <BrowserRouter>
      <StyledEngineProvider injectFirst>
        <Navbar />
      </StyledEngineProvider>
      <Router />
    </BrowserRouter>
  );
};

export default App;
