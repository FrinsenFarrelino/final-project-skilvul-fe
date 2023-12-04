import React from "react";
import landingpage from "../assets/landingpage.png";
import sampah from "../assets/sampah.png";
import Iconhuman from "../assets/icon1.svg";
import iconhome from "../assets/icon2.svg";
import iconrecycle from "../assets/icon3.svg";
import recycle from "../assets/recycle.png";
import task from "../assets/task.svg";
import location from "../assets/location.svg";
import vehicle from "../assets/vehicle.svg";
import agree from "../assets/agree.svg";
import workshop from "../assets/workshop.svg";
import warning from "../assets/warning.svg";

const Home = () => {
  return (
    <section>
      <div className="flex justify-between	">
        <div className="flex flex-col items-start flex-wrap">
          <div className="text-[55px] text-left ml-7 pr-[300px]">
            <h1>Lindungi Bumi, Bersama-sama Melawan Limbah!</h1>
          </div>
          <div>
            <p className="text-left text-lg ml-7 mt-4 pr-[300px]">
              HijauIn akan membantu kamu mewujudkan impian dunia dan
              menginspirasi perubahan untuk dunia yang lebih bersih!
            </p>
          </div>
          <div>
            <button className=" bg-[#B7EB8F] rounded-md px-3 py-2 mt-3 ml-7">
              Ikuti Program
            </button>
          </div>
        </div>
        <div>
          <img src={landingpage} alt="" width={800} />
        </div>
      </div>

      <h1 className="text-[35px] font-semibold mt-7">Taukah Kamu?</h1>
      <p className="px-20 mt-3">
        Di Indonesia, tahun 2022, Indonesia mengalami peningkatan volume limbah.
        Dari 68,5 juta ton di tahun 2021, sekarang telah menjadi 70 juta ton.
        Dari 70 juta ton itu, hanya 7% yang terdaur ulang. Jadi, banyak sekali
        limbah yang belum terdaur ulang dengan baik.
      </p>
      <div className="flex justify-between w-full">
        <div className="w-1/2 flex items-center">
          <img
            src={sampah}
            alt=""
            width={800}
            height={400}
            className="rounded-md mt-8 ml-11"
          />
        </div>
        <div className="ml-10 pl-20 relative w-1/2">
          <div className="mt-8 ml-5 text-left">
            Peningkatan limbah ini terjadi karena beberapa sebab. Diantaranya
            adalah sebagai berikut.
          </div>
          <div className="flex items-start mt-5 ml-1">
            <img src={Iconhuman} alt="" width={50} className="ml-8 mt-3" />
            <div className="ml-5 pl-2">
              <p className="font-semibold text-left">
                {" "}
                Masyarakat yang tidak memilah sampah
              </p>
              <p className="text-left mt-2">
                Menurut survei KIC, 50,8% rumah tangga di lima kota besar
                Indonesia tidak memilah sampah, dengan 79% di antaranya
                beralasan tidak ingin repot.
              </p>
            </div>
          </div>
          <div className="flex items-center mt-5 ml-1">
            <img src={iconhome} alt="" width={50} className="ml-8 mt-3" />
            <div className="ml-5 pl-2">
              <p className="font-semibold text-left">
                Minimnya fasilitas pengolahan limbah
              </p>
              <p className="text-left mt-2">
                Beberapa daerah menghadapi masalah ketika mencari tempat
                pembuangan akhir yang aman dan legal untuk limbah. Terutama
                limbah berbahaya dan beracun (B3)
              </p>
            </div>
          </div>
          <div className="flex items-center mt-5 ml-1">
            <img src={iconrecycle} alt="" width={50} className="ml-8 mt-3" />
            <div className="ml-5 pl-2">
              <p className="font-semibold text-left">
                Pengelolaan yang masih belum baik
              </p>
              <p className="text-left mt-2">
                Menurut Kemenko PMK, sebanyak 34,29% (7,2 juta ton) limbah di
                Indonesia belum terkelola dengan baik.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex w-full mt-10">
        <div className="flex flex-col w-1/2 ml-7">
          <h1 className="text-[40px] text-left pl-4">
            <span className="text-[#95de64] font-semibold">Eco</span>Sampah hadir untuk
            mengatasi masalah limbah!
          </h1>
          <p className="text-left mt-5 text-[20px] pl-4">
            Di sini, kami mengundang Anda untuk memasuki dunia pengelolaan
            limbah yang inovatif, berkelanjutan, dan proaktif. Kami
            menggabungkan pengetahuan mendalam dengan ide-ide kreatif untuk
            membantu Anda memahami peran Anda dalam upaya global untuk
            mengurangi limbah. Kami percaya bahwa, bersama-sama, kita bisa
            merubah limbah menjadi peluang untuk mengembangkan ekonomi hijau,
            mengurangi dampak lingkungan, dan membangun dunia yang lebih bersih.
          </p>
        </div>
        <div className="w-1/2">
          <img src={recycle} alt="" />
        </div>
      </div>

      <h1 className="mt-10 text-[35px] font-semibold">Apa saja yang bisa kami lakukan?</h1>
      <p className="mt-6 text-[20px]">
        Kami menyediakan beberapa fitur dalam website kami untuk mengatasi
        masalah limbah.
      </p>
      <div className="flex items-center justify-between mt-8 ">
        <div className="flex flex-col items-center px-5">
          <img src={task} alt="" />
          <h1 className="font-semibold text-[20px]">Pemantauan dan manajemen limbah terintegrasi</h1>
          <p className="mt-2 px-5">
            Kamu bisa mendapatkan gambaran atau pola dari limbah yang kamu
            hasilkan
          </p>
        </div>
        <div className="flex flex-col items-center px-5">
          <img src={location} alt="" />
          <h1 className="font-semibold text-[20px] pl-6">Pelacakan Lokasi Daur Ulang dan TPS</h1>
          <p className="mt-2 px-4">
            Kami akan memberitahu dimana saja lokasi daur ulang dan TPS terdekat
          </p>
        </div>
        <div className="flex flex-col items-center px-5">
          <img src={vehicle} alt="" />
          <h1 className="font-semibold text-[20px] px-10">Pengambilan Limbah ke Rumah Kamu</h1>
          <p className="mt-2 px-3">
            Jika kamu sibuk keluar rumah, kamu bisa memanggil kami untuk
            mengambil limbahmu
          </p>
        </div>
      </div>
      <div className="flex items-center justify-between mt-8 ml-8">
        <div className="flex flex-col items-center px-5">
          <img src={agree} alt="" />
          <h1 className="font-semibold text-[20px]">Jual Beli Barang Daur Ulang</h1>
          <p className="mt-2">
            Kamu bisa menjual atau membeli barang-barang daur ulang yang
            tersedia
          </p>
        </div>
        <div className="flex flex-col items-center px-5 ">
          <img src={workshop} alt="" />
          <h1 className="font-semibold text-[20px]">Pengadaan Workshop</h1>
          <p className="mt-2 px-10">
            Kami menyediakan tempat untuk kamu yang ingin mengikuti workshop.
            Bahkan kamu bisa membuat kegiatan workshop kamu sendiri
          </p>
        </div>
        <div className="flex flex-col items-center px-5">
          <img src={warning} alt="" />
          <h1 className="font-semibold text-[20px]">Pelaporan Pelanggaran Pembuangan Ilegal</h1>
          <p className="mt-2">
            Jika ada pelanggaran pembuangan limbah sembarangan, kamu bisa
            melaporkannya kepada kami
          </p>
        </div>
      </div>
      <div>
        <button className="bg-[#B7EB8F] rounded-md px-3 py-2 mt-3 ml-7  ">Pelajari Lebih Lanjut</button>
      </div>
    </section>
  );
};

export default Home;
