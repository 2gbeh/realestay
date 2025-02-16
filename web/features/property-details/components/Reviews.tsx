import React from "react";

type PropsType = {};

const Reviews: React.FC<PropsType> = () => {
  console.log("🚀 ~ Reviews");
  // RENDER
  return (
    <section>
      <ul className="gridTwo gap-5">
        {reviews.map((item, i) => (
          <li key={i} className="space-y-3">
            <figure className="flexCenter gap-4">
              <img src={item.avatar} alt="" className="dim-12 rounded-full" />
              <figcaption>
                <h3 className="text-lg">{item.displayName}</h3>
                <p className="flexCenter mutedText gap-2 text-sm">
                  {item.rating} Stars &bull;
                  <time dateTime="">{item.timeAgo}</time>
                </p>
              </figcaption>
            </figure>
            <article className="">{item.review}</article>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default React.memo(Reviews);

const reviews = [
  {
    avatar: "/uploads/nicolas.png",
    displayName: "Nicolas Kage",
    timeAgo: "6 days ago",
    rating: 3,
    review:
      "Very good house, good location, easy access to all the beaches, quiet and quiet neighborhood, I will certainly come back more often!",
  },
  {
    avatar: "/uploads/deisi.png",
    displayName: "Deisi Bhabi",
    timeAgo: "6 days ago",
    rating: 3,
    review:
      "The house is wonderful, with impeccable hygiene, is located close to the beaches. Fabiana and Fabrício extremely available and super friendly. The house is",
  },
  {
    avatar: "/uploads/alexandre.png",
    displayName: "Alexandre Defoe",
    timeAgo: "6 days ago",
    rating: 3,
    review:
      "Wonderful place! Very quiet easy access to various beaches in the region! We will return with ctz",
  },
  {
    avatar: "/uploads/pedro.png",
    displayName: "Pedro Alex",
    timeAgo: "6 days ago",
    rating: 3,
    review:
      "Casa is great, even better than description and photos; very attentive, easy-to communicate and helpful hosts for everything; it was 100%… I highly recommend it!!!",
  },
];
