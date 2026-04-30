// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import Header from './components/Header.jsx'
// import Gallery from './components/Gallery.jsx'
import Footer from './components/Footer.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import './data.json'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      {/* <Gallery />, */}
      <Footer />
    </>
  )
}

export default App
