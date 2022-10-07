import { useState, useEffect } from 'react';
import './App.css'
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
import Loader from './components/Loader';

function App() {
  const [loader, setLoader] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 2700);
  }, [loader]);

  return (
    <div className="App">
      <GlobalStyles />
      <ThemeProvider theme={colors}>
        {loader ? (
          <Loader />
        ) : (
          <>
            <Header />
            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about-us" element={<AboutUs />} />
                <Route path="/community" element={<Community />} />
                <Route path="/contact-us" element={<ContactUs />} />
              </Routes>
            </main>
            <Footer />
          </>
        )}
      </ThemeProvider>
    </div>
  );
}

export default App;
