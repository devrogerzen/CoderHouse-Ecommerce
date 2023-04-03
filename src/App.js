import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/navbar/Navbar";
import { About, Contact, Home } from "./pages";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
