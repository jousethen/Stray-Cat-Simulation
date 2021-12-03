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
      cats: []
    }
  }
  componentDidMount() {
    //Fetch All cats
    this.props.fetchTodaysCats();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.cats !== this.props.cats) {
      this.setState({
        cats: this.props.cats
      })
    }
  }
  renderCatCards = () => {
    return this.state.cats.map((cat) => { return (<CatCard cat={cat} key={cuidFn()} handleActionClick={this.handleActionClick} />) })
  }

  handleActionClick = (catId, action) => {

    switch (action) {
      case "feed": this.props.feedCat(catId);
        break;
      case "heal": this.props.healCat(catId);
        break;
      case "pet": this.props.petCat(catId);
        break;
      default:
    }

  }

  render() {
    if (this.props.cats.length > 0) {
      return (
        <div className="cats-container">
          {this.renderCatCards()}
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
    loading: state.cats.loading
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
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(CatsContainer)
