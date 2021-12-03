import React from 'react';
import { ProgressBar, Button } from 'react-bootstrap'

const CatCard = (props) => {
  let imageUrl = `images/${props.cat.image}`;

  return (
    <div className="cat-card">
      <img
        src={imageUrl}
        alt={props.cat.image} />
      <div className="cat-name">{props.cat.name}</div>
      <div className="cat-stat">
        Health: {props.cat.hp}/10
        <ProgressBar min="0" max="10" now={props.cat.hp} />
      </div>
      <div className="cat-stat">
        Food: {props.cat.food}/10
        <ProgressBar min="0" max="10" now={props.cat.hp} />
      </div>
      <div className="cat-stat">
        Affection: {props.cat.affection}/10
        <ProgressBar min="0" max="10" now={props.cat.hp} />
      </div>

      <Button className="action">Feed</Button>
      <Button className="action">Heal</Button>
      <Button className="action">Pet</Button>
    </div>
  )
}
export default CatCard;
