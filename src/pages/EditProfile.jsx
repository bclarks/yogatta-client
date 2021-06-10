import React, { useState } from "react";
import * as CONSTS from "../utils/consts.js";
import AUTH_SERVICE from "../services/auth.js";

function EditProfile(props) {
  const { user } = props;
  return (
    <div>
      <h1>Edit your profile</h1>
      <form className="auth__form">
        <label>Username</label>
        <input
          id="input-username"
          type="text"
          name="username"
          placeholder="Desired Username"
          required
        />
        <label>Password</label>
        <input
          id="input-password"
          type="password"
          name="password"
          placeholder="Desired Password"
          required
        />
      </form>
    </div>
  );
}

export default EditProfile;
