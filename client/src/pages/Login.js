import { useState } from "react";
import '../App.css';

import LoginForm from "../components/LoginForm";
import CreateAccountForm from "../components/CreateAccountForm";

function Login({ onLogin }) {
  const [showLogin, setShowLogin] = useState(true)

  return (
    <div className='wrapper'>
      <h1>Green 🌱 Beans</h1>
      {showLogin ? (
        <>
          <LoginForm onLogin={onLogin} />
          <hr />
          <p>
            Don't have an account yet? &nbsp;
            <button onClick={() => setShowLogin(false)}>
              Create Account
            </button>
          </p>
        </>
      ) : (
        <>
          <CreateAccountForm onLogin={onLogin} />
          <hr />
          <p>
            Already have an account? &nbsp;
            <button onClick={() => setShowLogin(true)}>
              Log In
            </button>
          </p>
        </>
      )}
    </div>
  )
}

export default Login