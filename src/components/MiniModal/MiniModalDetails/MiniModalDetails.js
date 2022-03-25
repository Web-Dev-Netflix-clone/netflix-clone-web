import React from "react";
import "./MiniModalDetails.scss";

import { IconAdd } from "../../Icons/IconAdd";
import { IconLike } from "../../Icons/IconLike";
import { IconDisLike } from "../../Icons/IconDisLike";
import { IconPlayBlack } from "../../Icons/IconPlayBlack";
import { IconArrowDown } from "../../Icons/IconArrowDown";

const MiniModalDetails = () => {
  return (
    <>
      <div className="minimodal-button-wrapper">
        <div className="left-content">
          <button className="play-button">
            <IconPlayBlack />
          </button>
          <button className="add-button">
            <IconAdd />
          </button>
          <button className="like-button">
            <IconLike />
            <div className="rating-button-wrapper">
              <button className="dislike-button rating-button">
                <IconDisLike />
              </button>
              <button className="like-button rating-button">
                <IconLike />
              </button>
              <button className="lovelike-button rating-button">
                <IconLike />
              </button>
            </div>
          </button>
        </div>
        <div className="right-content">
          <button className="moreInfo-button">
            <IconArrowDown />
          </button>
        </div>
      </div>
      <div className="info-container">
        <span className="match">Match 98%</span>
        <span className="year">2022</span>
        <span className="maturity-rating">🔞</span>
        <span className="duration">1h 46m</span>
        <span className="feature-badge">HD</span>
      </div>
      <div className="tag-container">
        <span className="tag-item-mini">Witty</span>•
        <span className="tag-item-mini">Feel-Good</span>•
        <span className="tag-item-mini">Exciting</span>
      </div>
    </>
  );
};

export default MiniModalDetails;
