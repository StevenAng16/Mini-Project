import Carousel from "react-bootstrap/Carousel";
import type1 from "../../image/PS5/PS5 (1).jpeg";
import type2 from "../../image/PS5/PS5 (2).jpeg";
import type3 from "../../image/PS5/PS5 (3).jpeg";
import type4 from "../../image/PS5/PS5 (4).jpeg";
import type5 from "../../image/PS5/PS5 (5).jpeg";
import type6 from "../../image/PS5/PS5 (6).png";

import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Tabs from "react-bootstrap/Tabs"
import Tab from "react-bootstrap/Tab"
import Table from 'react-bootstrap/Table'

import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'
import ToggleButton from 'react-bootstrap/ToggleButton'

import './PS5.css'

function PS5 () {

    return(
        <div>
            <h1 className="ps5">PlayStation 5</h1>
            <Carousel className="container">
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={type1}
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={type2}
                    alt="Second slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={type3}
                    alt="Third slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={type4}
                    alt="Fourth slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={type5}
                    alt="Fifth slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={type6}
                    alt="Third slide"
                  />
                </Carousel.Item>
              </Carousel>
              <div className="mt-5">
              <Container>
                  <Row >
                    <Col sm={4}>
                    <ToggleButtonGroup type="radio" name="options" defaultValue={1} vertical>
                      <ToggleButton id="tbg-radio-1" value={1} variant="outline-primary">
                        Blue
                      </ToggleButton>
                      <ToggleButton id="tbg-radio-2" value={2} variant="outline-secondary">
                        Gray
                      </ToggleButton>
                      <ToggleButton id="tbg-radio-3" value={3} variant="outline-danger">
                        Pink
                      </ToggleButton>
                      <ToggleButton id="tbg-radio-4" value={4} variant="outline-info">
                        Turquoise
                      </ToggleButton>
                      <ToggleButton id="tbg-radio-5" value={5} variant="outline-warning">
                        Yellow
                      </ToggleButton>
                    </ToggleButtonGroup>
                    </Col>
                    <Col sm={8}>
                      <p>
                      Nintendo Switch Lite is a compact, lightweight Nintendo Switch system dedicated to handheld play. 
                      With a built-in +Control Pad and a sleek, unibody design, it’s great for on-the-go gaming. 
                      Nintendo Switch Lite is compatible with the robust library of Nintendo Switch games that support 
                      handheld mode. If you’re looking for a gaming system all your own, Nintendo Switch Lite is ready 
                      to hit the road whenever you are.
                      </p>
                    </Col>
                  </Row>
                  </Container>
              </div>
              <div className="container-fluid">
                  <Tabs defaultActiveKey="home" id="uncontrolled-tab-example" className="mb-3 ">
                    <Tab eventKey="home" title="Description">
                      <p className="container-fluid">
                      Nintendo Switch Lite is a compact, lightweight Nintendo Switch system dedicated to handheld play. With a built-in +Control Pad and a sleek, unibody design, it’s great for on-the-go gaming. Nintendo Switch Lite is compatible with the robust library of Nintendo Switch games that support handheld mode. If you’re looking for a gaming system all your own, Nintendo Switch Lite is ready to hit the road whenever you are.
                      <br/><br/>
                        The Nintendo Switch Lite supports all Nintendo Switch software that can be played in handheld mode. It’s great for people who have lots of opportunities to play outside, and also for anyone who wants to play online or local wireless multiplayer with friends or family who already own a flagship Nintendo Switch console.
                        <br/><br/>
                        As a dedicated handheld gaming device, Nintendo Switch Lite does not support output to a TV.
                        <br/><br/>
                        Features
                        <br/><br/>
                        5.5″ touch display
                        Handheld-only Switch device
                        Compatible with Nintendo Switch games that support Handheld mode
                        Lightweight and compact design
                        Integrated controls
                        Battery Life : Approximately 3 – 7 hours *The battery life will depend on the game you play. For instance, the battery will last approx. 4 hours playing The Legend of Zelda: Breath of the Wild.
                        Joy-Con controllers not included, only required for games not compatible with handheld mode
                        Brighten up – The Nintendo Switch Lite comes in four colors: yellow, coral, gray, and turquoise
                        Multiplayer gaming options – Local wireless & Online Play
                        Album – Easily take and save screenshots using the Capture Button. Then view, add text, and share to social networks from your album
                        Includes: Nintendo Switch Lite system and Nintendo Switch AC adapter.
                        <br/><br/>
                      </p>
                    </Tab>
                    <Tab eventKey="profile" title="Additional Information">
                      <Table striped bordered hover size="sm">
                      <thead>
                        <tr>
                          <th>WEIGHT</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1 kg</td>
                        </tr>
                      </tbody>
                      </Table>
                    </Tab>
                  </Tabs>
              </div>
        </div>    
                       
         
    )
}

export default PS5