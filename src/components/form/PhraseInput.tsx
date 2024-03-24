"use client";
import React, { HTMLInputTypeAttribute } from "react";
import { Input } from "../ui/input";
import { useFormContext } from "react-hook-form";

interface Props {
  name: string;
  type?: HTMLInputTypeAttribute;
  required?: boolean;
  className?: string;
  placeholder?: string;
  rules?: {};
  id?: string | number;
  readonly?: boolean;
}
const PhraseInput = ({
  name,
  type,
  required,
  id,
  placeholder,
  readonly,
  rules,
}: Props) => {
  const { register } = useFormContext<any>();
  return (
    <div className="flex items-center h-[41px] w-full bg-deepBlack border focus-within:border-deepPurple border-grayFourSeven rounded-md shadow-phrase">
      <span className="phrase-text phrase-p">{id}.</span>
      <Input
        readOnly={readonly}
        className="h-full w-full bg-transparent border-[0px] outline-none text-[15px] "
        type={type}
        placeholder={placeholder}
        {...register(name, {
          required: required,
          validate: {
            ...rules,
          },
        })}
      />
    </div>
  );
};

export default PhraseInput;
