import { Container } from "./components/Container";
import {  ItemListContainer } from "./components/ItemListContainer";
import { Navbar } from "./components/navbar/Navbar";

function App() {
  return (
    <>
    <Navbar />
    <Container text1="Welcome" text2="E-Commerce To CoderHouse" />
    <ItemListContainer />
    </>
  );
}

export default App;
