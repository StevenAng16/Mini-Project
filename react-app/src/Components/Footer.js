import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import {MDBFooter} from 'mdb-react-ui-kit'
import "./Footer.css"
import { FaFacebook, FaTwitter } from "react-icons/fa";
import type1 from '../svg/facebook-brands.svg';
import type2 from '../svg/twitter-brands.svg';

function Footer() {
    return(
        <div className="footer">
            <footer className='text-lg-start align-items-center'>
                <section>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"></link>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
                <div>
                <Container>
                <Row>
                    <Col md={4}><b>About GameStation</b><br/>
                    <p>GameStation merupakan salah satu toko video game di Indonesia, yang mengedepankan teknologi video game yang terbaru den kepuasan pelanggan.</p>
                    </Col><br/>
                    <Col md={4}><b>Rescoures</b><br/>

                    <Row md={2}> 
                        <Col>About</Col>
                        <Col>How To Buy</Col>
                    </Row>
                    <Row md={2}>
                        <Col>Tips & Tutorials</Col>
                        <Col>Contact</Col>
                    </Row><br/>
                    </Col>
                    <Col md={4}><b>Visit Us</b><br/>
                    <Row>
                        <Col sm={2}><FaFacebook src={type1} icon="fa-brands fa-facebook"/></Col>
                        <Col sm={2}><FaTwitter src={type2} icon="fa-brands fa-twitter" /></Col>
                    </Row>
                    </Col>
                </Row>
                </Container>
                </div><br/>
                <div>
                    <h6 className="footer2">© 2021 Company, Inc @Steven</h6>
                </div>
                </section>
            </footer>
        </div>
    )
}

export default Footer