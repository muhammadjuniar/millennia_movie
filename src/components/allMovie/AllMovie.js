import React from "react";
import { Link, useParams } from "react-router-dom";
import "./allmovie.scss";

const AllMovie = ({ lists }) => {
  let { title } = useParams();
  return (
    <>
      <div className="allmovie">
        <div className="movieContainerAllMovie">
          <div className="containerTitleAllMovie">
            {title ? title : "Title"}
          </div>
          <div className="itemsAllMovie">
            <Link to="/home" style={{ textDecoration: "none", color: "#222" }}>
              <div className="itemAllMovie">back</div>
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

export default AllMovie;
