import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/actions/authActions.js";
import LoginImage from "../../assets/login.jpg";
import { Link } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const authError = useSelector((state) => state.auth.error);

  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(userData));
  };

  return (
    <>
      <section className="pt-10 flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
        <div className="md:w-1/3 max-w-sm">
          <img src={LoginImage} alt="Sample image" />
        </div>
        <div className="md:w-1/3 max-w-sm">
          <div className="text-center mb-5">
            <h1 className="text-3xl text-bold">Selamat Datang!</h1>
            <br />
            <p className="text-md">Masukkan detail akunmu</p>
          </div>
          <br />
          <form onSubmit={handleSubmit}>
            <input
              className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded"
              type="text"
              placeholder="Email Address"
              name="email"
              onChange={handleChange}
            />
            <input
              className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
            />
            <br />
            <br />
            <div className="text-center">
              <button
                className="w-full bg-green-600 hover:bg-green-700 px-10 py-3 text-white uppercase rounded text-xs tracking-wider"
                type="submit"
              >
                Masuk
              </button>
            </div>
          </form>
          {authError && (
            <div className="mt-4 font-semibold text-sm text-red-500 text-center">
              {authError.message}
            </div>
          )}
          <div className="mt-4 font-semibold text-sm text-slate-500 text-center">
            Tidak Punya akun?{" "}
            <Link
              className="text-green-600 hover:underline hover:underline-offset-4"
              to="/sign-up"
            >
              Register
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
