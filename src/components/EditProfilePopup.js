import PopupWithForm from "./PopupWithForm";
import { useState, useEffect, useContext } from "react";
import CurrentUserContext from "../contexts/CurrentUserContext";

function EditProfilePopup(props) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const currentUser = useContext(CurrentUserContext);

  useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser, props.isOpen]);

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleDescriptionChange(e) {
    setDescription(e.target.value);
  }

  function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();

    // Передаём значения управляемых компонентов во внешний обработчик
    props.onUpdateUser({
      name,
      about: description,
    });
  }

  return (
    <PopupWithForm
      title="Редактировать профиль"
      name="edit-profile"
      buttonText={props.isLoading ? "Сохранение..." : "Сохранить"}
      isOpen={props.isOpen}
      onClose={props.onClose}
      onOuterClick={props.onOuterClick}
      onSubmit={handleSubmit}
      children={
        <>
          <input
            type="text"
            id="name-input"
            name="name"
            className="popup__text popup__text_type_name"
            placeholder="Имя"
            minLength={2}
            maxLength={40}
            required=""
            value={name || ''}
            onChange={handleNameChange}
          />
          <span className="popup__input-error name-input-error">Error</span>
          <input
            type="text"
            id="about-input"
            name="about"
            className="popup__text popup__text_type_about"
            placeholder="Профессия"
            minLength={2}
            maxLength={200}
            required=""
            value={description || ''}
            onChange={handleDescriptionChange}
          />
          <span className="popup__input-error about-input-error">Error</span>
        </>
      }
    />
  );
}

export default EditProfilePopup;
