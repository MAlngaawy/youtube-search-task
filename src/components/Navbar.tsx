import React, { useState } from "react";
// import logo from './logo.png'
// @ts-ignore
import request from "../api/youtube.ts";
import { useStateContext } from "../contexts/ContextProvider";

const Navbar = (): JSX.Element => {
  const { data, setData } = useStateContext();
  console.log(data);

  return (
    <nav className="navbar">
      <div className="navbar__container">
        <div className="navbar__logo">
          <img src="./logo.png" alt="Logo" />
        </div>
        <div className="navbar__search">
          <SearchComponent setdata={setData} />
        </div>
      </div>
    </nav>
  );
};

const SearchComponent = ({ setdata }) => {
  const [keyword, setKeyWord] = useState(null);
  const handle = async () => {
    const response = await request.get("", {
      params: {
        q: keyword,
      },
    });
    setdata(response.data.items);
  };

  const handleChange = async (e) => {
    setKeyWord(e.target.value);
  };

  async function submitFun(e) {
    setdata("loading");
    e.preventDefault();
    handle();
  }

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
