import styles from './index.module.scss';
import React from 'react';
import Image from 'next/image';
import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { fadeIn } from '@/variants';
import Button from '../shared/Button';
import Link from 'next/link';

const Banner: React.FC = () => (
  <React.Fragment>
    <section className='min-h-[calc(100vh_-_100px)] lg:min-h-[85vh] flex items-center' id='home'>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-8 lg:flex-row justify-between lg:items-center lg:gap-x-12'>
          <div className='flex flex-col flex-1 text-center lg:text-left'>
            <motion.p variants={fadeIn('up', 0.2)} initial='hidden' whileInView={'show'} viewport={{ once: false, amount: 0.7 }} className='font-semibold text-2xl'>
              Hi, nice to meet you.
            </motion.p>
            <motion.h1 variants={fadeIn('up', 0.3)} initial='hidden' whileInView={'show'} viewport={{ once: false, amount: 0.7 }} className='text-[36px] lg:text-[60px] font-bold uppercase leading-[1] text-accent font-secondary'>
              Matthew
            </motion.h1>
            <motion.div variants={fadeIn('up', 0.4)} initial='hidden' whileInView={'show'} viewport={{ once: false, amount: 0.7 }} className='text-[24px] lg:text-[32px] font-bold uppercase leading-[1] max-w-lg mx-auto lg:mx-0 font-secondary'>
              I AM A
              <TypeAnimation sequence={[' Front end Developer', 2000, ' ', 2000, () => {}]} speed={50} className='text-accent ' wrapper='span' repeat={Infinity} />
            </motion.div>
            <motion.p variants={fadeIn('up', 0.5)} initial='hidden' whileInView={'show'} viewport={{ once: false, amount: 0.7 }} className='mb-8 max-w-lg mx-auto lg:mx-0'>
              A Front-end web developer who loves creating beautiful and responsive websites that provide the best user experience possible. With 1.5 years of experience, I’m proficient in using various technologies such as HTML, CSS, JavaScript, TypeScript, React, NextJS, Angular and more.
            </motion.p>
            <motion.div variants={fadeIn('up', 0.6)} initial='hidden' whileInView={'show'} viewport={{ once: false, amount: 0.7 }} className='flex gap-x-6 max-w-max items-center mb-12 mx-auto lg:mx-0'>
              <Button>Contact me</Button>
              <Link href='#' className='text-xl text-accent'>
                My Portfolios
              </Link>
            </motion.div>
            <motion.div variants={fadeIn('up', 0.7)} initial='hidden' whileInView={'show'} viewport={{ once: false, amount: 0.7 }} className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'>
              <Link href='https://github.com/annminn104' className='text-black hover:text-accent'>
                <FaGithub size={32} />
              </Link>
              <Link href='https://www.linkedin.com/in/nguyencaoanhminh' className='text-black hover:text-accent'>
                <FaLinkedin size={32} />
              </Link>
              <Link href='https://www.facebook.com/Minhmin0507' className='text-black hover:text-accent'>
                <FaFacebook size={32} />
              </Link>
            </motion.div>
          </div>
          <motion.div variants={fadeIn('down', 0.5)} initial='hidden' whileInView={'show'} className='hidden flex-1 lg:flex lg:justify-end max-w-[320px] lg:max-w-[480px]'>
            <Image src='/avatar.svg' width={500} height={534} alt='' />
          </motion.div>
        </div>
      </div>
    </section>
  </React.Fragment>
);

export default Banner;
