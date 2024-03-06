import { Navigate } from "react-router-dom";
import { IGuardProps } from "../types/authGuard";
import { FC } from "react";
import { useTokenStore } from "../stores/token";

export const AuthGuard: FC<IGuardProps> = ({ children }) => {
  const { token } = useTokenStore();
  if (!token) {
    return <Navigate to="/login" />;
  }

  return children;
};
