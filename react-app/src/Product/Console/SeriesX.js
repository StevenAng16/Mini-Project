// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Cart from '../../Components/Cart'
// import HomeApp from '../../Components/Home';
// import Login from '../../Components/Login';

import Carousel from "react-bootstrap/Carousel";
import type1 from "../../image/X Series/X Series (1).jpg";
import type2 from "../../image/X Series/X Series (2).jpg";
import type3 from "../../image/X Series/X Series (3).png";
import type4 from "../../image/X Series/X Series (4).jpg";
import type5 from "../../image/X Series/X Series (5).jpg";
import type6 from "../../image/X Series/X Series (6).jpg";
import type7 from "../../image/X Series/X Series (7).png";
import type8 from "../../image/X Series/X Series (8).jpg";
import type9 from "../../image/X Series/X Series (9).jpg";
import type10 from "../../image/X Series/X Series (10).jpg";
import type11 from "../../image/X Series/X Series (11).jpg";
import type12 from "../../image/X Series/X Series (12).jpg";
import type13 from "../../image/X Series/X Series (13).jpg";
import type14 from "../../image/X Series/X Series (14).jpg";
import type15 from "../../image/X Series/X Series (15).jpg";
import type16 from "../../image/X Series/X Series (16).jpg";

import Card from 'react-bootstrap/Card'

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Tabs from "react-bootstrap/Tabs"
import Tab from "react-bootstrap/Tab"
import Table from 'react-bootstrap/Table'

import Image from 'react-bootstrap/Image'

import './SeriesX.css'
// import '../../Components/Home.css'

function SeriesX () {

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
            <h4 className="xbox p-5">Series X</h4>
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
                    src={type7}
                    alt="Sixth slide"
                  />
                </Carousel.Item>
              </Carousel>
              <Row className="mt-3">
                <Col>
                <h1 className="ms-5">Rp 9,500,000</h1>
                </Col>
                <Col>
                <Button href="" variant="secondary">Add to Cart</Button>
                </Col>
              </Row>
              <div className="mt-5">
              <Container>
                  <Row >
                      <p>
                        Introducing Xbox Series X, our fastest, most powerful console ever, 
                        designed for a console generation that has you, the player, at its
                        center. Includes Xbox Series X console, and an option to add Xbox Game
                        Pass Ultimate 3 Month Membership, select controllers and Microsoft 
                        Complete for Xbox. Limit 1 console per customer.
                      </p>
                  </Row>
                  </Container>
              </div>
              <div className="container-fluid">
                  <Tabs defaultActiveKey="home" id="uncontrolled-tab-example" className="mb-3 ">
                    <Tab eventKey="home" title="Description">
                    <Container>
                    <Row>
                        <Col>
                            <Image
                                className="d-block w-100"
                                src={type6}
                            />
                        </Col>
                        <Col>
                            <Image
                                className="d-block w-100"
                                src={type8}
                            />
                        </Col>
                    </Row>
                    </Container><br/>
                      <p className="p-5">
                      <h3>Power your dreams</h3>
                      Our fastest, most powerful console ever is designed 
                      for a console generation that has you, the player, 
                      at its center.
                      <br/><br/>
                        <Card className="bg-dark text-white">
                        <Card.Img src={type9} className="img-thumbnail text-center" alt="Card image" />
                        <Card.ImgOverlay>
                          <Card.Title>Split motherboard</Card.Title>
                          <Card.Text>
                          A split motherboard keeps the console’s internals 
                          evenly temperature controlled, allowing for an even 
                          higher output of power.
                          </Card.Text>
                        </Card.ImgOverlay>
                        </Card>
                        <br/>
                        <Card className="bg-dark text-white">
                        <Card.Img src={type10} className="img-thumbnail text-center" alt="Card image" />
                        <Card.ImgOverlay>
                          <Card.Title>Looks, sounds, plays better</Card.Title>
                          <Card.Text>
                          DirectX ray tracing delivers a heightened sensory 
                          experience—and advantage—with hyper-dynamic living 
                          worlds full of true-to-life lighting, shadows, 
                          reflections, and acoustics.
                          </Card.Text>
                        </Card.ImgOverlay>
                        </Card>
                        <br/>
                        <Card className="bg-dark text-white">
                        <Card.Img src={type11} className="img-thumbnail text-center" alt="Card image" />
                        <Card.ImgOverlay>
                          <Card.Title>Heat sink chassis</Card.Title>
                          <Card.Text>
                          This unique, non-electronic component merges parallel 
                          cooling with innovative design to increase the reliability 
                          and performance of the Xbox Series X.
                          </Card.Text>
                        </Card.ImgOverlay>
                        </Card>
                        <br/>
                        <Card className="bg-dark text-white">
                        <Card.Img src={type12} className="img-thumbnail text-center" alt="Card image" />
                        <Card.ImgOverlay>
                          <Card.Title>Meet the new Xbox Wireless Controller</Card.Title>
                          <Card.Text>
                          Experience the modernized Xbox Wireless Controller, designed for enhanced comfort during gameplay.
                          </Card.Text>
                        </Card.ImgOverlay>
                        </Card>
                        <br/>
                        <Card className="bg-dark text-white">
                        <Card.Img src={type13} className="img-thumbnail text-center" alt="Card image" />
                        <Card.ImgOverlay>
                          <Card.Title>Get a grip</Card.Title>
                          <Card.Text>
                          Stay on target with textured grips on the trigger and bumpers.
                          </Card.Text>
                        </Card.ImgOverlay>
                        </Card>
                        <br/>
                        <Card className="bg-dark text-white">
                        <Card.Img src={type14} className="img-thumbnail text-center" alt="Card image" />
                        <Card.ImgOverlay>
                          <Card.Title>Full circle</Card.Title>
                          <Card.Text>
                          Stay on target with textured grips on the trigger and bumpers.
                          </Card.Text>
                        </Card.ImgOverlay>
                        </Card>
                        <br/>
                        <Card className="bg-dark text-white">
                        <Card.Img src={type15} className="img-thumbnail text-center" alt="Card image" />
                        <Card.ImgOverlay>
                          <Card.Title>Go ahead, show off</Card.Title>
                          <Card.Text>
                          Tap the dedicated Share button to seamlessly capture and eternalize your conquest.
                          </Card.Text>
                        </Card.ImgOverlay>
                        </Card>
                        <br/>
                        <Card className="bg-dark text-white">
                        <Card.Img src={type16} className="img-thumbnail text-center" alt="Card image" />
                        <Card.ImgOverlay>
                          <Card.Title>Increased inventory, uncompromised performance</Card.Title>
                          <Card.Text>
                          The Seagate 1TB expansion card3 plugs into the back of the console via the dedicated expansion port and replicates the console’s custom SSD experience, providing additional game storage.
                          </Card.Text>
                        </Card.ImgOverlay>
                        </Card>
                      </p>
                    </Tab>
                    <Tab eventKey="profile" title="Additional Information">
                      <Table striped bordered hover size="sm">
                      <thead>
                        <tr>
                          <th>Processor</th>
                          <th>Memory & Storage</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>CPU: 8X Cores @ 3.8 GHz (3.66 GHz w/SMT) Custom Zen 2 CPU
                          <br/>
                          GPU: 12 TFLOPS, 52 CUs @1.825 GHz Custom RDNA 2 GPU
                          <br/>
                          SOC Die Size: 360.45 mm
                          <br/>
                          Process: 7nm Enhanced</td>
                          <td>Memory: 16GB GDDR6 w/320 bit-wide bus
                          <br/>
                          Memory bandwidth: 10GB @ 560 GB/s, 6GB @ 336 GB/s
                          <br/>
                          Internal storage: 1TB Custom NVME SSD
                          <br/>
                          I/O throughput: 2.4 GB/s (Raw), 4.8 GB/s (Compressed, with custom hardware decompression block)
                          <br/>
                          Expandable storage: Support for 1TB Seagate Expansion Card for Xbox Series X|S matches internal storage exactly (sold separately). Support for USB 3.1 external HDD (sold separately).</td>
                        </tr>
                      </tbody>
                      <thead>
                        <tr>
                          <th>Video Capabilities</th>
                          <th>Sound Capabilities</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Gaming resolution: True 4K
                          <br/>
                          High Dynamic Range: Up to 8K HDR
                          <br/>
                          Optical Drive: 4K UHD Blu-Ray
                          <br/>
                          Performance target: Up to 120 FPS
                          <br/>
                          HDMI features: Auto Low Latency Mode. HDMI Variable Refresh Rate. AMD FreeSync.</td>
                          <td>Dolby Digital 5.1
                          <br/>
                          DTS 5.1
                          <br/>
                          Dolby TrueHD with Atmos
                          <br/>
                          Up to 7.1 L-PCM</td>
                        </tr>
                      </tbody>
                      <thead>
                        <tr>
                          <th>Ports & Connectivity</th>
                          <th>Dimensions</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>HDMI: 1x HDMI 2.1 port
                          <br/>
                          USB: 3x USB 3.1 Gen 1 ports
                          <br/>
                          Wireless: 802.11ac dual band
                          <br/>
                          Ethernet: 802.3 10/100/1000
                          <br/>
                          Accessories radio: Dedicated dual band Xbox Wireless radio</td>
                          <td>5.94 x 5.94 x 11.85 in (15.1 x 15.1 x 30.1cm)</td>
                        </tr>
                      </tbody>
                      <thead>
                        <tr>
                          <th>WEIGHT</th>
                          <th>Warranty</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>9.8 lbs (4.4kg)</td>
                          <td>1-year limited warranty**</td>
                        </tr>
                      </tbody>
                      </Table>
                    </Tab>
                  </Tabs>
              </div>
        </div>    
                       
         
    )
}

export default SeriesX