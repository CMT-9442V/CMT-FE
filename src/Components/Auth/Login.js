import React, {useState} from "react";
import {Link} from 'react-router-dom'
import axios from "axios";
import { Redirect} from "react-router-dom";
import Swal from "sweetalert2";
import styled from 'styled-components'
import "./Login.css"
import Navbar from "../Navbar/Navbar";
const NavLink = styled(Link)`
background-image:repeating-linear-gradient(135deg, rgba(9, 9, 9, 0.08) 0px, rgba(9, 9, 9, 0.08) 49px,rgba(50, 50, 50, 0.08) 49px, rgba(50, 50, 50, 0.08) 59px,rgba(80, 80, 80, 0.08) 59px, rgba(80, 80, 80, 0.08) 72px,rgba(73, 73, 73, 0.08) 72px, rgba(73, 73, 73, 0.08) 82px,rgba(100, 100, 100, 0.08) 82px, rgba(100, 100, 100, 0.08) 92px),repeating-linear-gradient(135deg, rgba(211, 211, 211, 0.08) 0px, rgba(211, 211, 211, 0.08) 44px,rgba(204, 204, 204, 0.08) 44px, rgba(204, 204, 204, 0.08) 67px,rgba(14, 14, 14, 0.08) 67px, rgba(14, 14, 14, 0.08) 86px,rgba(53, 53, 53, 0.08) 86px, rgba(53, 53, 53, 0.08) 127px,rgba(224, 224, 224, 0.08) 127px, rgba(224, 224, 224, 0.08) 166px),repeating-linear-gradient(135deg, rgba(120, 120, 120, 0.08) 0px, rgba(120, 120, 120, 0.08) 117px,rgba(203, 203, 203, 0.08) 117px, rgba(203, 203, 203, 0.08) 180px,rgba(47, 47, 47, 0.08) 180px, rgba(47, 47, 47, 0.08) 322px,rgba(9, 9, 9, 0.08) 322px, rgba(9, 9, 9, 0.08) 428px,rgba(238, 238, 238, 0.08) 428px, rgba(238, 238, 238, 0.08) 487px),repeating-linear-gradient(135deg, rgba(147, 147, 147, 0.08) 0px, rgba(147, 147, 147, 0.08) 100px,rgba(60, 60, 60, 0.08) 100px, rgba(60, 60, 60, 0.08) 231px,rgba(68, 68, 68, 0.08) 231px, rgba(68, 68, 68, 0.08) 344px,rgba(104, 104, 104, 0.08) 344px, rgba(104, 104, 104, 0.08) 442px,rgba(229, 229, 229, 0.08) 442px, rgba(229, 229, 229, 0.08) 567px),linear-gradient(90deg, rgb(238, 207, 33),rgb(214, 142, 8));

border: 2px solid #f3e367;
  padding: 0.8rem 1.5rem;
  font-size: 1.5rem;
  border-radius: 10px;
  transition: all 200ms ease-out;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-family: 'Ubuntu', sans-serif;
  font-weight: 500;
color:white;
:hover{
    background-image:repeating-linear-gradient(135deg, rgba(145, 145, 145, 0.02) 0px, rgba(145, 145, 145, 0.02) 39px,rgba(140, 140, 140, 0.02) 39px, rgba(140, 140, 140, 0.02) 57px,rgba(9, 9, 9, 0.02) 57px, rgba(9, 9, 9, 0.02) 91px,rgba(217, 217, 217, 0.02) 91px, rgba(217, 217, 217, 0.02) 119px,rgba(45, 45, 45, 0.02) 119px, rgba(45, 45, 45, 0.02) 141px,rgba(227, 227, 227, 0.02) 141px, rgba(227, 227, 227, 0.02) 184px,rgba(236, 236, 236, 0.02) 184px, rgba(236, 236, 236, 0.02) 227px,rgba(124, 124, 124, 0.02) 227px, rgba(124, 124, 124, 0.02) 244px),repeating-linear-gradient(135deg, rgba(39, 39, 39, 0.02) 0px, rgba(39, 39, 39, 0.02) 23px,rgba(2, 2, 2, 0.02) 23px, rgba(2, 2, 2, 0.02) 55px,rgba(13, 13, 13, 0.02) 55px, rgba(13, 13, 13, 0.02) 71px,rgba(44, 44, 44, 0.02) 71px, rgba(44, 44, 44, 0.02) 98px,rgba(240, 240, 240, 0.02) 98px, rgba(240, 240, 240, 0.02) 134px,rgba(182, 182, 182, 0.02) 134px, rgba(182, 182, 182, 0.02) 159px,rgba(246, 246, 246, 0.02) 159px, rgba(246, 246, 246, 0.02) 174px,rgba(157, 157, 157, 0.02) 174px, rgba(157, 157, 157, 0.02) 190px),repeating-linear-gradient(135deg, rgba(145, 145, 145, 0.02) 0px, rgba(145, 145, 145, 0.02) 35px,rgba(217, 217, 217, 0.02) 35px, rgba(217, 217, 217, 0.02) 53px,rgba(199, 199, 199, 0.02) 53px, rgba(199, 199, 199, 0.02) 70px,rgba(196, 196, 196, 0.02) 70px, rgba(196, 196, 196, 0.02) 114px,rgba(137, 137, 137, 0.02) 114px, rgba(137, 137, 137, 0.02) 143px,rgba(249, 249, 249, 0.02) 143px, rgba(249, 249, 249, 0.02) 191px,rgba(247, 247, 247, 0.02) 191px, rgba(247, 247, 247, 0.02) 239px,rgba(38, 38, 38, 0.02) 239px, rgba(38, 38, 38, 0.02) 273px),linear-gradient(90deg, rgb(69, 69, 69),rgb(3, 3, 3));
    color:#f3e367;
    transition:0.5s;
}

`
const Left = styled.div`
color:white;
margin:5%;
height:93vh;
border: 2px solid white;
`
const Right = styled.div`
color:white;
display:flex;
justify-content:center;
flex-direction:column;
margin:5%;
height:93vh;

`
const Container = styled.div`
background-image:linear-gradient(200deg, rgba(213, 213, 213, 0.01) 0%, rgba(213, 213, 213, 0.01) 14.286%,rgba(140, 140, 140, 0.01) 14.286%, rgba(140, 140, 140, 0.01) 28.572%,rgba(52, 52, 52, 0.01) 28.572%, rgba(52, 52, 52, 0.01) 42.858%,rgba(38, 38, 38, 0.01) 42.858%, rgba(38, 38, 38, 0.01) 57.144%,rgba(159, 159, 159, 0.01) 57.144%, rgba(159, 159, 159, 0.01) 71.42999999999999%,rgba(71, 71, 71, 0.01) 71.43%, rgba(71, 71, 71, 0.01) 85.71600000000001%,rgba(88, 88, 88, 0.01) 85.716%, rgba(88, 88, 88, 0.01) 100.002%),linear-gradient(337deg, rgba(25, 25, 25, 0.01) 0%, rgba(25, 25, 25, 0.01) 12.5%,rgba(150, 150, 150, 0.01) 12.5%, rgba(150, 150, 150, 0.01) 25%,rgba(84, 84, 84, 0.01) 25%, rgba(84, 84, 84, 0.01) 37.5%,rgba(85, 85, 85, 0.01) 37.5%, rgba(85, 85, 85, 0.01) 50%,rgba(188, 188, 188, 0.01) 50%, rgba(188, 188, 188, 0.01) 62.5%,rgba(80, 80, 80, 0.01) 62.5%, rgba(80, 80, 80, 0.01) 75%,rgba(73, 73, 73, 0.01) 75%, rgba(73, 73, 73, 0.01) 87.5%,rgba(219, 219, 219, 0.01) 87.5%, rgba(219, 219, 219, 0.01) 100%),linear-gradient(203deg, rgba(233, 233, 233, 0.01) 0%, rgba(233, 233, 233, 0.01) 25%,rgba(114, 114, 114, 0.01) 25%, rgba(114, 114, 114, 0.01) 50%,rgba(164, 164, 164, 0.01) 50%, rgba(164, 164, 164, 0.01) 75%,rgba(228, 228, 228, 0.01) 75%, rgba(228, 228, 228, 0.01) 100%),linear-gradient(317deg, rgba(139, 139, 139, 0.02) 0%, rgba(139, 139, 139, 0.02) 16.667%,rgba(44, 44, 44, 0.02) 16.667%, rgba(44, 44, 44, 0.02) 33.334%,rgba(166, 166, 166, 0.02) 33.334%, rgba(166, 166, 166, 0.02) 50.001000000000005%,rgba(2, 2, 2, 0.02) 50.001%, rgba(2, 2, 2, 0.02) 66.668%,rgba(23, 23, 23, 0.02) 66.668%, rgba(23, 23, 23, 0.02) 83.33500000000001%,rgba(21, 21, 21, 0.02) 83.335%, rgba(21, 21, 21, 0.02) 100.002%),linear-gradient(328deg, rgba(3, 3, 3, 0.03) 0%, rgba(3, 3, 3, 0.03) 12.5%,rgba(116, 116, 116, 0.03) 12.5%, rgba(116, 116, 116, 0.03) 25%,rgba(214, 214, 214, 0.03) 25%, rgba(214, 214, 214, 0.03) 37.5%,rgba(217, 217, 217, 0.03) 37.5%, rgba(217, 217, 217, 0.03) 50%,rgba(68, 68, 68, 0.03) 50%, rgba(68, 68, 68, 0.03) 62.5%,rgba(118, 118, 118, 0.03) 62.5%, rgba(118, 118, 118, 0.03) 75%,rgba(200, 200, 200, 0.03) 75%, rgba(200, 200, 200, 0.03) 87.5%,rgba(198, 198, 198, 0.03) 87.5%, rgba(198, 198, 198, 0.03) 100%),linear-gradient(97deg, rgba(195, 195, 195, 0.03) 0%, rgba(195, 195, 195, 0.03) 16.667%,rgba(177, 177, 177, 0.03) 16.667%, rgba(177, 177, 177, 0.03) 33.334%,rgba(170, 170, 170, 0.03) 33.334%, rgba(170, 170, 170, 0.03) 50.001000000000005%,rgba(158, 158, 158, 0.03) 50.001%, rgba(158, 158, 158, 0.03) 66.668%,rgba(121, 121, 121, 0.03) 66.668%, rgba(121, 121, 121, 0.03) 83.33500000000001%,rgba(146, 146, 146, 0.03) 83.335%, rgba(146, 146, 146, 0.03) 100.002%),linear-gradient(268deg, rgba(103, 103, 103, 0.03) 0%, rgba(103, 103, 103, 0.03) 25%,rgba(112, 112, 112, 0.03) 25%, rgba(112, 112, 112, 0.03) 50%,rgba(4, 4, 4, 0.03) 50%, rgba(4, 4, 4, 0.03) 75%,rgba(227, 227, 227, 0.03) 75%, rgba(227, 227, 227, 0.03) 100%),linear-gradient(90deg, hsl(98,0%,0%),hsl(98,0%,0%));

display:flex;
flex-direction:row;


`
const Button = styled.button`
background-image:repeating-linear-gradient(135deg, rgba(9, 9, 9, 0.08) 0px, rgba(9, 9, 9, 0.08) 49px,rgba(50, 50, 50, 0.08) 49px, rgba(50, 50, 50, 0.08) 59px,rgba(80, 80, 80, 0.08) 59px, rgba(80, 80, 80, 0.08) 72px,rgba(73, 73, 73, 0.08) 72px, rgba(73, 73, 73, 0.08) 82px,rgba(100, 100, 100, 0.08) 82px, rgba(100, 100, 100, 0.08) 92px),repeating-linear-gradient(135deg, rgba(211, 211, 211, 0.08) 0px, rgba(211, 211, 211, 0.08) 44px,rgba(204, 204, 204, 0.08) 44px, rgba(204, 204, 204, 0.08) 67px,rgba(14, 14, 14, 0.08) 67px, rgba(14, 14, 14, 0.08) 86px,rgba(53, 53, 53, 0.08) 86px, rgba(53, 53, 53, 0.08) 127px,rgba(224, 224, 224, 0.08) 127px, rgba(224, 224, 224, 0.08) 166px),repeating-linear-gradient(135deg, rgba(120, 120, 120, 0.08) 0px, rgba(120, 120, 120, 0.08) 117px,rgba(203, 203, 203, 0.08) 117px, rgba(203, 203, 203, 0.08) 180px,rgba(47, 47, 47, 0.08) 180px, rgba(47, 47, 47, 0.08) 322px,rgba(9, 9, 9, 0.08) 322px, rgba(9, 9, 9, 0.08) 428px,rgba(238, 238, 238, 0.08) 428px, rgba(238, 238, 238, 0.08) 487px),repeating-linear-gradient(135deg, rgba(147, 147, 147, 0.08) 0px, rgba(147, 147, 147, 0.08) 100px,rgba(60, 60, 60, 0.08) 100px, rgba(60, 60, 60, 0.08) 231px,rgba(68, 68, 68, 0.08) 231px, rgba(68, 68, 68, 0.08) 344px,rgba(104, 104, 104, 0.08) 344px, rgba(104, 104, 104, 0.08) 442px,rgba(229, 229, 229, 0.08) 442px, rgba(229, 229, 229, 0.08) 567px),linear-gradient(90deg, rgb(238, 207, 33),rgb(214, 142, 8));

border: 2px solid #f3e367;
  padding: 0.8rem 1.5rem;
  font-size: 1.5rem;
  border-radius: 10px;
  transition: all 200ms ease-out;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-family: 'Ubuntu', sans-serif;
  font-weight: 500;
color:white;
:hover{
    background-image:repeating-linear-gradient(135deg, rgba(145, 145, 145, 0.02) 0px, rgba(145, 145, 145, 0.02) 39px,rgba(140, 140, 140, 0.02) 39px, rgba(140, 140, 140, 0.02) 57px,rgba(9, 9, 9, 0.02) 57px, rgba(9, 9, 9, 0.02) 91px,rgba(217, 217, 217, 0.02) 91px, rgba(217, 217, 217, 0.02) 119px,rgba(45, 45, 45, 0.02) 119px, rgba(45, 45, 45, 0.02) 141px,rgba(227, 227, 227, 0.02) 141px, rgba(227, 227, 227, 0.02) 184px,rgba(236, 236, 236, 0.02) 184px, rgba(236, 236, 236, 0.02) 227px,rgba(124, 124, 124, 0.02) 227px, rgba(124, 124, 124, 0.02) 244px),repeating-linear-gradient(135deg, rgba(39, 39, 39, 0.02) 0px, rgba(39, 39, 39, 0.02) 23px,rgba(2, 2, 2, 0.02) 23px, rgba(2, 2, 2, 0.02) 55px,rgba(13, 13, 13, 0.02) 55px, rgba(13, 13, 13, 0.02) 71px,rgba(44, 44, 44, 0.02) 71px, rgba(44, 44, 44, 0.02) 98px,rgba(240, 240, 240, 0.02) 98px, rgba(240, 240, 240, 0.02) 134px,rgba(182, 182, 182, 0.02) 134px, rgba(182, 182, 182, 0.02) 159px,rgba(246, 246, 246, 0.02) 159px, rgba(246, 246, 246, 0.02) 174px,rgba(157, 157, 157, 0.02) 174px, rgba(157, 157, 157, 0.02) 190px),repeating-linear-gradient(135deg, rgba(145, 145, 145, 0.02) 0px, rgba(145, 145, 145, 0.02) 35px,rgba(217, 217, 217, 0.02) 35px, rgba(217, 217, 217, 0.02) 53px,rgba(199, 199, 199, 0.02) 53px, rgba(199, 199, 199, 0.02) 70px,rgba(196, 196, 196, 0.02) 70px, rgba(196, 196, 196, 0.02) 114px,rgba(137, 137, 137, 0.02) 114px, rgba(137, 137, 137, 0.02) 143px,rgba(249, 249, 249, 0.02) 143px, rgba(249, 249, 249, 0.02) 191px,rgba(247, 247, 247, 0.02) 191px, rgba(247, 247, 247, 0.02) 239px,rgba(38, 38, 38, 0.02) 239px, rgba(38, 38, 38, 0.02) 273px),linear-gradient(90deg, rgb(69, 69, 69),rgb(3, 3, 3));
    color:#f3e367;
    transition:0.5s;
}
`
const Login = (props) => {
  const [input, setInput] = useState({
    username: '',
    password: ''
  })

  
  const token = window.localStorage.getItem('token')
 
  
  const handleChange = e => {
    
    setInput({
      ...input,
      [e.target.name]: e.target.value
    });
  }
  
  const handleLoginSubmit = e => {
    e.preventDefault();
    axios
    .post('https://backend-for-production.herokuapp.com/api/auth/login', input)
    .then(res => {
      console.log('login submit results', res)
      window.localStorage.setItem('token', JSON.stringify(res.data.access_token))
      props.history.push('/')
    })
    .catch(err => {
      console.error(err)
    })
    //Sweet alert 
    Swal.fire({
      position: 'center',
      type: 'success',
      title: 'Welcome Back!',
      showConfirmButton: false,
      timer: 2500
    })
  }
  
  if(token){
    return <Redirect to="/"/>
  }
  return (   
    <div >
      <Navbar/>
      <Container>

        <Left>
          <h1 className="heading">Log in to your account.</h1>

            <form onSubmit={handleLoginSubmit} className="form-container" >
                <input
                className="field"
                  placeholder='Username' 
                  onChange={handleChange}
                  name="username"
                  value={input.username}
                />
                <input
                className="field"
                  placeholder='Password'
                  name='password'
                  value={input.password}
                  onChange={handleChange}
                  type='password'
                />
                <Button  onClick={handleLoginSubmit}>
                  Login
                </Button>
            </form>
        </Left>
        <Right className="col4">
         <div className="heading-container">

           <h1>New around here?</h1>
           <strong>
           <p>Please Create a </p>
           <p>new user account.</p>
           </strong>
           <NavLink to="/Signup">
Signup
          </NavLink>
        </div>
      </Right>
      </Container>

    </div>
  )
}


export default Login