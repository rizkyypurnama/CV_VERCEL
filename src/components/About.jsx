import { styles } from "../styles";
import { slideIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../wrapper";
import { motion } from "framer-motion";

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>Let me <span className="text-green-600">
        introduce</span> myself.</h2>
      </motion.div>

      <motion.p
        variants={slideIn("", "", 0.5, 5)}
        className='mt-4 text-slate-200 text-[17px] max-w-3xl leading-[30px]'
      >
        I'm a front-End developer with experience in JavaScript
        and expertise in frameworks React-JS.
        I'm honest, fast learner, scalable, and can handle problem solution.
        <br/>Let's collaborate to transform your concepts into reality!
        </motion.p>
    </>
  )
}

export default SectionWrapper(About, "about")