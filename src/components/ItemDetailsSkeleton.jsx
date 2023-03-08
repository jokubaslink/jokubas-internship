import React from "react";

function ItemDetailsSkeleton() {
  return (
    <>
      <div className="col-md-6 text-center">
        <div className="nft_image_skeleton img-fluid img-rounded mb-sm-30 nft-image"></div>
      </div>
      <div className="col-md-6">
        <div className="item_info">
          <div className="item_info_title_skeleton"></div>
          <div className="item_info_counts">
            <div className="item_info_views_skeleton"></div>
            <div className="item_info_like_skeleton"></div>
          </div>
          <div className="item_info_text_skeleton"></div>
          <div className="d-flex flex-row">
            <div className="mr40">
              <h6>Owner</h6>
              <div className="item_author">
                <div className="author_list_pp">
                  <div className="author_img_skeleton"></div>
                </div>
                <div className="author_list_info">
                  <div className="author_name_skeleton"></div>
                </div>
              </div>
            </div>
            <div></div>
          </div>
          <div className="de_tab tab_simple">
            <div className="de_tab_content">
              <h6>Creator</h6>
              <div className="item_author">
                <div className="author_list_pp">
                  <div className="author_img_skeleton"></div>
                </div>
                <div className="author_list_info">
                  <div className="author_name_skeleton"></div>
                </div>
              </div>
            </div>
            <div className="spacer-40"></div>
            <h6>Price</h6>
            <div className="nft-item-price_skeleton"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ItemDetailsSkeleton;
