import React from 'react';

const CatCard = (props) => {
  let imageUrl = `images/${props.cat.image}`;
  console.log(props)
  return (
    <div className="cat-card">
      <img
        src={imageUrl}
        alt={props.cat.image} />
      <div className="card-content">{props.cat.name}</div>

    </div>
  )
}
export default CatCard;
