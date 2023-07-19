import { useState } from "react"
import Login from "../components/Login";

const LogInPage = () => {
  const [login,setLogin] = useState(JSON.parse(localStorage.getItem("login")) || {username:"umrzoq",password:"12345"});
  const [check,setCheck] = useState(false);
  
  return (
    <div>
      <Login/>
    </div>
  )
}

export default LogInPage