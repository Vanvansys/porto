import Header from './header';
import Footer from './footer';

export default function Index({ children }) {
  return (
    <div className='relative dark:bg-[#252525]'>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
