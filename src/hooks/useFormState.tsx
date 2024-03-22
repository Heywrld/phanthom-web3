"use client";
import { ReactNode, createContext, useContext, useState } from "react";

export const FormStateContext = createContext({});

export function FormStateProvider({ children }: { children: ReactNode }) {
  const [value, setValue] = useState({});
  return (
    <FormStateContext.Provider value={{ setValue, value }}>
      {children}
    </FormStateContext.Provider>
  );
}

export function useFormState() {
  const context = useContext<any>(FormStateContext);
  if (!context) {
    throw new Error("useFormState must be used within a FormStateProvider");
  }
  return context;
}
