import React, { useState } from "react";

function Search(props) {
  const [search, setSearch] = useState("");

  const Searchsubmit = (event) => {
    props.getPhotosSearch(search);
  };
  return (
    <header className="header mb-32">
      <div className="navbar shadow-lg bg-neutral text-neutral-content overflow-hidden overflow-hidden fixed top-0 w-full z-10">
        <div className="container mx-auto">
          <div className="flex-1 hidden px-2 mx-2 lg:flex">
            <a href="/">
              <span className="text-lg font-bold">Instagram</span>
            </a>
          </div>
          <div className="flex-1 lg:flex-none">
            <div className="form-control">
              <input
                type="text"
                placeholder="Search"
                className="input input-ghost"
                onChange={(e) => setSearch(e.target.value)}
                value={search}
              />
            </div>
          </div>
          <div className="flex-none">
            <button className="btn btn-square btn-ghost" onClick={Searchsubmit}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Search;
