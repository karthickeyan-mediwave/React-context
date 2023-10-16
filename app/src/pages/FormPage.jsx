import React from "react";
import Layout from "../components/Layout";
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { useState } from "react";

import { DataContext } from "../contexts/ThemeContext";
import { DataDispatchContext } from "../contexts/ThemeContext";
import { useInRouterContext } from "react-router-dom";

export const FormPage = () => {
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [email, setemail] = useState("");
  const themeContext = useContext(ThemeContext);
  const dataDispatchContext = useContext(DataDispatchContext);
  const dataContext = useContext(DataContext);
  function handleonchange(name, value) {
    if (name === "firstname") {
      setfirstname(value);
    } else if (name === "lastname") {
      setlastname(value);
    } else {
      setemail(value);
    }
  }

  function handleFormSumbit(e) {
    e.preventDefault();
    const updatedUser = {
      ...DataContext,
      firstname: firstname,
      lastname: lastname,
      email: email,
    };
    dataDispatchContext(updatedUser);
    console.log(updatedUser);
  }
  return (
    <div>
      <Layout title="form">
        <form className="form-class" onSubmit={(e) => handleFormSumbit(e)}>
          <div class="grid">
            <label for="firstname">
              First name
              <input
                type="text"
                id="firstname"
                name="firstname"
                placeholder="First name"
                onChange={(e) => handleonchange("firstname", e.target.value)}
                required
              />
            </label>

            <label for="lastname">
              Last name
              <input
                type="text"
                id="lastname"
                name="lastname"
                placeholder="Last name"
                onChange={(e) => handleonchange("lastname", e.target.value)}
                required
              />
            </label>
          </div>

          <label for="email">Email address</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email address"
            onChange={(e) => handleonchange("email", e.target.value)}
            required
          />
          <small>We'll never share your email with anyone else.</small>

          <button type="submit">Submit</button>
        </form>
      </Layout>
    </div>
  );
};
