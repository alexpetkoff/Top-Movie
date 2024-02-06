import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { DataProvider } from "./contexts/dataContext";

import AboutUs from "./components/AboutUs/AboutUs";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Movies from "./components/Movies/Movies";

function App() {
    return (
        <Router>
            <DataProvider>
                <Header />

                <Routes>
                    <Route path="/" element={<AboutUs />} />
                    <Route path="/movies" element={<Movies />} />
                    <Route path="/actors" element={<Movies />} />
                </Routes>
                <Footer />
            </DataProvider>
        </Router>
    );
}

export default App;
