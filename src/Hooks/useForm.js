import React from "react";

export const useForm = (initialState) => {
  const [form, setForm] = React.useState(initialState);

  const onChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const clean = () => {
    setForm(initialState);
  };

  return { form, onChange, clean };
};
