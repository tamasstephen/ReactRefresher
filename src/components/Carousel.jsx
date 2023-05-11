import { useState } from "react";

const Carousel = ({ images }) => {
  const [active, setActive] = useState(0);

  const DEFAULT_IMAGE = "http://pets-images.dev-apis.com/pets/none.jpg";

  return (
    <div className="carousel">
      <img src={images[active] || DEFAULT_IMAGE} alt="animal" />
      <div className="carousel-smaller">
        {images.map((photo, index) => (
          // eslint-disable-next-line
          <img
            key={photo}
            src={photo}
            className={index === "active" ? "active" : ""}
            alt="animal thumbnail"
            onClick={() => setActive(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
