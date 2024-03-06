import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { SectionWrapper } from "../wrapper";
import React, { useEffect, useState } from 'react';

const Home = () => {
  const [isButtonUp, setIsButtonUp] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsButtonUp((prev) => !prev);
    }, 3000); // Ganti nilai 3000 dengan durasi yang diinginkan dalam milidetik

    // Membersihkan interval saat komponen di-unmount
    return () => clearInterval(intervalId);
  }, []);
  return (
    <section className={`relative w-full h-screen mx-auto`} id="home">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-2  sm:h-80 h-60 green-gradient rounded-xl' />
        </div>

        <div>
          <h1 className={`${styles.HomeHeadText} text-white`}>
            Hi, I'm <span className='text-lime-500'>Rizky</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100 text-[16px] `}>
            <span className="text-lime-600">as a</span>
            <br/>
            Front-end developer 
            <br/>
            React-Js Developer 
            <br/> Junior Developer
          </p>
        </div>
      </div>

      <div className="w-full h-full ml-64">
        <ComputersCanvas />
      </div>
      <div className={`animateUpDown absolute xs:bottom-28 bottom-40 w-full flex justify-center items-center ${isButtonUp ? 'up' : 'down'}`}>
        <a href='#about'>
          <button className='bg-lime-600 rounded-xl flex justify-center items-start p-3 text-white font-bold'>
            More About Me
          </button>
        </a>
      </div>

      <style jsx>{`
        @media (max-width: 640px) {
          .ml-64 {
            margin-left: 0;
          }
        }
      `}</style>
    </section>
  );
};

export default SectionWrapper(Home, "home");
