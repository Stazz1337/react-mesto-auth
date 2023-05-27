import pass from "../images/popup-info-pass.svg";
import fail from "../images/popup-info-fail.svg";
import { useEffect } from "react";

function InfoTooltip(props) {
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
      onMouseDown={props.onOuterClick}
      className={`popup popup_type_info  ${props.isOpen ? "popup_opened" : ""}`}
    >
      <div className="popup__container">
        <button
          className="popup__close link"
          type="button"
          aria-label="закрыть"
          onClick={props.onClose}
        />

        <img
          className="popup__icon-info"
          alt="Иконка статуса регистрации"
          src={props.isReg ? pass : fail}
        ></img>

        <h2 className="popup__heading popup__heading-info">
          {props.isReg
            ? "Вы успешно зарегистрировались!"
            : "Что-то пошло не так! Попробуйте ещё раз."}
        </h2>
      </div>
    </div>
  );
}

export default InfoTooltip;
