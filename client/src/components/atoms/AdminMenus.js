import React from "react";
import { Link } from "react-router-dom";
import TittleText from "./TittleText";

const AdminMenus = () => {
  return (
    <>
      <div>
        <TittleText tittle="Admin Dashboard" />
      </div>
      <ul className="list-disc flex justify-center py-5 space-x-6">
        <li className="inline-block">
          <Link
            className="py-4 px-1 inline-flex items-center gap-2 text-sm whitespace-nowrap text-blue-500 hover:text-blue-700"
            to="/dashboard/admin/create-category"
          >
            Create Category
          </Link>
        </li>
        <li className="inline-block">
          <Link
            className="py-4 px-1 inline-flex items-center gap-2 text-sm font-medium whitespace-nowrap text-blue-500 hover:text-blue-700"
            to="/dashboard/admin/create-product"
            aria-current="page"
          >
            Create Product
          </Link>
        </li>
        <li className="inline-block">
          <Link
            className="py-4 px-1 inline-flex items-center gap-2 text-sm whitespace-nowrap text-blue-500 hover:text-blue-700"
            to="/dashboard/admin/users"
          >
            Users
          </Link>
        </li>
      </ul>
    </>
  );
};

export default AdminMenus;
