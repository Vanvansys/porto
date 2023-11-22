function Facebook({ style, link }) {
  return (
    <a href={link}>
      <img
        src='./facebook.svg'
        className={`w-9 cursor-pointer ${style}`}
      />
    </a>
  );
}

function TwitterX({ style, link }) {
  return (
    <a href={link}>
      <img
        src='./twitterX.svg'
        className={`w-9 cursor-pointer ${style}`}
      />
    </a>
  );
}

function WhatsApp({ style, link }) {
  return (
    <a href={link}>
      <img
        src='./whatsapp.svg'
        className={`w-9 cursor-pointer ${style}`}
      />
    </a>
  );
}

function Instagram({ style, link }) {
  return (
    <a href={link}>
      <img
        src='./instagram.svg'
        className={`w-9 cursor-pointer ${style}`}
      />
    </a>
  );
}

function GitHub({ style, link }) {
  return (
    <a href={link}>
      <img
        src='./github.svg'
        className={`w-9 cursor-pointer ${style}`}
      />
    </a>
  );
}

function Moon({ style, link }) {
  return (
    <img
      src='./moon.svg'
      className={`${style}`}
    />
  );
}

function Sun({ style, link }) {
  return (
    <img
      src='./sun.svg'
      className={`${style}`}
    />
  );
}

function Eclipse({ style, link }) {
  return (
    <img
      src='./eclipse.svg'
      className={`${style}`}
    />
  );
}

export { Facebook, TwitterX, WhatsApp, Instagram, GitHub, Moon, Sun, Eclipse };
