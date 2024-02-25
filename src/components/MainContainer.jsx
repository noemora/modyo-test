import clsx from 'clsx';
import PropTypes from 'prop-types';
import GameContainer from './GameContainer';
import Welcome from './Welcome';

export default function MainContainer({ isValidName, setIsValidName }) {
  const sessionUser = window.sessionStorage.getItem('userName');
  return (
    <div
      className={clsx(
        (isValidName || sessionUser) && 'mt-4 sm:mt-0 md:mt-8 lg:mt-10',
        'xs:p-8 mx-8 rounded-2xl bg-orange-700/50 p-3 shadow-lg backdrop-blur-sm md:mx-6 md:p-6 lg:mx-4'
      )}
    >
      {!isValidName && !sessionUser ? (
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
