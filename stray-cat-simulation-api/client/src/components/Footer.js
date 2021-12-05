import React from 'react';
import { Button } from 'react-bootstrap';
const Footer = (props) => {

  return (
    <div className="footer">
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
