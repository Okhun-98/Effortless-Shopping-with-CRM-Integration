import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { routerData } from "./router.data";

export const Router: FC<{}> = () => {
  return (
    <Routes>
      {routerData.map((item) => {
        const Component=item.component
        return <Route path={item.path} element={<Component/>}/>
})}
    </Routes>
  );
};
