import GameContainer from './components/MainContainer';
import NavBar from './components/NavBar';

export default function App() {
  return (
    <>
      <NavBar />
      <div className="flex h-screen w-full flex-col items-center justify-center bg-gradient-to-b from-amber-200 to-red-500">
        <GameContainer />
      </div>
    </>
  );
}
