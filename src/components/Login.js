import { useState } from "react";

function Login({ handleLogin }) {
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

    handleLogin(formValue.email, formValue.password)
  };

  return (
    <div className="login">
      <p className="login__welcome">Вход</p>
      <form onSubmit={handleSubmit} className="login__form">
        <input
          className="login__input"
          required
          placeholder="Email"
          id="email"
          name="email"
          type="text"
          value={formValue.email}
          onChange={handleChange}
        />

        <input
          className="login__input"
          required
          placeholder="Пароль"
          id="password"
          name="password"
          type="password"
          value={formValue.password}
          onChange={handleChange}
        />

        <button type="submit" className="login__button">
          Войти
        </button>
      </form>
    </div>
  );
}

export default Login;
