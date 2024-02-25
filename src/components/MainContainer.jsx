import clsx from 'clsx';
import PropTypes from 'prop-types';
import GameContainer from './GameContainer';
import Welcome from './Welcome';

export default function MainContainer({ isValidName, setIsValidName }) {
  return (
    <div
      className={clsx(
        (isValidName || window.sessionStorage.getItem('userName')) && 'mt-8',
        'rounded-2xl bg-orange-700/50 p-6 backdrop-blur-sm'
      )}
    >
      {!isValidName && !window.sessionStorage.getItem('userName') ? (
        <Welcome setIsValidName={setIsValidName} />
      ) : (
        <GameContainer />
      )}
    </div>
  );
}

MainContainer.propTypes = {
  isValidName: PropTypes.bool.isRequired,
  setIsValidName: PropTypes.func.isRequired,
};
