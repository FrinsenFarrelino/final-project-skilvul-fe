import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faHeart,
  faLightbulb,
} from "@fortawesome/free-solid-svg-icons";

const About = () => {
  return (
    <div className="pt-10 min-h-screen flex items-center justify-center bg-gradient-to-r from-green-500 to-teal-500">
      <div className="max-w-2xl p-6 bg-white shadow-lg rounded-md">
        <h1 className="text-3xl font-semibold text-green-800 mb-4">About Us</h1>
        <p className="text-gray-700">
          Di Indonesia, tahun 2022, Indonesia mengalami peningkatan volume
          limbah. Dari 68,5 juta ton di tahun 2021, sekarang telah menjadi 70
          juta ton. Dari 70 juta ton itu, hanya 7% yang terdaur ulang. Jadi,
          banyak sekali limbah yang belum terdaur ulang dengan baik. Di sini,
          kami menggabungkan pengetahuan mendalam dengan ide-ide kreatif untuk
          membantu user memahami peran user dalam upaya global untuk mengurangi
          limbah. Kami menyajikan beberapa fitur, yaitu pemantauan dan manajemen
          limbah terintegrasi, pengambilan limbah ke rumah-rumah, jual beli
          produk daur ulang, pengadaan workshop, artikel dan video edukasi
          mengenai limbah dan daur ulang, dll. Kami percaya bahwa, bersama-sama,
          kita bisa merubah limbah menjadi peluang untuk mengembangkan ekonomi
          hijau, mengurangi dampak lingkungan, dan membangun dunia yang lebih
          bersih.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          {renderFeature(
            "Teamwork",
            "Berkolaborasi dengan tim kami",
            faUsers
          )}
          {renderFeature(
            "Passion",
            "Bekerja dengan sepenuh hati",
            faHeart
          )}
          {renderFeature(
            "Innovation",
            "Selalu berinovasi memberikan perubahan bagi lingkungan",
            faLightbulb
          )}
        </div>
      </div>
    </div>
  );
};

const renderFeature = (title, description, icon) => {
  return (
    <div className="bg-green-100 p-4 rounded-md text-center">
      <FontAwesomeIcon icon={icon} className="text-4xl text-green-500 mb-2" />
      <h3 className="text-lg font-semibold text-green-800 mb-2">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

export default About;
