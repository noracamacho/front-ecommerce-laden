import React from "react";
import Carousel from "react-bootstrap/Carousel";

const ProductDescriptionImages = ({ productImages }) => {
  console.log(productImages);
  return (
    <div className="carousel__container">
    <Carousel className="carousel" fade variant="dark">
      {productImages?.map((img) => (
        <Carousel.Item key={img?.id}>
          <img className="d-block w-100" src={img?.url} alt="Product image" />
        </Carousel.Item>
      ))}
    </Carousel>
  </div>
  );
};

export default ProductDescriptionImages;
