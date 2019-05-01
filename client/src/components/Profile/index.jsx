    
import React from "react";
import UserInfo from "./UserInfo"
const Profile = ({ session }) => (
    <div className="App">
    profile

      <UserInfo session={session} />
      {/* <UserRecipes username={session.getCurrentUser.username} /> */}
    </div>
  );

  export default Profile