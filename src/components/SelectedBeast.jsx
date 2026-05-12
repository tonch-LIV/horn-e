import { Modal } from "react-bootstrap/Modal";

function SelectedBeast(props) {

  if (!props.beast) {
    return null;
  }

  return (
    <Modal show={props.show}>
    
      <Modal.Header>
        <Modal.Title>
          {props.beast.title}
        </Modal.Title>
      </Modal.Header>
      
      <Modal.Body>
        <img 
          src={props.beast.image_url}
          alt={props.beast.description}
          style={{ width: '100% '}}
        />
        
        <p>{props.beast.description}</p>
      </Modal.Body>
    </Modal>
  );
}

export default SelectedBeast;