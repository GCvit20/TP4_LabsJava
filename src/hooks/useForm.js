import { useState } from "react";

const useForm = (initialValues) => {
  const [values, setValues] = useState(initialValues);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (callback) => (event) => {
    event.preventDefault();
    callback(event);
  };

  return {
    values,
    handleChange,
    handleSubmit,
  };
};

export default useForm;
