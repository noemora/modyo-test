import PropTypes from 'prop-types';
import { useState } from 'react';
import questionMark from '../assets/question-mark.jpg';
import CardImage from './CardImage';

export default function Card({ id, imgSrc, altText }) {
  const [flipAnimation, setFlipAnimation] = useState(false);

  return (
    <div
      key={id}
      className={'h-24 overflow-hidden rounded shadow-sm'}
      onClick={() => setFlipAnimation(!flipAnimation)}
    >
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
    </div>
  );
}

Card.propTypes = {
  id: PropTypes.string,
  imgSrc: PropTypes.string,
  altText: PropTypes.string,
};
