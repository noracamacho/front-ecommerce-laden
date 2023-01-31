import React from "react";
import Carousel from "react-bootstrap/Carousel";

const ProductDescriptionImages = ({ productImages }) => {
  console.log(productImages);

  return (
    <Carousel variant="dark"  class="carousel-inner">
      {productImages?.map((img) => (
        <Carousel.Item className="carousel-img">
            <img
              className="d-block w-100 img-fluid"
              src={img.url}
              alt="First slide"
            />
        </Carousel.Item>
            ))

        }
    </Carousel>
  );
};

export default ProductDescriptionImages;
