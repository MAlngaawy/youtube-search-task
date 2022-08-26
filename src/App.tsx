import React from "react";
// @ts-ignore
import Navbar from "./components/Navbar.tsx";
import "./App.scss";
import { useStateContext } from "./contexts/ContextProvider";
// @ts-ignore
import loading from "./assets/loading.gif";

const App = (): JSX.Element => {
  const { data } = useStateContext();
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="data">
          {(data == null && "") ||
            (data === "loading" && (
              <div className="loading">
                {" "}
                <img src={loading} alt="" />{" "}
              </div>
            )) ||
            (Array.isArray(data) && (
              <div>
                <div className="data__info">
                  <div className="results">About {data.length} results</div>
                  <div className="filter">
                    <img src="./filter.png" alt="filter" /> <span>FILTER</span>
                  </div>
                </div>
                <div className="videos_list">
                  {data.map((item: any) => {
                    if (item.id.kind === "youtube#video") {
                      return (
                        <div key={item.id.videoId} className="data__video">
                          <div className="video_image">
                            <img
                              src={item.snippet.thumbnails.high.url}
                              alt=""
                            />
                          </div>
                          {/* <iframe
                          className="video__frame"
                          title={item.id.videoId}
                          width="300"
                          height="200"
                          src={`https://www.youtube.com/embed/${item.id.videoId}`}
                        ></iframe> */}
                          <div className="info">
                            <h3 className="info__heading">
                              {item.snippet.title}
                            </h3>
                            <p className="info__channel">
                              {item.snippet.channelTitle}
                            </p>
                            <p className="info__description">
                              {item.snippet.description}
                            </p>
                          </div>
                        </div>
                      );
                    } else if (item.id.kind === "youtube#channel") {
                      console.log(item);
                      return (
                        <div key={item.id.videoId} className="data__video">
                          <div className="channel_image">
                            <img
                              src={item.snippet.thumbnails.high.url}
                              alt=""
                            />
                          </div>
                          <div className="info">
                            <h3 className="info__heading">
                              {item.snippet.title}
                            </h3>
                            <p className="info__channel">
                              {item.snippet.channelTitle}
                            </p>
                            <p className="info__description">
                              {item.snippet.description}
                            </p>
                          </div>
                        </div>
                      );
                    }
                  })}
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default App;
