import React, { useEffect, useState } from "react";
import AuthorBanner from "../images/author_banner.jpg";
import AuthorItems from "../components/author/AuthorItems";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import SkeletonCard from "../components/UI/SkeletonCard";

const Author = () => {
  const { authorID } = useParams();
  const [userData, setUserData] = useState([]);
  const [userCollection, setUserCollection] = useState([]);
  const [loading, setLoading] = useState(true);
  const [followState, setFollowState] = useState(false);

  async function fetchUserData() {
    const { data } = await axios.get(
      `https://us-central1-nft-cloud-functions.cloudfunctions.net/authors?author=${authorID}`
    );
    setUserData(data);
    setUserCollection(data.nftCollection);
    setLoading(false);
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    fetchUserData();
  }, [userData.length]);

  return (
    <div id="wrapper">
      <div className="no-bottom no-top" id="content">
        <div id="top"></div>

        <section
          id="profile_banner"
          aria-label="section"
          className="text-light"
          data-bgimage="url(images/author_banner.jpg) top"
          style={{ background: `url(${AuthorBanner}) top` }}
        ></section>

        <section aria-label="section">
          <div className="container">
            <div className="row">
              {loading ? (
                <div className="col-md-12">
                  <div className="d_profile de-flex">
                    <div className="de-flex-col">
                      <div className="profile_avatar">
                        <div className="profilePic_skeleton"></div>
                        <i className="fa fa-check"></i>
                        <div className="profile_name profile_name_skeleton_flex">
                          <div className="profile_name_skeleton"></div>
                          <div className="profile_username_skeleton profile_username"></div>
                          <div className="profile_wallet_skeleton profile_wallet"></div>
                        </div>
                      </div>
                    </div>
                    <div className="profile_follow de-flex">
                      <div className="de-flex-col">
                        <div className="profile_follower profile_follower_skeleton"></div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="col-md-12">
                  <div className="d_profile de-flex">
                    <div className="de-flex-col">
                      <div className="profile_avatar">
                        <img src={userData.authorImage} alt="" />
                        <i className="fa fa-check"></i>
                        <div className="profile_name">
                          <h4>
                            {userData.authorName}
                            <span className="profile_username">
                              @{userData.tag}
                            </span>
                            <span id="wallet" className="profile_wallet">
                              {userData.address}
                            </span>
                            <button id="btn_copy" title="Copy Text">
                              Copy
                            </button>
                          </h4>
                        </div>
                      </div>
                    </div>
                    <div className="profile_follow de-flex">
                      <div className="de-flex-col">
                        <div className="profile_follower">
                          {followState === true
                            ? `${userData.followers + 1} followers`
                            : `${userData.followers} followers`}
                        </div>
                        {followState === true ? (
                          <Link
                            to="#"
                            className="btn-main"
                            onClick={() => setFollowState(!followState)}
                          >
                            Unfollow
                          </Link>
                        ) : (
                          <Link
                            to="#"
                            className="btn-main"
                            onClick={() => setFollowState(!followState)}
                          >
                            Follow
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div className="col-md-12">
                <div
                  className="de_tab tab_simple flex"
                  style={{ display: "flex", flexWrap: "wrap" }}
                >
                  {loading ? (
                    new Array(8)
                      .fill(0)
                      .map((_, index) => (
                        <SkeletonCard extraStyling={true} key={index} />
                      ))
                  ) : (
                    <AuthorItems
                      collection={userCollection}
                      authorPic={userData.authorImage}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Author;
