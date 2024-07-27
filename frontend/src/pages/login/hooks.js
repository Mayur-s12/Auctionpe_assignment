import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { BASE_URL } from "../../config/apis";

const useLogin = () => {
  const [loginDetails, setLoginDetails] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setLoginDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${BASE_URL}/auth/login`, loginDetails);

      toast.success(response.data.message);

      localStorage.setItem("token", response.data.token);
    } catch (err) {
      console.log("error logging in", err);
    }
  };

  return { handleInputChange, handleFormSubmit, loginDetails };
};

export default useLogin;
