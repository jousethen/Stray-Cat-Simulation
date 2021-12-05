import React, { Component } from 'react';
import { connect } from "react-redux";
import { fetchTodaysCats, proceedToNextDay } from '../actions/cat_actions';
import { fetchActionsAvailable } from '../actions/user_actions';
import CatCard from '../components/CatCard';
import Footer from '../components/Footer';
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
      return (<CatCard cat={cat} key={cuidFn()} handleActionClick={this.handleActionClick} accessory={acc} />)
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
  }

  handleActionClick = (catId, action) => {
    //Handle the button presses withing the Cat Cards

    if (this.props.actions > 0) {
      switch (action) {
        case "feed": this.props.feedCat(catId);
          break;
        case "heal": this.props.healCat(catId);
          break;
        case "pet": this.props.petCat(catId);
          break;
        case "rename":
          let newName = prompt("Name Your Friend:", "");
          this.props.renameCat(catId, newName);
          break;
        case "gift":
          let newName = prompt("Name Your Friend:", "");
          this.props.renameCat(catId, newName);
          break;
        default:
      }
      this.props.useAction();
    }
    else {
      this.setState({
        showModal: true
      })
    }
  }

  nextDayHandler = () => {
    this.props.proceedToNextDay(this.props.cats, this.props.actions)
  }

  render() {
    if (this.props.cats.length > 0 && this.props.loading === false) {
      return (
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
          <Footer nextDayHandler={this.nextDayHandler} actions={this.props.actions} handleActionClick={this.handleActionClick} />
        </div>
      )
    }
    else {
      return (
        <div className="cats-container">
          NO CATS
          <Footer nextDayHandler={this.nextDayHandler} actions={this.props.actions} handleActionClick={this.handleActionClick} />
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

    proceedToNextDay: (cats, actionsAvailable) => {
      dispatch(proceedToNextDay(cats, actionsAvailable));
    },

    useAction: () => {
      dispatch({ type: "USE_ACTION" })
    },

    fetchActionsAvailable: () => {
      dispatch(fetchActionsAvailable());
    },

    fetchAccessories: () => {
      dispatch(fetchAccessories());
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(CatsContainer)
