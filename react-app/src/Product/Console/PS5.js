// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Cart from '../../Components/Cart'
// import HomeApp from '../../Components/Home';
// import Login from '../../Components/Login';

import Carousel from "react-bootstrap/Carousel";
import type1 from "../../image/PS5/PS5 (1).jpeg";
import type2 from "../../image/PS5/PS5 (2).jpeg";
import type3 from "../../image/PS5/PS5 (3).jpeg";
import type4 from "../../image/PS5/PS5 (4).jpeg";
import type5 from "../../image/PS5/PS5 (5).jpeg";
import type6 from "../../image/PS5/PS5 (6).png";

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

import './PS5.css'
// import '../../Components/Home.css'

function PS5 () {

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
            <h4 className="playstation">PlayStation 5</h4>
            <Carousel className="container text-center" variant="dark">
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
                    alt="Sixth slide"
                  />
                </Carousel.Item>
              </Carousel>
              <Row className="mt-3">
                <Col>
                <p className="ms-5"><s>Rp11.499.000 - Rp14.999.000</s></p>
                <h1 className="ms-5">Rp 9,545,000 - Rp 12,999,000</h1>
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
                      <ToggleButton id="tbg-radio-1" value={1} variant="outline-secondary">
                        Inter Disc
                      </ToggleButton>
                      <ToggleButton id="tbg-radio-2" value={2} variant="outline-secondary">
                        Inter Digital
                      </ToggleButton>
                      <ToggleButton id="tbg-radio-3" value={3} variant="outline-secondary">
                        Indo Disc
                      </ToggleButton>
                    </ToggleButtonGroup>
                    </Col>
                    <Col sm={8}>
                      <p>
                        Experience lightning-fast loading with an ultra-high speed SSD, deeper immersion with support for haptic feedback1, adaptive triggers1 and 3D Audio*, and an all-new generation of incredible PlayStation games.
                      </p>
                    </Col>
                  </Row>
                  </Container>
                  <br/>
                  <Container>
                  <Table striped bordered hover size="sm" >
                      <thead>
                        <tr>
                          <th>Inter Disc Version</th>
                          <th>Inter Digital Version</th>
                          <th>Indo Disc Version</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Rp 10,349,000</td>
                          <td>Rp 9,545,000</td>
                          <td>Rp 12,999,000</td>
                        </tr>
                      </tbody>
                      </Table>
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
                          <th>Component</th>
                          <th>CPU</th>
                          <th>GPU</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Specification</td>
                          <td>x86-64-AMD Ryzen Zen 8 Cores / 16 Threads at 3.5GHz (variable frequency)</td>
                          <td>Ray Tracing Acceleration Up to 2.23 GHz (10.3 TFLOPS) & GPU Architecture	AMD Radeon RDNA 2-based graphics engine</td>
                        </tr>
                      </tbody>
                      </Table>
                      <Table>
                      <thead>
                        <tr>
                          <th>Memory/Interface</th>
                          <th>Memory Bandwidth</th>
                          <th>Internal Storage</th>
                          <th>IO Throughput</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>16GB GDDR6/256-bit</td>
                          <td>448GB/s</td>
                          <td>Custom 825GB SSD</td>
                          <td>5.5GB/s (Raw), Typical 8-9GB/s (Compressed)</td>
                        </tr>
                      </tbody>
                      </Table>
                      <Table>
                      <thead>
                        <tr>
                          <th>Expandable Storage</th>
                          <th>External Storage</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>NVMe SSD Slot</td>
                          <td>USB HDD Support</td>
                        </tr>
                      </tbody>
                      </Table>
                      <Table>
                      <thead>
                        <tr>
                          <th>Optical Drive (optional)</th>
                          <th>BD-ROM (25G/50G)</th>
                          <th>BD-R/RE (25G/50G)</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Ultra HD Blu-ray (66G/100G) ~10xCAV</td>
                          <td>~8xCAV</td>
                          <td>~8x CAV</td>
                        </tr>
                      </tbody>
                      </Table>
                      <Table>
                      <thead>
                        <tr>
                          <th>DVD</th>
                          <th>PS5 Game Disc</th>
                          <th>Audio</th>
                          <th>Video Out</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>~3.2xCLV</td>
                          <td>Ultra HD Blu-ray, up to 100GB/disc</td>
                          <td>"Tempest" 3D AudioTech</td>
                          <td>HDMI Out port Support of 4K 120Hz TVs, VRR (specified by HDMI ver 2.1)</td>
                        </tr>
                      </tbody>
                      </Table>
                      <Table>
                      <thead>
                        <tr>
                          <th>Dimensions</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>PS5 - 390mm x 104mm x 260mm (width x height x depth)</td>
                          <td>PS5 Digital Edition - 390mm x 92mm x 260mm (width x height x depth)</td>
                        </tr>
                      </tbody>
                      </Table>
                      <Table>
                      <thead>
                        <tr>
                          <th>WEIGHT</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>PS5 - 4.5kg</td>
                          <td>PS5 Digital Edition - 3.9kg</td>
                        </tr>
                      </tbody>
                      </Table>
                      <Table>
                      <thead>
                        <tr>
                          <th>POWER</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>PS5 - 350W</td>
                          <td>PS5 Digital Edition - 340W</td>
                        </tr>
                      </tbody>
                      </Table>
                      <Table>
                      <thead>
                        <tr>
                          <th>Input / Output</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>USB Type-A port (Hi-Speed USB)</td>
                          <td>USB Type-A port (Super Speed USB 10Gbps) x2</td>
                          <td>USB Type-C port (Super Speed USB 10Gbps)</td>
                        </tr>
                      </tbody>
                      </Table>
                      <Table>
                      <thead>
                        <tr>
                          <th>Network</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Ethernet (10BASE-T, 100BASE-TX, 1000BASE-T)</td>
                          <td>IEEE 802.11 a/b/g/n/ac/ax</td>
                          <td>Bluetooth 5.1</td>
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