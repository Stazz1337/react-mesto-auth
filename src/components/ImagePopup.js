import { useEffect } from "react";

function ImagePopup(props) {
  useEffect(() => {
    if (!(props.card && Object.keys(props.card).length !== 0)) return;

    function handleESC(e) {
      if (e.key === "Escape") {
        props.onClose();
      }
    }

    document.addEventListener("keydown", handleESC);

    return () => document.removeEventListener("keydown", handleESC);
  }, [props.card, props]);

  return (
    <div
      className={`popup popup_type_image ${
        props.card && Object.keys(props.card).length !== 0 ? "popup_opened" : ""
      }`}
      onMouseDown={props.onOuterClick}
    >
      <div className="popup__container-image">
        <button
          className="popup__close link"
          type="button"
          aria-label="закрыть"
          onClick={props.onClose}
        />
        <img
          src={props.card.link}
          alt={props.card.name}
          className="popup__image"
        />
        <p className="popup__image-title">{props.card.name}</p>
      </div>
    </div>
  );
}

export default ImagePopup;
