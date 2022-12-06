import React, { useState } from "react";
import AddUsers from "./component/Users/AddUsers";
import UsersList from "./component/Users/UsersList";

const App = () => {
  const [usersList, setUsersList] = useState([]);

  function addUserHandler(props) {
    setUsersList((previous) => {
      return [...previous, { props,id:Math.random().toString()}];
    });
  }
  return (
    <div>
      <AddUsers onAddUsers={addUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
};

export default App;
