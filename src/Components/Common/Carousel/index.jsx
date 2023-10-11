import { Carousel as ResponsiveCarousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Carousel = () => {
  const images = [
    {
      id: 1,
      src: "https://flowbite.com/docs/images/carousel/carousel-1.svg",
      alt: "...",
    },
    {
      id: 2,
      src: "https://flowbite.com/docs/images/carousel/carousel-2.svg",
      alt: "...",
    },
    {
      id: 3,
      src: "https://flowbite.com/docs/images/carousel/carousel-3.svg",
      alt: "...",
    },
    {
      id: 4,
      src: "https://flowbite.com/docs/images/carousel/carousel-4.svg",
      alt: "...",
    },
  ];

  return (
    <ResponsiveCarousel
      showArrows
      autoPlay
      infiniteLoop
      showThumbs={false}
      transitionTime={500}
      interval={2000}
      className="shadow-xl"
    >
      {images?.map((image) => (
        <div
          id={`carousel-item-${image.id}`}
          key={image.id}
          className="carousel-item"
        >
          <img
            style={{ maxWidth: "100%", maxHeight: "300px", objectFit: "cover" }}
            src={image.src}
            alt={image.alt}
          />
          <p className="legend">{`Image ${image.id}`}</p>
        </div>
      ))}
    </ResponsiveCarousel>
  );
};

export default Carousel;
