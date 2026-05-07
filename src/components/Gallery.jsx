import HornedBeast from './HornedBeast.jsx';
// import beastData from './data.json';
// import Row from 'react-bootstrap/Row';
// import Container from 'react-bootstrap/Container';

function Gallery(props) {
  return (
    <>
      {props.beasts.map((beast, index) => (
        <HornedBeast
          key={index}
          title={beast.title}
          imageUrl={beast.image_url}
          description={beast.descripton}
        />
      ))}
    </>
  )
}

export default Gallery