import React, { useState } from "react";
import * as CONSTS from "../utils/consts";
import * as PATHS from "../utils/paths";

function ProfilePage(props) {
  const { user } = props;

  return (
    <div>
      <h1>Hey, you. </h1>
      <br></br>
      <h2>
        {user.username}, you literally can't even. Why don't you take some much
        deserved time for yourself.{" "}
      </h2>
      <br></br>
      <p>
        <button className="profileButtons">Browse videos</button>
      </p>
      <p>
        <button className="profileButtons">Medidate</button>
      </p>

      <p>
        <button className="profileButtons">My Videos</button>
      </p>
    </div>
  );
}

export default ProfilePage;
