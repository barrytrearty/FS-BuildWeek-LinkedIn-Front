import { Card, Button, Row, Col} from "react-bootstrap";
import { CgMathPlus } from "react-icons/cg";
import "./FeedRightCard.css"

const FeedRightCard = ({ peopleInfo }) => {
  return (
    <Card className="PeopleCard d-flex flex-row no-gutters">
      <Row className="feedright">
      <Col className="col-md-4 mt-2">
      <Card.Img
        className="RightFeedImage ml-3 mt-2"
        variant="top"
        src={peopleInfo.image}
      />
      
      </Col>
      <Col className="col-md-8">
      <Card.Body className="d-flex flex-column">
     
        <Card.Title className="RightFeedTitle">
          {peopleInfo.name} {peopleInfo.surname}
        </Card.Title>
        <Card.Text>{peopleInfo.title}</Card.Text>
        <Button type="button" variant="outline-secondary" className="RightFeedButton mr-auto"> <CgMathPlus size={18} />Follow</Button>{" "}
        
      
      </Card.Body>
      </Col>
      </Row>
    </Card>
  );
};

export default FeedRightCard;