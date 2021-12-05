import React, { Component } from 'react';
import { connect } from "react-redux";
import { fetchTodaysCats } from '../actions/cat_actions';
import CatCard from '../components/CatCard';
import cuid from 'cuid';
export const cuidFn = cuid;

class CatsContainer extends Component {
  constructor() {
    super();
    this.state = {
    }
  }
  componentDidMount() {
    //Fetch All cats
    this.props.fetchTodaysCats();
  }

  renderCatCards = () => {
    return this.props.cats.map((cat) => { return (<CatCard cat={cat} key={cuidFn()} handleActionClick={this.handleActionClick} />) })
  }


  toggleEdit = () => {
    this.setState({
      disableEdit: "false"
    })
  }

  handleActionClick = (catId, action) => {

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
        default:
      }

      this.props.useAction();
    }

  }

  render() {
    if (this.props.cats.length > 0) {
      return (
        <div className="cats-container">
          {this.props.actions}{this.renderCatCards()}
        </div>
      )
    }
    else {
      return (
        <div className="cats-container">
          NO CATS
        </div>
      )
    }
  }
}


const mapStateToProps = (state) => {
  return {
    cats: state.cats.cats,
    loading: state.cats.loading,
    actions: state.user.actions
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


    useAction: () => {
      dispatch({ type: "USE_ACTION" })
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(CatsContainer)
