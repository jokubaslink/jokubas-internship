import React from "react";

function SkeletonCard({ extraStyling }) {
  if (extraStyling) {
    return (
      <div
        className="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12"
        style={{ display: "block", backgroundSize: "cover" }}
      >
        <div className="nft__item">
          <div className="nft__item_wrap">
            <div className="nft__item_preview--skeleton">
              <div className="check_skeleton--wrapper">
                <i className="fa fa-check check_skeleton"></i>
              </div>
            </div>
          </div>
          <div className="nft__item_info--skeleton">
            <div className="nft__item_title--skeleton"></div>
            <div className="nft__item_price--skeleton"></div>
            <div className="nft__item_like--skeleton"></div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div className="nft__item">
          <div className="nft__item_wrap">
            <div className="nft__item_preview--skeleton">
              <div className="check_skeleton--wrapper">
                <i className="fa fa-check check_skeleton"></i>
              </div>
            </div>
          </div>
          <div className="nft__item_info--skeleton">
            <div className="nft__item_title--skeleton"></div>
            <div className="nft__item_price--skeleton"></div>
            <div className="nft__item_like--skeleton"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default SkeletonCard;
