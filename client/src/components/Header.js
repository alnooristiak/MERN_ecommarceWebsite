import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "./context/auth";
import { toast } from "react-toastify";
import UserIcon from "./atoms/UserIcon";

const Header = () => {
  const [auth, setAuth] = useAuth();

  // logout hendeler
  const handleLogOut = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    toast.success("User Logout Successfully");
  };

  return (
    <>
      <header className="sticky top-0 flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-blue-600 border-b border-white/[.5] text-sm py-3 sm:py-0">
        <nav
          className="relative max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex items-center justify-between">
            <Link
              className="flex-none text-xl font-semibold text-white"
              to="/"
              aria-label="Brand"
            >
              Brand
            </Link>
            <div className="sm:hidden">
              <button
                type="button"
                className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-md border border-white/[.5] font-medium text-white/[.5] shadow-sm align-middle hover:bg-white/[.1] hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm"
                data-hs-collapse="#navbar-collapse-with-animation"
                aria-controls="navbar-collapse-with-animation"
                aria-label="Toggle navigation"
              >
                <svg
                  className="hs-collapse-open:hidden w-4 h-4"
                  width={16}
                  height={16}
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                  />
                </svg>
                <svg
                  className="hs-collapse-open:block hidden w-4 h-4"
                  width={16}
                  height={16}
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                </svg>
              </button>
            </div>
          </div>
          <div
            id="navbar-collapse-with-animation"
            className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block"
          >
            <div className="flex flex-col gap-y-4 gap-x-0 mt-5 sm:flex-row sm:items-center sm:justify-end sm:gap-y-0 sm:gap-x-7 sm:mt-0 sm:pl-7">
              <Link
                className="font-medium text-white sm:py-6"
                to="/about"
                aria-current="page"
              >
                About
              </Link>
              <Link
                className="font-medium text-white/[.8] hover:text-white sm:py-6"
                to="/contact"
              >
                Contact
              </Link>
              <Link
                className="font-medium text-white/[.8] hover:text-white sm:py-6"
                to="/policy"
              >
                PrivetPolicy
              </Link>
              <Link
                className="font-medium text-white/[.8] hover:text-white sm:py-6"
                to="/cart"
              >
                Cart
              </Link>
              {!auth.user ? (
                <>
                  <Link
                    className="font-medium text-white/[.8] hover:text-white sm:py-6"
                    to="/register"
                  >
                    Register
                  </Link>
                  <Link
                    className="flex items-center gap-x-2 font-medium text-white/[.8] hover:text-white sm:border-l sm:border-white/[.3] sm:my-6 sm:pl-6"
                    to="/login"
                  >
                    <UserIcon />
                    Log in
                  </Link>
                </>
              ) : (
                <>
                  {/* user sec start */}
                  <spa
                    className="hs-dropdown [--strategy:static] 
                  sm:[--strategy:fixed] [--adaptive:none] 
                  sm:[--trigger:hover] sm:border-l
                   sm:border-white/[.3] sm:my-6 sm:pl-6"
                  >
                    <button
                      type="button"
                      className="flex items-center w-full text-slate-900 hover:text-white font-medium"
                    >
                      <UserIcon />
                      {auth?.user?.name}
                    </button>

                    <div className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] sm:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 sm:w-48 hidden z-10 bg-white sm:shadow-md rounded-lg p-2 dark:bg-gray-800 sm:dark:border dark:border-gray-700 dark:divide-gray-700 before:absolute top-full sm:border before:-top-5 before:left-0 before:w-full before:h-5">
                      <Link
                        className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                        to={`/dashboard/${
                          auth?.user?.role === 1 ? "admin" : "user"
                        }`}
                      >
                        Dashboard
                      </Link>
                      <Link
                        onClick={handleLogOut}
                        className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                        to="/login"
                      >
                        Log Out
                      </Link>
                    </div>
                  </spa>
                  {/* user sec end */}
                </>
              )}
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
