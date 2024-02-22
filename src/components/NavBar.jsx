import memoryLogo from '../assets/memory-logo.png';

export default function NavBar() {
  return (
    <div className="absolute left-0 top-0 w-full py-2">
      <nav className="flex items-center justify-between px-6">
        <img src={memoryLogo} alt="Memory Logo" className="h-12" />
        <h1 className="text-3xl font-bold">Modyo Test</h1>
        <p className="w-40 text-right font-mono font-bold">User</p>
      </nav>
    </div>
  );
}
