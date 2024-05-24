import { Link } from "react-router-dom";
import Container from "../../components/Container";
import Hero from "./Hero"
import Meetstar from "./Meetstar";
import ImageSlider from "./ImageSlider";
import LovedOnes from "./LovedOnes";
import Countdown from "./Countdown";

function Index() {
  return (
    <div>
      <Container>
      <Hero/>
      <Meetstar/>
      <ImageSlider/>
      <ImageSlider />
      <Countdown/>
      <LovedOnes/> 

      
      </Container>
      

      
    </div>
  );
}

export default Index;
