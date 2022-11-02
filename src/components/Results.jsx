import React from "react";

const Results = ({ title, links }) => {
  return (
    <div className="bg-cyan-800 text-white w-[900px] my-2 py-2 px-4 rounded-sm overflow-hidden shadow-md">
      <p>{title}</p>
      <a
        href={links}
        target="_blank"
        rel="noreferrer"
        className="text-green-400 duration-200 hover:text-green-500"
      >
        {links}
      </a>
    </div>
  );
};

export default Results;
