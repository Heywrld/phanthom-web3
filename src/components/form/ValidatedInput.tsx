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
}
const ValidatedInput = ({
  name,
  type,
  required,
  className,
  placeholder,
  rules,
}: Props) => {
  const { register } = useFormContext<any>();
  return (
    <Input
      className={className}
      type={type}
      placeholder={placeholder}
      {...register(name, {
        required: required,
        validate: {
          ...rules,
        },
      })}
    />
  );
};

export default ValidatedInput;
