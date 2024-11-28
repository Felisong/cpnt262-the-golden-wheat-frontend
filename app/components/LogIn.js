import { Work_Sans } from "next/font/google";
import { useEffect, useState } from "react";

const workSans = Work_Sans({
  subsets: ["latin"],
});

export default function LogIn() {
  // variables
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [email, setEmail] = useState("");
  const [validateForm, setValidateForm] = useState("");

  // are conditions true?
  const [isNameValid, setIsNameValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [isPassConfirmValid, setIsPassConfirmValid] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);

  const [isFormValid, setIsFormValid] = useState(true);

  // errors
  const [usernameErr, setUsernameErr] = useState("");
  const [passwordErr, setPasswordErr] = useState("");
  const [passwordConfirmErr, setPasswordConfirmErr] = useState("");
  const [emailErr, setEmailErr] = useState("");

  // condition check
  const conditions = [
    isNameValid,
    isEmailValid,
    isPasswordValid,
    isPassConfirmValid,
  ];

  // functions for conditions
  function usernameCondition(currentName) {
    if (currentName.length <= 3 || currentName.length === 0) {
      setUsernameErr("Please make name longer than 3 characters.");
      setIsNameValid(false);
    } else {
      setUsernameErr("");
      setIsNameValid(true);
    }
  }
  function emailConditions(currentEmail) {
    if (currentEmail.match(/@/g) && currentEmail.length !== 0) {
      setEmail(currentEmail);
      setIsEmailValid(true);
      setEmailErr("");
    } else {
      setIsEmailValid(false);
      setEmailErr("Please input a valid email with @ in it.");
    }
  }

  function passwordConditions(currentPw) {
    if (currentPw.length <= 8 || currentPw.length === 0) {
      setIsPasswordValid(false);
      setPasswordErr("Please make password longer than 8 characters.");
    } else {
      setIsPasswordValid(true);
      setPasswordErr("");
    }
  }
  function passwordConfirmConditions(currentPwConfirm) {
    if (currentPwConfirm !== password) {
      setIsPassConfirmValid(false);
      setPasswordConfirmErr("Confirm password does not match password.");
    } else {
      setIsPassConfirmValid(true);
      setPasswordConfirmErr("");
    }
  }

  function isFormValidCheck() {
    if (isNameValid && isEmailValid && isPasswordValid && isPassConfirmValid) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  }
  useEffect(() => {
    isFormValidCheck();
  }, conditions);

  return (
    <form className={`w-full max-w-lg p-4`}>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-first-name"
          >
            User Name
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="grid-first-name"
            type="text"
            placeholder="Jane"
            onChange={(e) => {
              const value = e.target.value;
              setUserName(value);
              usernameCondition(value);
            }}
          />
          <p className="text-red-500 text-xs italic">
            {usernameErr && usernameErr}
          </p>
        </div>
        <div className="w-full md:w-1/2 px-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-last-name"
          >
            Email
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-last-name"
            type="text"
            placeholder="emailhere@gmail.com"
            onChange={(e) => {
              const value = e.target.value;
              setEmail(value);
              emailConditions(value);
            }}
          />
        </div>
        <p className="text-red-500 text-xs italic">{emailErr && emailErr}</p>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-password"
          >
            Password
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-password"
            type="password"
            placeholder="******************"
            onChange={(e) => {
              const value = e.target.value;
              setPassword(value);
              passwordConditions(value);
            }}
          />
          <p className="text-red-500 text-xs italic">
            {passwordErr && passwordErr}
          </p>
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-password"
          >
            Confirm Password
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-password-confirm"
            type="password"
            placeholder="******************"
            onChange={(e) => {
              const value = e.target.value;
              setPasswordConfirm(value);
              passwordConfirmConditions(value);
            }}
          />
          <p className="text-red-500 text-xs italic">
            {passwordConfirmErr && passwordConfirmErr}
          </p>
        </div>
      </div>
      <button
        className="p-4 rounded bg-transparent border-yellow-400"
        id="SubmitBtn"
        disabled={!isFormValid}
      >
        Submit
      </button>
    </form>
  );
}
