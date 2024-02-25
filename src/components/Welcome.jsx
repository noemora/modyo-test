import PropTypes from 'prop-types';
import { useState } from 'react';
import { validateName } from '../utils/functions';

export default function Welcome({ setIsValidName }) {
  const [name, setName] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    if (validateName(name)) {
      setIsValidName(true);
      window.sessionStorage.setItem('userName', name);
    }
  };

  return (
    <div className="flex w-fit flex-col items-center gap-4 font-mono">
      <h1 className="animate-flip-x text-5xl font-bold tracking-tight animate-delay-900">
        Welcome to Memory Game!
      </h1>
      <form className="flex min-w-80 flex-col gap-4" onSubmit={handleSubmit}>
        <input
          type="text"
          className="rounded bg-slate-100 px-3 py-1 outline-none hover:shadow-md"
          placeholder="Enter your name here..."
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <button
          type="submit"
          className="rounded-lg bg-cyan-600 px-8 py-2 font-semibold hover:shadow-xl"
        >
          Play!
        </button>
      </form>
    </div>
  );
}

Welcome.propTypes = {
  setIsValidName: PropTypes.func.isRequired,
};
