import { useQuery } from '@tanstack/react-query';
import PropTypes from 'prop-types';
import { useEffect, useMemo, useState } from 'react';
import { getCards } from '../api/cards';
import { shuffle } from '../utils/functions';
import Card from './Card';

export default function CardList({
  setMovesCount,
  setSuccessCount,
  setMissCount,
}) {
  const [flippedCards, setFlippedCards] = useState([]);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isMiss, setIsMiss] = useState(false);
  // const [successCards, setSuccessCards] = useState([]);

  console.log(flippedCards, 'flippedCards');

  const {
    isPending,
    error,
    data: cards,
  } = useQuery({
    queryKey: ['getCards'],
    queryFn: () => getCards(),
    refetchOnWindowFocus: false,
  });

  const cardList = useMemo(
    () => cards && shuffle([...cards, ...cards]),
    [cards]
  );

  useEffect(() => {
    if (flippedCards.length === 2) {
      if (flippedCards[0] === flippedCards[1]) {
        setSuccessCount(prev => prev + 1);
        setIsSuccess(true);
        // setSuccessCards(prev => [...prev, ...flippedCards]);
      } else {
        setMissCount(prev => prev + 1);
        setIsMiss(true);
      }
      setFlippedCards([]);
      setMovesCount(prev => prev + 1);
    }
    return () => {
      setIsMiss(false);
      setIsSuccess(false);
    };
  }, [
    flippedCards,
    setMovesCount,
    setSuccessCount,
    setMissCount,
    setIsSuccess,
    setIsMiss,
  ]);

  console.log(isMiss, 'isMiss');
  console.log(isSuccess, 'isSuccess');

  if (isPending) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="flex max-w-4xl flex-wrap justify-center gap-3">
      {cardList.map(({ fields }, index) => (
        <Card
          key={index}
          imgSrc={fields.image.url}
          altText={fields.image.title}
          cardsFlipped={flippedCards}
          setCardFlipped={setFlippedCards}
          isMiss={isMiss}
          isSuccess={isSuccess}
          // successCards={successCards}
        />
      ))}
    </div>
  );
}

CardList.propTypes = {
  setMovesCount: PropTypes.func,
  setSuccessCount: PropTypes.func,
  setMissCount: PropTypes.func,
};
