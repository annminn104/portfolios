import styles from './index.module.scss';
import React from 'react';
import { BiHomeAlt, BiUser } from 'react-icons/bi';
import { BsClipboardData, BsBriefcase, BsChatSquareText } from 'react-icons/bs';
import { Link as ScrollLink } from 'react-scroll';

const Nav = () => {
  return (
    <React.Fragment>
      <nav className='fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50 pointer-events-none'>
        <div className='container mx-auto'>
          <ul className='w-full bg-black/20 h-[96px] backdrop-blur-2xl rounded-full max-w-[460px] mx-auto px-5 flex justify-between items-center text-2xl text-white/50 pointer-events-auto'>
            <li>
              <ScrollLink to='home' activeClass='active-link' spy smooth offset={-200} className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center hover:bg-palette4 hover:rounded-full'>
                <BiHomeAlt />
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to='about' activeClass='active-link' spy smooth className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center hover:bg-palette4 hover:rounded-full'>
                <BiUser />
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to='services' activeClass='active-link' spy smooth className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center hover:bg-palette4 hover:rounded-full'>
                <BsClipboardData />
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to='work' activeClass='active-link' spy smooth className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center hover:bg-palette4 hover:rounded-full'>
                <BsBriefcase />
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to='contact' activeClass='active-link' spy smooth className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center hover:bg-palette4 hover:rounded-full'>
                <BsChatSquareText />
              </ScrollLink>
            </li>
          </ul>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Nav;
