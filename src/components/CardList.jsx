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
  const [successCards, setSuccessCards] = useState([]);

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
        setSuccessCards([...successCards, ...flippedCards]);
      } else {
        setMissCount(prev => prev + 1);
      }
      setMovesCount(prev => prev + 1);
    }
    return () => {
      setIsSuccess(false);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    flippedCards,
    setMovesCount,
    setSuccessCount,
    setMissCount,
    setIsSuccess,
    setSuccessCards,
  ]);

  if (isPending) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="grid max-w-4xl grid-cols-5 grid-rows-8 justify-center gap-1 sm:grid-cols-8 sm:grid-rows-5 md:gap-2 lg:gap-3">
      {cardList.map(({ fields }, index) => (
        <Card
          key={`${index}`}
          imgSrc={fields.image.url}
          altText={fields.image.title}
          cardsFlipped={flippedCards}
          setCardFlipped={setFlippedCards}
          isSuccess={isSuccess}
          successCards={successCards}
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
