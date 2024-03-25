"use client";
import ValidatedInput from "@/components/form/ValidatedInput";
import { Button } from "@/components/ui/button";
import { useFormState } from "@/hooks/useFormState";
import React, { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";

interface Props {
  setActiveForm: React.Dispatch<React.SetStateAction<number>>;
}
const AccountStep1 = ({ setActiveForm }: Props) => {
  const { value, setValue } = useFormState();
  const methods = useForm({ defaultValues: value });
  const [error, setError] = useState<string | null>(null);
  const [isChecked, setIsChecked] = useState(false);

  // console.log(formState);
  const password = methods.watch("password");
  const confirmPassword = methods.watch("confirmPassword");

  useEffect(() => {
    if (password ?? confirmPassword) {
      setError(null);
    }
  }, [password, confirmPassword]);

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  const onSubmit = (data: any) => {
    console.log(data?.password !== data?.confirmPassword);
    if (data?.password !== data?.confirmPassword) {
      setError("Password does not match");
    } else {
      setActiveForm((prev) => prev + 1);
      setValue((prev: any) => ({
        ...prev,
        ...data,
      }));
    }
  };
  const valid = isChecked && Boolean(password) && Boolean(confirmPassword);

  return (
    <div className="c11  h-full w-full">
      <FormProvider {...methods}>
        <form
          action=""
          onSubmit={methods.handleSubmit(onSubmit)}
          className="w-full h-full flex flex-col"
        >
          <div className="w-full mt-12 flex flex-col">
            <div className="mt-4 mb-8 w-full flex flex-col items-center justify-center ">
              <h1 className="leading-[34px] font-inter text-[28px] font-medium mb-[10px] text-white text-center">
                Create a password
              </h1>
              <p className="text-[#999] text-center text-lg font-normal leading-6 ">
                You will use this to unlock your wallet.
              </p>
            </div>
            <ValidatedInput
              className="mb-[10px]"
              placeholder="Password"
              type="password"
              name="password"
              required
            />

            <ValidatedInput
              placeholder="Confirm Password"
              type="password"
              name="confirmPassword"
              required
            />
            {error && <p className="mt-1 text-base text-warning">{error}</p>}
          </div>

          <div className="mt-auto w-full flex flex-col gap-[10px]">
            <div className="flex items-center">
              <span
                style={{
                  background: isChecked ? "rgb(40, 40, 40)" : "transparent",
                  border: "1px solid rgb(171, 159, 242)",
                  borderRadius: "6px",
                  height: "22px",
                  minWidth: "22px",
                  cursor: "pointer",
                  position: "relative",
                  outlineColor: "transparent",
                  outlineStyle: "none",
                  boxShadow: "none",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                onClick={toggleCheckbox}
              >
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={toggleCheckbox}
                  className="hidden"
                  data-testid="onboarding-form-terms-of-service-checkbox"
                />
                <span
                  aria-hidden="true"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    userSelect: "none",
                    pointerEvents: "none",
                    borderRadius: "4px",
                    opacity: isChecked ? 1 : 0,
                    zIndex: 1,
                    background: "rgb(171, 159, 242)",
                  }}
                >
                  {isChecked && (
                    <svg
                      width="0.9em"
                      height="0.9em"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M9.51948 13.9003L17.4173 6.26045C17.7763 5.91318 18.3546 5.91318 18.7136 6.26045L19.7308 7.24437C20.0897 7.59164 20.0897 8.15113 19.7308 8.4791L10.1776 17.7395C9.81863 18.0868 9.24026 18.0868 8.88127 17.7395L4.25428 13.2637C3.91524 12.9357 3.91524 12.3762 4.25428 12.0289L5.29137 11.045C5.63041 10.6977 6.20879 10.6977 6.56778 11.045L9.51948 13.9003Z"
                        fill="#222"
                      />
                    </svg>
                  )}
                </span>
              </span>
              <p
                color="#999"
                className="ml-4 text-lightBlack text-base"
                onClick={toggleCheckbox}
              >
                I agree to the
                <label className="text-deepPurple ml-1">Terms of Service</label>
              </p>
            </div>
            <Button
              type="submit"
              disabled={!valid}
              className="disabled:bg-lightGray bg-deepPurple disabled:text-white text-blackGray "
            >
              Continue
            </Button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default AccountStep1;
