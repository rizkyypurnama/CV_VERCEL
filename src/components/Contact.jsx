import { useState, useRef } from 'react'
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import { SectionWrapper } from "../wrapper";
import { fadeIn, slideIn } from "../utils/motion";
import { EarthCanvas } from './canvas';
import { github, email , phone, address } from '../assets';
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

      <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className='flex-[0.75] bg-black p-8 rounded-2xl'
        >
          <h3 className="text-2xl md:text-4xl font-bold text-center">Get <span className='text-lime-500'> In</span> Touch.</h3>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className='mt-12 flex flex-col gap-8'
          >
            <label className='flex flex-col'>
              <span className='text-white font-medium mb-4'>Your <span className='text-lime-500'>Name</span>
              </span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What's your name?"
                className="bg-slate-500 py-4 px-6 placeholder:text-slate-800 text-white rounded-lg outline-none border-none font-medium"
              />
            </label>
            <label className='flex flex-col'>
              <span className='text-white font-medium mb-4'>Your <span className='text-lime-500'>Email</span>
              </span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What's your email?"
                className="bg-slate-500 py-4 px-6 placeholder:text-slate-800 text-white rounded-lg outline-none border-none font-medium"
              />
            </label>
            <label className='flex flex-col'>
              <span className='text-white font-medium mb-4'>Your <span className='text-lime-500'>Message</span>
              </span>
              <textarea
                rows="7"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What do you want to say for me?"
                className="bg-slate-500 py-4 px-6 placeholder:text-slate-800 text-white rounded-lg outline-none border-none font-medium"
              />
            </label>

            <button
              type='submit'
              className='bg-slate-500 py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl'
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
        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className='flex-[0.75] bg-black p-8 rounded-2xl'
        >
        <h3 className="text-2xl md:text-4xl font-bold text-center"><span className='text-lime-500'>Contact </span>Detail.</h3>
          <div className='mt-10'>
            <div className='flex items-center mb-5'> {/* Menggunakan flex untuk menyatukan gambar dan teks secara horizontal */}
              <div className='github'>
                <img
                  src={phone}
                  alt="Github"
                  className="w-10 h-10 object-contain"
                />
              </div>
              <p className='ml-2 text-lg'>(+62)857-2322-8174</p>
            </div>
            <div className='flex items-center mb-5'> {/* Menggunakan flex untuk menyatukan gambar dan teks secara horizontal */}
              <div className='email'>
                <img
                  src={email}
                  alt="Email"
                  className="w-10 h-10 object-contain"
                />
              </div>
              <p className='ml-2 text-lg'>rizkyprnm04@gmail.com</p>
            </div>
            <div className='flex items-center'> {/* Menggunakan flex untuk menyatukan gambar dan teks secara horizontal */}
              <div className='address'>
                <img
                  src={address}
                  alt="address"
                  className="w-10 h-10 object-contain"
                />
              </div>
              <p className='ml-2 text-lg'>JL. Abdul Halim NO. 71/93, Cimahi</p>
            </div>
          </div>


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