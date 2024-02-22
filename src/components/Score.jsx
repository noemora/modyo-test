import PropTypes from 'prop-types';

export default function Score({ moves, success, miss }) {
  return (
    <div className="mb-4 flex justify-center gap-x-10">
      <div>Moves: {moves}</div>
      <div>Successes: {success}</div>
      <div>Misses: {miss}</div>
    </div>
  );
}

Score.propTypes = {
  moves: PropTypes.number.isRequired,
  success: PropTypes.number.isRequired,
  miss: PropTypes.number.isRequired,
};
