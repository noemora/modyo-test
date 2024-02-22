import clsx from 'clsx';
import PropTypes from 'prop-types';
import { useState } from 'react';
import questionMark from '../assets/question-mark.jpg';

export default function Card({ id, imgSrc, altText }) {
  const [flipAnimation, setFlipAnimation] = useState(false);
  console.log(flipAnimation, 'flipAnimation');
  return (
    <div
      key={id}
      className={'h-24 overflow-hidden rounded shadow-sm'}
      onClick={() => setFlipAnimation(!flipAnimation)}
    >
      <img
        className={clsx(
          !flipAnimation && 'animate-flip-in-x',
          flipAnimation && 'hidden',
          'h-24 object-cover object-center'
        )}
        src={questionMark}
        alt="Question Mark"
        width={100}
        height={130}
      />
      <img
        className={clsx(
          flipAnimation && 'animate-flip-in-x',
          !flipAnimation && 'hidden',
          'h-24 object-cover object-center'
        )}
        src={imgSrc}
        alt={altText}
        width={100}
        height={130}
      />
    </div>
  );
}

Card.propTypes = {
  id: PropTypes.string,
  imgSrc: PropTypes.string,
  altText: PropTypes.string,
};
