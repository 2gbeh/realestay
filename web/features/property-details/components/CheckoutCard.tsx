import React from "react";

type PropsType = {};

const CheckoutCard: React.FC<PropsType> = () => {
  console.log("🚀 ~ CheckoutCard");
  // RENDER
  return <section className="">CheckoutCard</section>;
};

export default React.memo(CheckoutCard);
