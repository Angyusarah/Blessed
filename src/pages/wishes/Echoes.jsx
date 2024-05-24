import Heading from "../../components/Heading";
import m1 from "../../assets/max.png"
import Posts from "./Posts"

const Echoes = () => {
  return (
    <div className="flex">
      <div className="px-6 lg:px-[100px]  md:text-justify">
        <Heading
          heading="Echoes of Love"
          extraClass={"text-[19px] md:text-[40px]  leading-[30px] mb-3"}
        />

        <p className=" text-xl"> Explore Heartwarming Messages: Scroll tgrough the heartfelt wishes from friends and loved ones, celebrating Chukwuemeka's special day with love and Joy.</p>
        <Posts/>
    </div>
    <div className="hidden md:block">
      <img src={m1} alt="" />
    </div>
    </div>
  )
}

export default Echoes