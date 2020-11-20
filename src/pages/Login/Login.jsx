import React, { useState, useContext } from 'react';
import Context from '../../context/Context';

function Login() {
  const [validation, setValidation] = useState(true);
  const { email, setemail } = useContext(Context);
  const [passWord, setpassWord] = useState('');

  const loginValidation = () => {
    const emailResult = document.getElementById('input-email');
    console.log(emailResult);
    const passwordResult = document.getElementById('input-password');
    console.log(passwordResult);
    const regex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
    const six = 6;
    if (regex.test(emailResult.value) === true && passwordResult.value.length > six) {
      setValidation(false);
    } else {
      setValidation(true);
    }
  };

  const handleClick = (e) => {
    e.preventDefault();
    localStorage.setItem('mealsToken', 1);
    localStorage.setItem('cocktailsToken', 1);
    localStorage.setItem('user', JSON.stringify({ email }));
  };

  const handleEmail = ({ target }) => {
    setemail(target.value);
    loginValidation();
  };

  const handlePassword = ({ target }) => {
    setpassWord(target.value);
    loginValidation();
  };
  return (
    <div>
      <input
        id="input-email"
        type="text"
        placeholder="inserir email"
        data-testid="email-input"
        onChange={ handleEmail }
        value={ email }
      />
      <input
        id="input-password"
        type="password"
        placeholder="inserir senha"
        data-testid="password-input"
        onChange={ handlePassword }
        value={ passWord }
      />
      <button
        type="button"
        data-testid="login-submit-btn"
        onClick={ handleClick }
        disabled={ validation }
      >
        Entrar
      </button>
    </div>
  );
}

export default Login;
