import React from 'react';

function Login() {
  return (
    <div>
      <input
        type="text"
        placeholder="inserir email"
        data-testid="email-input"
      />
      <input
        type="password"
        placeholder="inserir senha"
        data-testid="password-input"
      />
      <button
        type="button"
        data-testid="login-submit-btn"
      >
        Entrar
      </button>
    </div>
  );
}

export default Login;
