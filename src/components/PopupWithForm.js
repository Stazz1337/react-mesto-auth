import { useEffect } from "react";

function PopupWithForm(props) {
  useEffect(() => {
    if (!props.isOpen) return;

    function handleESC(e) {
      if (e.key === "Escape") {
        props.onClose();
      }
    }

    document.addEventListener("keydown", handleESC);

    return () => document.removeEventListener("keydown", handleESC);
  }, [props.isOpen, props]);

  return (
    <div
      className={`popup popup_type_${props.name} ${
        props.isOpen ? "popup_opened" : ""
      }`}
      onMouseDown={props.onOuterClick}
    >
      <div className="popup__container">
        <button
          className="popup__close link"
          type="button"
          aria-label="закрыть"
          onClick={props.onClose}
        />
        <form
          className={`popup__form popup__form_type_${props.name}`}
          name={props.name}
          // noValidate=""
          onSubmit={props.onSubmit}
        >
          <h2 className={`popup__heading popup__heading_${props.name}`}>
            {props.title}
          </h2>

          {props.children}

          <button name="button" type="submit" className="popup__button">
            {props.buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
