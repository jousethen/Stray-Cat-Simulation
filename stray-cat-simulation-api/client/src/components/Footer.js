import React from 'react';
import { Button } from 'react-bootstrap';
const Footer = (props) => {

  return (
    <div className="footer">
      <h1>Actions: {props.actions} </h1>

      <Button
        variant="outline-light"
        size="lg"
        onClick={() => { props.handleActionClick(null, "gift") }}>
        Gift
      </Button>

      <Button
        variant="outline-light"
        size="lg"
        onClick={(event) => { props.nextDayHandler() }}>
        Next Day
      </Button>

    </div>
  )
}
export default Footer;
