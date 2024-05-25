
import Heading from "../../components/Heading"
import CountdownTimer from "./CountdownTimer"


const Countdown = () => {
  const launchDate = new Date("2024-05-26T00:00:00");

  return (
    <div className="mt-[60px] md:my-[60px] flex flex-col justify-center items-center text-center px-6 md:px-[100px]">
        <Heading
          heading="Birthday Countdown"
          extraClass={"text-[20px] leading-[30px] mb-3 "}
        />

        <p className=" text-center text-xl">Until Chukwuemeka's birthday Countdown reaches 0, the world is his for the taking lol!</p>
        
        <CountdownTimer
          targetDate={launchDate}
         

        />
    </div>
  )
}

export default Countdown