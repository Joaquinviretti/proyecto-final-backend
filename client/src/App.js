import "./style/main.scss"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from "./components/Navbar/Navbar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import AddForm from "./components/AddForm/AddForm"

function App() {

  return (
       <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/products" element={<ItemListContainer/>} />
        <Route exact path="/products/add" element={<AddForm/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
