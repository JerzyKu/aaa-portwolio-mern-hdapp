import React, { useState } from "react";
import Axios from 'axios'
import { useNavigate } from "react-router-dom";
import { faker } from '@faker-js/faker';

export default function NewTaskForm() {
  const [formData, setFormData] = useState({ title: "", description: "" });
  const navigate = useNavigate()

  // console.log(formData);

  const handleChange = (event) => {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault()
    Axios.post('http://localhost:3030/ticket', formData).then(
      (response) => {
        navigate('/')
      }
    )
  }

  const handleFakeData = (e) => {
    e.preventDefault()
    setFormData({
      title: faker.hacker.phrase(),
      description: faker.lorem.words(15)
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type={"text"}
        value={formData.title}
        onChange={handleChange}
        name='title'
        placeholder="Title."
        autoComplete="off"
        required={true}
      /><br />
      <textarea
        value={formData.description}
        placeholder="Description."
        onChange={handleChange}
        name="description"
        required={true}
      />
      <button type="reset">Reset</button>
      <button>Submit</button>
      <button onClick={handleFakeData}>Fake</button>
    </form>
  );
}
