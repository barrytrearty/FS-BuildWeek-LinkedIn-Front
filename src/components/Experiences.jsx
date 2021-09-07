import React, { useState, useEffect } from "react";
import { Row, Col, Container, Card, Button } from "react-bootstrap";
import StriveLogo from "../data/logo.png";
import EditModal from "./EditModal";
import { format, parseISO } from "date-fns";

const Experiences = ({ match }) => {
  // const experienceId = match.params.id;
  const experienceId = "611d2acd2d52620015b6de6e";
  const [experienceArray, setExperienceArray] = useState([]);

  const getArray = async () => {
    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${experienceId}/experiences`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTFjZTBiMTJkNTI2MjAwMTViNmRjOGQiLCJpYXQiOjE2MzEwMTE2NDMsImV4cCI6MTYzMjIyMTI0M30.wxo-L7vPKDv0DeIAf5S_h2cwEHJqqvPcL0Il7sQlPYs",
          },
        }
      );
      let experienceArray1 = await response.json();
      setExperienceArray(experienceArray1);
    } catch (error) {
      console.log(error);
    }
  };

  const fixDate = (date) => {
    try {
      return format(
        parseISO(date), // 1)
        "yyyy MMMM dd"
      );
    } catch {
      return `No date found`;
    }
  };

  useEffect(() => {
    getArray();
  });

  return (
    <Card className="px-4 py-2">
      <Row>
        <Card.Title className="px-3">Experience</Card.Title>
      </Row>
      {console.log(experienceArray)}

      {experienceArray.map((experience) => (
        <Row key={experience._id}>
          <Col xs={2}>
            <img src={StriveLogo} alt="" className="mt-3" />
          </Col>
          <Col className="my-3">
            <p className="p-heading">{experience.role}</p>
            <p className="p-secondary">{experience.company}</p>
            <p className="p-muted">
              {fixDate(experience.startDate)} - {fixDate(experience.endDate)}{" "}
            </p>
            <p className="p-secondary">{experience.description}</p>
          </Col>{" "}
        </Row>
      ))}
    </Card>
  );
};

export default Experiences;
