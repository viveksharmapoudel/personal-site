import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className='app'>
        <Navbar />
        <Home />
        <About />
        <Portfolio />
        <Contact />
        {/* blogs */}
      </div>
    </Router>
  );
}

export default App;
