import { useState } from "react";

export default function LogIn() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  return (
    <>
      <form className="flex flex-col">
        <label>Username:</label>
        <input></input>
        <label>Password:</label>
        <input></input>
      </form>
    </>
  );
}
