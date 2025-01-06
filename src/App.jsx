import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Home from './pages/Home'
import Wishlist from './pages/Whishlist'
import Cart from './pages/Cart'
import View from './pages/View'
import Pagenotfound from './pages/Pagenotfound'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/wishlist' element={<Wishlist/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/:id/view' element={<View/>}/>
      <Route path='/*' element={<Pagenotfound/>}/>
     </Routes>

     {/* Footer */}
     <Footer/>

    </>
  )
}

export default App
