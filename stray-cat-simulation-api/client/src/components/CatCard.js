import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar'

const CatCard = (props) => {
  let imageUrl = `images/${props.cat.image}`;
  console.log(props)
  return (
    <div className="cat-card">
      <img
        src={imageUrl}
        alt={props.cat.image} />
      <div className="cat-name">{props.cat.name}</div>
      <div className="cat-hp">
        <ProgressBar now={60} />
      </div>

    </div>
  )
}
export default CatCard;
