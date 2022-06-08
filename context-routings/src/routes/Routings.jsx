import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Home from "../components/pages/Home"
import About from "../components/pages/About"
import Products from "../components/pages/Products"
import ProductDetail from "../components/pages/ProductDetail"
import NotFound404 from "../components/pages/NotFound404"

const Routings = () => (
    <Router> 
        <Header />
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/products' element={<Products/>} />
            <Route path='/product-details' element={<ProductDetail/>} />
            <Route path='*' element={<NotFound404/>} />
          </Routes>
        <Footer />
    </Router>
  )


export default Routings