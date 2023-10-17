/* eslint-disable react/prop-types */
import { useState } from 'react';

const Card = ({ pro, favorite, name, image, prix, description, adresse }) => {
  const [isFavorite, setIsFavorite] = useState(favorite);
  const [isPro, setIsPro] = useState(pro);

  const displayPro = () => {
    if (isPro === true) {
      return <p className='pro-display'>pro</p>;
    }
  };

  return (
    <div>
      <div className="container">
        <div className="left-part">
          <img style={{ height: '280px', width: '350px' }} src={image} alt={name} />
        </div>
        <div className="right">
          <div className="data-item">
          <div className="container-price_pro">
          <h1>{prix} €</h1>
          <div>{displayPro(setIsPro)}</div>
          </div>
            <h2>{name}</h2>
            <p>{adresse}</p>
            <textarea name="description" defaultValue={description}></textarea>
            <div
              onClick={() => setIsFavorite(!isFavorite)}
              className={isFavorite ? 'isFavorite' : 'notFavorite'}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

