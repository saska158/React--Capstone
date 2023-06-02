import React from "react"
import Header from "./components/Header"
import Home from "./pages/Home"
import Cart from "./pages/Cart"
import Photos from "./pages/Photos"
import './App.css'
import {Routes, Route} from "react-router-dom"

function App() {    
    return (
        <div>
            <Header />
            <Routes>
                <Route exact path="/" element={<Photos />} />
                <Route path="/cart" element={<Cart />} />
            </Routes>
        </div>
    )
}

export default App

