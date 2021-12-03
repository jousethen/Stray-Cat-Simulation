import React, { Component } from 'react';
import { connect } from "react-redux";
import { fetchTodaysCats } from '../actions/cat_actions';
import CatCard from '../components/CatCard';

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

  renderCatCards = () => {
    return this.props.cats.map((cat) => { return (<CatCard cat={cat} key={cat.id} handleActionClick={this.handleActionClick} />) })
  }

  handleActionClick = (catId, action) => {

  }

  render() {
    console.log(this.props)
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
    cats: state.cats.cats
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTodaysCats: () => {
      dispatch(fetchTodaysCats());
    },
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(CatsContainer)
