import React, { useEffect, useState } from "react";
import { useAuth } from "../context/auth";
import { Outlet } from "react-router-dom";
import axios from "axios";
import Spinner from "../atoms/Spinner";

export default function PrivateRoute() {
  const [ok, setOk] = useState(false);
  const [auth] = useAuth(); // Assuming useAuth returns [auth] as an array

  useEffect(() => {
    const authCheck = async () => {
      try {
        // Include the authorization token in the request headers if auth.token exists
        const headers = auth.token ? { Authorization: auth.token } : {};
        const res = await axios.get("/api/v1/auth/user-auth", { headers });

        if (res.status === 200 && res.data.ok) {
          setOk(true);
        } else {
          setOk(false);
        }
      } catch (error) {
        console.error("Error:", error);
        // Handle the error here, such as setting ok to false or redirecting to an error page.
      }
    };

    if (auth?.token) {
      authCheck();
    }
  }, [auth?.token]);

  return ok ? <Outlet /> : <Spinner />;
}
