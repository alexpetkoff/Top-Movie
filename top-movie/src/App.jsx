import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AboutUs from "./components/AboutUs/AboutUs";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
    return (
        <Router>
            <Header />

            <Routes>
                <Route path="/" element={<AboutUs />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
