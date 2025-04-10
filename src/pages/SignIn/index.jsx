import { React, useCallback, useState } from "react";
import "react-phone-input-2/lib/style.css";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import AuthButton from "../../components/AuthButton";
import AuthInput from "../../components/InputAuth";
import Notification from "../../components/Notification";
import useToken from "../../jwt/useToken";
import { AuthService } from "../../services";
import * as validation from '../../utils';
const SignIn = () => {

  const { login } = AuthService();
  const { setToken } = useToken();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const loginAccount = useCallback(async () => {
    if (!username || !password) {
      toast.warn('Please not empty fields')
      return;
    }

    const usernameError = validation.validateUsername(username);
    if (usernameError) {
      toast.warn(usernameError);
      return;
    }

    const passwordError = validation.validatePassword(password);
    if (passwordError) {
      toast.warn(passwordError);
      return;
    }

    setLoading(true);
    try {
      const data = {
        username: username,
        password: password
      }

      const response = await login(data);
      console.log(response)
      if (response.data.status === 'success') {
        let token = response.data.data;
        setToken(token)
        toast.success('Welcome!');
        navigate('/')
      } else {
        toast.warn(response.data.data)
      }

    } catch (e) {
      toast.warning(e.response.data.message);
    } finally {
      setLoading(false);
    }
  }, [username, password, login, navigate])

  return (
    <>
      <div className='container-page-auth'>
        <div className="container">
          <h2 className="title-auth">Sign In</h2>
          <form id="signupForm">
            <AuthInput field={'Username'} type={'text'} value={username} onChange={(e) => setUsername(e.target.value)} hint={'Username'} />
            <AuthInput field={'Password'} type={"password"} value={password} onChange={(e) => setPassword(e.target.value)} hint={'Your Password'} />
            <AuthButton name={
              loading ? 'Loading...' :
                'Sign In'
            } func={loginAccount} />
            <Link to='/sign-up' className='auth-link-page'>Sign up now</Link>
          </form>
        </div>
      </div>
      <Notification />
    </>
  );
};

export default SignIn;