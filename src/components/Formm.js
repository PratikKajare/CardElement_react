import axios from "../axios";
import React from "react";
import { useState } from "react";
import styled from "styled-components";
const Formm = () => {
  const [success, setSuccess] = useState(false);
  const [formError, setFormError] = useState({});
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const hndleChange = (e) => {
    const newuser = { ...user };
    newuser[e.target.id] = e.target.value;
    setUser(newuser);
  };
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.name) {
      errors.name = "Username is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.phone) {
      errors.phone = "Phone is required!";
    } else if (values.phone < 11) {
      errors.phone = "This is not a valid phone format!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    }
    return errors;
  };

  const postdata = async (e) => {
    e.preventDefault();
    setFormError(validate(user));

    await axios
      .post("/formj", {
        name: user.name,
        email: user.email,
        phone: user.phone,
        password: user.password,
      })

      .then(
        console.log(
          setUser({
            name: "",
            email: "",
            phone: "",
            password: "",
          })
        )
      );
    setSuccess(true);
  };

  return (
    <Left>
      <form method="post" onSubmit={postdata}>
        <h2>Sign Up</h2>
        <input
          type="text"
          name="name"
          id="name"
          autoComplete="off"
          placeholder="Name"
          onChange={hndleChange}
          value={user.name}
        />
        <p>{formError.name}</p>
        <input
          type="email"
          name="email"
          id="email"
          autoComplete="off"
          placeholder="Email"
          value={user.email}
          onChange={hndleChange}
        />
        <p>{formError.email}</p>
        <input
          type="number"
          name="phone"
          id="phone"
          value={user.phone}
          placeholder="Mobile Number"
          onChange={hndleChange}
        />
        <p>{formError.phone}</p>
        <input
          type="password"
          name="password"
          id="password"
          autoComplete="off"
          placeholder="Password"
          value={user.password}
          onChange={hndleChange}
        />
        <p>{formError.password}</p>
        <button type="submit">{success ? "Done" : "Register"}</button>
      </form>
    </Left>
  );
};
const Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  margin-top: 5%;

  form {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-right: 10%;
    margin-left: 10%;
  }
  h2 {
    margin-top: 2%;
    margin-bottom: 8px;
    color: black;
  }
  input {
    padding: 10px;
    width: 50%;
    margin-top: 30px;
    border: none;
    border-bottom: 2px solid #fc4b0a;
    transition: width 0.2s ease-in-out;

    border-radius: 2px;
  }
  input:focus {
    border: none;
    width: 51%;
    border-bottom: 0.5px groove blue;
    outline: none;
  }
  p {
    display: block;
    color: black;
    font-size: small;
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
      sans-serif;
    margin-top: 2px;
  }

  button {
    margin-top: 30px;
    border: none;
    background-color: yellow;
    padding: 8px;
    width: 95px;
    border-radius: 5px;
    font-weight: medium;
    cursor: pointer;
    transition: background-color 0.2s ease-in-out;
  }
  button:focus {
    width: 96px;
    background-color: orange;
  }
`;

export default Formm;
