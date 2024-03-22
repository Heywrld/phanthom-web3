import React from "react";
import AccountStep1 from "./AccountStep1";
import AccountStep2 from "./AccountStep2";
import AccountStep3 from "./AccountStep3";

interface Props {
  activeForm: number;
  setActiveForm: React.Dispatch<React.SetStateAction<number>>;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}
const Create = ({ activeForm, setActiveForm, setStep }: Props) => {
  const step: any = {
    1: <AccountStep1 setActiveForm={setActiveForm} />,
    2: <AccountStep2 setActiveForm={setActiveForm} />,
    3: <AccountStep3 setStep={setStep}/>,
  };

  return <>{step[activeForm]}</>;
};

export default Create;
