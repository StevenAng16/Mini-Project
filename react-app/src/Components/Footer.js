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
                <div>
                <Container>
                <Row>
                    <Col md={4}><b>About GameStation</b><br/>
                    Permainan game toko baru bernama GameStation, untuk meresmikan tokoh game sejak 3 May 2022, Kami berbagai pelanggan terbaik kepada customer dan juga harga berkualitas.
                    </Col> <br/><br/>
                    <Col md={4}><b>Rescoures</b><br/><br/></Col><br/><br/>
                    <Col md={4}><b>Visit Us</b></Col><br/><br/>
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