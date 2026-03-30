import { BrowserRouter as Browser,Routes,Route } from "react-router-dom"
import Error from "./routes/Error"
import Home from "./routes/Home"
import Produto from "./routes/Produto"
import Sobre from "./routes/Sobre"
import Login from "./routes/Login"
import Header from "./components/Header"
import Footer from "./components/Footer"


function App() {

  return (
    <Browser>
     <Header/>
      <Routes>
        <Route path="*" element={<Error/>} />
        <Route path="/" element={<Home/>} />
        <Route path="/produto" element={<Produto/>} />
        <Route path="/sobre" element={<Sobre/>} />
        <Route path="/login" element={<Login/>} />
      </Routes>
     <Footer/>  
    </Browser>
  )
}

export default App
