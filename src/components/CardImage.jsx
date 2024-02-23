import clsx from 'clsx';
import PropTypes from 'prop-types';

export default function CardImage({
  flipAnimation,
  src,
  altText,
  // blockAnimation,
}) {
  return (
    <img
      className={clsx(
        !flipAnimation && 'animate-flip-in-x',
        flipAnimation && 'hidden',
        'h-24 object-cover object-center'
      )}
      src={src}
      alt={altText}
      width={100}
      height={130}
    />
  );
}

CardImage.propTypes = {
  flipAnimation: PropTypes.bool,
  src: PropTypes.string,
  altText: PropTypes.string,
  blockAnimation: PropTypes.bool,
};
