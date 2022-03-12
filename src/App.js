import AboutUs from "./pages/AboutUs";
import GlobalStyle from "./styles/GlobalStyles";
import Nav from "./components/Nav";
import ContactUs from "./pages/ContactUs";
import OurWork from "./pages/OurWork";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <>
        <GlobalStyle />
        <Nav />
        <Routes>
          <Route path="/" element={<AboutUs />} />
          <Route path="/work" element={<OurWork />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </>
    </div>
  );
}

export default App;
