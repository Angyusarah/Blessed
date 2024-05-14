import Heading from "../../components/Heading";
import { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AfroStyles from "../../components/afrostyles";
import Dad from "../../assets/dad.png"
import Mum from "../../assets/mum.png"
import colette from "../../assets/Colette.png"
import Martins from "../../assets/martins.png"
import Max from "../../assets/max.png"
import Christopher from "../../assets/chris.png"
import Michael from "../../assets/michael.png"

import {FaArrowRight} from "react-icons/fa6"
import { FaArrowLeft } from "react-icons/fa6"
import Cards from "./Loved"
import Data from "./LovedonesData"


const LovedOnes = () => {

const settings = {
    dots: true,
    speed: 3000,
    slidesToShow: 1,
    slidesToScroll: 2,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1000,
  };

  const cards = Data.map(item => {
    return(
    <Cards
        key = {item.id}
        item = {item}
      />
    )
  })

  return (
    // <div className="my-[60px]  px-8 md:px-[100px]">
    //   <Heading
    //     heading="Words from Loved Ones"
    //     extraClass={"text-[20px] leading-[30px] mb-3 text-center"}
    //   />

    //   <p className="text-center text-xl">
    //     Messages from those who cherish Chukwuemeka the most. Scroll through to
    //     read heartfelt words from his family!
    //   </p>

    //   <Slider {...settings}
    //         asNavFor={nav1}
    //         ref={(slider) => setSlider1(slider)}
    //     >
    //     </Slider>
    //     <div className="thumb-wrapper">
    //       {AfroStyles.map((item, idx) => (
    //         <div
    //           key={item.id}
    //           className={currentSlide === idx ? "active": null}
    //           onClick={() => {
    //             slider1?.slickGoTo(idx)
    //           }}>
    //           <img src={item.src} alt={item.alt}/>
    //           {currentSlide}
    //         </div>
    //       ))}
    //     </div>
    // </div>

//     < className="content">
//   <h1 className="header">Afro Styles Fashion Store</h1>
//   <div className="container">
//     <Slider {...settings}>
//       {AfroStyles.map((item) => (
//         <div key={item.id}>
//           <div className="img-body">
//             <img src={item.img} alt={item.alt} />
//           </div>
//           <div>
//             <h2>{item.title}</h2>
//             <p>{item.description}</p>
//           </div>
//         </div>
//       ))}
//     </Slider>
//   </div>

  
  // <div className="container">
  //   <Slider {...settings}>
  //   <div className="card">
  //         <div className="img-body">
  //           <img src={Dad}  />
  //         </div>
  //         <div>
  //           <h2>Dad</h2>
  //           <p>Happy birthday son Blessed is well with you Amen 🙏</p>
  //         </div>
  //       </div>

  //       <div className="card">
  //         <div className="img-body">
  //           <img src={Mum}  />
  //         </div>
  //         <div>
  //           <h2>Mum</h2>
  //           <p>Happy birthday to my Blessed son, you are blessed indeed, your name shall continue to follow you, praying for many more years in good health and in the fear of God Amen.</p>
  //         </div>
  //       </div>

  //       <div className="card">
  //         <div className="img-body">
  //           <img src={colette} />
  //         </div>
  //         <div>
  //           <h2>Colette</h2>
  //           <p>To My Parent's first Son; Its your Brithday and I want you to know that you are very much appreciated and Loved for all you do, thank you for going the extra miles when called upon,thank you for how you love your family,and been very kind hearted with those around you I pray for you this day,that goodness will forever follow you,favour will be at your beck and call,long life and prosperity is already your portion Enjoy your day brotherly.</p>
  //         </div>
  //       </div>

  //       <div className="card">
  //         <div className="img-body">
  //           <img src={Martins}  />
  //         </div>
  //         <div>
  //           <h2>Martins</h2>
  //           <p>Happy birthday to my only big brother. Thank you for making us your priority, grateful for who you are and who God is building you to be. Wishing you many more good years ahead.</p>
  //         </div>
  //       </div>

  //       <div className="card">
  //         <div className="img-body">
  //           <img src={Max}  />
  //         </div>
  //         <div>
  //           <h2>Max</h2>
  //           <p>Happy birthday Big brother. May God cause his face to shine on you and lighten up your path, i pray he blesses and prospers all that concerns you. In this new phase of your life, i ask that he increases you in all sides and give you wisdom and favour in his sight and amongst men. Thank you for being a blessing to our family, a mentor to me and a gem to the world. Much Love</p>
  //         </div>
  //       </div>

  //       <div className="card">
  //         <div className="img-body">
  //           <img src={Christopher}  />
  //         </div>
  //         <div>
  //           <h2>Christopher</h2>
  //           <p>"Happy birthday, Sir Blessed Chukwuemeka! 🎉 May your special day be as beautiful and blessed as your name. Wishing you many years filled with health, happiness, and success. You are a shining light in the lives of those around you, and your kindness and positivity inspire us all. Enjoy your birthday Bro, Here’s to many more happy years ahead. 🎂🎁 Yours Sincerely,</p>
  //         </div>
  //       </div>

  //       <div className="card">
  //         <div className="img-body">
  //           <img src={Michael}  />
  //         </div>
  //         <div>
  //           <h2>Michael</h2>
  //           <p>Happy birthday brother  Blessed, i wish you many more years in Jesus name Amen.</p>
  //         </div>
  //       </div>
  //   </Slider>
  // </div>
  <div className=" p-5">

<Heading
        heading="Words from Loved Ones"
        extraClass={"text-[20px] leading-[30px] mb-3 text-center"}
      />

      <p className="text-center text-xl">
        Messages from those who cherish Chukwuemeka the most. Scroll through to
        read heartfelt words from his family!
      </p>

      
      <div className=" md:flex justify-between md:w-[100%]">
        <div className="hidden md:flex md:justify-center md:items-center">
            <button className="md:bg-black md:text-white md:flex md:justify-center md:items-center md:p-3 md:rounded-full"><FaArrowLeft/></button>
        </div>
       
        <div className=" md:flex md:flex-row md:gap-5 md:w-[80%] md:overflow-x-scroll"> 
            <p>{cards}</p>
        </div>
        
        <div className="hidden md:flex md:justify-center md:items-center">
            <button className="md:bg-black md:text-white md:flex md:justify-center md:items-center md:p-3 md:rounded-full"><FaArrowRight/></button>
        </div>
    </div>
    </div>
      
  );
};

export default LovedOnes;
