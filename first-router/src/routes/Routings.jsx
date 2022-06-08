import { BrowserRouter as Router,Routes, Route } from "react-router-dom" 
import Home from "../components/Home"
import About from "../components/About"
import Products from "../components/Products"
import Header from "../components/Header"
import Footer from "../components/Footer"
//import { lazy, Suspense } from "react"
//const Header = lazy(() => import('../components/Header'))
//const Footer = lazy(() => import('../components/Footer'))

const Routings = () => (
  <Router>
    {/* <Suspense> */}
      <main>
      <Header />
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/products' element={<Products/>}/>
          <Route path='/about' element={<About/>}/>
      </Routes>

      <Footer />
      </main>
    {/* </Suspense> */}
  </Router>
)

export default Routings