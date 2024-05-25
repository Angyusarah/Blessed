
import Heading from "../../components/Heading"
import CountdownTimer from "./CountdownTimer"


const Countdown = () => {
  const launchDate = new Date("2024-05-25T12:00:00");

  return (
    <div className="mt-[60px] md:my-[60px] flex flex-col justify-center items-center text-center px-6 md:px-[100px]">
        <Heading
          heading="Countdown to celebration"
          extraClass={"text-[20px] leading-[30px] mb-3 "}
        />

        <p className=" text-center text-xl">Get ready to mark your calenders because the countdown to Chukwuemeka's birthday party starts now! With each passing moment, we are closer to celebrating this incredible person. Join us as we eagerly await the big day with our interactive countdown below, Let the excitement begin!!</p>
        
        <CountdownTimer
          targetDate={launchDate}
         

        />
    </div>
  )
}

export default Countdown