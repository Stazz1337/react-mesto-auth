import { Link } from "react-router-dom";
import { useState } from "react";

function Register({ handleRegister }) {
  const [formValue, setFormValue] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormValue({
      ...formValue,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // здесь обработчик регистрации

    handleRegister(formValue.email, formValue.password)
    
  };

  return (
    <div className="register">
      <p className="register__welcome">Регистрация</p>
      <form onSubmit={handleSubmit} className="register__form">
        <input
          className="register__input"
          placeholder="Email"
          id="email"
          name="email"
          type="email"
          value={formValue.email}
          onChange={handleChange}
        />

        <input
          className="register__input"
          placeholder="Пароль"
          id="password"
          name="password"
          type="password"
          value={formValue.password}
          onChange={handleChange}
        />

        <button
          type="submit"
          onSubmit={handleSubmit}
          className="register__button"
        >
          Зарегистрироваться
        </button>
      </form>

      <div className="register__signin">
        <p className="register__signin-label"> Уже зарегистрированы? &nbsp; </p>
        <Link to="/sign-in" className="register__signin-link">
          Войти
        </Link>
      </div>
    </div>
  );
}

export default Register;
