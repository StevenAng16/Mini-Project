// import Nav from 'react-bootstrap/Nav'

import Carousel from 'react-bootstrap/Carousel'
import CardGroup from 'react-bootstrap/CardGroup'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
// import Column from 'react-bootstrap/Column'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

import logo from "../image/Xbox (1).jpg";
import logo2 from "../image/PS5 Spiderman Miles.jpeg"
import logo3 from "../image/Nintendo Switch OLED/Nintendo Switch Carousel.jpg"

import './Home.css';

import category from "../image/Nintendo_Switch_Logo.png"
import category2 from "../image/PlayStation_Logo.jpeg"
import category3 from "../image/Xbox_Logo.jpeg"
import category4 from "../image/Nintendo_Switch_Accessories.jpeg"
import category5 from "../image/PlayStation_Accessories.jpeg"
import category6 from "../image/Nintendo Switch_Games.jpeg"
import category7 from "../image/PlayStation_Games.jpeg"
import category8 from "../image/Xbox_Games.jpeg"



function Home () {
    return (
        <div className="home">
            <div className="container-fluid mt-3">
                <h1>GameStation</h1>
                <Carousel className='container' variant="">
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={logo}
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        <h3 >Xbox Series S/X</h3>
                        <p></p>
                        <Button variant="outline-dark" href='../Product/Console/SeriesS.js'>Series S</Button>
                        <Button variant="outline-dark" href='../Product/Console/SeriesX.js'>Series X</Button>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={logo2}
                        alt="Second slide"
                        />
                        <Carousel.Caption>
                        <h3>PS5 Spider Man Rilis</h3>
                        <p></p>
                        <Button variant="outline-dark" href='../Product/Console/PS5.js'>PlayStation 5</Button>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={logo3}
                        alt="Third slide"
                        />
                        <Carousel.Caption>
                        <h3>Nintendo Switch OLED</h3>
                        <p></p>
                        <Button variant="outline-light" href='../Product/Console/NintendoSwitchOLED.js'>OLED</Button>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            
            <div  className='home2'>
            <h3 className='container card'>Find what category?</h3>
            <Container>
            <CardGroup>
                <Row className="row row-cols-2 row-cols-md-4 p-5 g-4">
                <Col>
                <Card className="card h-100">
                <Button href="../Pages/nintendoswitchconsole.js" variant="danger" className='h-100'>
                    <Card.Img className='image' variant="top" src={category} />
                    <Card.Title><h6>Nintendo Switch All Console</h6></Card.Title>
                </Button>
                </Card>
                </Col>
                <Col>
                <Card className="card h-100">
                <Button href="../Pages/nintendoswitchaccessories.js" variant="danger" className='h-100'>
                    <Card.Img className='image' variant="top" src={category4} />
                    <Card.Title><h6>Nintendo Switch All Accessories</h6></Card.Title>  
                </Button> 
                </Card>
                    
                </Col>
                <Col>
                <Card className="card h-100">
                <Button href="../Pages/nintendoswitchgames.js" variant="danger" className='h-100'>
                    <Card.Img className='image' variant="top" src={category6} />
                    <Card.Title><h6>Nintendo Switch All Games</h6></Card.Title>
                </Button>
                </Card>
                </Col>
                <Col>
                <Card className="card h-100">
                <Button href="../Pages/playstationconsole.js" variant="primary" className='h-100'>
                    <Card.Img className='image' variant="top" src={category2} />
                    <Card.Title><h6>PlayStation WorkShop Home Consoles</h6></Card.Title>       
                </Button>
                    
                </Card>
                </Col>
                <Col>
                <Card className="card h-100">
                <Button href="../Pages/playstationaccessories.js" variant="primary" className='h-100'>
                    <Card.Img className='image' variant="top" src={category5} />
                    <Card.Title><h6>PlayStation WorkShop Home Accessories</h6></Card.Title>
                </Button>
                </Card>
                </Col>
                <Col>
                <Card className="card h-100" >
                <Button href="../Pages/playstationgames.js" variant="primary" className='h-100'>
                    <Card.Img className='image' variant="top" src={category7} />
                    <Card.Title><h6>PlayStation WorkShop Home Games</h6></Card.Title>
                </Button>
                </Card>
                </Col>
                <Col>
                <Card className="card h-100">        
                    <Button href="../Pages/xboxconsole.js" variant="success" className='h-100'>
                    <Card.Img className='image' variant="top" src={category3} />
                    <Card.Title><h6>X-box Workshop Home Console</h6></Card.Title>
                    </Button>
                </Card>
                </Col>
                <Col>
                <Card className="card h-100">
                    <Button href="../Pages/xboxgames.js" variant="success" className='h-100'>
                    <Card.Img className='image'  variant="top" src={category8} />
                    <Card.Title><h6>X-box Workshop Home Games</h6></Card.Title>
                    </Button>
                </Card>
                </Col>
                </Row>
            </CardGroup>
            </Container>
            </div>
            <div className='mt-3'/>     
            </div>
            
        
    )
}

export default Home