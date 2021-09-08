import React, { Component } from "react";
import { Card, Image } from "react-bootstrap";
import { IoIosBookmark } from "react-icons/io";
import { BsSquareFill } from "react-icons/bs";

import { Link, NavLink } from "react-router-dom";

class LeftSection extends Component {
  state = {
    user: [],
  };

  componentDidMount = async () => {
    try {
      var myHeaders = new Headers();
      myHeaders.append(
        "Authorization",
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTFkMmFjZDJkNTI2MjAwMTViNmRlNmUiLCJpYXQiOjE2MzA5MTc5MjEsImV4cCI6MTYzMjEyNzUyMX0.OI99GOLixgQzINFZv184V2X1a8to4c2LekZY38u19tg"
      );

      var requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
      };
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/me",
        requestOptions
      );

      if (response.ok) {
        let userdetails = await response.json();
        this.setState({ user: userdetails });
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <>
        <Card className="cardstyling feedprofilecard">
          <Card.Img
            variant="top"
            src="https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Fjosephliu%2Ffiles%2F2019%2F06%2F10-ferdinand-stohr-149422-unsplash-1200x298.jpg"
            className="bannerImage"
          />

          <Card.Body className="px-0 py-0">
            <div id="feedprofileheadersection">
              <Link to="/me">
                <div>
                  <div className="d-flex justify-content-center">
                    <Image
                      className="profileimagesmall"
                      src={this.state.user.image}
                      roundedCircle
                    />
                  </div>

                  <Card.Title
                    id="feedprofileheader"
                    className="mt-2 mb-0 text-center"
                  >
                    {this.state.user.name} {this.state.user.surname}
                  </Card.Title>
                </div>
              </Link>
              <Card.Text className="text-muted mb-3 text-center">
                <small>{this.state.user.title}</small>
              </Card.Text>
            </div>
            <hr className="my-2" />
            <div id="feedprofilelinkssection">
              <Card.Text
                id="profileconnectionssection"
                className="pb-2 px-3 mb-0"
              >
                <Link to="/mynetwork">
                  <div>
                    <div className="d-flex justify-content-between pt-2">
                      <small className="text-muted">Connections</small>
                      <small className="text-primary">98</small>
                    </div>

                    <small className="feedboldtext">Grow your network</small>
                  </div>
                </Link>
              </Card.Text>

              <Card.Text className="px-3 mb-2" id="viewedprofilesection">
                <Link to="#">
                  <div className="d-flex justify-content-between mt-2 mb-0">
                    <small className="text-muted">
                      Who viewed your profile
                    </small>
                    <small className="text-primary">23</small>
                  </div>
                </Link>
              </Card.Text>

              <hr className="mt-1 mb-0" />
              <Card.Text
                style={{ lineHeight: "16px" }}
                className="pt-2 mb-0 pb-1 px-3"
                id="reactivatepremiumsection"
              >
                <Link to="#">
                  <small className="text-muted">
                    Access exclusive tools & insights
                  </small>
                  <p className="my-0 pb-2">
                    <small className="text-dark feedboldtext">
                      <BsSquareFill className="mr-1" size={12} color="orange" />{" "}
                      <span className="align-text-top">Reactivate Premium</span>
                    </small>
                  </p>
                </Link>
              </Card.Text>
              <hr className="my-0" />
              <Card.Text id="feedmyitems" className="pr-3">
                <Link to="#">
                  <div>
                    <small className="feedboldtext">
                      {" "}
                      <IoIosBookmark size={20} color="grey" /> My items
                    </small>
                  </div>
                </Link>
              </Card.Text>
            </div>
          </Card.Body>
        </Card>
        <Card className="cardstyling text-center" style={{ height: "20vh" }}>
          <Card.Body>
            <Card.Title>Page Admin Section</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="cardstyling text-center" style={{ height: "14vh" }}>
          <Card.Body>
            <Card.Title>Groups and Events</Card.Title>
            <Card.Text>Some quick example text.</Card.Text>
          </Card.Body>
        </Card>
      </>
    );
  }
}

export default LeftSection;