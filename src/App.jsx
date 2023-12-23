import "./App.css";
import Navigator from "./components/Navigator";
import Banner from "./components/Banner";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { BrowserRouter } from "react-router-dom";
import Hero from "./components/Hero";

function App() {
  return (
    <>
      <BrowserRouter>
            <Navigator></Navigator>
            <Hero></Hero>
            <Main></Main>
            <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
