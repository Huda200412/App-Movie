import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import TopRated from "./Pages/TopRated";
import Comedy from "./Pages/Comedy";
import Horror from "./Pages/Horror";
import Action from "./Pages/Action";
import About from "./Pages/About";
function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/TopRated" element={<TopRated />} />
        <Route path="/Comedy" element={<Comedy />} />
        <Route path="/Horror" element={<Horror />} />
        <Route path="/Action" element={<Action />} />
        <Route path="/About" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
}
export default App;
