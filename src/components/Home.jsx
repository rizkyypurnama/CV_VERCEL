import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { SectionWrapper } from "../wrapper";

const Home = () => {
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
            Hi, I'm <span className='text-green-600'>Rizky</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100 text-[19px] `}>
            <span className="text-green-600">as a</span>
            <br/>
            Front-end developer 
            <br/>
            React-Js Developer 
            <br/> Junior Developer
          </p>
        </div>
      </div>

      <div className='absolute xs:bottom-15 bottom-28 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='bg-green-700 rounded-xl flex justify-center items-start p-3 text-white font-bold'>
            More About Me
          </div>
        </a>
      </div>
      <div className="w-full h-full ml-64">
        <ComputersCanvas />
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
