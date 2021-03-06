import { useState } from "react";
import { Card, Col, Button, Row } from "react-bootstrap";
import "./MidSection.css";
import { CgMathPlus } from "react-icons/cg";
import { AiOutlineLike, AiFillLike } from "react-icons/ai";
import { BiCommentDetail } from "react-icons/bi";
import { RiSendPlaneFill, RiShareForwardLine } from "react-icons/ri";

// class NewsFeedItem extends Component {
//   state = {
//     liked: false,
//   };

//   render() {

const NewsFeedItem = (post) => {
  // let liked = false;

  // const [liked, setLiked] = useState(false);
  // //   const [liked, setLiked] = useToggle();
  // const changeLike = () => {
  //   setLiked(true);
  // };

  return (
    <Card className="cardstyling consistent-font" key={post._id}>
      <Card.Body>
        <div>
          <div className="border-bottom">
            <p>
              <strong>
                {post.user.name} {post.user.surname}{" "}
              </strong>
              likes this
            </p>
          </div>
          <Col>
            <img src={post.image} alt="" loading="lazy" />
          </Col>
          <Col>
            <div className="d-flex justify-content-between">
              <div>
                <strong>
                  {post.user.name} {post.user.surname}{" "}
                </strong>
                <span className="text-muted">3rd+</span>
                <div>{post.title} 45m</div>
              </div>
              <div id="follow" className="mt-2">
                <CgMathPlus size={27} /> <span>Follow</span>
              </div>
            </div>
          </Col>
          <div className="mt-3">
            <p>{post.text}</p>
          </div>
        </div>
      </Card.Body>
      {/* <div> */}
      <div
        id="interaction"
        className="d-flex justify-content-around flex-end mb-1"
      >
        {/* COMPONENT  */}
        {/* <Button
            variant="light"
            onClick={() => this.setState({ like: !this.state.liked })}
          >  {liked ? <AiFillLike /> + "Like" : <AiOutlineLike /> + "Unlike"}
        </Button>
         */}

        {/* WITHOUT FUNCTIONALITY  */}
        <Button className="midbutton pb-3" variant="light">
          <AiOutlineLike
            style={{ color: "#6b6b6b" }}
            size="1.3rem"
            className="mr-1"
          />
          Like
        </Button>

        {/* <Button variant="light" onChange={changeLike}>
          {liked ? <AiFillLike /> + "Like" : <AiOutlineLike /> + "Unlike"}
        </Button> */}

        <Button className="midbutton pb-3" variant="light">
          <BiCommentDetail
            style={{ color: "#6b6b6b" }}
            size="1.3rem"
            className="mr-1"
          />{" "}
          Comment
        </Button>
        <Button className="midbutton pb-3" variant="light">
          <RiShareForwardLine style={{ color: "#6b6b6b" }} size="1.3rem" />{" "}
          Share
        </Button>
        <Button className="midbutton pb-3" variant="light">
          <RiSendPlaneFill style={{ color: "#6b6b6b" }} size="1.3rem" /> Send
        </Button>
      </div>
    </Card>
  );
  //   }
};

export default NewsFeedItem;
