import styles from './index.module.scss';
import React from 'react';
import Image from 'next/image';
import Button from '../shared/Button';
import Link from 'next/link';

const Header: React.FC = () => (
  <React.Fragment>
    <header className='flex justify-center items-center min-h-[100px] lg:min-h-[15vh]'>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
          <Link href='/'>
            <Image src='/logo.svg' width={200} height={61} alt='' className='max-w-[160px] sm:max-w-[200px]' />
          </Link>
          <Button className='btn-primary'>Work with me</Button>
        </div>
      </div>
    </header>
  </React.Fragment>
);

export default Header;
