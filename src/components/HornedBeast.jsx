import { useState } from "react";
// import Col from "react-bootstrap";
// import Card from "react-bootstrap";


function HornedBeast(props) {
  const [favorite, setFavorite] = useState(0)

  return (
    <>
      <h2>{props.title}</h2>
      <p>Favorite: {favorite}</p>

      <img
        src={props.imageUrl}
        alt={props.description}
        title={props.title}
        style={{ width: '20%'}}
        onClick={() => setFavorite(favorite + 1)}
      />

      <p>{props.description}</p>
    </>
  )
}

export default HornedBeast