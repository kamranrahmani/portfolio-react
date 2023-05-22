import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from './components/Home/Home'
import About from "./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path={'/'} element={<Home />} />
          <Route path={'/about'} element={<About />} />
          <Route path={'/portfolio'} element={<Portfolio />} />
          <Route path={'/contact'} element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
