import React from "react";
import AdminMenus from "../../components/atoms/AdminMenus";
import { useAuth } from "../../components/context/auth";

const AdminDashboard = () => {
  const [auth] = useAuth();
  return (
    <>
      <div>
        <AdminMenus />
      </div>
      <div className="container mx-auto">
        <h1>content</h1>
        <h2 className="font-bold">Admin Name: {auth?.user?.name}</h2>
        <h2 className="font-bold">Admin Email: {auth?.user?.email}</h2>
        <h2 className="font-bold">Admin Contact: {auth?.user?.phone}</h2>
      </div>
    </>
  );
};

export default AdminDashboard;
