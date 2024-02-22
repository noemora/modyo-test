import clsx from 'clsx';
import PropTypes from 'prop-types';
import { useState } from 'react';

export default function Card({ id, imgSrc, altText }) {
  const [flipAnimation, setFlipAnimation] = useState(false);
  return (
    <div
      key={id}
      className={clsx(
        flipAnimation && 'animate-flip-in-x',
        'overflow-hidden rounded shadow-lg'
      )}
      onClick={() => setFlipAnimation(!flipAnimation)}
    >
      <img
        className="h-24 object-cover object-center"
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
