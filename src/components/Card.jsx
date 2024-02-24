import clsx from 'clsx';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import questionMark from '../assets/question-mark.jpg';
import tick from '../assets/tick.avif';
import CardImage from './CardImage';

export default function Card({
  key,
  imgSrc,
  altText,
  cardsFlipped,
  setCardFlipped,
  isSuccess,
  successCards,
}) {
  const [flipAnimation, setFlipAnimation] = useState(false);
  const [blockAnimation, setBlockAnimation] = useState(false);
  const [clicked, setClicked] = useState(false);

  const handleCardClick = () => {
    setFlipAnimation(!flipAnimation);
    setClicked(true);
    if (!flipAnimation) {
      setCardFlipped([...cardsFlipped, altText]);
    }
  };

  useEffect(() => {
    if (cardsFlipped.length === 2) {
      setBlockAnimation(true);
      setTimeout(() => {
        setFlipAnimation(false);
        setClicked(false);
        setCardFlipped([]);
      }, 1000);
    }
    if (cardsFlipped.length === 0) {
      setBlockAnimation(false);
    }
  }, [cardsFlipped, setCardFlipped, isSuccess]);

  return (
    <div
      key={key}
      className={clsx(
        clicked && 'pointer-events-none',
        successCards.includes(altText) && 'pointer-events-none',
        'h-24 cursor-pointer overflow-hidden rounded shadow-sm'
      )}
      onClick={!blockAnimation ? handleCardClick : undefined}
    >
      {!isSuccess && !successCards.includes(altText) ? (
        <>
          <CardImage
            flipAnimation={flipAnimation}
            src={questionMark}
            altText="Question Mark"
          />
          <CardImage
            flipAnimation={!flipAnimation}
            src={imgSrc}
            altText={altText}
          />
        </>
      ) : (
        <CardImage src={tick} altText="Tick" />
      )}
    </div>
  );
}

Card.propTypes = {
  key: PropTypes.string,
  imgSrc: PropTypes.string,
  altText: PropTypes.string,
  cardsFlipped: PropTypes.array,
  setCardFlipped: PropTypes.func,
  isMiss: PropTypes.bool,
  isSuccess: PropTypes.bool,
  successCards: PropTypes.array,
};
