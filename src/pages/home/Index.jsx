import { Link } from "react-router-dom";
import Container from "../../components/Container";
import Hero from "./Hero"
import Meetstar from "./Meetstar";
import ImageSlider from "./ImageSlider";
import LovedOnes from "./LovedOnes";
import Countdown from "./Countdown";
import Slides from "./Slides";

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
      <Slides/>
      
      </Container>
      

      
    </div>
  );
}

export default Index;
