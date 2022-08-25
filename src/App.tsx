import React from "react";
// @ts-ignore
import Navbar from "./components/Navbar.tsx";
import "./App.scss";
import { useStateContext } from "./contexts/ContextProvider";

const App = (): JSX.Element => {
  const { data } = useStateContext();
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="data">
          {data &&
            data.map((item: any) => {
              return (
                <div key={item.id.videoId} className="data__video">
                  {/* <img
                  src={item.snippet.thumbnails.high.url}
                  alt="youtube Video"
                /> */}
                  <iframe
                    title={item.id.videoId}
                    width="300"
                    height="200"
                    src={`https://www.youtube.com/embed/${item.id.videoId}`}
                  ></iframe>
                  <div className="info">
                    <h3 className="info__heading">{item.snippet.title}</h3>
                    <p className="info__channel">{item.snippet.channelTitle}</p>
                    <p className="info__description">
                      {item.snippet.description}
                    </p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default App;
