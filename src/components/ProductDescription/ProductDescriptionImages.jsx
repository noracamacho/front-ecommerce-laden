import React from "react";
import Carousel from "react-bootstrap/Carousel";

const ProductDescriptionImages = ({ productImages }) => {
  // console.log(productImages);

  return (
    <Carousel variant="dark"  className="carousel-inner__img">
      {productImages?.map((img) => (
        <Carousel.Item key={img.id} className="carousel-img">
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
