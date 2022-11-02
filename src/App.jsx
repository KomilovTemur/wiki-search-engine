import axios from "axios";
import { useState } from "react";
import Results from "./components/Results";

function App() {
  const BaseUrl = `https://en.wikipedia.org/w/api.php?origin=*&action=opensearch&search=`;
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const handeSubmit = (e) => {
    e.preventDefault();
    axios
      .get(BaseUrl + search)
      .then((res) => {
        const dataArr = [];
        for (let i = 0; i < res.data[1].length; i++) {
          dataArr.push({
            title: res.data[1][i],
            links: res.data[3][i],
          });
        }
        setData(dataArr);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="flex items-center flex-col">
      <div className="flex justify-center items-center my-5">
      <img src="https://en.wikipedia.org/static/images/project-logos/enwiki.png" alt="wikipedia Logo" />
      <form
        onSubmit={handeSubmit}
        className="bg-slate-800 px-5 py-1 rounded-full my-2 text-white flex justify-between"
      >
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          name="search"
          className="bg-transparent"
          placeholder="Search..."
        />
        <button type="sumit" className="flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </button>
      </form>
      </div>
      {data?.map(({ title, links }, index) => (
        <Results key={index} title={title} links={links} />
      ))}
    </div>
  );
}

export default App;
