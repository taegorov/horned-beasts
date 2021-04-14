import { Component } from 'react';
import { Modal } from 'react-bootstrap';


class PopModal extends Component {
  render() {
    return (

      <Modal show={this.props.showModal} onHide={this.props.handleClose}>
        <Modal.Dialog>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.title}</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <p>
              <img src={this.props.imgUrl} id="modalWidth"/>
            </p>
          </Modal.Body>

          <Modal.Footer>
            {this.props.description}
            {/* <Button variant="secondary">Close</Button>
            <Button variant="primary">Save changes</Button> */}
          </Modal.Footer>
        </Modal.Dialog>
      </Modal>
    );
  }
}

export default PopModal;
