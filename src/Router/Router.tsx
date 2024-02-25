import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { routerData } from "./router.data";
import React from "react";
import { AuthGuard } from "../guards/AuthGuard";

export const Router: FC<{}> = () => {
  return (
    <Routes>
      {routerData.map((item, index) => {
        const Component = item.component;
        if (item.isPublish) {
          return <Route path={item.path} element={<Component />} key={index} />;
        } else {
          return (
            <Route
              path={item.path}
              element={
                <AuthGuard>
                  <Component />
                </AuthGuard>
              }
              key={index}
            />
          );
        }
      })}
    </Routes>
  );
};
