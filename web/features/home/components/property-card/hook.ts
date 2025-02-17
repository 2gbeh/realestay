import { useState } from "react";
import { useRouter } from "next/router";
import { PATH } from "@/constants/PATH";

export function usePropertyCard() {
  const router = useRouter();
  const [liked, setLiked] = useState(false);
  const [slide, setSlide] = useState(0);
  const toggleLiked = () => setLiked((prev) => !prev);
  const onPrevSlide = () => setSlide((prev) => (slide > 0 ? prev - 1 : 4));
  const onNextSlide = () => setSlide((prev) => (slide < 4 ? prev + 1 : 0));
  const gotoPropertyDetails = () => router.push(PATH.property_(100));

  return {
    liked,
    toggleLiked,
    slide,
    setSlide,
    onPrevSlide,
    onNextSlide,
    gotoPropertyDetails,
  };
}
