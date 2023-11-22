import { HashRouter as Routes, Route, Switch } from 'react-router-dom';
import { useState, useEffect } from 'react';

import About from './component/pages/about';
import Works from './component/pages/works';

export default function App() {
  const [mode, setMode] = useState(() => {
    const storedValue = localStorage.getItem('theme');
    return storedValue ? storedValue : null;
  });

  function changeMode(x) {
    setMode(x);
  }

  window.addEventListener('click', e => {
    if (e.target.id == 'default') {
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return changeMode('dark');
      } else {
        return changeMode('light');
      }
    }
    e.target.id == 'light' && changeMode('light');
    e.target.id == 'dark' && changeMode('dark');
  });

  useEffect(() => {
    localStorage.setItem('theme', mode);
  }, [mode]);

  return (
    <div className={`${mode == 'dark' && 'dark'}`}>
      <Routes basename="/porto">
        <Switch>
          <Route
            path='/'
            exact
            component={About}
          />
          <Route
            path='/works'
            component={Works}
          />
        </Switch>
      </Routes>
    </div>
  );
}
