import React, { Component } from 'react';
import { connect } from "react-redux";
import { fetchTodaysCats, proceedToNextDay } from '../actions/cat_actions';
import { fetchActionsAvailable } from '../actions/user_actions';
import CatCard from '../components/CatCard';
import Header from '../components/Header';
import GiftModal from '../components/GiftModal';
import { Modal } from 'react-bootstrap';
import cuid from 'cuid';
import { fetchAccessories } from '../actions/accessory_actions';
export const cuidFn = cuid;

class CatsContainer extends Component {
  constructor() {
    super();
    this.state = {
      showActionModal: false,
      showGiftModal: false
    }
  }
  componentDidMount() {
    //Fetch All cats
    this.props.fetchTodaysCats();
    this.props.fetchActionsAvailable();
    this.props.fetchAccessories();
  }

  renderCatCards = () => {
    return this.props.cats.map((cat) => {
      let acc = this.props.accessories.filter((a) => { return a.cat_id === cat.id })
      return (<CatCard cat={cat} key={cuidFn()} handleActionClick={this.handleActionClick} accessories={acc} />)
    })
  }

  freeAccessories = () => {
    return this.props.accessories.filter((a) => { return a.cat_id === null })
  }

  hideModal = () => {
    this.setState({
      showActionModal: false,
      showGiftModal: false
    })

    //Remove an Action if turning off Gift Modal 
    if (this.props.actions > 0) {
      this.props.useAction();
    }
  }

  handleActionClick = (catId, action) => {
    //Handle the button presses withing the Cat Cards

    if (this.props.actions > 0) {
      switch (action) {
        case "feed": this.props.feedCat(catId);
          this.props.useAction();
          break;
        case "heal": this.props.healCat(catId);
          this.props.useAction();
          break;
        case "pet": this.props.petCat(catId);
          this.props.useAction();
          break;
        case "rename":
          let newName = prompt("Name Your Friend:", "");
          this.props.renameCat(catId, newName);
          break;
        case "gift":
          this.setState({
            showActionModal: false,
            showGiftModal: true
          })
          this.props.useAction();
          break;
        default:
      }
    }
    else {
      this.setState({
        showActionModal: true
      })
    }
  }

  nextDayHandler = () => {
    this.props.proceedToNextDay(this.props.cats, this.props.actions, this.props.accessories)
  }

  handleGiftAcc = (accId, catId) => {
    this.props.giftAccessory(accId, catId);
    this.hideModal();
  }
  render() {
    if (this.props.cats.length > 0 && this.props.loading === false) {
      return (
        <>
          <Header nextDayHandler={this.nextDayHandler} actions={this.props.actions} handleActionClick={this.handleActionClick} />
          <div className="cats-container">

            {this.renderCatCards()}
            <Modal
              size="sm"
              show={this.state.showActionModal}
              onHide={() => this.hideModal()}
              aria-labelledby="example-modal-sizes-title-sm" >
              <Modal.Header closeButton>
                <Modal.Title id="example-modal-sizes-title-sm">
                  No Actions Left for Today
                </Modal.Title>
              </Modal.Header>
            </Modal>
            <GiftModal
              showModal={this.state.showGiftModal}
              hideModal={() => this.hideModal}
              cats={this.props.cats}
              accessory={this.props.accessories[Math.floor(Math.random() * 30)]}
              giftAccessory={this.handleGiftAcc} />

          </div>
        </>
      )
    }
    else {
      return (
        <div className="cats-container">
          NO CATS
          <Header nextDayHandler={this.nextDayHandler} actions={this.props.actions} handleActionClick={this.handleActionClick} />
        </div>
      )
    }
  }
}


const mapStateToProps = (state) => {
  return {
    cats: state.cats.cats,
    loading: state.cats.loading,
    actions: state.user.actions,
    accessories: state.accessories.accessories
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTodaysCats: () => {
      dispatch(fetchTodaysCats());
    },

    feedCat: (catId) => {
      dispatch({ type: "FEED_CAT", catId })
    },

    healCat: (catId) => {
      dispatch({ type: "HEAL_CAT", catId })
    },

    petCat: (catId) => {
      dispatch({ type: "PET_CAT", catId })
    },

    renameCat: (catId, name) => {
      dispatch({ type: "RENAME_CAT", catId, name })
    },

    proceedToNextDay: (cats, actionsAvailable, accessories) => {
      dispatch(proceedToNextDay(cats, actionsAvailable, accessories));
    },

    useAction: () => {
      dispatch({ type: "USE_ACTION" })
    },

    fetchActionsAvailable: () => {
      dispatch(fetchActionsAvailable());
    },

    fetchAccessories: () => {
      dispatch(fetchAccessories());
    },

    giftAccessory: (accId, catId) => {
      dispatch({ type: "GIFT_ACCESSORY", accId, catId });
    }
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(CatsContainer)
