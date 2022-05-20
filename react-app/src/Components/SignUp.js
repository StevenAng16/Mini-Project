import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Nav from 'react-bootstrap/Nav'
import './Login.css'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

function Login () {
    return (
        <div className='login'>
            <Form className='form m-5' action='/'>
            <h1>Login</h1>
            <Container fluid="sm">
            <Row>
                <Col>
                <Form.Control placeholder="First name" required/>
                </Col>
                <Col>
                <Form.Control placeholder="Last name" />
                </Col>
            </Row>
            <Form.Group className="mb-3" controlId="formGroupEmail" required>
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Login
            </Button>
            <div className='m-5'>
            <h6>Create you Account<Nav.Link>SignUp</Nav.Link></h6>
            </div>
            
            </Container>
            </Form>
        </div>
        
    )
}

export default Login