import { useState, useRef } from 'react'
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import { SectionWrapper } from "../wrapper";
import { fadeIn, slideIn } from "../utils/motion";
import { EarthCanvas } from './canvas';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import HomeIcon from '@mui/icons-material/Home';
import * as React from 'react';
import Stack from '@mui/material/Stack';
import { pink } from '@mui/material/colors';
import SvgIcon from '@mui/material/SvgIcon';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Button } from '@material-tailwind/react';
import LanguageIcon from '@mui/icons-material/Language';

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

  const [links] = useState({
    github: 'https://github.com/rizkyypurnama/',
    linkedin: 'https://linkedin.com/in/rizky-purnama-5a38a7166/',
    instagram: 'https://www.instagram.com/kyy.prnm/',
    website: 'https://www.rizkypg.my.id/'
  });

  const [hoverState, setHoverState] = useState({
    github: false,
    linkedin: false,
    instagram: false,
    website: false
  });

  const redirectTo = (link) => {
    window.open(link, '_blank');
  };

  const handleHover = (key, isHovered) => {
    setHoverState({ ...hoverState, [key]: isHovered });
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

          <div className='mt-20'>
            <div className='flex items-center mb-5'> {/* Menggunakan flex untuk menyatukan gambar dan teks secara horizontal */}
              <div className='github'>
                <LocalPhoneIcon/>
              </div>
              <p className='ml-2 text-lg'>(+62)857-2322-8174</p>
            </div>
            <div className='flex items-center mb-5'> {/* Menggunakan flex untuk menyatukan gambar dan teks secara horizontal */}
              <div className='email'>
                <EmailIcon/>
              </div>
              <p className='ml-2 text-lg'>rizkyprnm04@gmail.com</p>
            </div>
            <div className='flex items-center'> {/* Menggunakan flex untuk menyatukan gambar dan teks secara horizontal */}
              <div className='address'>
                <HomeIcon color='blue'/>
              </div>
              <p className='ml-2 text-lg'>JL. Abdul Halim NO. 71/93, Cimahi</p>
            </div>
            <div className='mt-14 justify-center items-center align-center flex'>
      <Stack direction="row" spacing={1}>
        <Button
          onClick={() => redirectTo(links.github)}
          onMouseEnter={() => handleHover('github', true)}
          onMouseLeave={() => handleHover('github', false)}
          sx={{ '&:hover': { bgcolor: hoverState.github ? 'success.main' : 'transparent' } }}
        >
          <GitHubIcon fontSize='large' color={hoverState.github ? 'success' : 'white'} />
        </Button>
        <Button
          onClick={() => redirectTo(links.linkedin)}
          onMouseEnter={() => handleHover('linkedin', true)}
          onMouseLeave={() => handleHover('linkedin', false)}
          sx={{ '&:hover': { bgcolor: hoverState.linkedin ? 'success.main' : 'transparent' } }}
        >
          <LinkedInIcon fontSize='large' color={hoverState.linkedin ? 'success' : 'white'} />
        </Button>
        <Button
          onClick={() => redirectTo(links.instagram)}
          onMouseEnter={() => handleHover('instagram', true)}
          onMouseLeave={() => handleHover('instagram', false)}
          sx={{ '&:hover': { bgcolor: hoverState.instagram ? 'success.main' : 'transparent' } }}
        >
          <InstagramIcon fontSize='large' color={hoverState.instagram ? 'success' : 'white'} />
        </Button>
        <Button
          onClick={() => redirectTo(links.website)}
          onMouseEnter={() => handleHover('website', true)}
          onMouseLeave={() => handleHover('website', false)}
          sx={{ '&:hover': { bgcolor: hoverState.website ? 'success.main' : 'transparent' } }}
        >
          <LanguageIcon fontSize='large' color={hoverState.website ? 'success' : 'white'} />
        </Button>
      </Stack>
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