/* eslint-disable react/prop-types */
import {useState} from 'react'

const Card = ({ favorite,name, image, prix, description, adresse }) => {
  const [isFavorite, setIsFavorite] = useState(favorite) 

 

  return (
    <div>
      <div className="container">
        <div className="left-part">
          <img style={{height : "280px",width : "350px"}} src={image} alt={name} />
        </div>
        <div className="right">
        <div className="data-item">
        <h1>{prix} €</h1>
        <h2>{name}</h2>
        <p>{adresse}</p>
        <textarea name="description">{description}</textarea>
        <div 
        onClick={() => setIsFavorite (!isFavorite)}
        className="like">
        </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
