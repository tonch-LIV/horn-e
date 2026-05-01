import HornedBeast from './components/HornedBeast.jsx'

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