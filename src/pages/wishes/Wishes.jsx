import Container from "../../components/Container"
import Form from "./Form"
import Echoes from "./Echoes"
import Posts from "./Posts"
// import Friends from "./Friends"
// import FriendsSwipe from "./FriendsSwipe"

const Wishes = () => {
  return (
    <div className="">
      <Container>
        <Form/>
        <Echoes/>
        <Posts/>
        {/* <Friends/> */}
        {/* <FriendsSwipe/> */}
      </Container>
    </div>
  )
}

export default Wishes