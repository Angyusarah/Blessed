import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageSlider = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 3000,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <h3 className="bg-red-500 p-[100px] m-10">1</h3>
        </div>
        <div>
          <h3 className="bg-red-500 p-[100px] m-10">2</h3>
        </div>
        <div>
          <h3 className="bg-red-500 p-[100px] m-10">3</h3>
        </div>
        <div>
          <h3 className="bg-red-500 p-[100px] m-10">4</h3>
        </div>
        <div>
          <h3 className="bg-red-500 p-[100px] m-10">5</h3>
        </div>
        <div>
          <h3 className="bg-red-500 p-[100px] m-10">6</h3>
        </div>
        <div>
          <h3 className="bg-red-500 p-[100px] m-10">7</h3>
        </div>
        <div>
          <h3 className="bg-red-500 p-[100px] m-10">8</h3>
        </div>
      </Slider>
    </div>
  )
}

export default ImageSlider