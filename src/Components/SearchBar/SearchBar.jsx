import { useRef, useState } from 'react';

const SearchBar = () => {
  const inputRef = useRef();
  const [inputFocused, setInputFocused] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [active, setActive] = useState(false);

  const handleChange = ({ target }) => {
    const { value } = target;
    setInputValue(value);
  };

  return (
    <form
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => !inputFocused && setActive(false)}
      onClick={() => {
        inputRef.current.focus();
        setInputFocused(true);
      }}
      className={`h-9 bg-stone-800 rounded-md w-1/4 flex pl-4 items-center border-2 ${
        active ? 'border-white' : 'border-stone-800'
      }`}
      role="search"
      autoComplete="off"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 32 32"
        className="h-6 w-6"
      >
        <path
          fill="#9CA3AF"
          d="M13 26C5.8 26 0 20.2 0 13S5.8 0 13 0s13 5.8 13 13-5.8 13-13 13zm0-24C6.9 2 2 6.9 2 13s4.9 11 11 11 11-4.9 11-11S19.1 2 13 2z"
        />
        <path
          fill="#9CA3AF"
          d="M22.682 21.267l8.98 8.98-1.414 1.414-8.98-8.98 1.414-1.414z"
        />
      </svg>

      <input
        ref={inputRef}
        onFocus={() => {
          setActive(true);
          setInputFocused(true);
        }}
        onBlur={() => {
          setActive(false);
          setInputFocused(false);
        }}
        onChange={handleChange}
        className="h-8 w-full bg-stone-800 ml-3 outline-none"
        placeholder="Search Reddit"
      />
    </form>
  );
};

export default SearchBar;
