/*!

=========================================================
* Paper Kit React - v1.3.2
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import { useNavigate } from "react-router-dom";

// reactstrap components
import {
  Button,
  Label,
  FormGroup,
  Input,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
  Modal,
  Card,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

import ReactDatetime from "react-datetime";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";

function ProfilePage() {
  const [activeTab, setActiveTab] = React.useState("1");
  const [modal, setModal] = React.useState(false);
  const [dropdownOpen, setDropdownOpen] = React.useState(false);


  const toggleDrop = () => setDropdownOpen(!dropdownOpen);
  let navigate = useNavigate();

  const toggle = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };

  const toggleModal = () => {
    setModal(!modal)
  };

  const routeChangeG = () => {
    const whatsappURL = 'https://api.whatsapp.com/send?phone=3113753281';

    // Abrir la URL en una nueva ventana
    window.open(whatsappURL, '_blank');
  }

  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    return function cleanup() {
      document.body.classList.remove("landing-page");
    };
  });
  return (
    <>
      <ExamplesNavbar />
      <ProfilePageHeader />
      <div className="section profile-content">
        <Container>
          <div className="owner">
            <div className="avatar">
              <img
                alt="..."
                className="img-circle img-no-padding img-responsive"
                src={require("assets/img/faces/kerwin.jpg")}
              />
            </div>
            <div className="name">
              <h4 className="title">
                Kerwin Múnive <br />
              </h4>
              <h6 className="description">Entrenador Personal</h6>
            </div>
          </div>
          <Row>
            <Col className="ml-auto mr-auto text-center" md="6">
              <p>
              Con una amplia experiencia en el entrenamiento de deportistas de todos los niveles, nuestro experto te proporcionará las herramientas y técnicas necesarias para superar tus límites y destacar en tu disciplina favorita. Ya sea que busques mejorar tu velocidad, agilidad, fuerza o resistencia, nuestro entrenador personalizado diseñará un plan de entrenamiento adaptado a tus necesidades individuales.
              </p>
              <br />
              <Button className="btn-round" color="success" outline onClick={routeChangeG}>
                <i className="fa fa-whatsapp" /> Contactar
              </Button>

              <Button className="btn-round" color="info" style={{ marginLeft: 10 }} outline onClick={toggleModal}>
                <i className="fa fa-ticket" /> Reservar
              </Button>
            </Col>
          </Row>
          <br />
          <div className="nav-tabs-navigation">
            <div className="nav-tabs-wrapper">
              <Nav role="tablist" tabs>
                <NavItem>
                  <NavLink
                    className={activeTab === "1" ? "active" : ""}
                    onClick={() => {
                      toggle("1");
                    }}
                  >
                    Siguiendo
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={activeTab === "2" ? "active" : ""}
                    onClick={() => {
                      toggle("2");
                    }}
                  >
                    Seguidores
                  </NavLink>
                </NavItem>
              </Nav>
            </div>
          </div>
          {/* Tab panes */}
          <TabContent className="following" activeTab={activeTab}>
            <TabPane tabId="1" id="follows">
              <Row>
                <Col className="ml-auto mr-auto" md="6">
                  <ul className="list-unstyled follows">
                    <li>
                      <Row>
                        <Col className="ml-auto mr-auto" lg="2" md="4" xs="4">
                          <img
                            alt="..."
                            className="img-circle img-no-padding img-responsive"
                            src={require("assets/img/faces/elias.jpg")}
                          />
                        </Col>
                        <Col className="ml-auto mr-auto" lg="7" md="4" xs="4">
                          <h6>
                            Elias <br />
                            <small>Entrenador Personal</small>
                          </h6>
                        </Col>
                        <Col className="ml-auto mr-auto" lg="3" md="4" xs="4">
                          <FormGroup check>
                            <Label check>
                              <Input
                                defaultChecked
                                defaultValue=""
                                type="checkbox"
                              />
                              <span className="form-check-sign" />
                            </Label>
                          </FormGroup>
                        </Col>
                      </Row>
                    </li>
                    <hr />
                    <li>
                      <Row>
                        <Col className="mx-auto" lg="2" md="4" xs="4">
                          <img
                            alt="..."
                            className="img-circle img-no-padding img-responsive"
                            src={require("assets/img/faces/gabrielys.jpg")}
                          />
                        </Col>
                        <Col lg="7" md="4" xs="4">
                          <h6>
                            Gabrielys <br />
                            <small>Entrenadora Personal</small>
                          </h6>
                        </Col>
                        <Col lg="3" md="4" xs="4">
                          <FormGroup check>
                            <Label check>
                              <Input defaultValue="" type="checkbox" />
                              <span className="form-check-sign" />
                            </Label>
                          </FormGroup>
                        </Col>
                      </Row>
                    </li>
                  </ul>
                </Col>
              </Row>
            </TabPane>
            <TabPane className="text-center" tabId="2" id="following">
              <h3 className="text-muted">Not following anyone yet :(</h3>
              <Button className="btn-round" color="warning">
                Find artists
              </Button>
            </TabPane>
          </TabContent>
        </Container>
      </div>
      <Modal isOpen={modal} toggle={toggleModal}>
        <div className="modal-header">
          <button aria-label="Close" className="close" type="button" onClick={toggleModal}>
            <span aria-hidden={true}>×</span>
          </button>
          <h5 className="modal-title text-center" id="exampleModalLabel">
            Registro
          </h5>
        </div>
        <div className="modal-body">
          <Row>
            <Col className="ml-auto mr-auto" lg="12">
              <h3 className="title mx-auto">¡Unos datos más!</h3>
              <Row>
                <Col >
                  <label>Dirección Encuentro</label>
                  <Input placeholder="Email" type="text" />
                </Col>
                <Col >
                  <label>Teléfono</label>
                  <Input placeholder="Email" type="text" />
                </Col>
              </Row>
              <Row>
                <Row style={{ display: 'contents' }}>
                  <Col lg="12">
                    <label>Fecha y hora de encuentro</label>
                    <FormGroup>
                      <InputGroup className="date" id="datetimepicker" style={{ color: 'black' }}>
                        <ReactDatetime
                          inputProps={{
                            placeholder: "Seleccionar Fecha",
                          }}

                        />
                        <InputGroupAddon addonType="append">
                          <InputGroupText>
                            <span className="glyphicon glyphicon-calendar">
                              <i aria-hidden={true} className="fa fa-calendar" />
                            </span>
                          </InputGroupText>
                        </InputGroupAddon>
                      </InputGroup>
                    </FormGroup>
                  </Col>
                </Row>
              </Row>
              <Row>
                <Col>
                  <label>Método de pago</label>
                  <div className="form-check-radio">
                    <Label check>
                      <Input
                        defaultValue="option1"
                        id="exampleRadios1"
                        name="exampleRadios"
                        type="radio"
                      />
                      Transferencia <span className="form-check-sign" />
                    </Label>
                  </div>
                  <div className="form-check-radio">
                    <Label check>
                      <Input
                        defaultValue="option1"
                        id="exampleRadios1"
                        name="exampleRadios"
                        type="radio"
                      />
                      Efectivo <span className="form-check-sign" />
                    </Label>
                  </div>
                </Col>
              </Row>
              <Button block className="btn-round" color="danger" style={{ marginTop: "5%" }} onClick={toggleModal}>
                Reservar
              </Button>
            </Col>
          </Row>
        </div>
      </Modal>

      <DemoFooter />
    </>
  );
}

export default ProfilePage;
