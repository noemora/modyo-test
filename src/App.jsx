import { useState } from 'react';
import CardList from './components/CardList';
import NavBar from './components/NavBar';
import Score from './components/Score';
import Welcome from './components/Welcome';

export default function App() {
  const [isValidName, setIsValidName] = useState(false);
  return (
    <>
      <NavBar />
      <div className="flex h-screen w-full flex-col items-center justify-center bg-gradient-to-b from-amber-200 to-red-500">
        <div className="rounded-2xl bg-orange-700/[0.5] p-6 backdrop-blur-sm">
          {!isValidName ? (
            <Welcome setIsValidName={setIsValidName} />
          ) : (
            <>
              <Score />
              <CardList />
            </>
          )}
        </div>
      </div>
    </>
  );
}
