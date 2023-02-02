import React from "react";
import { Link } from "react-router-dom";
import "./listmovie.scss";

const ListMovie = ({ title, lists }) => {
  return (
    <>
      <div className="listmovie">
        <div className="movieContainer">
          <div className="containerTitle">{title}</div>
          <div className="items">
            <Link to={"/see all/" + title} style={{ textDecoration: "none", color: "#222" }}>
              <div className="item">see all</div>
            </Link>
          </div>
        </div>
      </div>

      <div className="listMovies">
        {lists.map((itemdata) => (
          <Link
            to={"/detail/" + itemdata.id}
            style={{ textDecoration: "none", color: "#222" }}
          >
            <div key={itemdata.id}>
              <div className="movieCard">
                <img src={itemdata.poster} alt=" " className="image" />
                <div className="movieTitle">{itemdata.movie_name}</div>
                <div className="date">{itemdata.date}</div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default ListMovie;
