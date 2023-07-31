import "./App.css";
import { BrowserRouter, Route, Routes, NavLink } from "react-router-dom";
import logo from "./components/Logo/logo-no-background.png";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <BrowserRouter>
      <header>
        <img src={logo} alt="Logo" />
        <nav className="nav">
          <NavLink className="home" exact to="/">
            Home
          </NavLink>
          <NavLink className="about" to="/about">
            About
          </NavLink>
          <NavLink className="contact" to="/contact">
            Contact
          </NavLink>
        </nav>
      </header>
      <main>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
