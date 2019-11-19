import React,{useState} from 'react'
import {NavLink} from 'react-router-dom'
import styled from 'styled-components'


const NavbarContainer = styled.div`
  width: 100%;
  height: 70px;
  background-image:repeating-linear-gradient(135deg, rgba(145, 145, 145, 0.02) 0px, rgba(145, 145, 145, 0.02) 39px,rgba(140, 140, 140, 0.02) 39px, rgba(140, 140, 140, 0.02) 57px,rgba(9, 9, 9, 0.02) 57px, rgba(9, 9, 9, 0.02) 91px,rgba(217, 217, 217, 0.02) 91px, rgba(217, 217, 217, 0.02) 119px,rgba(45, 45, 45, 0.02) 119px, rgba(45, 45, 45, 0.02) 141px,rgba(227, 227, 227, 0.02) 141px, rgba(227, 227, 227, 0.02) 184px,rgba(236, 236, 236, 0.02) 184px, rgba(236, 236, 236, 0.02) 227px,rgba(124, 124, 124, 0.02) 227px, rgba(124, 124, 124, 0.02) 244px),repeating-linear-gradient(135deg, rgba(39, 39, 39, 0.02) 0px, rgba(39, 39, 39, 0.02) 23px,rgba(2, 2, 2, 0.02) 23px, rgba(2, 2, 2, 0.02) 55px,rgba(13, 13, 13, 0.02) 55px, rgba(13, 13, 13, 0.02) 71px,rgba(44, 44, 44, 0.02) 71px, rgba(44, 44, 44, 0.02) 98px,rgba(240, 240, 240, 0.02) 98px, rgba(240, 240, 240, 0.02) 134px,rgba(182, 182, 182, 0.02) 134px, rgba(182, 182, 182, 0.02) 159px,rgba(246, 246, 246, 0.02) 159px, rgba(246, 246, 246, 0.02) 174px,rgba(157, 157, 157, 0.02) 174px, rgba(157, 157, 157, 0.02) 190px),repeating-linear-gradient(135deg, rgba(145, 145, 145, 0.02) 0px, rgba(145, 145, 145, 0.02) 35px,rgba(217, 217, 217, 0.02) 35px, rgba(217, 217, 217, 0.02) 53px,rgba(199, 199, 199, 0.02) 53px, rgba(199, 199, 199, 0.02) 70px,rgba(196, 196, 196, 0.02) 70px, rgba(196, 196, 196, 0.02) 114px,rgba(137, 137, 137, 0.02) 114px, rgba(137, 137, 137, 0.02) 143px,rgba(249, 249, 249, 0.02) 143px, rgba(249, 249, 249, 0.02) 191px,rgba(247, 247, 247, 0.02) 191px, rgba(247, 247, 247, 0.02) 239px,rgba(38, 38, 38, 0.02) 239px, rgba(38, 38, 38, 0.02) 273px),linear-gradient(90deg, rgb(69, 69, 69),rgb(3, 3, 3));
  
  display: flex;
  justify-content: flex-end;
  align-items: center;

  z-index: 100;
  @media (max-width: 800px) {
    padding: 0.5rem 2.4rem;
    background-image:repeating-linear-gradient(135deg, rgba(145, 145, 145, 0.02) 0px, rgba(145, 145, 145, 0.02) 39px,rgba(140, 140, 140, 0.02) 39px, rgba(140, 140, 140, 0.02) 57px,rgba(9, 9, 9, 0.02) 57px, rgba(9, 9, 9, 0.02) 91px,rgba(217, 217, 217, 0.02) 91px, rgba(217, 217, 217, 0.02) 119px,rgba(45, 45, 45, 0.02) 119px, rgba(45, 45, 45, 0.02) 141px,rgba(227, 227, 227, 0.02) 141px, rgba(227, 227, 227, 0.02) 184px,rgba(236, 236, 236, 0.02) 184px, rgba(236, 236, 236, 0.02) 227px,rgba(124, 124, 124, 0.02) 227px, rgba(124, 124, 124, 0.02) 244px),repeating-linear-gradient(135deg, rgba(39, 39, 39, 0.02) 0px, rgba(39, 39, 39, 0.02) 23px,rgba(2, 2, 2, 0.02) 23px, rgba(2, 2, 2, 0.02) 55px,rgba(13, 13, 13, 0.02) 55px, rgba(13, 13, 13, 0.02) 71px,rgba(44, 44, 44, 0.02) 71px, rgba(44, 44, 44, 0.02) 98px,rgba(240, 240, 240, 0.02) 98px, rgba(240, 240, 240, 0.02) 134px,rgba(182, 182, 182, 0.02) 134px, rgba(182, 182, 182, 0.02) 159px,rgba(246, 246, 246, 0.02) 159px, rgba(246, 246, 246, 0.02) 174px,rgba(157, 157, 157, 0.02) 174px, rgba(157, 157, 157, 0.02) 190px),repeating-linear-gradient(135deg, rgba(145, 145, 145, 0.02) 0px, rgba(145, 145, 145, 0.02) 35px,rgba(217, 217, 217, 0.02) 35px, rgba(217, 217, 217, 0.02) 53px,rgba(199, 199, 199, 0.02) 53px, rgba(199, 199, 199, 0.02) 70px,rgba(196, 196, 196, 0.02) 70px, rgba(196, 196, 196, 0.02) 114px,rgba(137, 137, 137, 0.02) 114px, rgba(137, 137, 137, 0.02) 143px,rgba(249, 249, 249, 0.02) 143px, rgba(249, 249, 249, 0.02) 191px,rgba(247, 247, 247, 0.02) 191px, rgba(247, 247, 247, 0.02) 239px,rgba(38, 38, 38, 0.02) 239px, rgba(38, 38, 38, 0.02) 273px),linear-gradient(90deg, rgb(69, 69, 69),rgb(3, 3, 3));
 
  }
`;

const NavLogo = styled.div`
  font-size: 2.9rem;
  color: #f3e367;
  margin-right: auto;
  font-family: "Ubuntu", sans-serif;
  font-weight: 500;
  @media (max-width: 800px) {
    font-size: 2.2rem;
  }
`;

const NavItems = styled.div`
  width: 40%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-family: "Varela Round", sans-serif;
  @media (max-width: 1100px) {
    width: 55%;
  }
  @media (max-width: 800px) {
    width: 70%;
  }
`;

const NavItem = styled(NavLink)`
  color: #c9c9c9;
  text-transform: uppercase;
  transition: color 200ms ease-out;
  padding: 0.5rem;
  font-size: 1.6rem;
  text-decoration: none;
  :hover {
    color: white;
    cursor: pointer;
  }
  @media (max-width: 800px) {
    width: 100%;
    margin: 1rem 0;
    font-size: 1.4rem;
    text-align: center;
  }
  @media (max-width: 600px) {
    font-size: 1rem;
  }
`;

const NavCta = styled(NavItem)`
  color: #f3e367;
`;

const Logout = styled.button`
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

export default function Navbar() {
    const [token,setToken] = useState()
    return (
        <div>
                  <NavbarContainer>
        <NavLogo>CS23</NavLogo>
        <NavItems>
          <NavItem exact to="/">Home</NavItem>
          <NavItem to="/Game">Start</NavItem>
          <NavItem to="/Team">Team</NavItem>
          <NavCta to="/Signup" activeClassName="active-cta">
            Sign Up
          </NavCta>
          {token === null ? (
            <NavCta to="/login" activeClassName="active-cta">
              Login
            </NavCta>
          ) : (
            <NavCta to="/login" activeClassName="active-cta">
              <Logout
                className="btn"
                type="submit"
                onClick={() => {
                  localStorage.removeItem("token");
                  
                }}
              >
                Logout
              </Logout>
            </NavCta>
          )}
        </NavItems>
      </NavbarContainer>
        </div>
    )
}