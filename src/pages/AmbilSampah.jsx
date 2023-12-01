import React from "react";
import PlasticImage from "../assets/plastic.png";

const AmbilSampah = () => {
  return (
    <>
      <div className="pt-10 flex items-center justify-center">
        <div className="max-w-2xl p-6 bg-white shadow-lg rounded-md">
          <h1 className="text-3xl font-semibold text-green-800 mb-4">Pickup</h1>
          <br />
          <hr />
          <br />
          <h1 className="text-3xl font-semibold text-green-800 mb-4">
            Input Data Sampah
          </h1>
          <p className="text-gray-700">
            Layanan ini membantu menghubungkan pengguna dengan penyedia jasa
            pengambilan sampah profesional untuk memastikan sampah kamu diproses
            dengan benar.
          </p>
          <br />
          <br />
          <form>
            <input
              className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded"
              type="text"
              placeholder="Alamat"
              name="alamat"
            />
            <br />
            <br />
            <p className="text-gray-700 font-semibold text-start mb-5">
              Jenis Sampah
            </p>
            <div className="flex justify-between">
              <div className="bg-white shadow-lg rounded-md p-4 flex items-center justify-between w-1/3">
                <div className="flex">
                  <img src={PlasticImage} alt="" />
                  <p className="ml-2">Plastik</p>
                </div>
                <button className="bg-green-800 text-white py-2 px-4 rounded-md">
                  Tambah
                </button>
              </div>
              <div className="bg-white shadow-lg rounded-md p-4 flex items-center justify-between w-1/3">
                <div className="flex">
                  <img src={PlasticImage} alt="" />
                  <p className="ml-2">Plastik</p>
                </div>
                <button className="bg-green-800 text-white py-2 px-4 rounded-md">
                  Tambah
                </button>
              </div>
              <div className="bg-white shadow-lg rounded-md p-4 flex items-center justify-between w-1/3">
                <div className="flex">
                  <img src={PlasticImage} alt="" />
                  <p className="ml-2">Plastik</p>
                </div>
                <button className="bg-green-800 text-white py-2 px-4 rounded-md">
                  Tambah
                </button>
              </div>
            </div>
            <br />
            <div className="flex justify-between">
              <div className="bg-white shadow-lg rounded-md p-4 flex items-center justify-between w-1/3">
                <div className="flex">
                  <img src={PlasticImage} alt="" />
                  <p className="ml-2">Plastik</p>
                </div>
                <button className="bg-green-800 text-white py-2 px-4 rounded-md">
                  Tambah
                </button>
              </div>
              <div className="bg-white shadow-lg rounded-md p-4 flex items-center justify-between w-1/3">
                <div className="flex">
                  <img src={PlasticImage} alt="" />
                  <p className="ml-2">Plastik</p>
                </div>
                <button className="bg-green-800 text-white py-2 px-4 rounded-md">
                  Tambah
                </button>
              </div>
              <div className="bg-white shadow-lg rounded-md p-4 flex items-center justify-between w-1/3">
                <div className="flex">
                  <img src={PlasticImage} alt="" />
                  <p className="ml-2">Plastik</p>
                </div>
                <button className="bg-green-800 text-white py-2 px-4 rounded-md">
                  Tambah
                </button>
              </div>
            </div>
            <br />
            <input
              className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded"
              type="text"
              placeholder="Deskripsi (opsional)"
              name="deskripsi"
            />
            <br />
            <br />
            <button className="bg-green-800 w-full text-white py-2 px-4 rounded-md">
              Cari
            </button>
            <br />
          </form>
        </div>
      </div>
    </>
  );
};

export default AmbilSampah;
