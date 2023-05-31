import React, { useState, useEffect } from 'react'
import '../stylesheets/LoginPage.scss'
import LoginPage from './LoginPage';

interface MainPageProps {
  userId: string;
  setUserId: React.Dispatch<React.SetStateAction<string>>
}

const Logo = ({userId, setUserId}: MainPageProps) => {
  const [ isLogin, setLogin ] = useState(false)

  useEffect(() => {
    if (!isLogin) {
      setTimeout(() => setLogin(true), 10000)
    }
  }, [])

  return (
    <>
     
      {!isLogin && <div id='logo-page'>
        <img
          id='logo-image'
          src='./argo-logo-large.gif'
          alt='Logo'
        />
      </div>}
      {isLogin && <LoginPage userId={userId} setUserId={setUserId} /> }
     
    </>
  )
}

export default Logo