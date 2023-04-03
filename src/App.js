import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/navbar/Navbar";
import { About, Contact, Detail, Home } from "./pages";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/detail/:id" element={ <Detail /> } />
        <Route path="*" element={ <h1>ERROR</h1>} />
      </Routes>
    </>
  );
}

export default App;
