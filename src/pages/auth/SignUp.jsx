import React, { useState } from "react";
import SignUpImage from "../../assets/register.png";
import { register } from "../../redux/actions/authActions.js";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

const SignUp = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    nama: "",
    email: "",
    password: "",
    konfirmasi_password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(register(formData));
  };

  return (
    <>
      <section className="pt-20 flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
        <div className="md:w-1/3 max-w-sm">
          <img src={SignUpImage} alt="Sample image" />
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
              placeholder="Nama"
              name="nama"
              onChange={handleChange}
            />
            <input
              className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
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
            <input
              className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
              type="password"
              placeholder="Konfirmasi Password"
              name="konfirmasi_password"
              onChange={handleChange}
            />
            <br />
            <br />
            <div className="text-center">
              <button
                className="w-full bg-green-600 hover:bg-green-700 px-10 py-3 text-white uppercase rounded text-xs tracking-wider"
                type="submit"
              >
                Daftar
              </button>
            </div>
          </form>
          <div className="mt-4 font-semibold text-sm text-slate-500 text-center">
            Sudah Punya akun?{" "}
            <Link
              className="text-green-600 hover:underline hover:underline-offset-4"
              to="/login"
            >
              Login
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignUp;
