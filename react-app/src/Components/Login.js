

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
// import Nav from 'react-bootstrap/Nav'
// import SignUp from "./SignUp"

import './Login.css'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


// import React from 'react'
// import { gql, useQuery, useMutation } from '@apollo/client';
// import { setToken } from '../token'



// const SIGNUP_MUTATION = gql `
//   query MyQuery($email: String, $password: String, $name: String) {
//     Signup_mutation(where :{name: {_eq: $name}}{email: {_eq: $email, password: {_eq: $password}}}) {
//       name
//       email
//       password
//     }
//   }
// `;

// const LOGIN_MUTATION = gql`
//   query MyQuery($email: String, $pasword: String) {
//     Login_mutation(where: {email: {_eq: $email, password: {_eq: $password}}}) {
//     email
//     password
//   }
// }
// `;

// const Login = props => {
//   // Used to switch between login and signup
//   const [isLogin, setIsLogin] = React.useState(true)

//   const [email, setEmail] = React.useState('')
//   const [password, setPassword] = React.useState('')
//   const [name, setName] = React.useState('')
  
//   const [state, executeMutation] = useMutation(
//     isLogin ? LOGIN_MUTATION : SIGNUP_MUTATION
//   );
//   const [loginMutation, { data, loading, error }] = useQuery(LOGIN_MUTATION)

//   const mutate = React.useCallback(() => {
//     executeMutation({ email, password, name })
//       .then(({ data }) => {
//         const token = data && data[isLogin ? 'login' : 'signup'].token
//         if (token) {
//           setToken(token)
//           props.history.push('/')
//         }
//       });
//   }, [executeMutation, props.history, isLogin, email, password, name]);
  
//   const loginAuth = async () => {
//         loginMutation({
//             variables: {
//                 email: email,
//                 password: password
//             },
//         })
//     }

//   return (
//     <div className='ps-5 pe-5'>
//       <h4 className="mv3 mt-3">{isLogin ? 'Login' : 'Sign Up'}</h4><br/><br/>
        
//       <div className="flex flex-column form-control container-sm ps-5 pe-5">
        
//         {!isLogin && (
//           <input
//             value={name}
//             className="form-control container"
//             onChange={e => setName(e.target.value)}
//             type="text"
//             placeholder="Your name"
//           />
//         )}<br/>
//         <label class="form-label">Email</label><br/>
//         <input
//           value={email}
//           className="form-control container"
//           onChange={e => setEmail(e.target.value)}
//           type="text"
//           placeholder="Your email address"
//         /><br/>
//         <label class="form-label">Password</label><br/>
//         <input
//           value={password}
//           className="form-control container"
//           onChange={e => setPassword(e.target.value)}
//           type="password"
//           placeholder="Choose a safe password"
//         />
//       </div>
//         <br/>
//       <div className="flex mt3">
//         <button
//           type="button"
//           className="pointer mr2 button btn btn-success"
//           disabled={state.fetching}
//           onClick={loginAuth}
//         >
//           {isLogin ? "login" : "create account"}
//         </button><br/><br/>
//         <button
//           type="button"
//           className="pointer button btn btn-primary"
//           disabled={state.fetching}
//           onClick={() => setIsLogin(!isLogin)}
//         >
//           {isLogin ? 'need to create an account?' : 'already have an account?'}
//         </button>
//       </div>
//     </div>
//   )
// }
// export default Login

// function Login (props) {
//   const [isLogin, setIsLogin] = React.useState(true)

//   const [email, setEmail] = React.useState('')
//   const [password, setPassword] = React.useState('')
//   const [name, setName] = React.useState('')
  
//   const [state, executeMutation] = useMutation(
//     isLogin ? LOGIN_MUTATION : SIGNUP_MUTATION
//   );
//   const [loginMutation, { data, loading, error }] = useQuery(LOGIN_MUTATION)

//   const mutate = React.useCallback(() => {
//     executeMutation({ email, password, name })
//       .then(({ data }) => {
//         const token = data && data[isLogin ? 'login' : 'signup'].token
//         if (token) {
//           setToken(token)
//           props.history.push('/')
//         }
//       });
//   }, [executeMutation, props.history, isLogin, email, password, name]);
  
//   const loginAuth = async () => {
//         loginMutation({
//             variables: {
//                 email: email,
//                 password: password
//             },
//         })
//     }

//     return (
//         <div className='login'>
//             <Row>
//                 <Col sm={2}></Col>
//                 <Col sm={8}>
//                 <h4 className="mv3 mt-3">{isLogin ? 'Login' : 'Sign Up'}</h4><br/><br/>
//                 <Form>
//                 <Form.Group className="flex flex-column mb-3" controlId="formBasicEmail">
//                 {!isLogin && (
//                 <Form.Control
//                     value={name}
//                     className="form-control container"
//                     onChange={e => setName(e.target.value)}
//                     type="text"
//                     placeholder="Your name"
//                 />
//                 )}<br/>
//                 <Form.Label>Email address</Form.Label>
//                 <Form.Control type="email" placeholder="Enter email" className="form-control container"
//                 onChange={e => setEmail(e.target.value)}/>
//                 <Form.Text className="text-muted">
//                     We'll never share your email with anyone else.
//                 </Form.Text>
//                 </Form.Group>
//                 <Form.Group className="mb-3" controlId="formBasicPassword">
//                     <Form.Label>Password</Form.Label>
//                     <Form.Control type="password" placeholder="Password" onChange={e => setPassword(e.target.value)}/>
//                 </Form.Group>
//                 <Form.Group className="mb-3" controlId="formBasicCheckbox">
//                     <Form.Check type="checkbox" label="Check me out" />
//                 </Form.Group>
//                 <Button
//                 type="button"
//                 className="pointer mr2 button btn btn-success"
//                 disabled={state.fetching}
//                 onClick={loginAuth}
//                 >
//                 {isLogin ? "login" : "create account"}
//                 </Button>
//                 <div className='m-5'>
//                 <Button
//                 type="button"
//                 className="pointer button btn btn-primary"
//                 disabled={state.fetching}
//                 onClick={() => setIsLogin(!isLogin)}
//                 >
//                 {isLogin ? 'need to create an account?' : 'already have an account?'}
//                 </Button>
//                 </div>
//                 </Form>
//                 </Col>
//                 <Col sm={2}></Col>
//             </Row>        
//         </div>
        
//     )
// }

function Login () {
    <div className='login'>
                <Row>
                   <Col sm={2}></Col>
                   <Col sm={8}>
                   <h4 className="mv3 mt-3"> Login</h4><br/><br/>

                   <Form>
                    <Form.Group className="flex flex-column mb-3" controlId="formBasicEmail">
                   <br/>
                   <Form.Label>Email address</Form.Label>
                   <Form.Control type="email" placeholder="Enter email" className="form-control container"/>
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button
                    type="button"
                    className="pointer mr2 button btn btn-success"
                    >
                    {/* {isLogin ? "login" : "create account"} */}
                    </Button>
                    <div className='m-5'>
                    <Button
                    type="button"
                    className="pointer button btn btn-primary"
                    // disabled={state.fetching}
                    // onClick={() => setIsLogin(!isLogin)}
                    >
                    {/* {isLogin ? 'need to create an account?' : 'already have an account?'} */}
                    </Button>
                    </div>
                    </Form>
                    </Col>
                    <Col sm={2}></Col>
                </Row>        
            </div>
}

export default Login