function Facebook({ style, link }) {
  return (
    <img
      src='/facebook.svg'
      href={link}
      className={`w-9 cursor-pointer ${style}`}
    />
  );
}

function TwitterX({ style, link }) {
  return (
    <img
      src='/twitterX.svg'
      href={link}
      className={`w-9 cursor-pointer ${style}`}
    />
  );
}

function WhatsApp({ style, link }) {
  return (
    <img
      src='/whatsapp.svg'
      href={link}
      className={`w-9 cursor-pointer ${style}`}
    />
  );
}

function Instagram({ style, link }) {
  return (
    <img
      src='/instagram.svg'
      href={(link = '')}
      className={`w-9 cursor-pointer ${style}`}
    />
  );
}

function GitHub({ style, link }) {
  return (
    <img
      src='/github.svg'
      href={link}
      className={`w-9 cursor-pointer ${style}`}
    />
  );
}

function Moon({ style, link }) {
  return (
    <img
      src='/moon.svg'
      href={link}
      className={`${style}`}
    />
  );
}

function Sun({ style, link }) {
  return (
    <img
      src='/sun.svg'
      href={link}
      className={`${style}`}
    />
  );
}

function Eclipse({ style, link }) {
  return (
    <img
      src='/eclipse.svg'
      href={link}
      className={`${style}`}
    />
  );
}

export { Facebook, TwitterX, WhatsApp, Instagram, GitHub, Moon, Sun, Eclipse };
