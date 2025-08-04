import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import "./App.css";
import VastuInfo from "./components/VastuInfo/VastuInfo";
import Satva from "./components/SatvaMeaning/Satva";
import AboutService from "./components/AboutService/AboutService";
import ContactUS from "./components/ContactUs/ContactUs";
import Experience from "./components/Experience/Experience";
import Footer from "./components/Footer/Footer";

// Import service pages
import Office from "./components/AboutService/Office";
import Home from "./components/AboutService/Home";
import Factory from "./components/AboutService/Factory";
import Wealth from "./components/AboutService/Wealth";
import Health from "./components/AboutService/Health";

function App() {
  return (
    <Router>
      <Routes>
        {/* Main route */}
        <Route
          path="/"
          element={
            <>
              <Header />
              <Hero />
              <VastuInfo />
              <Satva />
              <AboutService />
              <ContactUS />
              <Experience />
              <Footer />
            </>
          }
        />

        {/* Service routes */}
        <Route path="/office" element={<Office />} />
        <Route path="/home" element={<Home />} />
        <Route path="/factory" element={<Factory />} />
        <Route path="/wealth" element={<Wealth />} />
        <Route path="/health" element={<Health />} />
      </Routes>
    </Router>
  );
}

export default App;
