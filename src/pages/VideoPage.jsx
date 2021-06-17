import React from "react";
import { useYoutube } from "../context/Search.context.js";
import YouTube from "react-youtube";

function VideoPage() {
  const { list } = useYoutube();
  console.log("list: ", list);
  return (
    <div>
      {list &&
        (list.length === 0 ? (
          <p>No results</p>
        ) : (
          <ul className="items">
            {list.map((item) => (
              <li className="item" key={item.id}>
                <div>
                  <b>
                    <a href={item.link}>{item.title}</a>
                  </b>
                  <p>{item.description}</p>
                </div>
                <YouTube videoId={item.id} />
                <ul className="meta">
                  <li>
                    By: <a href={item.author.ref}>{item.author.name}</a>
                  </li>
                  <li>Views: {item.views}</li>
                  <li>Duration: {item.duration}</li>
                </ul>
                <img alt="" src={item.thumbnail} />
              </li>
            ))}
          </ul>
        ))}
    </div>
  );
}

export default VideoPage;
