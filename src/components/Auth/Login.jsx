import React, { useState } from "react";

const Login = ({handleLogin}) => {
    // console.log(handleLogin);
    
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
handleLogin(email,password)
    setEmail('')
    setPassword('')
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="border-2 border-emerald-700 rounded-2xl ">
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className="flex flex-col p-20 "
        >

          <input
           value = { email }
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
            className="bg-transparent placeholder:text-gray-800 rounded-xl border border-emerald-600 px-5 py-3 text-xl"
            type="email"
            placeholder="Enter Your Email"
          />

          <input
          value = { password }
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
            className="bg-transparent mt-4 placeholder:text-gray-800 rounded-xl border border-emerald-600 px-5 py-3 text-xl"
            type="password"
            placeholder="Your Password"
          />
          <button className="bg-emerald-600 rounded-2xl mt-7 placeholder:text-gray-700  px-5 py-3  text-2xl">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
