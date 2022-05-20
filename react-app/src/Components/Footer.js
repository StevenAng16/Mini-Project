import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./Footer.css"

function Footer() {
    return(
        <div className="footer">
            <footer>
                <section>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"></link>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
                <div className="footer2">
                <Container>
                <Row>
                    <Col>About GameStation</Col>
                    <Col>Rescoures</Col>
                    <Col>Visit Us</Col>
                </Row>
                </Container>
                </div>
                <div>
                    <h6>© 2021 Company, Inc @Steven</h6>
                </div>
                </section>
            </footer>
        </div>
    )
}

export default Footer