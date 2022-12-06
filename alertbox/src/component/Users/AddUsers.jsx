import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModel from "../UI/ErrorModel";
import classes from "./AddUsers.module.css";

const AddUsers = (props) => {
  const [userDetails, setUserDetails] = useState({
    name: "",
    age: "",
  });
  const [error,setError] = useState();

  function addUserHandler(e) {
    e.preventDefault();
    if (
      userDetails.name.trim().length === 0 ||
      userDetails.age.trim().length === 0 ||
      +userDetails.age < 1 ||
      +userDetails.age > 95
    ) {
        setError({
            title:"Invalid Input",
            message:"please enter valid name and age"
        })
      return;
    }
    props.onAddUsers(userDetails);
    setUserDetails({
      name: "",
      age: "",
    });
  }

  function UserDetailsUpdateHandler(e) {
    let name = e.target.name;
    let value = e.target.value;

    setUserDetails((previuos) => {
      return {
        ...previuos,
        [name]: value,
      };
    });
  }

  const errorHandler =() =>{
    setError(null)
  }

  return (
    <div>
     {error && <ErrorModel title={error.title} message={error.message} onConfirm={errorHandler}/>}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">UserName</label>
          <input
            id="username"
            type="text"
            name="name"
            onChange={UserDetailsUpdateHandler}
            value={userDetails.name}
          ></input>
          <label htmlFor="age">Age (years)</label>
          <input
            id="age"
            type="number"
            name="age"
            onChange={UserDetailsUpdateHandler}
            value={userDetails.age}
          ></input>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUsers;
