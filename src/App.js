import { ThemeProvider } from "styled-components";
import About from "./components/sections/About";
import Home from "./components/sections/Home";
import Footer from "./components/sections/Footer";
import GlobalStyles from "./styles/GlobalStyles";
import {dark, light} from './styles/Themes'


function App() {
  return (
    <>
    <GlobalStyles />
      <ThemeProvider theme={light}>
          <Home/>
          <About />
          <Footer />
      </ThemeProvider> 
    </>
  );
}

export default App;
