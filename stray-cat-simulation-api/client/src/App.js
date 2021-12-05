import './App.css';
import CatsContainer from './containers/CatsContainer';
import { connect } from "react-redux";
import React, { Component } from 'react';
import Button from '@restart/ui/esm/Button';

class App extends Component {

  clickHandler = () => {
    this.props.completeNextDayTransition()
  }
  render() {
    if (this.props.loadingNextDay) {
      return (
        <div id="next-day" className="fade-in">
          <span>On to the Next Day...</span>
          <Button
            id="next-day-btn"
            onClick={() => { this.clickHandler() }}>Continue</Button>
          <img id="background"
            src="/images/bgdark.png"
            alt="on to the next day" />
        </div>
      )
    }
    else {
      return (
        <>
          <CatsContainer />
        </>
      )
    }
  }
}
const mapStateToProps = (state) => {
  return {
    loadingNextDay: state.user.loadingNextDay
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    completeNextDayTransition: () => {
      dispatch({ type: "LOADED_NEXT_DAY" })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
