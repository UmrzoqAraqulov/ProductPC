import React from 'react'

const Login = () => {
  return (
    <div>
      <h2>LogIn</h2>
      <form>
        <div>
          <label htmlFor="username">UserName</label>
          <input type="text" placeholder="UserName" min={4} max={12} />
        </div>
        <div>
          <label htmlFor="username">UserName</label>
          <input type="text" placeholder="UserName" min={4} max={12} />
        </div>
      </form>
    </div>
  );
}

export default Login