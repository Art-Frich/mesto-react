import React, { useState } from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';

export default function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);

  function handleEditAvatarClick(){
    setIsEditAvatarPopupOpen( !isEditAvatarPopupOpen );
  }
  
  function handleEditProfileClick(){
    setIsEditProfilePopupOpen( !isEditProfilePopupOpen );
  }
  
  function handleAddPlaceClick(){
    setIsAddPlacePopupOpen( !isAddPlacePopupOpen );
  }

  function closeAllPopups(){
    setIsEditAvatarPopupOpen( false );
    setIsEditProfilePopupOpen( false );
    setIsAddPlacePopupOpen( false );
  }

  return (
    <>
      <Header />
      <Main 
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
      />
      <Footer />
      <PopupWithForm 
        name="edit-profile" 
        title="Редактировать профиль" 
        submitBtnText="Сохранить"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      >
        <label className="popup__field">
          <input 
            className="popup__input popup__input_type_name-user" 
            name="nameUser" 
            placeholder="Имя или то, что вам его заменит" 
            type="text" 
            minLength={2} 
            maxLength={40} 
            required 
          />
          <span className="popup__error" />
        </label>
        <label className="popup__field">
          <input 
            className="popup__input popup__input_type_about" 
            name="aboutUser" 
            placeholder="Кто вы? Можете оставить это место пустым =)" 
            type="text" 
            minLength={2} 
            maxLength={200} 
            required 
          />
          <span className="popup__error" />
        </label>
      </PopupWithForm>
      <PopupWithForm 
        name="add-place" 
        title="Новое место" 
        submitBtnText="Создать"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      >
        <label className="popup__field">
          <input 
            className="popup__input popup__input_type_name-place" 
            name="namePlace" 
            placeholder="Как называется это место?" 
            type="text" 
            minLength={2} 
            maxLength={30} 
            required 
          />
          <span className="popup__error" />
        </label>
        <label className="popup__field">
          <input 
            className="popup__input popup__input_type_url" 
            name="urlImage" 
            placeholder="Укажите ссылку на изображение" 
            type="url" 
            required 
          />
          <span className="popup__error" />
        </label>
      </PopupWithForm>
      <PopupWithForm 
        name="confirm-delete" 
        title="Вы уверены?" 
        submitBtnText="Да"
      >
      </PopupWithForm>
      <PopupWithForm 
        name="edit-avatar" 
        title="Обновить аватар" 
        submitBtnText="Сохранить"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      >
        <label className="popup__field">
          <input 
            className="popup__input popup__input_type_url" 
            name="urlImage" 
            placeholder="Укажите ссылку на новое изображение" 
            type="url" 
            required 
          />
          <span className="popup__error" />
        </label>
      </PopupWithForm>
      <ImagePopup />
    </>
  );
}