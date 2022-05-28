import { useState } from "react";
import {v4 as uuidv4} from "uuid";

// import './Cart.css';
import ListCart from '../Props/ListCart';
import ListCost from '../Props/ListCost';
// import CartInput from './JudulInput';

import Container from "react-bootstrap/Container";

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const initialValue = [
    {
        id: uuidv4(),
        image: "../image/Nintendo Switch OLED/Nintendo Switch Carousel.jpg",
        title: "Nintendo Switch OLED",
        variant: "White",
        cost : "Rp 4,780,000"

    },
    {
        id: uuidv4(),
        image: "../image/JoyStick/Analog Cap.jpg", 
        title: "Nintendo Switch JoyCon Controllers",
        cost : "Rp 20,000",
    },
    {
        id: uuidv4(),
        image: "../image/JoyStick/Pro Controller (1).jpeg",
        title: "Nintendo Switch Pro Controller",
        cost : "Rp 829,000",
    },
    {
        id: uuidv4(),
        image: "../image/Adaptor/Switch AC Adapter (Loose Pack) (1).jpeg",
        title: "Nintendo Switch AC Adapter/Adaptor [JPN] (Loose Pack)",
        cost : "Rp 350,000",
    },
]

export default function Cart () {

    const [data, setData] = useState(initialValue)
    const hapusCart = id => {
        setData((oldData) => oldData.filter(item => {
            return item.id !== id;
        }))
       
    };
    return (
    <div>
    <Container fluid="sm">
    <h1 style={{"textAlign":"center", "margin-top":"20px"}}>Shopping Cart</h1>
    <Row>
        <Col sm={6}>
            <ListCart
                data = {data} 
                hapusCart ={hapusCart}  
            />
        </Col>
        <Col sm={4}>
            <ListCost
                data = {data} 
                hapusCart ={hapusCart}  
            />
        </Col>
    </Row>
    </Container>
    </div>
    )
    
}

