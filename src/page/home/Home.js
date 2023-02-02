import React from "react";
import ListMovie from "../../components/ListMovie/ListMovie";
import { nowPlaying, popular, topRated, upComming } from "../../ListMovieData";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <div className="title">Millennia Movie</div>
      <div>
        <ListMovie title="Now Playing" lists={nowPlaying} />
        <ListMovie title="Upcoming" lists={upComming} />
        <ListMovie title="Popular" lists={popular} />
        <ListMovie title="Top Rated" lists={topRated} />
      </div>
    </div>
  );
};

export default Home;
