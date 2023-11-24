import Index from '../layouts/index';

export default function About() {
  return (
    <Index>
      <main className='mx-auto w-full max-w-[800px]'>
        <section className='mb-[70px] px-5'>
          <div className='pt-32 font-montserrat dark:text-slate-200'>
            <h1 className='mb-4 text-center text-xl font-bold tracking-[.1em]'>
              WELCOME!
            </h1>
            <h2 className='text-center text-lg font-semibold'>
              {"Hello, I'm an indie programmer based in Indonesia!"}
            </h2>
            <div className='flex flex-wrap'>
              <img
								height="400"
								width="400"
                src='./absurd.png'
                className='mx-auto my-6 w-full max-w-[400px] bg-white'
              />
              <div>
                <h2 className='mb-4 font-tinos text-xl font-bold'>
                  <span className='text-4xl font-black'>Irvan Ansyahri</span>
                  <br />
                  Digital Craftsman (Designer / Developer / Writer)
                </h2>
                <p>
                  Irvan is a freelance and a full-stack developer based in West
                  Java with a passion for building digital services or stuff he
                  wants. He planning and designing all the way to solving
                  real-life problems with code. When not online, he loves
                  watching the movies and hanging out with his camera.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Index>
  );
}
