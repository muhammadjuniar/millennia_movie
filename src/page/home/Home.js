import React from "react";
import { Link } from "react-router-dom";
import ListMovie from "../../components/ListMovie/ListMovie";
import { nowPlaying, popular, topRated, upComming } from "../../ListMovieData";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <div className="wrapper">
        <div className="title">Millennia Movie</div>
        <Link to="/" style={{ textDecoration: "none", color: "#222" }}>
          <div className="logout">Logout</div>
        </Link>
      </div>
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
