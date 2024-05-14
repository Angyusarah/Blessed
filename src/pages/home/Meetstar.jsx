import Heading from "../../components/Heading";
import Button from "../../components/Button"

const Meetstar = () => {
  return (
    <div className=" px-8 md:px-10 lg:px-[100px]">
      <div className="text-center mb-5">
        <Heading
          heading="Meet the Birthday Star"
          extraClass={"text-[19px] md:text-[40px] leading-[30px] mb-3"}
        />
        <p className="md:text-xl">
          Explore the heart of our celebration: 'About the Birthday Celebrant.
          Welcome to the spotlight where we shine a light on the
          remarkable individual we're celebrating today. Dive into the life and passions of Chukwumeka, discovering what makes
          him extraordinary. Join us in honoring and celebrating the joy and
          inspiration he brings to our lives.
        </p>
        <Button className={"tracking-wider  py-2 my-4 font-semibold rounded-2xl"}>See Autobiography</Button>
      </div>
    </div>
  );
};

export default Meetstar;
