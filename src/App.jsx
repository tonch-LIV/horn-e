import { useState } from 'react';

// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'

import Header from './components/Header.jsx';
import Gallery from './components/Gallery.jsx';
import Footer from './components/Footer.jsx';

import SelectedBeast from './components/SelectedBeast.jsx';

import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import data from '../data.json';
import './App.css';

function App() {
    // const [count, setCount] = useState(0)
  const [selectedBeast, setSelectedBeast] = useState(null);  // null = no beast selected; null because argument will be an object, not string
  const [showModal, setShowModal] = useState(false);  // default is no modal open
  const [hornFilter, setHornFilter] = useState('all')  // no filter, show all; will pass filtered data into Gallery

  function handleSelectedBeast(beast) {
    setSelectedBeast(beast) // remembers which beast
    setShowModal(true)  // opens modal
  };

  function handleCloseModal() {
    setShowModal(false);  // to close modal
  };

  // filter() creates new array matching dropdown menu selction
  const filteredBeasts = data.filter((beast) => {
    if (hornFilter === 'all') {
      return true;
    }

  return beast.horns === Number(hornFilter); //  display matches to filter; Number() converts strinbgs to integers 
   
    // could also use ternary vv
    // return hornFilter === 'all'
    // ? true
    // : beast.horns === Number(hornFilter); 
  });

  return (
    <>
      <Header />
      <Form className='m-4'>

          <Form.Label>Filter by Number of Horns</Form.Label>

          <Form.Select
            value={hornFilter} // value displayed comes from React state^^
            onChange={(event) => setHornFilter(event.target.value)}
          >  {/* event handler; stores change from dropdown; value that triggers event*/}
              <option value='all'>All the Horns!</option>
              <option value="1">Single Horn (Uni-Horn)</option>
              <option value="2">Bi-Horn</option>
              <option value="3">Triple Threat</option>
              <option value="100">Cent-Horned</option>

          </Form.Select>
      </Form>

      <Gallery
        beasts = {filteredBeasts} // changed from data to filteredBeast
        onSelectBeast = {handleSelectedBeast} />  {/* onSelectBeast =  prop; handleSelectedBeast = value; === props.onSelectBeast'; remove if confusing */}

      <SelectedBeast
        beast={selectedBeast}
        show={showModal}
        close={handleCloseModal}
      />
      
      <Footer />
    </>
  );

};

export default App
