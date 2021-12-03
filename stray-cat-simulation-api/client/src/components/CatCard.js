import React from 'react';

const CatCard = (props) => {
  let imageUrl = `images/${props.cat.image}`;
  console.log(props)
  return (
    <div className="cat-card">
      <img
        src={imageUrl}
        className="card-img-top"
        alt={props.cat.image} />
    </div>
  )
}
export default CatCard;
