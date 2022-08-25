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
                <div key={item.id.videoId}>
                  {/* <img
                  src={item.snippet.thumbnails.high.url}
                  alt="youtube Video"
                /> */}
                  <iframe
                    title={item.id.videoId}
                    width="420"
                    height="315"
                    src={`https://www.youtube.com/embed/${item.id.videoId}`}
                  ></iframe>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default App;
