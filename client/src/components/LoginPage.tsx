import React, {useState} from 'react';

interface LoginPageProps {
  userInfo: string;
  setUserInfo: React.Dispatch<React.SetStateAction<string>>;
}

const LoginPage = ({ userInfo, setUserInfo }: LoginPageProps) =>{
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [clickedSignUp, setSignUp] = useState(false);

  const handleLoginClick = () =>{
      //receives back user info object and sets user info to that object
      const userObj = {username: username, password: password};
    
      fetch('/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userObj)
      })
        .then((res)=> res.json())
        .then((data)=>{
          setUserInfo(data);
        })
        .catch((err)=>{
          console.log(err)
        })
  }


  //const handleSignUpClick = ()
    

    let logInOrSignUp;
    if(!clickedSignUp){
      logInOrSignUp =  [<div>
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
        <button onClick={handleLoginClick}>Log In</button>
        </div>]
    }
    else {
      logInOrSignUp = ['sign up']
    }
  

  return(
    <>
    <div>login page</div>
    <>{logInOrSignUp}</>
    <button>signUp</button>
      <a href="/api/auth/google">Log in with Google</a>
 
  </>

  )
}

export default LoginPage