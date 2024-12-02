import React, { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import imageIcon from "../assets/Logo.jfif";
import userImg from "../assets/user.png";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../providers/AuthProvider";

const Navbar = () => {
  const { user, setUser, logOut, createUserGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleGoogleLogin = () => {
    createUserGoogle().then((result) => {
      const user = result.user;
      setUser(user);
      navigate("/");
    });
  };
  const links = (
    <>
      {user && (
        <>
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/brands"}>Brands</NavLink>
          </li>
          <li>
            <NavLink to={"/myProfile"}>My Profile</NavLink>
          </li>
        </>
      )}

      <li>
        <NavLink to={"/about"}>About Dev</NavLink>
      </li>
      <li>
        <NavLink to={"/fest"}>Coupon Fest</NavLink>
      </li>
      <li>
        <NavLink to={"/letter"}>News Letter</NavLink>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <Link
            to={"/"}
            className="btn btn-xs btn-ghost text-blue-950 font-semibold"
          >
            <img className="w-3" src={imageIcon} alt="User Image" />
            DiscountPRO
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div className="lg:flex items-center gap-2">
              <div className="">
                {user?.email ? (
                  <div>
                    <img
                      className="w-5 rounded-full"
                      src={user?.photoURL}
                      alt=""
                    />
                  </div>
                ) : (
                  <img className="w-5" src={userImg} alt="" />
                )}
              </div>
              <p className="text-xs bg-purple-100">{user.email}</p>
              <button onClick={logOut} className="btn btn-sm textarea-xs">
                Logout
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-1">
              <button
                onClick={handleGoogleLogin}
                className="btn btn-sm textarea-xs"
              >
                <FcGoogle />
                in
              </button>

              <NavLink to={"/auth/login"} className="btn btn-sm textarea-xs">
                Login
              </NavLink>
              <NavLink to={"/auth/register"} className="btn btn-sm textarea-xs">
                Register
              </NavLink>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
