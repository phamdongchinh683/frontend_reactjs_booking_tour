import React from 'react';
import InputAuth from '../../components/InputAuth';

const SignIn = () => {
 const [username, setUsername] = React.useState('');
 const [password, setPassword] = React.useState('');

 let propsUsername = {
  type: 'text',
  placeholder: 'Username',
  value: username,
  onChange: (e) => setUsername(e.target.value),
 }

 let propsPassword = {
  type: 'text',
  placeholder: 'Password',
  value: password,
  onChange: (e) => setPassword(e.target.value),
 }
 return (
  <>
   <form>
    <InputAuth {...propsUsername} />
    <InputAuth  {...propsPassword} />
    <input type="submit" />
   </form>
  </>
 )

};

export default SignIn;