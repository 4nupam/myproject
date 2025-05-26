import React, { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { GoEyeClosed } from "react-icons/go";
import { RxEyeOpen } from "react-icons/rx";
import { useNavigate } from "react-router";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [show,setShow] = useState(false);
  const [Error, setError] = useState({});

  const navigate = useNavigate()

   const passwordHandler=()=>{
    setShow(!show)
   }

  const submitHandler = (e) => {
    e.preventDefault();

    let Objerror = {};
    if (!username.trim()) {
      Objerror.name = "Username or Email required";
    }
    if (!password.trim() || password.length < 8) {
      Objerror.password = "Password required more than 8 digit";
    }
    setError(Objerror);

    if (Object.keys(Objerror).length === 0) {
      console.log("Form Submitted", { username, password });
    }
  };
  return (
    <div className="min-h-screen min-w-full p-2 bg-gradient-to-br from-amber-100 to-amber-200 flex items-center justify-center">
      <div className="login_box bg-white rounded-2xl shadow-lg flex flex-col sm:flex-row overflow-hidden max-w-4xl w-full border border-amber-300">
        {/* Left Side: Form */}
        <div className="w-full sm:w-1/2 p-8 flex flex-col justify-center">
        <span className="text-3xl italic cursor-pointer text-amber-500 font-bold"
        onClick={()=>navigate('/')}
        >
            4
          </span>
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            WELCOME BACK
          </h2>
          <span className="text-sm text-gray-500 mb-4">
            Please enter your details
          </span>

          <button className="flex items-center justify-center gap-2 cursor-pointer border border-gray-300 
          rounded-md py-2 px-4 text-sm font-medium hover:bg-amber-300 hover:text-white transition mb-6">
            <FaGoogle className="text-red-500" /> Sign in with Google
          </button>

          <form className="flex flex-col gap-4">
            <div>
              <label
                className="block text-sm font-medium text-gray-700 mb-1"
                htmlFor="Email"
              >
                Email or Username{" "}
                <span className="text-red-500">{Error.name && Error.name}</span>
              </label>
              <input
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-amber-400"
                type="text"
                placeholder="Email or Username"
                onChange={(e) => setUsername(e.target.value)}
              />
              
            </div>
            <div className="relative">
  <label
    className="block text-sm font-medium text-gray-700 mb-1"
    htmlFor="Password"
  >
    Password{" "}
    <span className="text-red-500">
      {Error.password && Error.password}
    </span>
  </label>
  <input
    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-amber-400 pr-10"
    type={show ? "text" : "password"}
    placeholder="Password"
    onChange={(e) => setPassword(e.target.value)}
  />
  <div
    className="absolute right-3 top-9 cursor-pointer text-gray-500"
    onClick={passwordHandler}
  >
    {show ? <GoEyeClosed /> : <RxEyeOpen />}
  </div>
</div>


            <input
              type="submit"
              value="Login"
              className="w-full bg-amber-400 text-white font-semibold py-2 rounded-md hover:bg-amber-500 transition cursor-pointer"
              onClick={submitHandler}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  submitHandler();
                }
              }}
            />
          </form>

          <span className="text-sm text-center text-gray-600 mt-4">
  Don't have an ID?{" "}
  <b className="text-amber-500 hover:underline cursor-pointer" onClick={()=> navigate('/Signup')}>Sign up</b>
</span>


        </div>

        {/* Right Side: Image */}
        <div className="w-full sm:w-1/2 hidden sm:block">
          <img
            src="https://images.hdqwalls.com/wallpapers/wanderer-the-fragments-of-fate-ze.jpg"
            alt="Login Illustration"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
