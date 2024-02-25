import PropTypes from 'prop-types';

export default function Score({ movesCount, successCount, missCount }) {
  return (
    <div className="mb-4 flex justify-center gap-x-8 text-sm sm:text-base md:text-lg lg:gap-x-10 lg:text-xl">
      <p>Moves: {movesCount}</p>
      <p>Successes: {successCount}</p>
      <p>Misses: {missCount}</p>
    </div>
  );
}

Score.propTypes = {
  movesCount: PropTypes.number.isRequired,
  successCount: PropTypes.number.isRequired,
  missCount: PropTypes.number.isRequired,
};
