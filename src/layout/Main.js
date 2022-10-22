import React from "react";
import { Outlet } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import LeftsideNav from "../Pages/Shared/LeftsideNavbar/LeftsideNav";
import RightsideNav from "../Pages/Shared/RightsideNavbar/RightsideNav";
import Header from "../Pages/Shared/Headr/Header";
import Footer from "../Pages/Shared/Footer/Footer";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <Container>
        <Row>
          <Col lg="2" className="d-none d-lg-block">
            <LeftsideNav></LeftsideNav>
          </Col>
          <Col lg="7">
            <Outlet></Outlet>
          </Col>
          <Col lg="3">
            <RightsideNav></RightsideNav>
          </Col>
        </Row>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default Main;
