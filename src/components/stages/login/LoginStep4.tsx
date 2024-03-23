import React from "react";
import Rive from "@rive-app/react-canvas";
import { Button } from "@/components/ui/button";
import { useFormState } from "@/hooks/useFormState";

interface Props {
  setStep: any;
  setActiveForm: any;
}
const LoginStep4 = ({ setActiveForm, setStep }: Props) => {
  const src = "/ghost.riv";
  const { setValue } = useFormState();
  return (
    <div className="flex flex-col items-center h-full">
      <Rive src={src} stateMachines="bumpy" className="h-[240px] w-[240px] " />
      <div className="mt-auto w-full flex flex-col items-center justify-center ">
        <h1 className="leading-[34px] font-inter text-[28px] font-medium mb-[5px] text-white text-center">
          You&apos;re all done!
        </h1>
        <p className="text-lightBlack text-center text-base font-normal leading-6 ">
          You can now fully enjoy your wallet.
        </p>
        <Button
          type="button"
          onClick={() => {
            setStep(1);
            setValue({});
            setActiveForm(1);
          }}
          className="mt-[2.25rem] disabled:bg-lightGray bg-deepPurple disabled:text-white text-blackGray "
        >
          Get Started
        </Button>
      </div>
    </div>
  );
};

export default LoginStep4;
