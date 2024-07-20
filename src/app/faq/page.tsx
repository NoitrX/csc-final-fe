"use client";

import TopNav from "@/components/TopNav";
import Navbar from "@/components/Navbar";
import FAQQuestion from "@/components/FAQQuestion";
import Footer from "@/components/Footer";
import { TbMessageCircleQuestion } from "react-icons/tb";

export default function FAQ() {
  return (
    <div>
      <TopNav />
      <Navbar />
      <div className="w-full min-h-screen bg-[#090E1A] p-12 md:p-20">
        <div className="flex items-center gap-3 font-poppins font-bold">
          <TbMessageCircleQuestion className="text-[#6597E1] text-2xl" />
          <p className="bg-gradient-to-r from-[#6597E1] to-[#D2D2D3] bg-clip-text text-transparent uppercase">Tentang CSC</p>
        </div>
        <div className="flex flex-col md:flex-row justify-normal md:justify-between gap-5 font-poppins mt-5">
          <p className="w-full text-4xl text-white font-bold uppercase">
            Frequently
            <br className="block sm:hidden" />
            <a className="bg-gradient-to-r from-[#9BC3FF] to-[#3935FF] bg-clip-text text-transparent ml-0 sm:ml-3">Asked</a>
            <br />
            Question
          </p>
          <p className="w-full text-[#B8B8B8] text-xs md:text-sm">
            Selamat datang di halaman FAQ Klub Komputer! Di sini, kami telah mengumpulkan berbagai pertanyaan yang sering diajukan oleh anggota dan calon anggota klub kami. Halaman ini bertujuan untuk memberikan informasi yang jelas dan
            membantu menjawab berbagai pertanyaan Anda mengenai CSC.
          </p>
        </div>
        <div className="w-full flex flex-col gap-10 mt-10">
          <FAQQuestion
            question="Kapan Registrasi Member Baru Dibuka?"
            answer={
              <>
                Pendaftaran KSM biasanya dimulai pada semester 2, Pantau terus{" "}
                <a className="underline" href="https://instagram.com/cscpnj">
                  Instagram CSC
                </a>{" "}
                untuk informasi lebih lanjut.
              </>
            }
          />
          <FAQQuestion
            question="Pertemuan KSM CSC Setiap Hari Apa?"
            answer="Normalnya, kelas diadakan tiap hari Sabtu jam 9 sampai selesai (Sesi kelas biasanya 2-4 Jam tergantung materi). Namun, apabila ada kuliah tambahan/pengganti dari mayoritas member ataupun mentor, waktu kelas bisa disesuaikan lagi."
          />
          <FAQQuestion
            question="Apakah Pertemuan Kelas CSC Nantinya Bersifat Offline atau Online?"
            answer="Rencana kami untuk angkatan tahun ini semua divisi dilaksanakan secara Offline, Namun masih dalam proses negosiasi dengan pihak jurusan. Akan kami beri informasi ter-update saat proposal kegiatan angkatan baru CSC sudah di approve oleh jurusan."
          />
          <FAQQuestion question="Apa Persyaratan Masuk CSC?" answer="..." />
          <FAQQuestion
            question="Apa Mahasiswa Jurusan Selain TIK Boleh Mendaftar Sebagai Anggota CSC?"
            answer="Boleh banget! Soalnya CSC akan mengajarkan konsep dasar tiap divisi secara langsung, dan mentor akan memantau progress tiap member supaya tidak tertinggal. Jadi walau kamu tidak memiliki dasar sama sekali di divisi-divisi kami, tetap bisa mengikuti kegiatan CSC"
          />
          <FAQQuestion question="Apa Perbedaan CSC dengan Sahabat PNJ? / Lebih Cocok Masuk CSC atau SPNJ Ya?" answer="..." />
          <FAQQuestion
            question="Apa Boleh Join Lebih dari Satu Divisi?"
            answer="Tiap member cuman boleh join 1 divisi ya, Kalo kamu masih bimbang pengen join divisi mana, boleh konsultasi dengan kami via grup WA diskusi untuk nemuin divisi mana yang paling cocok sama kamu!"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
