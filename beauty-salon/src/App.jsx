import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import NavigationMenu from './components/NavigationMenu/NavigationMenu';
import Home from "./pages/Home/Home";
import CareTips from "./pages/Tips/Tips"; // Папка называется Tips
import Masters from "./pages/Masters/Masters";
import Portfolio from "./pages/Portfolio/Portfolio";
import Services from "./pages/Services/Services";


function App() {
  return (
    <Router>
      <Header />
      <NavigationMenu />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/care-tips" element={<CareTips />} />
          <Route path="/masters" element={<Masters />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}
export default App;