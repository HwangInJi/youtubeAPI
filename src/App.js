import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Today from './pages/Today'
import Developer from './pages/Developer'
import Webd from './pages/Webd'
import Webdsite from './pages/Webdsite'
import Gsap from './pages/Gsap'
import Port from './pages/Port'
import Youtube from './pages/Youtube'
import Channel from './pages/Channel'
import Video from './pages/Video'
import Search from './pages/Search'
import Not from './pages/Not'

import Header from './components/section/Header'
import Footer from './components/section/Footer'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/today' element={<Today />} />
        <Route path='/developer' element={<Developer />} />
        <Route path='/webd' element={<Webd />} />
        <Route path='/webdsite' element={<Webdsite />} />
        <Route path='/gsap' element={<Gsap />} />
        <Route path='/port' element={<Port />} />
        <Route path='/Youtube' element={<Youtube />} />
        <Route path='/channel' element={<Channel />} />
        <Route path='/video' element={<Video />} />
        <Route path='/search' element={<Search />} />
        <Route path='*' element={<Not />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App