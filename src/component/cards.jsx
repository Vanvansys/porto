import { useState } from 'react';

export default function Cards({ data }) {
  const [list, setList] = useState(0);
  const card = [];

  data[list].forEach(value => {
    card.push(value);
  });

  return (
    <>
      <ul className='flex flex-wrap gap-x-4'>
        {card.map(x => {
          return (
            <li
              key={x.title}
              className='mx-auto mb-16 w-[350px] text-center font-montserrat'
            >
              <div className={`h-[180px] rounded-2xl ${x.bg}`}></div>
              <h2 className='my-2 text-xl font-bold'>{x.title}</h2>
              <p>{x.description}</p>
            </li>
          );
        })}
      </ul>
      <div className='flex justify-center gap-x-4'>
        {data.length > 1 && data.map((_, index) => {
          return (
            <button
              key={index}
              onClick={() => setList(index)}
              className='h-10 w-10 rounded-lg bg-white font-tinos text-lg text-black'
            >
              {index + 1}
            </button>
          );
        })}
      </div>
    </>
  );
}
