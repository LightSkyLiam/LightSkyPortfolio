import { useEffect, useState } from "react";

export const useScroll = () => {
  const [YOffset, setYOffSet] = useState(window.YOffset);
  useEffect(() => {
    const handleScroll = () => setYOffSet(window.pageYOffset);
    window.addEventListener(`scroll`, handleScroll);
    return () => {
      window.removeEventListener(`scroll`, handleScroll);
    };
  });
  return [YOffset];
};
