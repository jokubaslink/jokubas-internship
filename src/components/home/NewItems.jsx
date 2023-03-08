import React, { useEffect, useState } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import axios from "axios";
import { Link } from "react-router-dom";
import Timer from "../UI/Timer.jsx";
import Card from "../UI/Card.jsx";
import SkeletonCard from "../UI/SkeletonCard.jsx";

const NewItems = () => {
  const [newItemsData, setNewItemsData] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchNewItems() {
    const { data } = await axios.get(
      `https://us-central1-nft-cloud-functions.cloudfunctions.net/newItems`
    );
    setNewItemsData(data);
    console.log(data)
    setLoading(false);
  }

  useEffect(() => {
    fetchNewItems();
  }, [newItemsData.length]);

  const responsiveCarousel = {
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      800: {
        items: 3,
      },
      1200: {
        items: 4,
      },
    },
  };

  return (
    <section id="section-items" className="no-bottom">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text-center">
              <h2>New Items</h2>
              <div className="small-border bg-color-2"></div>
            </div>
          </div>
          {loading ? (
            <OwlCarousel
              className="owl-theme"
              loop
              dots={false}
              margin={10}
              nav
              {...responsiveCarousel}
            >
              {new Array(7).fill(0).map((_, index) => (
                <SkeletonCard key={index} />
              ))}
            </OwlCarousel>
          ) : (
            <OwlCarousel
              className="owl-theme"
              loop
              dots={false}
              margin={10}
              nav
              {...responsiveCarousel}
            >
              {newItemsData.map((profile) => (
                <Card profile={profile} key={profile.id} />
              ))}
            </OwlCarousel>
          )}
        </div>
      </div>
    </section>
  );
};

export default NewItems;
