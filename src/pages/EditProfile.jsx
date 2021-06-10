import React, { useState, useEffect } from "react";
import * as CONSTS from "../utils/consts.js";
import * as PATHS from "../utils/paths";

function EditProfile() {
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
      <div>
        <button onClick={EditProfile}> Submit </button>
      </div>
    </div>
  );
}
export default EditProfile;
