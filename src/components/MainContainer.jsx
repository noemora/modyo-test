import clsx from 'clsx';
import { useState } from 'react';
import GameContainer from './GameContainer';
import Welcome from './Welcome';

export default function MainContainer() {
  const [isValidName, setIsValidName] = useState(false);

  return (
    <div
      className={clsx(
        isValidName && 'mt-8',
        'rounded-2xl bg-orange-700/[0.5] p-6 backdrop-blur-sm'
      )}
    >
      {!isValidName ? (
        <Welcome setIsValidName={setIsValidName} />
      ) : (
        <GameContainer />
      )}
    </div>
  );
}
