import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Spinner = () => {
  const [count, setCount] = useState(5);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevValue) => --prevValue);
    }, 1000);
    count === 0 &&
      navigate("/login", {
        state: location.pathname,
      });
    return () => clearInterval(interval);
  }, [count, navigate, location]);

  return (
    <div className="flex justify-center items-center h-screen">
      <button
        type="button"
        className="bg-indigo-500 text-white p-6 rounded-lg"
        disabled
      >
        Redirecting in a {count} second... Processing...
      </button>
    </div>
  );
};

export default Spinner;
