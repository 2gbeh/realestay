import React from "react";

type PropsType = {};

const PhotoGallery: React.FC<PropsType> = () => {
  console.log("🚀 ~ PhotoGallery");
  // RENDER
  return (
    <section className="flexCenter gap-2">
      <figure className="flex-1">
        <img src="/images/image.png" alt="" width="100%" />
      </figure>
      <div className="flex-1 space-y-2">
        <figure className="flexCenter gap-2">
          <img src="/images/image.png" alt="" width="100%" />
          <img src="/images/image.png" alt="" width="100%" />
        </figure>
        <figure className="flexCenter gap-2">
          <img src="/images/image.png" alt="" width="100%" />
          <img src="/images/image.png" alt="" width="100%" />
        </figure>
      </div>
    </section>
  );
};

export default React.memo(PhotoGallery);
