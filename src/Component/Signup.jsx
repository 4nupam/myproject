import React, { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { GoEyeClosed } from "react-icons/go";
import { RxEyeOpen } from "react-icons/rx";
import Tc from "./Popups/Tc"
import { useNavigate } from "react-router";
const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  const [checkbox, setCheckbox] = useState(false);
  const [error, setError] = useState({});
  const [popup,setpopup] = useState(false)

  const navigate = useNavigate()

  const togglePassword = () => setShowPassword(!showPassword);
  const toggleConfirm = () => setShowConfirm(!showConfirm);
  const toggleCheck = () => setCheckbox(!checkbox);
  
  const submitHandler = (e) => {
    e.preventDefault();
    let Objerror = {};
    if (!username.trim()) {
      Objerror.username = "Please Provide Full Name";
    }
    if (!email.trim()) {
      Objerror.email = "Email Required";
    }
    if (!password.trim() || password.length < 8) {
      Objerror.password = "fill correct 8 digit password";
    }
    if (
      !confirmpassword.trim() ||
      confirmpassword.length < 8 ||
      confirmpassword !== password
    ) {
      Objerror.confirmpassword =
        "Fill correct password or password not matched";
    }
    setError(Objerror);

    if (Object.keys(Objerror).length === 0) {
      console.log(Error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-100 to-amber-200 flex items-center justify-center px-4">
      <div className="flex flex-col sm:flex-row bg-white shadow-xl rounded-2xl overflow-hidden w-full max-w-5xl">
        {/* Form Section */}
        <div className="w-full sm:w-1/2 p-6">
          <span className="text-4xl italic cursor-pointer text-amber-500 font-bold mb-2 block" onClick={()=>navigate("/")}>
            4
          </span>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Ready to Start your Journey with us?
          </h2>
          <p className="text-sm text-gray-500 mb-6">
            Signup to our website and start leafing through us!
          </p>

          <form className="flex flex-col gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name{" "}
                {error.username && (
                  <span className="text-sm text-red-600">{error.username}</span>
                )}
              </label>
              <input
                type="text"
                placeholder="Full name"
                onChange={(e) => setUsername(e.target.name)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-amber-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email{" "}
                {error.email && (
                  <span className="text-sm text-red-600">{error.email}</span>
                )}
              </label>
              <input
                type="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-amber-400"
              />
            </div>

            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password{" "}
                {error.password && (
                  <span className="text-sm text-red-600">{error.password}</span>
                )}
              </label>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-amber-400"
              />
              <div
                className="absolute top-9 right-4 text-gray-500 cursor-pointer"
                onClick={togglePassword}
              >
                {showPassword ? <GoEyeClosed /> : <RxEyeOpen />}
              </div>
            </div>

            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Confirm Password{" "}
                {error.confirmpassword && (
                  <span className="text-sm text-red-600">
                   { error.confirmpassword}
                  </span>
                )}
              </label>
              <input
                type={showConfirm ? "text" : "password"}
                placeholder="Confirm Password"
                onChange={(e) => setConfirmpassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-amber-400"
              />
              <div
                className="absolute top-9 right-4 text-gray-500 cursor-pointer"
                onClick={toggleConfirm}
              >
                {showConfirm ? <GoEyeClosed /> : <RxEyeOpen />}
              </div>
            </div>

            <div className="flex items-start text-sm text-gray-600 gap-2">
              <input
                type="checkbox"
                className="mt-1"
                checked={checkbox}
                onChange={toggleCheck}
              />
              <span>
                I agree to the{" "}
                <a href="#" className="text-amber-500 hover:underline" onClick={()=> setpopup(true)}>
                  terms & conditions
                </a>

              </span>
               <div className="">{popup && <Tc onClose={()=> setpopup(false)}/>}</div> 
            </div>

            <button
              type="submit"
              onClick={submitHandler}
              className={`w-full ${
                checkbox ? "cursor-pointer" : "cursor-not-allowed"
              } ${
                checkbox ? "bg-amber-500" : "bg-gray-400"
              } hover:{checkbox ? "bg-amber-500" :"bg-gray-600"} transition text-white font-semibold py-2 rounded-md`}
            >
              Sign up
            </button>

            <button
              type="button"
              className="flex items-center justify-center gap-2 cursor-pointer border border-gray-300 
          rounded-md py-2 px-4 text-sm font-medium hover:bg-amber-500 hover:text-white transition mb-6"
            >
              <FaGoogle className="text-red-500" /> Sign up with Google
            </button>
          </form>

          <p className="text-sm text-center text-gray-600 mt-6">
            Have an ID?{" "}
            <b className="text-amber-500 hover:underline cursor-pointer" onClick={()=> navigate("/Login")}>
              Log In
            </b>
          </p>
        </div>

        {/* Image Section */}
        <div className="w-full sm:w-1/2 hidden sm:block">
          <img
            src="https://images.hdqwalls.com/wallpapers/honor-of-kings-campus-series-vz.jpg"
            alt="Sign up"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Signup;
