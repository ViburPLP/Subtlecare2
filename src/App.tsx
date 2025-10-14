import { useState } from 'react';
import Home from './pages/Home';
import Portal from './pages/Portal';

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'portal'>(() => {
    const hash = window.location.hash;
    return hash === '#portal' ? 'portal' : 'home';
  });

  window.addEventListener('hashchange', () => {
    const hash = window.location.hash;
    setCurrentPage(hash === '#portal' ? 'portal' : 'home');
  });

  return currentPage === 'home' ? <Home /> : <Portal />;
}

export default App;
