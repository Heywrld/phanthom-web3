import React from "react";
import { Button } from "../ui/button";

const Stage2 = () => {
  return (
    <div className="c11 flex h-full  flex-col items-center w-full">
      <div className="h-full flex flex-col items-center justify-center ">
        <p className="mt-8 text-[#999] text-center text-xl font-normal leading-6 ">
          To get started, create a new wallet or import one from a seed phrase.
        </p>
      </div>
      <div className="mt-auto w-full flex flex-col gap-[10px]">
        <Button className="text-blackGray">Create a new wallet</Button>
        <Button className="bg-lightGray text-white">
          I already have a wallet
        </Button>
      </div>
    </div>
  );
};

export default Stage2;
