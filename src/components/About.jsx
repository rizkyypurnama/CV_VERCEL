import { styles } from "../styles";
import { slideIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../wrapper";
import { motion } from "framer-motion";

import profilePicture from "../assets/profile-pic.jpeg"; // Import your profile picture

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>
          Let me <span className="text-gray-800">introduce</span> myself.
        </h2>
      </motion.div>

      <motion.p
        variants={slideIn("", "", 0.5, 5)}
        className="mt-4 text-black text-[20px] max-w-3xl leading-[30px]"
      >
        <div className="pict flex items-center justify-center">
          <img
            src={profilePicture}
            alt="Profile Picture"
            className="mb-7 rounded-full w-44 xs:w-48"
          />
        </div>
        I'm a front-End developer with experience in JavaScript and expertise in
        frameworks React-JS. I'm honest, a fast learner, scalable, and can handle
        problem solutions. <br />
        Let's collaborate to transform your concepts into reality!
      </motion.p>
    </>
  );
};

export default SectionWrapper(About, "about");
