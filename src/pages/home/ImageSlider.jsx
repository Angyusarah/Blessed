import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import b1 from "../../assets/images/b18.jpg"
import b2 from "../../assets/images/b2.jpg"
import b3 from "../../assets/images/b3.jpg"
import b4 from "../../assets/images/b4.jpg"
import b5 from "../../assets/images/b5.jpg"
import b6 from "../../assets/images/b6.jpg"
import b7 from "../../assets/images/b7.jpg"
import b8 from "../../assets/images/b8.jpg"
import b9 from "../../assets/images/b9.jpg"
import b10 from "../../assets/images/b10.jpg"
import b11 from "../../assets/images/b11.jpg"
import b12 from "../../assets/images/b13.jpg"
import b13 from "../../assets/images/b17.jpg"
import b14 from "../../assets/images/b18.jpg"
import b15 from "../../assets/images/b19.jpg"
import b16 from "../../assets/images/b20.jpg"
import b17 from "../../assets/images/b21.jpg"
import b18 from "../../assets/images/b22.jpg"
import b19 from "../../assets/images/b23.jpg"
import b20 from "../../assets/images/b27.jpg"
import b21 from "../../assets/images/b29.jpg"
import b22 from "../../assets/images/b33.jpg"
import b23 from "../../assets/images/b35.jpg"
import b24 from "../../assets/images/b37.jpg"
import b25 from "../../assets/images/b39.jpg"
import b26 from "../../assets/images/b46.jpg"
import b27 from "../../assets/images/b51.jpg"
import b28 from "../../assets/images/b54.jpg"
import b29 from "../../assets/images/b53.jpg"
import b30 from "../../assets/images/b55.jpg"



const ImageSlider = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 2000,
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
          <h3 className="w-[400px] h-[400px]"><img src={b1} className="w-[100%] h-[100%]" alt="" /></h3>
        </div>
        <div>
          <h3 className="w-[400px] h-[400px]"><img src={b2} className="w-[100%] h-[100%]" alt="" /></h3>
        </div>
        <div>
          <h3 className="w-[400px] h-[400px]"><img src={b3} className="w-[100%] h-[100%]" alt="" /></h3>
        </div>
        <div>
          <h3 className="w-[400px] h-[400px]"><img src={b4} className="w-[100%] h-[100%]" alt="" /></h3>
        </div>
        <div>
          <h3 className="w-[400px] h-[400px]"><img src={b5} className="w-[100%] h-[100%]" alt="" /></h3>
        </div>
        <div>
          <h3 className="w-[400px] h-[400px]"><img src={b6} className="w-[100%] h-[100%]" alt="" /></h3>
        </div>
        <div>
          <h3 className="w-[400px] h-[400px]"><img src={b7} className="w-[100%] h-[100%]" alt="" /></h3>
        </div>
        <div>
          <h3 className="w-[400px] h-[400px]"><img src={b8} className="w-[100%] h-[100%]" alt="" /></h3>
        </div>
        <div>
          <h3 className="w-[400px] h-[400px]"><img src={b9} className="w-[100%] h-[100%]" alt="" /></h3>
        </div>
        <div>
          <h3 className="w-[400px] h-[400px]"><img src={b10} className="w-[100%] h-[100%]" alt="" /></h3>
        </div>
        <div>
          <h3 className="w-[400px] h-[400px]"><img src={b11} className="w-[100%] h-[100%]" alt="" /></h3>
        </div>
        <div>
          <h3 className="w-[400px] h-[400px]"><img src={b12} className="w-[100%] h-[100%]" alt="" /></h3>
        </div>
        <div>
          <h3 className="w-[400px] h-[400px]"><img src={b13} className="w-[100%] h-[100%]" alt="" /></h3>
        </div>
        <div>
          <h3 className="w-[400px] h-[400px]"><img src={b14} className="w-[100%] h-[100%]" alt="" /></h3>
        </div>
        <div>
          <h3 className="w-[400px] h-[400px]"><img src={b15} className="w-[100%] h-[100%]" alt="" /></h3>
        </div>
        <div>
          <h3 className="w-[400px] h-[400px]"><img src={b16} className="w-[100%] h-[100%]" alt="" /></h3>
        </div>
        <div>
          <h3 className="w-[400px] h-[400px]"><img src={b17} className="w-[100%] h-[100%]" alt="" /></h3>
        </div>
        <div>
          <h3 className="w-[400px] h-[400px]"><img src={b18} className="w-[100%] h-[100%]" alt="" /></h3>
        </div>
        <div>
          <h3 className="w-[400px] h-[400px]"><img src={b19} className="w-[100%] h-[100%]" alt="" /></h3>
        </div>
        <div>
          <h3 className="w-[400px] h-[400px]"><img src={b20} className="w-[100%] h-[100%]" alt="" /></h3>
        </div>
        <div>
          <h3 className="w-[400px] h-[400px]"><img src={b21} className="w-[100%] h-[100%]" alt="" /></h3>
        </div>
        <div>
          <h3 className="w-[400px] h-[400px]"><img src={b22} className="w-[100%] h-[100%]" alt="" /></h3>
        </div>
        <div>
          <h3 className="w-[400px] h-[400px]"><img src={b23} className="w-[100%] h-[100%]" alt="" /></h3>
        </div>
        <div>
          <h3 className="w-[400px] h-[400px]"><img src={b24} className="w-[100%] h-[100%]" alt="" /></h3>
        </div>
        <div>
          <h3 className="w-[400px] h-[400px]"><img src={b25} className="w-[100%] h-[100%]" alt="" /></h3>
        </div>
        <div>
          <h3 className="w-[400px] h-[400px]"><img src={b26} className="w-[100%] h-[100%]" alt="" /></h3>
        </div>
        <div>
          <h3 className="w-[400px] h-[400px]"><img src={b27} className="w-[100%] h-[100%]" alt="" /></h3>
        </div>
        <div>
          <h3 className="w-[400px] h-[400px]"><img src={b28} className="w-[100%] h-[100%]" alt="" /></h3>
        </div>
        <div>
          <h3 className="w-[400px] h-[400px]"><img src={b29} className="w-[100%] h-[100%]" alt="" /></h3>
        </div>
        <div>
          <h3 className="w-[400px] h-[400px]"><img src={b30} className="w-[100%] h-[100%]" alt="" /></h3>
        </div>
      </Slider>
    </div>
  )
}

export default ImageSlider