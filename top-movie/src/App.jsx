import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AboutUs from "./components/AboutUs/AboutUs";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Movies from "./components/Movies/Movies";

function App() {
    return (
        <Router>
            <Header />

            <Routes>
                <Route path="/" element={<AboutUs />} />
                <Route path="/movies" element={<Movies />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
