import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import TittleText from "../../components/atoms/TittleText";
import { toast } from "react-toastify";
import axios from "axios";
import { useAuth } from "../../components/context/auth";

const Login = () => {
  // custome hooks
  const [auth, setAuth] = useAuth();

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //   handle form Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/auth/login`,
        { email, password }
      );
      if (res.data.success) {
        toast.success(res.data.message);
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token,
        });
        // save user in local storeage
        localStorage.setItem("auth", JSON.stringify(res.data));
        navigate("/");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("somthing went wrong");
    }
  };
  return (
    <>
      <div className="flex items-center justify-center p-12">
        {/* <!-- Author: FormBold Team --> */}
        <div className="mx-auto w-full max-w-[550px] bg-white">
          <TittleText tittle="Login User" />
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label
                for="email"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Enter your email"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-3">
              <label
                for="password"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Enter Password"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div>
              <button className="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none">
                Login
              </button>
            </div>

            <div className="flex justify-center text-center my-4">
              <h2>Dont have an account ||</h2>
              <Link to="/register">
                <span className="text-green-700 ml-3">Register</span>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
