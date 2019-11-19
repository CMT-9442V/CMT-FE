import React, {useState} from "react";
import {Link} from 'react-router-dom'
import axios from "axios";
import { Redirect } from "react-router-dom";
import Swal from "sweetalert2";
import styled from 'styled-components';
import Navbar from "../Home/Navbar";
import "../Login/Login.css"

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


const Signup = (props) => {
  const [input, setInput] = useState({
    username: '',
    password: '',
    email: '',
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
    .post('https://backend-for-production.herokuapp.com/api/auth/register', input)
    .then(res => {
      props.history.push('/Login')
    })
    .catch(err => {
      console.error(err)
    })
    Swal.fire({
      position: 'center',
      type: 'success',
      title: 'Welcome Back!',
      showConfirmButton: false,
      timer: 2500
    })
  }

  return (
    <div>
      
      <Container>
         <Left>

           <h1>Where to next?</h1>
           <strong>
           <p>Welcome Back!</p>
           <p>Please sign in </p>
           <p>with your info.</p>
           </strong>
           <NavLink to="/Login">

Login
          </NavLink>
        </Left>
        <Right>
          <h1 >Create an account.</h1>

            <form onSubmit={handleLoginSubmit} form-container>
                <input
                className="field"
                  placeholder='Username' 
                  onChange={handleChange}
                  name="username"
                  value={input.username}
                />
                <input
                className="field"
                  placeholder='Email' 
                  onChange={handleChange}
                  name="email"
                  value={input.email}
                />
                <input
                className="field"
                  placeholder='Password'
                  name='password'
                  value={input.password}
                  onChange={handleChange}
                  type='password'
                />
                <button onClick={handleLoginSubmit}>
                  Login
                </button>
            </form>
        </Right>
      </Container>
    </div>
  )
}

export default Signup