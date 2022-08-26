import React, { useState } from "react";
// import logo from './logo.png'
// @ts-ignore
import request from "../api/youtube.ts";
import { useStateContext } from "../contexts/ContextProvider";
// @ts-ignore

const Navbar = (): JSX.Element => {
  return (
    <nav className="navbar">
      <div className="navbar__container">
        <div className="navbar__logo">
          <img src="./logo.png" alt="Logo" />
          <Icon />
        </div>
        <div className="navbar__search">
          <SearchComponent />
        </div>
      </div>
    </nav>
  );
};

const SearchComponent = () => {
  const { setData, search, setSearch, screenWidth } = useStateContext();
  const [keyword, setKeyWord] = useState("");
  const handle = async () => {
    const response = await request.get("", {
      params: {
        q: keyword,
      },
    });
    setData(response.data.items);
  };

  const handleChange = async (e) => {
    setKeyWord(e.target.value);
  };

  async function submitFun(e) {
    e.preventDefault();
    if (search === "input") {
      setData("loading");
      handle();
      setSearch("text");
    } else {
      setSearch("input");
    }
  }

  return (
    <form action="submit" onSubmit={submitFun}>
      {screenWidth < 600 && search === "text" && (
        <h3 className="serch-word">{keyword}</h3>
      )}
      {screenWidth < 600 && search === "input" && (
        <input
          value={keyword}
          type="search"
          placeholder="Search"
          onChange={handleChange}
        />
      )}
      {screenWidth >= 600 && (
        <input
          value={keyword}
          type="search"
          placeholder="Search"
          onChange={handleChange}
        />
      )}
      <button type="submit">
        <img src="./search.png" alt="search" />
      </button>
    </form>
  );
};

export default Navbar;

const Icon = () => {
  return (
    <svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 461.001 461.001"
    >
      <g>
        <path
          d="M365.257,67.393H95.744C42.866,67.393,0,110.259,0,163.137v134.728
		c0,52.878,42.866,95.744,95.744,95.744h269.513c52.878,0,95.744-42.866,95.744-95.744V163.137
		C461.001,110.259,418.135,67.393,365.257,67.393z M300.506,237.056l-126.06,60.123c-3.359,1.602-7.239-0.847-7.239-4.568V168.607
		c0-3.774,3.982-6.22,7.348-4.514l126.06,63.881C304.363,229.873,304.298,235.248,300.506,237.056z"
        />
      </g>
    </svg>
  );
};
