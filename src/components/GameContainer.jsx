import { useState } from 'react';
import CardList from './CardList';
import Score from './Score';

export default function GameContainer() {
  const [moves, setMoves] = useState(0);
  const [success, setSuccess] = useState(0);
  const [miss, setMiss] = useState(0);

  return (
    <>
      <Score moves={moves} success={success} miss={miss} />
      <CardList setMoves={setMoves} setSuccess={setSuccess} setMiss={setMiss} />
    </>
  );
}
