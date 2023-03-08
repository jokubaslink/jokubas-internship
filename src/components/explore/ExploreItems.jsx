import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Card from "../UI/Card";
import SkeletonCard from "../UI/SkeletonCard";

const ExploreItems = () => {
  const [sliceEnd, setSliceEnd] = useState(8);
  const [filter, setFilter] = useState("");
  const [exploreItems, setExploreItems] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchExploreData() {
    const { data } = await axios.get(
      `https://us-central1-nft-cloud-functions.cloudfunctions.net/explore?filter=${filter}`
    );
    setExploreItems(data);
    setLoading(false);
  }

  useEffect(() => {
    fetchExploreData();
  }, [exploreItems.length, filter]);

  return (
    <>
      <div>
        <select
          id="filter-items"
          defaultValue=""
          onChange={(event) => setFilter(event.target.value)}
        >
          <option value="">Default</option>
          <option value="price_low_to_high">Price, Low to High</option>
          <option value="price_high_to_low">Price, High to Low</option>
          <option value="likes_high_to_low">Most liked</option>
        </select>
      </div>
      {loading ? (
        <>
          {new Array(8).fill(0).map((_, index) => (
            <SkeletonCard key={index} extraStyling={true} />
          ))}
        </>
      ) : (
        <>
          {exploreItems.slice(0, sliceEnd).map((item) => (
            <Card profile={item} key={item.id} extraStyling={true} />
          ))}
        </>
      )}
      {sliceEnd < exploreItems.length && (
        <div
          className="col-md-12 text-center"
          onClick={() => {
            setSliceEnd(sliceEnd + 4);
          }}
        >
          <Link to="" id="loadmore" className="btn-main lead">
            Load more
          </Link>
        </div>
      )}
    </>
  );
};

export default ExploreItems;
