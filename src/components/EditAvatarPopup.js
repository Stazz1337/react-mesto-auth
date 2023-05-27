import PopupWithForm from "./PopupWithForm";
import { useRef, useEffect } from "react";

function EditAvatarPopup(props) {
  const avatarRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateAvatar(avatarRef.current.value);
  }

  useEffect(() => {
    if (!props.isOpen) {
      avatarRef.current.value = "";
    }
  }, [props.isOpen]);

  return (
    <PopupWithForm
      title="Обновить аватар"
      name="update-avatar"
      buttonText={props.isLoading ? "Сохранение..." : "Сохранить"}
      isOpen={props.isOpen}
      onClose={props.onClose}
      onOuterClick={props.onOuterClick}
      onSubmit={handleSubmit}
      children={
        <>
          <input
            ref={avatarRef}
            type="url"
            id="avatarLink-input"
            name="imageLink"
            className="popup__text popup__text_type_imageLink"
            placeholder="Ссылка на картинку"
            required=""
          />
          <span className="popup__input-error avatarLink-input-error">
            Error
          </span>
        </>
      }
    />
  );
}

export default EditAvatarPopup;
