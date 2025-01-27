import React, { useState,useContext  } from 'react';
import { Box, TextField, Button, styled, Typography } from '@mui/material';

import { API } from '../../service/api';
import { DataContext } from '../../context/DataProvider';

import { useNavigate } from 'react-router-dom';

// we style material ui componenet
const Components = styled(Box)`
width :400px;
margin:auto;
box-shadow:5px 2px 5px 2px rgb(0 0 0 /0.6);`;

const Image = styled('img')({
  width: 100,
  display: 'flex',
  margin: 'auto',
  padding: '50px 0 0'
});

const Wrapper = styled(Box)`
  padding: 25px 35px;
  display: flex;
  flex: 1;
  overflow: auto;
  flex-direction: column;
  & > div, & > button, & > p {
      margin-top: 20px;
  }
`;
const LoginButton = styled(Button)`
    text-transform: none;
    background: #FB641B;
    color: #fff;
    height: 48px;
    border-radius: 2px;
`;

const SignupButton = styled(Button)`
    text-transform: none;
    background: #fff;
    color: #2874f0;
    height: 48px;
    border-radius: 2px;
    box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);
`;

const Text = styled(Typography)`
    color: #878787;
    font-size: 12px;
`;
const Error = styled(Typography)`
    font-size: 10px;
    color: #ff6161;
    line-height: 0;
    margin-top: 10px;
    font-weight: 600;
`
// creating an object 
const loginInitialValues = {
  username: '',
  password: ''
};

const signupInitialValues = {
  name: '',
  username: '',
  password: '',
};


// we return though login const singup  and login page
const Login = ({isUserAuthenticated}) => {

  // we use react hook use state to toggle sinngup and login page
  const [account, toggleAccount] = useState('login');
  const [login, setLogin] = useState(loginInitialValues);
  const [signup, setSignup] = useState(signupInitialValues);
  const [error, showError] = useState('');
  const imageURL = 'https://www.sesta.it/wp-content/uploads/2021/03/logo-blog-sesta-trasparente.png';
  
  const{setAccount}=useContext(DataContext);
  
  const navigate = useNavigate();


  const onValueChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  }
  const onInputChange = (e) => {
    setSignup({ ...signup, [e.target.name]: e.target.value });
  }


  const toggleSignup = () => {
    account === 'signup' ? toggleAccount('login') : toggleAccount('signup');

  }


  const loginUser = async () => {
    let response = await API.userLogin(login);
    if (response.isSuccess) {
        showError('');

        sessionStorage.setItem('accessToken', `Bearer ${response.data.accessToken}`);
        sessionStorage.setItem('refreshToken', `Bearer ${response.data.refreshToken}`);
        setAccount({ name: response.data.name, username: response.data.username });
        
        isUserAuthenticated(true);
        navigate('/');
    } else {
        showError('Something went wrong! please try again later');
    }
}


  const signupUser = async() => {
    let response =  await API.userSignup(signup);
    if (response.isSuccess) { 
      showError('');
      setSignup(signupInitialValues);
      toggleAccount('login');
  } else {
      showError('Something went wrong! please try again later');
  }
  }



  return (<Components>


    <Image src={imageURL} alt="logo" />

    {account === 'login' ?

      <Wrapper>

        <TextField variant="standard" value={login.username} onChange={(e) => onValueChange(e)} name='username' label="Enter User Name" />
        <TextField variant="standard" value={login.password} onChange={(e) => onValueChange(e)} name='password' label="Enter Password" />
 
        <LoginButton variant="contained" onClick={() => loginUser()}>LOGIN</LoginButton>
        <Text style={{ textAlign: 'center' }} >
          OR
        </Text>
        <SignupButton onClick={() => toggleSignup()}>CREATE AN ACCOUNT</SignupButton>
      </Wrapper> :


      <Wrapper>

        <TextField variant="standard" onChange={(e) => onInputChange(e)} name='name' label="Enter Name" />
        <TextField variant="standard" onChange={(e) => onInputChange(e)} name='username' label="Enter User Name" />
        <TextField variant="standard" onChange={(e) => onInputChange(e)} name='password' label="Enter Password" />
        

        {error && <Error>{error}</Error>}
        <SignupButton onClick={() => signupUser()}>SIGN UP</SignupButton>
        <Text style={{ textAlign: 'center' }} >
          OR
        </Text>
        <LoginButton variant="contained" onClick={() => toggleSignup()}>ALREADY CREATE AN ACCOUNT</LoginButton>
      </Wrapper>
    }


  </Components>)
}
export default Login;