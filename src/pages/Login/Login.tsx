import { FC } from "react";
import { Button, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { IInputLogin } from "../../types/login";
import { useNavigate } from "react-router-dom";

export const Login: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IInputLogin>();
  const navigate = useNavigate();

  const onSubmit = (data: IInputLogin) => {
    fetch("https://fakestoreapi.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: data.username,
        password: data.password,
      }),
    })
      .then((res) => res.json())
      .then((responseData: { token: string }) => {
        localStorage.setItem("TOKEN", responseData.token);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div
      className=" w-full h-screen flex justify-center items-center bg-local "
      style={{
        backgroundImage:
          "url(https://images.pexels.com/photos/911738/pexels-photo-911738.jpeg?auto=compress&cs=tinysrgb&h=600)",
      }}
    >
      <form
        className=" w-[500px] h-[400px]  flex flex-col  space-y-4 items-center justify-center  rounded-md bg-gray-400 border-2 border-blue-400"
        onSubmit={handleSubmit(onSubmit)}
      >
        <TextField
          className=" w-[300px]"
          label="user name"
          variant="outlined"
          {...register("username", {
            required: "Username is required.",
            minLength: {
              value: 6,
              message: "Username should be at-least 6 characters",
            },
          })}
        />
        {errors.username && (
          <p className=" text-red-500">{errors.username.message}</p>
        )}

        <TextField
          className=" w-[300px]"
          label="Password"
          variant="outlined"
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Password should be at-least 6 characters",
            },
          })}
        />
        {errors.password && (
          <p className=" text-red-500">{errors.password.message}</p>
        )}

        <div className=" bg-cyan-400 rounded-md ">
          <Button className="w-[200px]" type="submit">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};
