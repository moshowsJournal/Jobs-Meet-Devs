import GlobalStyles from "./styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { colors } from "./styles/Colors";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Community from "./pages/Community";
import ContactUs from "./pages/ContactUs";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <ThemeProvider theme={colors}>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/community" element={<Community />} />
            <Route path="/contact" element={<ContactUs />} />
          </Routes>
        </main>
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
