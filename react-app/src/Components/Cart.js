import { useState } from "react";
import {v4 as uuidv4} from "uuid";

// import './Cart.css';
import ListCart from '../Props/ListCart';
// import CartInput from './JudulInput';

import Container from "react-bootstrap/Container";

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


const initialValue = [
    {
        id: uuidv4(),
        title: "Nintendo Switch OLED",
        image: "../image/Nintendo Switch OLED/Nintendo Switch OLED.jpg",

    },
    {
        id: uuidv4(),
        title: "Nintendo Switch JoyCon Controllers",
        image: "../image/JoyStick/Analog Cap.jpg",
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
    <>
    <Container fluid="sm">
    <Row>
        <Col sm={8}>
            <ListCart
                data = {data} 
                hapusCart ={hapusCart}  
            />
        </Col>
        <Col sm={4}></Col>
    </Row>
    </Container>
    </>
    )
    
}

