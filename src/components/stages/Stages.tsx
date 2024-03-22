"use client";
import { useState } from "react";
import Stage1 from "./Stage1";
import Create from "./create-account/Create";
import Login from "./login/Login";
import Back from "../back/back";

const Stages = () => {
  const [step, setStep] = useState(1);
  const [activeForm, setActiveForm] = useState(1);
  const obj: any = {
    1: <Stage1 setStep={setStep} />,
    2: (
      <Create
        setStep={setStep}
        activeForm={activeForm}
        setActiveForm={setActiveForm}
      />
    ),
    3: <Login />,
  };
  return (
    <div className="h-full w-full flex flex-col">
      <div className="h-[46px] border-b border-b-lightMiniGray relative flex justify-center items-center ">
        {step > 1 && (
          <Back
            onClick={() =>
              activeForm > 1
                ? step === 2 && activeForm === 3 // on the third step of the create acount form
                  ? setStep(1)
                  : setActiveForm((prev) => prev - 1)
                : setStep((prev) => prev - 1)
            }
            className=" absolute left-4 top-4 "
          />
        )}
        {step === 2 && (
          <div className="flex items-center gap-[10px] ">
            {createAccount?.map((_, i) => (
              <div
                className={`size-3 rounded-full ${
                  activeForm >= i + 1 ? "bg-lightPurple " : "bg-lightGray"
                }  `}
                key={i + 1}
              ></div>
            ))}
          </div>
        )}
      </div>

      <div className="pb-5 px-5 flex-1 h-full w-full ">{obj[step]}</div>
    </div>
  );
};

export default Stages;

const createAccount = [
  {
    step: 1,
  },
  {
    step: 2,
  },
  {
    step: 3,
  },
];
