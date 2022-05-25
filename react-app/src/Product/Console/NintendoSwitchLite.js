// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Cart from '../../Components/Cart'
// import HomeApp from '../../Components/Home';
// import Login from '../../Components/Login';

import Carousel from "react-bootstrap/Carousel";
import type1 from "../../image/Nintendo Switch Lite/Nintendo Switch Lite.jpg";
import type2 from "../../image/Nintendo Switch Lite/Nintendo Switch Lite-Gray.jpg";
import type3 from "../../image/Nintendo Switch Lite/Nintendo Switch Lite-Turquoise.jpg";
import type4 from "../../image/Nintendo Switch Lite/Nintendo Switch Lite-Yellow.jpg";
import type5 from "../../image/Nintendo Switch Lite/Nintendo Switch Lite-Blue.jpg";
import type6 from "../../image/Nintendo Switch Lite/Nintendo Switch Lite-Coral Pink.jpg"
import type7 from "../../image/Nintendo Switch Lite/Nintendo Switch Lite-Zacian and Zamazenta.jpg"

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Tabs from "react-bootstrap/Tabs"
import Tab from "react-bootstrap/Tab"
import Table from 'react-bootstrap/Table'

import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'
import ToggleButton from 'react-bootstrap/ToggleButton'

import { FaCartPlus } from "react-icons/fa";
import icons1 from '../../svg/cart-plus-solid.svg'

import './NintendoSwitchLite.css'
// import '../../Components/Home.css'

function NintendoSwitchLite () {

    return(
        <div className="container-fluid">
          {/* <Router>
          <Routes>
            <Route path="/" exact element={<HomeApp />}>
              <Route index element="Home"/>  
            </Route>
            <Route path="/Components/Login.js" element={<Login />}>
                <Route element="Login"/>
            </Route>
            <Route path="./Components/Cart.js" element={<Cart />}>
                <Route element="Cart"/>
            </Route>
          </Routes>
    </Router> */}
            <h4 className="nintendo p-5">Nintendo Switch Lite</h4>
            <Carousel className="text-center" variant="dark">
                <Carousel.Item>
                  <img
                    className="img-thumbnail"
                    src={type1}
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="img-thumbnail"
                    src={type2}
                    alt="Second slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="img-thumbnail"
                    src={type3}
                    alt="Third slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="img-thumbnail"
                    src={type4}
                    alt="Fourth slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="img-thumbnail"
                    src={type5}
                    alt="Fifth slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="img-thumbnail"
                    src={type6}
                    alt="Sixth slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="img-thumbnail"
                    src={type7}
                    alt="Seventh slide"
                  />
                </Carousel.Item>
              </Carousel>
              <Row className="mt-3">
                <Col>
                <h1 className="ms-5">Rp 2,625,000</h1>
                </Col>
                <Col>
                <Button href="" variant="secondary"><FaCartPlus icon="fa-solid fa-cart-plus" src={icons1}/> Add to Cart</Button>
                </Col>
              </Row>
              <div className="mt-5">
              <Container>
                  <Row >
                    <Col sm={4}>
                    <ToggleButtonGroup type="radio" name="options" defaultValue={false} vertical>
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
                      <ToggleButton id="tbg-radio-6" value={6} variant="outline-secondary">
                        Zacian and Zamazenta
                      </ToggleButton>
                    </ToggleButtonGroup>
                    </Col>
                    <Col sm={8}>
                      <p>
                      Nintendo Switch Lite is a compact, lightweight Nintendo Switch system dedicated to handheld play. 
                      With a built-in + Control Pad and a sleek, unibody design, it’s great for on-the-go gaming. 
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

export default NintendoSwitchLite