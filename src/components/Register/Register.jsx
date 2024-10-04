import { FaEyeSlash, FaEye } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";

const Register = () => {
  const { signUp } = useAuth();

  // const [registerError,setRegisterError] =useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const navigate =useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const {email,password} = data;
    signUp(email,password)
    .then(result =>{
        console.log(result.user);
        navigate('/')
        
    })
    .catch(error =>{
        console.error(error);
        
    })
    
  };








        //  OLD CODE

  // const handleRegister = e =>{
  //     e.preventDefault();

  //     const name = e.target.name.value;
  //     const email = e.target.email.value;
  //     const password = e.target.password.value;
  //     const terms = e.target.terms.checked;
  //     // console.log('user coming soon',name,terms);

  //     // create users
  //     signUp(email,password)
  //     .then(res => {
  //         console.log(res.user);

  //     })
  //     .catch(error => {
  //         console.error(error);

  //     })

  // }

  // regex =password validation
  // /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/

  return (
    <div className="w-1/2 border-2 shadow-2xl border-gray-400 rounded-xl mx-auto p-10 mt-5">
      <h1 className="text-center font-bold text-3xl text-sky-500">This is Register Page</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="container mx-auto py-5">
        <input
          className="w-full border border-gray-400 rounded-md p-4 text-xl mb-3"
          type="text"
          placeholder="Enter Your Name"
           {...register("FullName", { required: true })}
        />
        {errors.FullName && <span className="text-red-600 mb-3 text-xl font-semibold">This field is required</span>}
        <br />
        <input
          className="w-full border border-gray-400 rounded-md p-4 text-xl mb-3"
          type="email"
          name="email"
          placeholder="Enter Your email"
          {...register("email", { required: true })}
        />
            {errors.email && <span className="text-red-600 mb-3 text-xl font-semibold">This field is required</span>}
        <br />
        <div className="relative">
          <input
            className="w-full border border-gray-400 rounded-md p-4 text-xl mb-3"
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
          <input className="w-10 h-6" type="checkbox" name="terms" />{" "}
          <span className="text-xl text-gray-600 font-semibold">I accept all terms & conditions </span>
        </div>
        <button className="w-full h-16 text-xl font-bold btn bg-gradient-to-r from-cyan-500 to-blue-500">Register</button>
      </form>
      <p className="text-xl font-bold mx-auto">
        Already have an account?{" "}
        <Link className="text-sky-600" to="/login">
          Login Now
        </Link>
      </p>
    </div>
  );
};

export default Register;
