import { Navigate } from "react-router-dom";
import { IGuardProps } from "../types/authGuard";
import { FC } from "react";

export const AuthGuard: FC<IGuardProps> = ({ children }) => {
  if (!localStorage.getItem("TOKEN")) {
    return <Navigate to="/login" />;
  }

  return children;
};
