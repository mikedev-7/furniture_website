import React, { useState, useEffect } from 'react';

// import logo
import Logo from '../assets/img/logo.svg'

// import items
import { CgMenuRight, CgClose } from 'react-icons/cg';

// import data
import { navigation } from '../data';

// import components
import NavMobile from './NavMobile';

const Header = () => {
  // Destructure useState correctly
  const [bg, setBg] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setBg(window.scrollY > 50);
    };

    // Add event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array ensures this runs once on mount

  return (
    <header className={`${bg ? 'bg-primary py-4 lg:py-6' : 'bg-none'} fixed left-0 w-full py-8 z-10 transition-all duration-200`}>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
          {/* logo */}
          <a href='#'>
            <img className='h-6 lg:h-8' src={Logo} alt='' />
          </a>
          {/* menu item */}
          <div onClick={() => setMobileNav(!mobileNav)} className='text-2xl text-white md:hidden lg:text-3xl cursor-pointer'>
            {mobileNav ? <CgClose /> : <CgMenuRight />}
          </div>
          {/* nav */}
          <nav className='hidden md:flex'>
            <ul className='md:flex md:gap-x-12'>
              {navigation.map((item, index) => (
                <li key={index}>
                  <a className='capitalize text-white hover:border-b transition-all' href={item.href}>{item.name}</a>
                </li>
              ))}
            </ul>
          </nav>
          {/* nav mobile */}
          <div className={`${mobileNav ? 'left-0' : '-left-full'} md:hidden fixed bottom-0 w-full max-w-xs h-screen transition-all`}>
            <NavMobile />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
