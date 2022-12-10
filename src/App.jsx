
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { Routes, Route } from 'react-router-dom';
import Home from "./Routes/Home";
import Detail from "./Routes/Detail";
import Contact from "./Routes/Contact";
import Favs from "./Routes/Favs";
import NotFound from "./Routes/NotFound";
import {useContextGlobal } from "./Components/utils/global.context"



function App() {
  const { providerValue } = useContextGlobal();
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}> 
          <Route path="/dentist/:id" element={<Detail/>}/>
        </Route>
        <Route path="/contacto" element={<Contact/>}/>
        <Route path="/favs" element={<Favs/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      <div className="App">
          <Navbar/>
          <Footer/>
      </div>
    </>
  );
}

export default App;
