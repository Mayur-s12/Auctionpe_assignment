import React from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { LOGIN, NOT_USER, SIGNUP } from "./constants";
import Text from "../../components/Text";
import "./index.css";

const LoginPage = () => {
  return (
    <div className='login-page'>
      <form className='login-form'>
        <Text className='login-heading'>{LOGIN}</Text>
        <Input label='username' />
        <Input label='password' />
        <Button>{LOGIN}</Button>
        <Text>
          {NOT_USER}
          <Text className='signup-span'>{SIGNUP}</Text>
        </Text>
      </form>
    </div>
  );
};

export default LoginPage;
