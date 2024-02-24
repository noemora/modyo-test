import { useState } from 'react';
import CardList from './CardList';
import Score from './Score';

export default function GameContainer() {
  const [movesCounter, setMovesCounter] = useState(0);
  const [successCounter, setSuccessCounter] = useState(0);
  const [missCounter, setMissCounter] = useState(0);

  return (
    <>
      <Score
        movesCount={movesCounter}
        successCount={successCounter}
        missCount={missCounter}
      />
      <CardList
        setMovesCount={setMovesCounter}
        setSuccessCount={setSuccessCounter}
        setMissCount={setMissCounter}
      />
    </>
  );
}
