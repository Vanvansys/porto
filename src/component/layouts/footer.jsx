import { Facebook, TwitterX, Instagram, GitHub, WhatsApp } from '../icon';

export default function Footer() {
  return (
    <footer>
      <div className='flex items-center justify-center space-x-2'>
        <Facebook style={'rounded-xl'} />
        <TwitterX style={'rounded-xl'} />
        <Instagram style={'rounded-xl'} />
        <GitHub 
          style={'rounded-xl'} 
          link='https://github.io/Vanvansys' />
        <WhatsApp style={'rounded-xl'} />
      </div>
      <div className='text-md flex justify-center py-6 font-tinos dark:text-slate-200'>
        <h1>
          &copy; {new Date().getFullYear()} Irvan Ansyahri. All Rights Reserved.
        </h1>
      </div>
    </footer>
  );
}
