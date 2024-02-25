import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import memoryLogo from '../assets/memory-logo.png';

export default function NavBar({ isValidName }) {
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const sessionUser = window.sessionStorage.getItem('userName');
    (isValidName || sessionUser) && setUserName(sessionUser);
  }, [isValidName]);

  return (
    <div className="absolute left-0 top-0 w-full py-2">
      <nav className="flex items-center justify-between px-6">
        <img src={memoryLogo} alt="Memory Logo" className="h-12" />
        <h1 className="text-3xl font-bold">Modyo Test</h1>
        <div className="flex w-40 items-center gap-2">
          {userName && (
            <p className="w-36 text-right font-mono text-sm font-bold">
              {userName}
            </p>
          )}
        </div>
      </nav>
    </div>
  );
}

NavBar.propTypes = {
  isValidName: PropTypes.bool.isRequired,
};
