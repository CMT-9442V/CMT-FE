import React from 'react';
import styled from "styled-components";
import { withRouter } from "react-router-dom";

import tvImg from "../assets/images/tv.png"
import barsImg from "../assets/images/nosignal2.jpg"

const S = {}

S.Container = styled.div`
    width: 100vw;
    height: 100vh;
    box-sizing: border-box;
    background-color: #F5E9E3;
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
        font-family: 'Rokkitt', serif;
        font-size: 141px;
        color: #2E281F;
        margin: 0px;
        margin-top: 40px;
    }
`

S.Nav = styled.div`
    position: absolute;
    // border: solid black 1px;
    height: 60px;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    span {
        font-size: 42px;
        color: #7E705B;
        font-family: 'Rokkitt', serif;
        margin-right: 30px;
        margin-top: 10px;
        cursor: pointer;

    }
`

S.Descript = styled.div`
    font-size: 43px;
    font-family: 'Rokkitt', serif;
    color: #2E281F;
`

S.TvGrid = styled.div`
    width: 549px;
    height: 360px;
    margin-top: 20px;
    // border: solid green 5px;
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    grid-template-rows: repeat(10, 1fr);
`

    S.Img = styled.img`
        z-index: 3;
        grid-row: 1/5;
        grid-column: 1/11;
        width: 100%;
        height: 100%;
    `

    S.Img2 = styled.img`
        z-index: 2;
        grid-row: 1/5;
        grid-column: 1/11;

        width: 90%;
        height: 90%;
        justify-self: center;
        margin-top: 10px;
    `

S.ButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    // border: solid black 1px;
    width: 549px;
    height: 71px;
    margin-top: 30px;
`

S.Button = styled.button`
    width: 245px;
    height: 100%;
    border-radius: 12px;
    font-family: 'Rokkitt', serif;
    font-size: 48px;
    border: none;
    font-weight: 600;
    box-shadow: 10px 10px 20px #debcab;
    cursor: pointer;
`

    S.PlayBtn = styled(S.Button)`
        background-color: #77EE19;
        font-size: 48px;
    `

    S.SignUpBtn = styled(S.Button)`
        background-color: #BFC096;
        font-size: 42px;
    `

function VMain(props){

    const goToGame = () => {
        props.history.push("/Game")
    }


    const goToSignUp = () => {
        props.history.push("Signup")
    }


    return(
        <S.Container>
            <S.Nav>
                <span onClick={() => {localStorage.removeItem("token")}}>
                    Logout
                </span>
            </S.Nav>

            <h1>CMT-9442V</h1>

            <S.Descript>
                A game for those<br/>who hear voices<br/>in the static
            </S.Descript>

            <S.TvGrid>
                <S.Img src = {tvImg} />
                <S.Img2 src = {barsImg}/>
            </S.TvGrid>

            <S.ButtonContainer>
                <S.PlayBtn onClick = {() => goToGame()}>PLAY</S.PlayBtn>
                <S.SignUpBtn onClick = {() => goToSignUp()}>Sign up</S.SignUpBtn>
            </S.ButtonContainer>

        </S.Container>
    )
}

export default withRouter(VMain);


// import React from 'react';
// import styled from "styled-components";
// import tvImg from "../assets/images/tv.png"
// import barsImg from "../assets/images/nosignal2.jpg"

// const S = {}

// S.Container = styled.div`
//     width: 100vw;
//     // height: 100vh;
//     box-sizing: border-box;
//     background-color: #F5E9E3;
//     display: flex;
//     flex-direction: column;
//     justify-content: center;

//     h1 {
//         font-family: 'Rokkitt', serif;
//         font-size: 141px;
//         color: #2E281F;
//         margin: 0px;
//     }


// `

// S.Descript = styled.div`
//     font-size: 43px;
//     font-family: 'Rokkitt', serif;
//     color: #2E281F;
// `

// S.TvGrid = styled.div`
//     width: 50px;
//     height: 360px;
//     border: solid black 1px;

// `

// function VMain(props){

//     return(
//         <S.Container>
//             <h1>CMT-9442V</h1>
//             <S.Descript>
//                 A game for those<br/>who hear voices<br/>in the static
//             </S.Descript>
//             {/* <img src = {barsImg} /> */}
//             <S.TvGrid>
//                 {/* <img src = {tvImg} /> */}
//             </S.TvGrid>

            

//         </S.Container>
//     )
// }

// export default VMain;