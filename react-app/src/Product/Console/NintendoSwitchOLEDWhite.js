// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Cart from '../../Components/Cart'
// import HomeApp from '../../Components/Home';
// import Login from '../../Components/Login';

// import type1 from "../../image/Nintendo Switch OLED/Nintendo Switch OLED.jpg";
import type2 from "../../image/Nintendo Switch OLED/Nintendo Switch OLED (1).jpg";
// import type3 from "../../image/Nintendo Switch OLED/Nintendo Switch OLED (2).jpg";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Tabs from "react-bootstrap/Tabs"
import Tab from "react-bootstrap/Tab"
import Table from 'react-bootstrap/Table'

import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import { NavLink } from "react-router-dom";

import { FaCartPlus } from "react-icons/fa";
import icons1 from '../../svg/cart-plus-solid.svg'

import './NintendoSwitchOLED.css'
// import '../../Components/Home.css'

export default function NintendoSwitchOLEDWhite () {

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
            <h4 className="nintendo">Nintendo Switch OLED</h4>
            <div className="text-center" variant="dark">
                  <img
                    className="img-thumbnail"
                    src={type2}
                    alt="Second slide"
                  />
              </div>
              <Row className="mt-3">
                <Col>
                <h1 className="ms-5">Rp 4,780,000</h1>
                </Col>
                <Col>
                <Button href="" variant="secondary"><FaCartPlus icon="fa-solid fa-cart-plus" src={icons1}/> Add to Cart</Button>
                </Col>
              </Row>
              <div className="mt-5">
                <Container>
                  <Row >
                    <Col sm={4}>
                    <ToggleButtonGroup type="radio" name="options" Value={false} vertical>
                      <NavLink className="btn btn-outline-light text-dark" id="tbg-radio-1" value={1} to="/Products/Console/NintendoSwitchOLEDWhite" active>
                        White
                      </NavLink>
                      <NavLink className="btn btn-outline-info text-dark" id="tbg-radio-2" value={2} to="/Products/Console/NintendoSwitchOLEDNeon">
                        Neon Blue-Red
                      </NavLink>
                    </ToggleButtonGroup>
                    </Col>
                    <Col sm={8}>
                      <p>
                      Play at home on the TV or on-the-go with a vibrant 7-inch OLED screen with the 
                      Nintendo Switch (OLED Model). In addition to the screen with vivid colors and 
                      sharp contrast, the Nintendo Switch (OLED Model) includes a wide adjustable 
                      stand, a dock with a wired LAN port for TV play, 64 GB of internal storage, and 
                      enhanced audio.
                      </p>
                    </Col>
                  </Row>
                  </Container>
              </div>
              <div className="container-fluid">
                  <Tabs defaultActiveKey="home" id="uncontrolled-tab-example" className="mb-3 ">
                    <Tab eventKey="home" title="Description">
                      <p className="container-fluid">
                      Nintendo Switch (OLED model) will let players experience enhancements in all three play modes:
                      <br/><br/>
                      TV mode: Set the Nintendo Switch (OLED model) system into the dock to play Nintendo Switch games on the TV. By using the built-in wired LAN port, players can enjoy another way to connect online in TV mode.
                      <br/><br/>
                      Tabletop mode: Flip the stand on the back of the system and use the system’s screen to play multiplayer games using two Joy-Con controllers right out of the box. A wide adjustable stand makes for a solid and sturdy foundation. It allows players to freely tilt the system and adjust the viewing angle, so it makes it easier to see the screen.
                      <br/><br/>
                      Handheld mode: Players can bring the system wherever they go in handheld mode and play local* or online** multiplayer with friends. The system’s 7-inch OLED screen provides vivid color and crisp contrast.
                      <br/><br/>
                      All previously released Joy-Con for Nintendo Switch are compatible with this new model. Additionally, Nintendo Switch (OLED model) is compatible with the full library of Nintendo Switch games.
                      <br/><br/>
                      </p>
                    </Tab>
                    <Tab eventKey="profile" title="Additional Information">
                      <Table striped bordered hover size="sm">
                      <thead>
                        <tr>
                          <th>WEIGHT</th>
                          <th>VARIANT</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>5 kg</td>
                          <td>Outer Reg, SG . Reg</td>
                        </tr>
                      </tbody>
                      </Table>
                    </Tab>
                  </Tabs>  
              </div>
        </div>    
                       
         
    )
}

