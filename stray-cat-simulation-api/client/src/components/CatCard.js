import React from 'react';
import { ProgressBar, Button } from 'react-bootstrap'
import { FaEdit } from 'react-icons/fa'
const CatCard = (props) => {
  let imageUrl = `images/${props.cat.image}`;
  let cat = props.cat;
  return (
    <div className="cat-card">
      <img
        src={imageUrl}
        alt={props.cat.image} />
      <div className="cat-name">{cat.name} <Button variant="dark" size="sm" onClick={() => { props.handleActionClick(cat.id, "rename") }}><FaEdit />
      </Button></div>
      <div className="cat-health">
        Health: {props.cat.hp}/10
        <ProgressBar min="0" max="10" now={cat.hp} />
      </div>
      <div className="cat-food">
        Food: {props.cat.food}/10
        <ProgressBar min="0" max="10" now={cat.food} />
      </div>
      <div className="cat-affection">
        Affection: {props.cat.affection}/10
        <ProgressBar min="0" max="10" now={cat.affection} />
      </div>

      <Button className="btn-heal" onClick={() => { props.handleActionClick(cat.id, "heal") }}>Heal</Button>
      <Button className="btn-feed" onClick={() => { props.handleActionClick(cat.id, "feed") }}>Feed</Button>
      <Button className="btn-pet" onClick={() => { props.handleActionClick(cat.id, "pet") }}>Pet</Button>
    </div>
  )
}
export default CatCard;
