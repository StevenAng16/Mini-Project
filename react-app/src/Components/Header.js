import React from "react";
// import { Link } from "react-router-dom";
// import "./Header.css";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container'
import Offcanvas from 'react-bootstrap/Offcanvas'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
// import NavLink from "react-bootstrap/NavLink";
import { NavLink } from 'react-router-dom'

import {FaSignInAlt} from 'react-icons/fa'
import {FaShoppingCart} from 'react-icons/fa'

import type1 from '../svg/right-to-bracket-solid.svg'
import type2 from '../svg/cart-shopping-solid.svg' 



// 2) buat function component di Navbar

function Header () {
    return (
        <div className="navbar-wrapper container-wrapper">
        {['false'].map((expand) => (
            <Navbar key={expand} bg="secondary" variant="dark" expand={expand} >
            <Container>
                <Navbar.Brand href="/" className="test">GameStation</Navbar.Brand>
                <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} className="test" />
                <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
                >
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                    Menu
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className="justify-content-end">
                    <Nav className="flex-grow-2 pe-3">
                    <NavLink className="navbar-brand text-dark" style={{"fontSize":"medium"}} to="/Components/Login" ><FaSignInAlt icon="fa-solid fa-right-to-bracket" src={type1}/> Login</NavLink>{' '}
                    <NavLink className="navbar-brand text-dark" style={{"fontSize":"medium"}} to="/Components/Cart"><FaShoppingCart icon="fa-solid fa-cart-shopping" src={type2}/> Shopping-Cart</NavLink>
                    <NavDropdown
                        title="Dropdown"
                        id={`offcanvasNavbarDropdown-expand-${expand}`}
                    >
                        <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action4">
                        Another action
                        </NavDropdown.Item>
                    </NavDropdown>
                    </Nav><br/>
                    <Form className="d-flex">
                    <FormControl
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                    />
                    <Button variant="outline-success">Search</Button>
                    </Form>
                </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
            </Navbar>
        ))}
        </div>
                
            )
        }

// function Header () {
//     return (
//         <nav className="navbar navbar-expand-lg navbar-dark bg-info w-100">
//             <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"></link>
//             <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
//             <div className='container'>
//                 <Link to="/">
//                     <p className='navbar-brand light'>Kelas E</p>
//                 </Link>
//                 <Link to="/login">
//                     <p className='navbar-brand light'>Login</p>
//                 </Link>
//             </div>
//         </nav>
        
//     )
// }

// 3) export function tersebut saya bisa di pake di component
export default Header