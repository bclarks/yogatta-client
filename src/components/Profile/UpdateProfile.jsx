import React from "react";
import * as PROFILE_SERVICE from "../../services/profile.service.js";
import * as CONSTS from "../../utils/consts";

function UpdateProfile(props) {
  const { user, authenticate } = props;
  const [form, setForm] = React.useState({
    username: user.username,
  });

  function handleChange(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const accessToken = localStorage.getItem(CONSTS.ACCESS_TOKEN);
    PROFILE_SERVICE.UPDATE_PROFILE(form, accessToken)
      .then((response) => {
        console.log("response:", response);
        authenticate(response.data.user);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username</label>
        <input
          name="username"
          placeholder="Desired Username"
          onChange={handleChange}
        />
      </div>

      <button>Align Yourself</button>
    </form>
  );
}

export default UpdateProfile;
