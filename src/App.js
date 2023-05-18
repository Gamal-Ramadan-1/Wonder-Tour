import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Home from './pages/Home'
import About from './pages/About'
import Typography from './pages/Typography'
import ContactUs from './pages/ContactUs'
import NoPage from './pages/NoPage'

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Typography" element={<Typography />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="*" element={<NoPage />} />
      </Routes>

    </>
  );
}

export default App;
