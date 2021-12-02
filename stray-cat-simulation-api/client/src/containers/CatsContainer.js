import React, { Component } from 'react';
import { connect } from "react-redux";
import { fetchTodaysCats } from '../actions/cat_actions';

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

  render() {
    return (
      <div className="cats_container">

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    cats: state.cats
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
