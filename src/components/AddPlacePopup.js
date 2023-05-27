import PopupWithForm from "./PopupWithForm";
import { useRef, useEffect } from "react";

function AddPlacePopup(props) {
  const cardNameRef = useRef();
  const cardLinkRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();

    props.onAddPlace({
      name: cardNameRef.current.value,
      link: cardLinkRef.current.value,
    });
  }

  useEffect(() => {
    if (!props.isOpen) {
      cardNameRef.current.value = "";
      cardLinkRef.current.value = "";
    }
  }, [props.isOpen]);

  return (
    <PopupWithForm
      title="Новое место"
      name="add-card"
      buttonText={props.isLoading ? "Сохранение..." : "Создать"}
      isOpen={props.isOpen}
      onClose={props.onClose}
      onOuterClick={props.onOuterClick}
      onSubmit={handleSubmit}
      children={
        <>
          <input
            ref={cardNameRef}
            type="text"
            id="imageName-input"
            name="name"
            className="popup__text popup__text_type_imageName"
            placeholder="Название"
            minLength={2}
            maxLength={30}
            required=""
          />
          <span className="popup__input-error imageName-input-error">
            Error
          </span>
          <input
            ref={cardLinkRef}
            type="url"
            id="imageLink-input"
            name="link"
            className="popup__text popup__text_type_imageLink"
            placeholder="Ссылка на картинку"
            required=""
          />
          <span className="popup__input-error imageLink-input-error">
            Error
          </span>
        </>
      }
    />
  );
}

export default AddPlacePopup;
