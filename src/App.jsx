import { useState } from 'react'

// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'

import Header from './components/Header.jsx'
import Gallery from './components/Gallery.jsx'
import Footer from './components/Footer.jsx'

import 'bootstrap/dist/css/bootstrap.min.css'
import data from '../data.json'
import './App.css'

function App() {
    // const [count, setCount] = useState(0)
  const [selectedBeast, setSelectedBeast] = useState(null);  // null = no beast selected; null because argument will be an object, not string
  const [showModal, setShowModal] = useState(false);  // default is no modal open

  function handleSelectedBeast(beast) {
    setSelectedBeast(beast) // remembers which beast
    setShowModal(true)  // opens modal
  };

  return (
    <>
      <Header />
      <Gallery
        beasts = {data}
        onSelectBeast = {handleSelectedBeast} />  {/* onSelectBeast =  prop; handleSelectedBeast = value; === props.onSelectBeast'; remove if confusing */}
      <Footer />
    </>
  );

};

export default App
