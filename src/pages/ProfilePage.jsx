import React, { useState } from "react";

function ProfilePage() {
  React.useEffect(() => {
    console.log("hey there");

    return () => console.log("bye");
  });
  return (
    <div>
      <h1>Hi, person</h1>
    </div>
  );
}

export default ProfilePage;
