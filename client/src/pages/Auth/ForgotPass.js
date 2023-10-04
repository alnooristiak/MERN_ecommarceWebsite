import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";

import { Link, useNavigate } from "react-router-dom";
import TittleText from "../../components/atoms/TittleText";

const ForgotPass = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [answer, setAnswer] = useState("");

  //   handle form Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/auth/forgot-password`,
        { email, newPassword, answer }
      );
      if (res && res.data.success) {
        toast.success(res.data.message);

        navigate("/login");
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
          <TittleText tittle="Forgot Password" />
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label
                htmlFor="email"
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
                htmlFor="password"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
                placeholder="Enter Password"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>

            <div className="mb-3">
              <label
                htmlFor="answer"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Answer The Question
              </label>
              <input
                type="text"
                name="answer"
                id="answer"
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                required
                placeholder="What is your first crush name"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>

            <div>
              <button className="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none">
                Reset Password
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

export default ForgotPass;
