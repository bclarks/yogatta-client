import React from "react";

function UpdatePassword() {
  return (
    <form>
      <div>
        <label>Current Password</label>
        <input name="password" placeholder="Current Password" />
      </div>
      <div>
        <label>New Password</label>
        <input name="password" placeholder="Desired Password" />
      </div>
      <div>
        <label>Confirm New Password</label>
        <input name="password" placeholder="Confirm New Password" />
      </div>
      <button>Align yourself</button>
    </form>
  );
}

export default UpdatePassword;
