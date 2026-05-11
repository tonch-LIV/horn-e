import { useState } from "react";
// import Col from "react-bootstrap";
import Card from "react-bootstrap/Card";


function HornedBeast(props) {
  const [favorite, setFavorite] = useState(0);

  return (
    <Card style={{ width: '18rem', marginBottom: '1rem' }}>

      <Card.Body>
        <Card.Title>{props.title}</Card.Title>

        <Card.Text>Favorites: {favorite}</Card.Text>

        <Card.Img
          variant="top"
          src={props.imageUrl}
          alt={props.description}
          title={props.title}
          style={{
            width: '100%',
            height: '300px',
            objectFit: 'cover'
          }}
          onClick={() => {
            setFavorite(favorite + 1)  // updates counter
            props.onSelect();  //  props.onSelectBeast(beast) (from Gallery) -> handleSelectedBeast();
          }}
        />

        <Card.Text>{props.description}</Card.Text>
      </Card.Body>

    </Card>
  );
}

export default HornedBeast