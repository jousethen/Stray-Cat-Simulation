import './App.css';
import CatsContainer from './containers/CatsContainer';
import { connect } from "react-redux";
import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <>
        {
          !this.props.nextDayLoading ?
            <CatsContainer /> : <>Nothing</>
        }
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    loadingNextDay: state.cats.loadingNextDay
  };
};

export default connect(mapStateToProps)(App)
