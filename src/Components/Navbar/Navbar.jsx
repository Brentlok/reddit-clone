import Logo from '../Logo';
import SearchBar from '../SearchBar';

const Navbar = () => {
  return (
    <nav className="w-full h-12 bg-stone-900 border-b-2 border-stone-700 flex items-center justify-center p-5">
      <Logo />
      <SearchBar />
    </nav>
  );
};

export default Navbar;
