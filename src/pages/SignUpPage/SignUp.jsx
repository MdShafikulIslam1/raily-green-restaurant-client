import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import GoogleSignIn from "../../components/GoogleSignIn/GoogleSignIn";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      console.log("data", data);

      // Create user and wait for the promise to resolve
      await createUser(data.email, data.password);

      // Update user profile and wait for the promise to resolve
      await updateUserProfile(data.name, data.photoUrl);

      const saveUserData = { name: data.name, email: data.email };

      // Make a POST request and wait for the response
      const response = await fetch("http://localhost:5000/users", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(saveUserData),
      });

      const responseData = await response.json();

      if (responseData.insertedId) {
        Swal.fire("Successfully Signed Up");
        navigate("/");
      } else {
        Swal.fire("Error while signing up");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Sign Up now!</h1>
        </div>
        <div className="card lg:w-1/2 w-full shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                {...register("name", { required: true })}
                placeholder="Enter your name"
                className="input input-bordered"
              />
              {errors?.name && (
                <span className="text-red-600">Name is Required</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo Url</span>
              </label>
              <input
                type="text"
                {...register("photoUrl", { required: true })}
                placeholder="Enter your photo url"
                className="input input-bordered"
              />
              {errors?.photoUrl && (
                <span className="text-red-600">Photo url is Required</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                {...register("email", { required: true })}
                placeholder="Enter valid Email"
                className="input input-bordered"
              />
              {errors?.email && (
                <span className="text-red-600">Email is Required</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                {...register("password", {
                  required: true,
                  minLength: 8,
                  maxLength: 20,
                  pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                })}
                placeholder="Enter your Password"
                className="input input-bordered"
              />
              {errors?.password?.type === "required" && (
                <span className="text-red-600">Password is Required</span>
              )}
              {errors?.password?.type === "minLength" && (
                <span className="text-red-600">
                  Password must at least 8 character
                </span>
              )}
              {errors?.password?.type === "maxLength" && (
                <span className="text-red-600">
                  Password must less than 20 character
                </span>
              )}
              {errors?.password?.type === "pattern" && (
                <span className="text-red-600">
                  Password must have at least one uppercase,one lowercase,one
                  number and a special character
                </span>
              )}
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <input
                type="submit"
                value="sign Up"
                className="btn btn-primary"
              />
            </div>
          </form>
          <GoogleSignIn></GoogleSignIn>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
