import clsx from 'clsx';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import questionMark from '../assets/question-mark.jpg';
import CardImage from './CardImage';

export default function Card({
  id,
  imgSrc,
  altText,
  cardsFlipped,
  setCardFlipped,
  isMiss,
  // isSuccess,
  // successCards,
}) {
  const [flipAnimation, setFlipAnimation] = useState(false);
  // const [blockAnimation, setBlockAnimation] = useState(false);
  const [clicked, setClicked] = useState(false);

  const handleCardClick = () => {
    setFlipAnimation(!flipAnimation);
    setClicked(true);
    if (!flipAnimation) {
      setCardFlipped([...cardsFlipped, altText]);
    }
  };

  // useEffect(() => {
  //   if (isSuccess) {
  //     setBlockAnimation(true);
  //   }
  // }, [isSuccess]);

  useEffect(() => {
    if (isMiss) {
      setTimeout(() => {
        setFlipAnimation(false);
        setClicked(false);
      }, 1000);
    }
  }, [isMiss]);

  return (
    <div
      key={id}
      className={clsx(
        clicked && 'pointer-events-none',
        'h-24 cursor-pointer overflow-hidden rounded shadow-sm'
      )}
      onClick={handleCardClick}
    >
      <CardImage
        flipAnimation={flipAnimation}
        src={questionMark}
        altText="Question Mark"
        // blockAnimation={blockAnimation}
      />
      <CardImage
        flipAnimation={!flipAnimation}
        src={imgSrc}
        altText={altText}
        // blockAnimation={blockAnimation}
      />
    </div>
  );
}

Card.propTypes = {
  id: PropTypes.string,
  imgSrc: PropTypes.string,
  altText: PropTypes.string,
  cardsFlipped: PropTypes.array,
  setCardFlipped: PropTypes.func,
  isMiss: PropTypes.bool,
  isSuccess: PropTypes.bool,
  // successCards: PropTypes.array,
};
