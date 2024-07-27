import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { BASE_URL } from "../../config/apis";

const useSignUp = () => {
  const [signUpDetails, setSignUpDetails] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setSignUpDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${BASE_URL}/auth/signup`,
        signUpDetails
      );

      toast.success(response.data.message);
    } catch (err) {
      console.log("error logging in", err);
      toast.error(err.response.data.message);
    }
  };

  return { handleInputChange, handleFormSubmit, signUpDetails };
};

export default useSignUp;
