import React from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { ALREADY_USER, LOGIN, SIGNUP } from "./constants";
import Text from "../../components/Text";
import useSignUp from "./hooks";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";

const SignupPage = () => {
  const { handleFormSubmit, handleInputChange, signUpDetails } = useSignUp();
  return (
    <div className='login-page'>
      <form className='login-form' onSubmit={handleFormSubmit}>
        <Text className='login-heading'>{SIGNUP}</Text>
        <Input
          label='Username'
          name='username'
          onChange={handleInputChange}
          value={signUpDetails.username}
        />
        <Input
          label='Password'
          name='password'
          onChange={handleInputChange}
          value={signUpDetails.password}
        />
        <Button type='submit'>{SIGNUP}</Button>
        <Text>
          {ALREADY_USER}
          <Text className='signup-span'>{LOGIN}</Text>
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

export default SignupPage;
