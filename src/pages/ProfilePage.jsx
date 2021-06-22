import React from "react";
import * as CONSTS from "../utils/consts";
import * as PATHS from "../utils/paths";
import * as USER_SERVICE from "../services/profile.service.js";
import { Link } from "react-router-dom";
import UpdatePassword from "../components/Profile/UpdatePassword";
import UpdateProfile from "../components/Profile/UpdateProfile";
import "./profilePage.css";

function ProfilePage(props) {
  const [displayUpdateProfile, setDisplayUpdateProfile] = React.useState(false);
  const [displayUpdatePassword, setDisplayUpdatePassword] =
    React.useState(false);
  const { user, authenticate } = props;
  const usernameFromProps = props.match.params.username;
  const accessToken = localStorage.getItem(CONSTS.ACCESS_TOKEN);

  function profileToggle() {
    setDisplayUpdateProfile(!displayUpdateProfile);
  }

  function passwordToggle() {
    setDisplayUpdatePassword(!displayUpdatePassword);
  }

  function DeleteProfile() {
    USER_SERVICE.USER_DELETE(usernameFromProps, accessToken)
      .then((response) => {
        console.log("The user has deleted");
        props.history.push(PATHS.HOMEPAGE);
        localStorage.removeItem(CONSTS.ACCESS_TOKEN);
        props.authenticate(null);
      })
      .catch((err) => {
        console.error("The error is: ", err.response);
      });
  }
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
        <Link to={PATHS.MEDIDATE} className="med-link">
          Meditate
        </Link>
      </p><br></br><br></br>

      {/* <p>
        <Link to={PATHS.MYVIDEOS} className="saved-link">
          My saved videos
        </Link>
      </p> */}
      <div className="Almighty-Buttons">
        <button onClick={profileToggle}>Update Username</button>
        {displayUpdateProfile && (
          <UpdateProfile user={user} authenticate={authenticate} />
        )}
        <button onClick={passwordToggle}>Update Password</button>
        {displayUpdatePassword && <UpdatePassword />}
        <button onClick={DeleteProfile}>Delete Account</button>
      </div>
    </div>
  );
}

export default ProfilePage;
