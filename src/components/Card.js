import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

export default function Card( dataCard, onCardClick ){
  const currentUser = React.useContext( CurrentUserContext );
  const isOwn = card.owner._id === currentUser._id;
  const isLiked = card.likes.some( i => i._id === currentUser._id );

  function handleClick(){
    onCardClick( dataCard )
  }

  function handleDeleteClick(){

  }

  return(
    <li className="cards__grid-item" key={ dataCard._id }>
      <div className="card">
        <img 
          src={ dataCard.link } 
          alt={`Изображение ${ dataCard.name }`} 
          className="card__photo"
          onClick={handleClick}
        />
        <div className="card__figcaption">
          <h2 className="card__title text-overflow">{ dataCard.name }</h2>
          <div className="card__like-container">
            <button
              className={
                `card__like button-zeroing transition-opacity transition-background ${ isLiked && 'card__like_active' }`
              }
              type="button"
              name="Поставить лайк"
              aria-label="set like"
            ></button>
            <span className="card__like-count">{dataCard.likes.length}</span>
          </div>
        </div>
        {isOwn && <button
          className="card__del-card-btn button-zeroing transition-opacity"
          type="button"
          name="удалить место"
          aria-label="delete card"
          onClick={ handleDeleteClick }
        ></button>}
      </div>
    </li>
  )
}