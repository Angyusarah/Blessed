// Import statements remain the same
import React, { useEffect, useState } from "react";
import Timering from "../../assets/timering.png";

// Interface is removed, replaced with comments for clarity
// Interface CountdownProps {
//   targetDate: Date;
//   mainTextSize: string;
//   subTextSize: string;
// }

const CountdownTimer = ({ targetDate, mainTextSize, subTextSize }) => {
  // Function to calculate time left
  const calculateTimeLeft = () => {
    const difference = targetDate.getTime() - new Date().getTime();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }
    return timeLeft;
  };

  // State to hold time left data (no type annotation)
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  // useEffect hook to update time left
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  // JSX for rendering the countdown timer
  return (
    <div className="w-[400px] h-[400px] my-10 relative px-6 md:px-0">
      <img className=" h-[90%] md:h-[100%] w-[100%]" src={Timering} alt="" />
      <div
        className=" text-center flex gap-5 text-buttonblue rounded-full w-full absolute left-8 top-[40%]"
      >
        <div>
          <p className="font-bold text-5xl">{timeLeft.days} :</p>
          <p>DAYS</p>
        </div>

        <div>
          <p className="font-bold text-5xl">{timeLeft.hours} :</p>
          <p>HOURS</p>
        </div>

        <div>
          <p className="font-bold text-5xl">{timeLeft.minutes} :</p>
          <p>MINUTES</p>
        </div>

        <div>
          <p className="font-bold text-5xl">{timeLeft.seconds}</p>
          <p>SECONDS</p>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
