import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import NavBar from '../navbar';

export default function Header() {
  const [isDrop, setIsDrop] = useState(false);
  const [isOffset, setIsOffset] = useState(0);
  const [dropTheme, setDropTheme] = useState({ isDrop });

  useEffect(() => {
    window.addEventListener('scroll', () => setIsOffset(window.pageYOffset));
  });

  return (
    <header
      className={`absolute top-0  z-10 w-full bg-transparent py-2 ${
        isOffset > 0 && 'navbar-fixed'
      }`}
    >
      <div className='container'>
        <div className='mx-auto flex max-w-[900px] items-center justify-between py-3 lg:relative'>
          <div className='mx-3'>
            <Link
              to={'/'}
              className='cursor-pointer px-2 py-2 font-tinos text-xl dark:text-slate-200'
            >
              Vantasy
            </Link>
          </div>
          <div className='flex items-center px-5'>
            <button
              id='dropToggle'
              className={`absolute right-5 block space-y-2 lg:hidden ${
                isDrop && 'toggleButton-Active'
              }`}
              onClick={() => {
                setIsDrop(!isDrop);
                setDropTheme(!isDrop);
              }}
            >
              <span className='toggleButton-line origin-top-left bg-slate-200 transition duration-300 ease-in-out' />
              <span className='toggleButton-line transition duration-200 ease-in-out' />
              <span className='toggleButton-line origin-bottom-left transition duration-300 ease-in-out' />
            </button>
            <NavBar
              isDrop={isDrop}
              dropTheme={dropTheme}
              setDropTheme={setDropTheme}
            />
          </div>
        </div>
      </div>
    </header>
  );
}
