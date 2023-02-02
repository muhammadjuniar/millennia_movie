import React from "react";
import "./detail.scss";
import ListMovie from "../../components/ListMovie/ListMovie";
import { similarMovie } from "../../ListMovieData";
import { Link } from "react-router-dom";

function Detail() {
  return (
    <>
      <div className="detail">
        <div className="detailContainer">
          <div className="top">
            <div className="left">
              <Link
                to="/home"
                style={{ textDecoration: "none", color: "#222" }}
              >
                <div className="editButton">Back</div>
              </Link>
              <h1 className="title">Black Phanter: Wakanda Forever (2022)</h1>
              <div className="item">
                <img
                  className="itemImg"
                  src="https://static.toiimg.com/thumb/msid-82424835,width-219,height-317,imgsize-14912/82424835.jpg"
                  alt=""
                />
                <div className="details">
                  <div className="detailItem">
                    <span className="itemValue">
                      USA | 148 min | 15 Dec 2021
                    </span>
                  </div>
                  <div className="detailItem">
                    <span className="itemValue">*9.2</span>
                  </div>
                  <div className="detailItem">
                    <span className="itemValue">
                      Action | Adventure | Fantacy | Science Fiction
                    </span>
                  </div>
                  <div className="detailItem">
                    <span className="itemValue">
                      The people of Wakanda fight to protect their home from
                      intervening world powers as they mourn the death of King
                      T'Challa.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ListMovie title="Similar Movie" lists={similarMovie} />
    </>
  );
}

export default Detail;
