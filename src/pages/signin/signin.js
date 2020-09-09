import React from "react";
import "./signIn.scss";
import SignInComponent from "../../components/signIn/signIn";
import SignUpComponent from "../../components/sign-up/sign-up";

const SignIn = () => {
  return (
    <div className="sign-in-and-sign-up">
      <SignInComponent />
      <SignUpComponent />
    </div>
  );
};

export default SignIn;
