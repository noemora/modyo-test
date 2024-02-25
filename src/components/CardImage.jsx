import clsx from 'clsx';
import PropTypes from 'prop-types';

export default function CardImage({ flipAnimation, src, altText }) {
  return (
    <img
      className={clsx(
        !flipAnimation && 'animate-flip-in-x',
        flipAnimation && 'hidden',
        'xs:h-14 xs:w-14 object-cover object-center sm:h-16 sm:w-16 md:h-20 md:w-20 lg:h-24 lg:w-24'
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
};
