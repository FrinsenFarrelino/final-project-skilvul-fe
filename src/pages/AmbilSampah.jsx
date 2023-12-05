import React from "react";
import PlasticImage from "../assets/plastic.png";
import BesiImage from "../assets/besi.png";
import KertasImage from "../assets/kertas.png";
import AluminiumImage from "../assets/aluminium.png";
import KacaImage from "../assets/kaca.png";
import ElektronikImage from "../assets/elektronik.png";

const AmbilSampah = () => {
  const handleCari = (e) => {
    e.preventDefault();
    window.location.href = "../ambil-sampah/berhasil";
  };

  return (
    <>
      <div className="pt-10 flex items-center justify-center">
        <div className="max-w-3xl p-6 bg-white shadow-lg rounded-md">
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
                  <img src={BesiImage} alt="" />
                  <p className="ml-2">Besi</p>
                </div>
                <button className="bg-green-800 text-white py-2 px-4 rounded-md">
                  Tambah
                </button>
              </div>
              <div className="bg-white shadow-lg rounded-md p-4 flex items-center justify-between w-1/3">
                <div className="flex">
                  <img src={KertasImage} alt="" />
                  <p className="ml-2">Kertas</p>
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
                  <img src={AluminiumImage} alt="" />
                  <p className="ml-2">Aluminium</p>
                </div>
                <button className="bg-green-800 text-white py-2 px-4 rounded-md">
                  Tambah
                </button>
              </div>
              <div className="bg-white shadow-lg rounded-md p-4 flex items-center justify-between w-1/3">
                <div className="flex">
                  <img src={KacaImage} alt="" />
                  <p className="ml-2">Kaca</p>
                </div>
                <button className="bg-green-800 text-white py-2 px-4 rounded-md">
                  Tambah
                </button>
              </div>
              <div className="bg-white shadow-lg rounded-md p-4 flex items-center justify-between w-1/3">
                <div className="flex">
                  <img src={ElektronikImage} alt="" />
                  <p className="ml-2">Elektronik</p>
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
            <button
              onClick={handleCari}
              className="bg-green-800 w-full text-white py-2 px-4 rounded-md"
            >
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
