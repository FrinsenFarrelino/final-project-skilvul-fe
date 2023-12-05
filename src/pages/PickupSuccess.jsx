import React from "react";
import BroImage from "../assets/bro.png";
import { Link } from "react-router-dom";

const PickupSuccess = () => {
  return (
    <>
      <div className="pt-10 flex items-center justify-evenly">
        <div className="max-w-3xl p-6 bg-white">
          <h1 className="text-3xl font-semibold text-green-800 mb-4 px-4 py-3 bg-green-300 rounded-lg">
            Pickup Sukses!
          </h1>
          <p>Terima kasih atas kepedulian anda terhadap lingkungan!</p>
        </div>
        <div>
          <img src={BroImage} alt="" width={400} />
        </div>
      </div>
      <br />
      <br />
      <div className="px-48">
        <Link to="/">
          <button className="bg-green-800 w-full text-white py-2 px-4 rounded-md">
            Selesai
          </button>
        </Link>
      </div>
    </>
  );
};

export default PickupSuccess;
