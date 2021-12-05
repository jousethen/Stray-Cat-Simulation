import { connect } from "react-redux";
import React, { Component } from 'react';
import Button from '@restart/ui/esm/Button';
import { Modal } from "react-bootstrap";
class GiftModal extends Component {

  render() {
    return (
      <Modal
        size="sm"
        show={this.props.showModal}
        onHide={this.props.hideModal()}
        aria-labelledby="example-modal-sizes-title-sm" >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">
            Gift Accessory
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Modal body text goes here.</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary">Close</Button>
          <Button variant="primary">Save changes</Button>
        </Modal.Footer>
      </Modal>
    )
  }
}



const mapDispatchToProps = (dispatch) => {
  return {
    useAction: () => {
      dispatch({ type: "USE_ACTION" })
    },

  }
}

export default connect(null, mapDispatchToProps)(GiftModal)
