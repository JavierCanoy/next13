import React from "react";

export default function page({ formData, setFormData }) {
  return (
    <div className="">
      <div className=" my-10">
        <label>username </label>
        <input
          type="text"
          placeholder="username"
          value={formData.username}
          onChange={(event) => {
            setFormData({ ...formData, username: event.target.value });
          }}
          name="username"
        ></input>
      </div>
      <div className=" my-10">
        <label>password </label>
        <input type="password" name="password"
         value={formData.password}
         onChange={(event) => {
           setFormData({ ...formData, password: event.target.value });
         }}
        ></input>
      </div>
    </div>
  );
}
