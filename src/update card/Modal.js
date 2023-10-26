import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addData } from "../store/dataSlice";

const Modal = ({ setModal }) => {
  const dispatch = useDispatch();

  const data = useSelector((store) => store.data.data);
  console.log(data);

  const [rank, setRank] = useState(data.rank);
  const [percentile, setPercentile] = useState(data.percentile);
  const [score, setScore] = useState(data.score);

  let obj = {
    rank,
    percentile,
    score,
  };

  return (
    <div className="flex-row modal">
      <div className="modal-content">
        <div className="flex-row ">
          <h1>Update Score</h1>
          <img
            src="https://s3-alpha-sig.figma.com/img/8db9/c6bc/56c97f45cd6ef095fbd9688e5d630ba0?Expires=1699228800&Signature=cFCNJ1K0EbINr9cc9hEnUVvNgpGC3qJ~fL6JrQM-TV9IE01h1sOEhp6FEO7mH~eJOGo2IuItxLYgNFJ6jGP5NZOAvdYxeuYTZGKtwdGOK8Hqj3XmYWzHfJ7wxt~3f9INY1nZkVD~wekIH49wM53hhOuvkvwg7baOxA32Z4gRMLhhPFxS8gaxR-Vho3cjBnmf5vT~2vpj2RvKqQujaQjhwsmlhzdCN9UWYDXqIXHuYAoQlGQ~rSxEsmuelCNiALwDhPKZTgVJJejSW3Od7zjNfUEMCWU6ULvEMZAF0ehHKb4TagEfUNsTfqhQbmIcw2G10ooRjH9NLplnS0Fqr2Yu7A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            alt=""
            width={100}
          />
        </div>
        <div className="flex-col inputs">
          <div>
            <label>
              Update your<span>Rank</span>
            </label>
            <span className="flex-col">
              <input
                type="number"
                value={rank}
                onChange={(event) => {
                  setRank(event.target.value);
                }}
              />
              {!rank && <span className="error">enter valid rank</span>}
            </span>
          </div>
          <div>
            <label>
              Update your<span>percentile</span>
            </label>
            <span className="flex-col">
              <input
                type="number"
                value={percentile}
                onChange={(event) => {
                  setPercentile(event.target.value);
                }}
              />
              {(percentile > 100 || !percentile) && (
                <span className="error">
                  percentile shoulfd be less than 100
                </span>
              )}
            </span>
          </div>
          <div>
            <label>
              Upadte youe<span>current score (out of 15)</span>
            </label>
            <span className="flex-col">
              <input
                type="number"
                value={score}
                onChange={(event) => {
                  setScore(event.target.value);
                }}
              />
              {(score > 15 || !score) && (
                <span className="error">only 15 questions are there</span>
              )}
            </span>
          </div>
        </div>
        <div className="modal-buttons">
          <button onClick={() => setModal(false)}>cancel</button>
          <button
            onClick={() => {
              if (
                score <= 15 &&
                score &&
                percentile <= 100 &&
                percentile &&
                rank
              ) {
                setModal(false)
                return dispatch(addData(obj));
              }
            }}
          >
            save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
