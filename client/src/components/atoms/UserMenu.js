import React from "react";
import { Link } from "react-router-dom";
import TittleText from "./TittleText";

const UserMenu = () => {
  return (
    <>
      <div>
        <TittleText tittle="User Dashboard" />
      </div>
      <ul className="list-disc flex justify-center py-5 space-x-6">
        <li className="inline-block">
          <Link
            className="py-4 px-1 inline-flex items-center gap-2 text-sm whitespace-nowrap text-blue-500 hover:text-blue-700"
            to="/dashboard/user/profile"
          >
            My Profile
          </Link>
        </li>
        <li className="inline-block">
          <Link
            className="py-4 px-1 inline-flex items-center gap-2 text-sm whitespace-nowrap text-blue-500 hover:text-blue-700"
            to="/dashboard/user/oders"
          >
            My Oders
          </Link>
        </li>
      </ul>
    </>
  );
};

export default UserMenu;
