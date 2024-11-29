import { Work_Sans } from "next/font/google";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

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
  const [isLoggedIn, setIsLoggedIn] = useState("false");
  const [isCreateAcc, setIsCreateAcc] = useState(false);

  // are conditions true?
  const [isNameValid, setIsNameValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [isPassConfirmValid, setIsPassConfirmValid] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);

  const [isFormValid, setIsFormValid] = useState(false);

  // errors
  const [usernameErr, setUsernameErr] = useState("");
  const [passwordErr, setPasswordErr] = useState("");
  const [passwordConfirmErr, setPasswordConfirmErr] = useState("");
  const [emailErr, setEmailErr] = useState("");

  // data from database
  const url = "http://localhost:5000/api/user";
  const authUrl = "http://localhost:5000/api/auth/login";
  const [dataBaseUsers, setDataBaseUsers] = useState(null);
  const [dataBaseAuth, setDataBaseAuth] = useState(null);

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
    if (isCreateAcc) {
      if (
        isNameValid &&
        isEmailValid &&
        isPasswordValid &&
        isPassConfirmValid
      ) {
        setIsFormValid(true);
      } else {
        setIsFormValid(false);
      }
    } else {
      if (isEmailValid && isPasswordValid) {
        setIsFormValid(true);
      } else {
        setIsFormValid(false);
      }
    }
  }

  useEffect(() => {
    isFormValidCheck();
  }, conditions);

  function userHasNoAcc() {
    if (!isCreateAcc) {
      setIsCreateAcc(true);
    } else {
      setIsCreateAcc(false);
    }
  }

  const [formDataToShow, setFormDataToShow] = useState(null);
  async function handleSignIn() {
    try {
      const res = await fetch(authUrl, {
        method: "POST",
        body: JSON.stringify({
          email: email,
          password: password,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(`response :`, res);
      const data = await res.json();

      console.log(`data :`, data);
      Cookies.set("userToken", data.token);
      localStorage.setItem("isLoggedIn", true);

      setFormDataToShow(data.message);
    } catch (error) {
      console.log(`error fetching data.`, error);
    }
  }

  // async function fetchUserNameData() {
  //   try {
  //     const res = await fetch(url);
  //     const users = await res.json();
  //     setDataBaseUsers(users);
  //   } catch (error) {
  //     console.log(`error fetching data.`, error);
  //   }
  // }
  async function fetchSignIn() {
    try {
      const res = await fetch(authUrl);
      const data = await res.json();
      setDataBaseAuth(data);
    } catch (error) {
      console.log(`error fetching data.`, error);
    }
  }
  useEffect(() => {
    fetchSignIn();
  }, []);

  async function gatherAndPushData() {
    fetchUserNameData();
  }

  return (
    <form className={` max-w-fit p-4`}>
      {/* {console.log(dataBaseUsers, dataBaseAuth)} */}
      <div className="flex flex-wrap -mx-3 mb-6">
        {isCreateAcc && (
          <div className="w-full px-3 mb-6 md:mb-0">
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
        )}
        <div className="w-full px-3">
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
        <br></br>
        <p className="text-red-600 text-xs italic w-full">
          {emailErr && emailErr}
        </p>
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
      {isCreateAcc && (
        <div className={`flex flex-wrap -mx-3 mb-6`}>
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
      )}
      <button
        className="p-4 rounded bg-transparent border-yellow-400"
        id="SubmitBtn"
        // disabled={!isFormValid}
        disabled={false}
        onClick={(e) => {
          e.preventDefault();
          handleSignIn();
        }}
      >
        Submit
      </button>
      {!isCreateAcc ? (
        <p className="text-center">
          If you don't have an account,
          <button
            className="text-blue-800 text-lg"
            onClick={(e) => {
              e.preventDefault();
              userHasNoAcc();
            }}
          >
            Create Here!
          </button>
        </p>
      ) : (
        <p
          className="text-center"
          onClick={(e) => {
            e.preventDefault();
            userHasNoAcc();
          }}
        >
          If you want to sign in,
          <button className="text-blue-800 text-lg"> Click Here!</button>
        </p>
      )}
    </form>
  );
}
