import React from "react";
const SearchContext = React.createContext();
export function useYoutube() {
  return React.useContext(SearchContext);
}
export default function SearchWrapper(props) {
  const [query, setQuery] = React.useState("Relaxing Meditation");
  const [list, setList] = React.useState(null);
  const search = (e) => {
    e.preventDefault();
    searchYouTube(query).then(setList);
  };

  return (
    <SearchContext.Provider value={{ query, setQuery, list, search }}>
      {" "}
      {props.children}{" "}
    </SearchContext.Provider>
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
