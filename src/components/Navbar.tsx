import React, { useState, useRef, useEffect } from "react";
// import logo from './logo.png'

const Navbar = (): JSX.Element => {
  return (
    <nav className="navbar">
      <div className="navbar__container">
        <div className="navbar__logo">
          <img src="./logo.png" alt="Logo" />
        </div>
        <div className="navbar__search">
          <SearchComponent />
        </div>
      </div>
    </nav>
  );
};

const SearchComponent = () => {
  const [search, setSearch] = useState(null);

  const handleChange = async (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    // console.log(search);
  }, [search]);

  const submitFun = (e): void => {
    e.preventDefault();
    console.log(search);
  };

  return (
    <form action="submit" onSubmit={submitFun}>
      <input type="search" placeholder="Search" onChange={handleChange} />
      <button type="submit">
        <img src="./search.png" alt="search" />
      </button>
    </form>
  );
};

export default Navbar;
