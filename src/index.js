import { BrowserRouter, Route, Routes } from "react-router-dom"
import StarRepo from "./Components/StarRepo/StarRepo"
import Username from "./routes/username"
import ReactDOM from 'react-dom/client'
import React from 'react'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path=":username" element={<Username />} />
      <Route path="most-popular" element={<StarRepo />} />
    </Routes>
  </BrowserRouter>
)