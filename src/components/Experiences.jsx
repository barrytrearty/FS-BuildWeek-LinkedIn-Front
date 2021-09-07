import React, { useState, useEffect } from "react";
import { Row, Col, Container, Card, Button } from "react-bootstrap";
import StriveLogo from "../data/logo.png";
import EditModal from "./EditModal";
import { render } from "@testing-library/react";
import AddExperienceModal from "./AddExperienceModal";

const Experiences = ({ match }) => {
  // const experienceId = match.params.id;
  let urlstring = window.location.href.slice(-2);
  let isMe = false;
  if (urlstring === "me") {
    isMe = true;
  } else {
    isMe = false;
  }

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

  useEffect(() => {
    getArray();
  }, []);

  return (
    <section className="px-5 py-2">
      <Row className="d-flex justify-content-between">
        <h3>Experience</h3>
        {isMe === true && <AddExperienceModal />}
      </Row>
      {console.log(experienceArray)}

      {experienceArray.map((experience) => (
        <Row className="border-bottom" key={experience._id}>
          <Col xs={2}>
            <img src={experience.image} alt="" className="mt-3" />
          </Col>
          <Col className="my-3">
            <p className="p-heading">{experience.role}</p>
            <p className="p-secondary">{experience.company}</p>
            <p className="p-muted">
              {experience.startDate} - {experience.EndDate}{" "}
            </p>
            <p className="p-secondary">{experience.description}</p>
          </Col>{" "}
        </Row>
      ))}
    </section>
  );
};

export default Experiences;
