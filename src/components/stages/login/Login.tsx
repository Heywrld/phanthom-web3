import React from "react";
import LoginStep1 from "./LoginStep1";
import LoginStep2 from "./LoginStep2";
import LoginStep3 from "./LoginStep3";
import LoginStep4 from "./LoginStep4";

interface Props {
  activeForm: number;
  setActiveForm: React.Dispatch<React.SetStateAction<number>>;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}
const Login = ({ activeForm, setActiveForm, setStep }: Props) => {
  const step: any = {
    1: <LoginStep1 setActiveForm={setActiveForm} />,
    2: <LoginStep2 setActiveForm={setActiveForm} />,
    3: <LoginStep3 setActiveForm={setActiveForm} />,
    4: <LoginStep4 setStep={setStep} setActiveForm={setActiveForm} />,
  };
  return <>{step[activeForm]}</>;
};

export default Login;
