import "./App.css";
import Navbar from "./Component/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Component/Home";
import About from "./Component/About";
import Contact from "./Component/Contact";
import Industries from "./Component/Industries";
import Services from "./Component/Services";
import Leadership from "./Component/Leadership";
import Footer from "./Component/Footer";
import "./Style/master.css";
import Team from "./Component/Team";

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route
          path="/home"
          element={
            <>
              <Home />
              <About />
              <Services />

              <Industries />
              <Team />
              <Leadership />
              <Contact />
              <Footer />
            </>
          }
        />
        <Route
          path="/"
          element={
            <>
              <Home />
              <About />
              <Services />

              <Industries />
              <Team />
              <Leadership />
              <Contact />
              <Footer />
            </>
          }
        />

        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Industries" element={<Industries />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/team" element={<Team />} />
        <Route path="/leadership" element={<Leadership />} />
      </Routes>
    </div>
  );
}

export default App;
