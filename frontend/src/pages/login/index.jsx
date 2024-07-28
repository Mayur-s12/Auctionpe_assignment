import React from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { LOGIN, NOT_USER, SIGNUP } from "./constants";
import Text from "../../components/Text";
import useLogin from "./hooks";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";

const LoginPage = () => {
  const { handleFormSubmit, handleInputChange, loginDetails } = useLogin();
  const navigate = useNavigate();

  return (
    <div className='login-page'>
      <form className='login-form' onSubmit={handleFormSubmit}>
        <Text className='login-heading'>{LOGIN}</Text>
        <Input
          label='Username'
          name='username'
          type='text'
          onChange={handleInputChange}
          value={loginDetails.username}
        />
        <Input
          label='Password'
          type='password'
          name='password'
          onChange={handleInputChange}
          value={loginDetails.password}
        />
        <Button type='submit'>{LOGIN}</Button>
        <Text>
          {NOT_USER}
          <Text className='signup-span' onClick={() => navigate("/signup")}>
            {SIGNUP}
          </Text>
        </Text>
      </form>
      <ToastContainer
        position='top-right'
        autoClose={3000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='light'
      />
    </div>
  );
};

export default LoginPage;
