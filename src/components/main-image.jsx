import React from "react";
import { useMediaQuery } from "react-responsive";
// import "../css/image.css";

const MainImage = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1000px)" });
  const deviceType = isTabletOrMobile ? "mobile" : "desktop";

  return (
    <div className="image-div">
      <img
        className="img-fluid"
        src={`/images/main_${deviceType}.png`}
        alt=""
      />
    </div>
  );
};

export default MainImage;
