import { signInWithGooglePopup } from "../../utils/firebase/firebase.utils";

import React from "react";
const SignIn = () => {
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    console.log(response);
  };
  return (
    <div>
      <h1>Sign-in Page</h1>
      <button onClick={logGoogleUser}>Sign-In with Google PopUp</button>
    </div>
  );
};

export default SignIn;
