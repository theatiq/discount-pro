import React, { useCallback, useContext, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { IoEyeSharp } from "react-icons/io5";
import { FaEyeLowVision } from "react-icons/fa6";
import toast from "react-hot-toast";
import { EmailContext } from "../providers/EmailProvider";

const Forget = () => {
  const emailRef = useRef();
//   const [email, setEmail] = useContext(EmailContext);

  const [success, setSuccess] = useState(false);
  const [logInError, setLogInError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { signIn, setUser, handleForgot } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    setSuccess(false);
    setLogInError("");
    signIn(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        e.target.reset();
        setSuccess(true);
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        // alert(error.code);
        setLogInError(error.message);
      });
  };

  const handleReset = () => {
    
    const email = emailRef.current.value;
    if (!email) {
      
    } else {
      handleForgot(email).then(() => {
        toast.success("Reset Link sent to your email.");
      });
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-10">
        <h2 className="text-2xl font-semibold text-center">
          Password Recovery
        </h2>
        <form onSubmit={handleSubmit} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              ref={emailRef}
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          {/* <div className="form-control">
            <label onClick={handleReset} className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div> */}
          <div className="form-control mt-6">
            <button
              onClick={handleReset}
              className="btn btn-neutral rounded-none"
            >
              Reset Password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Forget;
