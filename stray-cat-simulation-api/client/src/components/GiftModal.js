import { connect } from "react-redux";
import React, { Component } from 'react';
import Button from '@restart/ui/esm/Button';
import { Modal } from "react-bootstrap";
class GiftModal extends Component {
  constructor() {
    super();
    this.state = {
      foundAccessory: null
    }
  }

  renderBody = () => {
    let acc = this.props.accessory;
    console.log(acc)
    if (acc) {
      return (
        <ul>
          {acc.hp !== 0 ? <li>HP: {acc.hp}</li> : null}
          {acc.affection !== 0 ? <li>Affection: {acc.affection}</li> : null}
          {acc.food !== 0 ? <li>Food: {acc.food}</li> : null}
          {acc.toughness !== 0 ? <li>Toughness: {acc.toughness}</li> : null}
        </ul>

      )
    }
  }

  renderCatButtons = () => {
    //Only return these buttons if there is an accessory found
    if (this.props.accessory) {
      return (
        this.props.cats.map((cat) => {
          <Button onClick={this.props.giftAcc(cat.id)}>{cat.name}</Button>
        })
      )
    }
  }

  render() {
    return (
      <Modal
        size="sm"
        show={this.props.showModal}
        onHide={this.props.hideModal()}
        aria-labelledby="example-modal-sizes-title-sm" >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">
            {this.props.accessory ? `Found ${this.props.accessory.name}!` : "No Accessory Found"}
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {this.renderBody()}
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={this.props.hideModal()}>Close</Button>
          {this.renderCatButtons()}
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
