import React from 'react'
import './App.css';
import BrandsIntegeration from './Components/BrandsIntegeration';
import Header from './Components/Header';
import TopFold from './Components/TopFold';
import TrendingNfts from './Components/TrendingNfts';
import InfoSection from './Components/InfoSection';
import Footer from './Components/Footer';


const App = () => {
  return (
    <div className='max-width'>
      <Header/>
      <TopFold/>
      <BrandsIntegeration/>
      <TrendingNfts/>
      <InfoSection/>
      <Footer/>
    </div>
  )
}

export default App
