import { useState, useRef } from 'react'
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import { SectionWrapper } from "../wrapper";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs.send(
      'service_792tm1q',
      'template_vy0pej2',
      {
        from_name: form.name,
        to_name: 'Rizky',
        from_email: form.email,
        to_email: 'rizkyprnm04@gmail.com',
        message: form.message,
      },
      'sZCWvO3BwElRqpTV8'
    )
      .then(() => {
        setLoading(false);
        alert('Thank you. I will get back to you as soon as possible.');

        setForm({
          name: '',
          email: '',
          message: ''
        })
      }, (error) => {
        setLoading(false);

        console.log(error);

        alert('Something went wrong.');
      })
  };

  return (
    <div className='xl:mt-12 gap-10'>
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black p-8 rounded-2xl mr-80'
      >
        <h3 className={styles.sectionHeadText}>Contact <span className='text-lime-600'>Me.</span></h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name
            </span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-gray-400 py-4 px-6 placeholder:text-slate-800 text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Email
            </span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="bg-gray-400 py-4 px-6 placeholder:text-slate-800 text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message
            </span>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say for me?"
              className="bg-gray-400 py-4 px-6 placeholder:text-slate-800 text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <button
            type='submit'
            className='bg-gray-400 py-3 px-8 outline-none w-fit text-black font-bold shadow-md shadow-primary rounded-xl'
          >
            {loading ? 'Sending...' : 'Send'}
          </button>
        </form>
        <style jsx>{`
        @media (max-width: 640px) {
          .mr-80 {
            margin-right: 0;
          }
        }
      `}</style>
      </motion.div>
    </div>
    
  )
}

export default SectionWrapper(Contact, "contact");