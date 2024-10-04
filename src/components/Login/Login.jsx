// import auth from "../Firebase/Firebase.init";
// import { sendPasswordResetEmail } from "firebase/auth";
import {  useRef, useState } from "react";
import { FaEyeSlash, FaEye } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import SocialLogin from "../SocialLogin/SocialLogin";
import useAuth from "../../hooks/useAuth";
import PasswordReset from "../PaaswordReset/PasswordReset";

const Login = () => {

  const { logInUser } = useAuth();

  const [showPassword, setShowPassword] = useState(false);
  const navigate =useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const {email,password} = data;
    logInUser(email,password)
    .then(result =>{
        console.log(result.user);
        navigate('/')
        
        
    })
    .catch(error =>{
        console.error(error);
        
    })
    
  };

  

  return (
    <div className="w-1/2 border mx-auto p-10 mt-5 bg-sky-400 rounded-xl">
      <h1 className="text-center font-bold text-3xl text-white pb-4">This is LogIn Page</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="container mx-auto py-5">
        <input
          className="w-full border border-gray-400 rounded-md p-4 text-xl mb-3 outline-none"
          type="email"
          name="email"
          placeholder="Enter Your email"
          {...register("email", { required: true })}
        />
          {errors.email && <span className="text-red-600 mb-3 text-xl font-semibold">This field is required</span>}
        <br />
        <div className="relative">
          <input
            className="w-full border border-gray-400 rounded-md p-4 text-xl mb-3 outline-none"
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
            {...register("password", { required: true })}
          />
          {errors.password && <span className="text-red-600 mb-3 text-xl font-semibold">This field is required</span>}
          <span onClick={() => setShowPassword(!showPassword)} className="text-2xl absolute right-3 top-5">
            {showPassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}
          </span>
          <br />
        </div>
        <div className="flex items-center py-4 pb-5">
          <p className="text-xl font-semibold hover:underline">
            {/* Forget Password */}
            <PasswordReset></PasswordReset>
          </p>
        </div>
        <button className="w-full h-16 text-xl font-bold btn border-primary  text-black">
          LogIn
        </button>
      </form>
      <p className="text-xl font-bold mx-auto">
        New Here?{" "}
        <Link className="text-white" to="/register">
          Please Register Now
        </Link>
      </p>
      <h3 className="text-center text-2xl font-bold pt-8 divider">continue with </h3>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Login;
