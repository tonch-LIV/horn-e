import HornedBeast from './HornedBeast.jsx';
// import beastData from './data.json';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'



function Gallery(props) {
  return (
    <>
      <Container>
        <Row>
          {props.beasts?.map((beast, index) => (
            <Col key={index} md={4}>
              <HornedBeast
                title={beast.title}
                imageUrl={beast.image_url}
                description={beast.description}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  )
}

export default Gallery