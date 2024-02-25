import { useState } from 'react';
import MainContainer from './components/MainContainer';
import NavBar from './components/NavBar';

export default function App() {
  const [isValidName, setIsValidName] = useState(false);
  return (
    <>
      <NavBar isValidName={isValidName} />
      <div className="flex h-screen w-full flex-col items-center justify-center bg-gradient-to-b from-amber-200 to-red-500 sm:h-screen">
        <MainContainer
          isValidName={isValidName}
          setIsValidName={setIsValidName}
        />
      </div>
    </>
  );
}
