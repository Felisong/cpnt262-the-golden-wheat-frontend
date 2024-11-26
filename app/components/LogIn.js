import { useState } from "react";

export default function LogIn() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  return (
    <>
      <form>
        <label>Username:</label>
        <input></input>
        <label>Password:</label>
        <input></input>
      </form>
    </>
  );
}
