import React, { useState } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const [form, setForm] = useState({
    name: "Japkirat Singh",
    email: "japkirat.singh@gmail.com",
    mobile: "+91 7888878179",
    github: "https://github.com/ax-is",
    linkedin: "https://www.linkedin.com/in/japkiratsingh",
  });

  return (
    
    <div className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}>
      
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <div className='mt-12 flex flex-col gap-8'>
          <div className="flex flex-col gap-4">
          <label className='flex flex-col flex-grow'>
              <span className='text-white font-medium mb-4'>Name</span>
              <input
                type='mobile'
                name='mobile'
                value={form.name}
                readOnly
                className='bg-tertiary py-6 px-8 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              />
            </label>
            <label className='flex flex-col flex-grow'>
              <span className='text-white font-medium mb-4'>Email</span>
              <a
                href={`mailto:${form.email}`}
                className='bg-tertiary py-6 px-8 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              >
                {form.email}
              </a>
            </label>
            <label className='flex flex-col flex-grow'>
              <span className='text-white font-medium mb-4'>Mobile</span>
              <input
                type='mobile'
                name='mobile'
                value={form.mobile}
                readOnly
                className='bg-tertiary py-6 px-8 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              />
            </label>

            <label className='flex flex-col flex-grow'>
              <span className='text-white font-medium mb-4'>LinkedIn</span>
              <a
                href={form.linkedin}
                target='_blank'
                rel='noopener noreferrer'
                className='bg-tertiary py-6 px-8 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              >
                {form.linkedin}
              </a>
            </label>

            <label className='flex flex-col flex-grow'>
              <span className='text-white font-medium mb-4'>Github</span>
              <a
                href={form.github}
                target='_blank'
                rel='noopener noreferrer'
                className='bg-tertiary py-6 px-8 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              >
                {form.github}
              </a>
            </label>
          </div>
        </div>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
