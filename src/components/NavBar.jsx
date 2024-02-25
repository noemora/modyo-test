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
      <nav className="flex items-center justify-between px-3 sm:px-6">
        <img
          src={memoryLogo}
          alt="Memory Logo"
          className="h-9 md:h-11 lg:h-12"
        />
        <h1 className="text-center text-lg font-bold sm:text-xl md:text-2xl lg:text-3xl">
          Modyo Test
        </h1>
        <div className="flex w-40">
          {userName && (
            <p className="w-28 text-right font-mono text-xs font-bold sm:text-sm md:w-36 md:text-base lg:text-lg">
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
