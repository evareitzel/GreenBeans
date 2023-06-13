import { useState } from "react";
import '../App.css';
import LoginForm from "../components/LoginForm";
import CreateAccountForm from "../components/CreateAccountForm";

function Login({onLogin}) {
  const [showLogin, setShowLogin] = useState(true)

  return (
    <div className='wrapper'>
      <h1 className='logo'>Green 🌱 Beans</h1>
      {showLogin ? (
        <>
          <LoginForm onLogin={onLogin} />
          <hr className='hr'/>
          <p>
            Don't have an account yet? &nbsp;
            <br />
            <button onClick={() => setShowLogin(false)} className='ghost-button'>
              Create Account
            </button>
          </p>
        </>
      ) : (
        <>
          <CreateAccountForm onLogin={onLogin} />
          <hr className='hr'/>
          <p>
            Already have an account? &nbsp;
            <br />
            <button onClick={() => setShowLogin(true)} className='ghost-button'>
              Log In
            </button>
          </p>
        </>
      )}
    </div>
  )
}

export default Login