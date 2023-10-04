import React from "react";
import UserMenu from "../../components/atoms/UserMenu";
import { useAuth } from "../../components/context/auth";

const Dashboard = () => {
  const [auth] = useAuth();
  return (
    <>
      <div>
        <UserMenu />
      </div>
      <div className="container mx-auto flex justify-center py-6">
        <div>
          <h2 className="font-bold">Admin Name: {auth?.user?.name}</h2>
          <h2 className="font-bold">Admin Email: {auth?.user?.email}</h2>
          <h2 className="font-bold">Admin Contact: {auth?.user?.phone}</h2>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
