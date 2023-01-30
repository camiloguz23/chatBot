import React, { useEffect, useState } from 'react'
import "./login.scss"
import { authLogin } from '../../services/loginGoogle'
import { ChatAI } from '../../services/chatGPT'
import { useNavigate } from 'react-router-dom'

const Login = ({onUser}) => {

  const [isLogin,setIsLogin]=useState(false)
  const path =useNavigate()

  useEffect(() => {
    const data = JSON.parse(sessionStorage.getItem("user"))
    onUser(data)
    setIsLogin(data?.displayName)
    ChatAI()
  },[])

  const authGoogle = async () => {
      const data = await authLogin()
      const {displayName,email} = data.user
      sessionStorage.setItem('user',JSON.stringify({displayName,email}))
      setIsLogin(!!displayName)
      onUser({displayName,email})
      path("/chat")
  }

  const logout = () => {
    sessionStorage.setItem('user',JSON.stringify(""))
    onUser({})
    setIsLogin(false)
    path("")
  }
  return (
    <button className='btnLogin' onClick={isLogin? logout : authGoogle }>
      {isLogin ? "Logout": "Login"}
    </button>
  )
}

export default Login
