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
      <div className="cat-health">
        Health: {props.cat.hp}/10
        <ProgressBar min="0" max="10" now={props.cat.hp} />
      </div>
      <div className="cat-food">
        Food: {props.cat.food}/10
        <ProgressBar min="0" max="10" now={props.cat.hp} />
      </div>
      <div className="cat-affection">
        Affection: {props.cat.affection}/10
        <ProgressBar min="0" max="10" now={props.cat.hp} />
      </div>

      <Button className="btn-heal">Heal</Button>
      <Button className="btn-feed">Feed</Button>
      <Button className="btn-pet">Pet</Button>
    </div>
  )
}
export default CatCard;
