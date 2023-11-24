import { Link } from 'react-router-dom';

import { Moon, Sun, Eclipse } from './icon';

export default function NavBar({ isDrop, setDropTheme, dropTheme }) {
  const menu = [
    { title: 'About', path: '/' },
    { title: 'Works', path: '/works' },
    { title: 'Posts', path: '/posts' },
  ];

  return (
    <nav
      className={`absolute right-5 top-full block w-full max-w-[200px] rounded-lg bg-white py-2 shadow-xl lg:top-0 lg:block lg:max-w-max lg:rounded-none lg:bg-transparent lg:shadow-none ${
        isDrop ? 'block' : 'hidden'
      }`}
    >
      <ul className='bg:text-slate-950 mb-4 block lg:mb-2 lg:flex lg:pt-2 dark:lg:text-slate-200'>
        {menu.map(list => {
          return (
            <li
              key={list.title}
              className='text-md group my-5 text-center font-montserrat font-bold lg:mx-3 lg:my-0'
            >
              <Link
                to={list.path}
                className='cursor-pointer px-3 py-3'
              >
                {list.title}
              </Link>
            </li>
          );
        })}
        <li className='text-md group my-5 text-center font-montserrat font-bold lg:mx-3 lg:my-0'>
          <a
            href='https://github.com/Vanvansys/porto/'
						target='_blank'
            className='cursor-pointer px-3 py-3'
          >
            View Source
          </a>
        </li>
        <li className='text-md group my-5 text-center font-montserrat font-bold lg:mx-3 lg:my-0'>
          <Link
            className='cursor-pointer px-3 py-3'
            onClick={() => setDropTheme(!dropTheme)}
          >
            Theme
          </Link>
        </li>
      </ul>
      <ul
        className={`theme absolute top-[270px] w-full max-w-[200px] shadow-xl ${
          dropTheme && 'theme-list hidden'
        } cursor pointer rounded-lg bg-white py-4 pt-6 font-montserrat font-bold lg:left-[400px] lg:top-full`}
      >
        <li>
          <Eclipse style={'w-7 ml-2'} />
          <a
            id='default'
            className='mx-[10px] mb-2'
            onClick={e => e.preventDefault()}
          >
            OS Default
          </a>
        </li>
        <li>
          <Sun style={'w-8 ml-[6px]'} />
          <a
            id='light'
            className='mx-[11px]'
            onClick={e => e.preventDefault()}
          >
            Light
          </a>
        </li>
        <li>
          <Moon style={'w-10 ml-1'} />
          <a
            id='dark'
            className='mx-[6px]'
            onClick={e => e.preventDefault()}
          >
            Dark
          </a>
        </li>
      </ul>
    </nav>
  );
}
