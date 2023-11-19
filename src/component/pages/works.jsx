import Index from '../layouts/index';
import _data from './_data';
import Cards from '../cards';

export default function Works() {
  return (
    <Index>
      <main>
        <div className='mx-auto w-full max-w-[800px] px-8 pt-36 dark:text-slate-200'>
          <h1 className='font-tinos text-2xl font-black tracking-[.05em]'>
            Works
          </h1>
          <section>
            <div className='my-6 pb-10'>
              <Cards data={_data} />
            </div>
          </section>
        </div>
      </main>
    </Index>
  );
}
