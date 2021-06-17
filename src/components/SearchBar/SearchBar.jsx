import React from "react";
import * as CONSTS from "../../utils/consts.js";
import * as PATHS from "../../utils/paths.js";
import { useYoutube } from "../../context/Search.context.js";
import { useHistory } from "react-router-dom";

function SearchBar() {
  console.log("ARE WE HUMAN");
  const { query, setQuery, search, list } = useYoutube();
  const history = useHistory();
  const handleClick = () => {
    history.push(PATHS.VIDEOPAGE);
  };
  return (
    <div>
      <form
        onSubmit={(event) => {
          search(event).then(handleClick);
        }}
      >
        <input
          autoFocus
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="search" type="submit">
          Yogatta let go
        </button>
      </form>
    </div>
  );
}

async function searchYouTube(q) {
  q = encodeURIComponent(q);
  const response = await fetch(
    "https://youtube-search-results.p.rapidapi.com/youtube-search/?q=" + q,
    {
      method: "GET",
      headers: {
        "x-rapidapi-host": "youtube-search-results.p.rapidapi.com",
        "x-rapidapi-key": "24e257abf6mshdd67fcd472c3f41p1af538jsn698ec0205280",
      },
    }
  );
  const body = await response.json();
  console.log(body);
  return body.items.filter((item) => item.type === "video");
}

export default SearchBar;
