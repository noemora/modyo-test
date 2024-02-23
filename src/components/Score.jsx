import PropTypes from 'prop-types';

export default function Score({ movesCount, successCount, missCount }) {
  return (
    <div className="mb-4 flex justify-center gap-x-10">
      <div>Moves: {movesCount}</div>
      <div>Successes: {successCount}</div>
      <div>Misses: {missCount}</div>
    </div>
  );
}

Score.propTypes = {
  movesCount: PropTypes.number.isRequired,
  successCount: PropTypes.number.isRequired,
  missCount: PropTypes.number.isRequired,
};
