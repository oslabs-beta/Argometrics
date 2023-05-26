import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import '../stylesheets/LoginPage.scss'

interface LoginPageProps {
  userId: string;
  setUserId: React.Dispatch<React.SetStateAction<string>>;
}

const LoginPage = ({ userId, setUserId,}: LoginPageProps) =>{
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [clickedSignUp, setSignUp] = useState(false);
  const navigate = useNavigate();
  const handleLoginClick = () => {
      //receives back user info object and sets user info to that object
      //[{googleId: null, password: "$2a$10$suXtDx/4k/VbkC5ScBzg0eDwwWl83iWX.xbU0QwkpPyR8HRW3TKIS", username: "auth", __v: 0, _id: "646277116c71f57f0d34b74f"}]

      const userObj = {username: username, password: password};
      console.log('clicked!', userObj)
      fetch('api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userObj)
      })
        .then((res)=> res.json())
        .then((data)=>{
          setUserId(data._id);
          console.log('data from login: ', data._id);
          navigate('/mainPage');
        })
        .catch((err)=>{
          console.log(err)
        })
    console.log(userId);
  }

  const handleSignupClick = () =>{
    const newUserObj = {username: username, password: password};
    console.log('clicked!', newUserObj)
    fetch('api/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newUserObj)
    })
      .then((res)=> res.json())
      .then((data)=>{
        setUserId(data._id);
        console.log("signed up: ", userId);
        navigate('/mainPage');
      })
      .catch((err)=>{
        console.log(err)
      })
  }
    let logInOrSignUp;
    if(!clickedSignUp){
      logInOrSignUp =  [<div id='logInOrSignUp'>
        <input
          type="text"
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={()=>handleLoginClick()}>Log In</button>
        <button onClick={()=>setSignUp(true)}>Don't have an account? Sign Up</button>
        </div>]
    }
    else {
      logInOrSignUp = [
        <div id='logInOrSignUp'>
          <input
            type="text"
            placeholder="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
           />
          <button onClick={()=>handleSignupClick()}>Sign Up</button>
        </div>
      ]
    }
  
    // useEffect(()=>{
    //   //make fetch req to front end, look for session cookie,
    //   //if cookie matches active session, redirect to mainpage
    //   fetch('api/auth/checkSession')
    //     .then((data)=> data.json() )
    //     .then((data)=>{
    //       console.log("uedata", data)
    //       if (data){
    //         navigate('/mainPage')
    //       }
    //     })
    // },[])

  return(
    <div id='login-container'>
     <div id='argometrics'>Argometrics</div>
      <>{logInOrSignUp}</>
      <a href="/api/auth/google">Log in with Google</a>
     </div>

  )
}

export default LoginPage