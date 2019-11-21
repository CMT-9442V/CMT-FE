import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import axios from "axios";


function Map(props){

    const [hun, setHun] = useState([])

    useEffect(() => {
        axios
            .get("https://ourtvgame.herokuapp.com/api/adv/channels")
            .then( res => {
                // console.log(res.data)
                setHun(res.data)
            })
            .catch(err => {
                console.log(err);
             })
      },[])

      console.log(hun)

    // const hun = [
    //     1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    //     11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    //     21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
    //     31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
    //     41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
    //     51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
    //     61, 62, 63, 64, 65, 66, 67, 68, 69, 70,
    //     71, 72, 73, 74, 75, 76, 77, 78, 79, 80,
    //     81, 82, 83, 84, 85, 86, 87, 88, 89, 90,
    //     91, 92, 93, 94, 95, 96, 97, 98, 99, 100
    //   ]
    
      let arr1 = [];
      let arr2 = [];
      let arr3 = [];
      let arr4 = [];
      let arr5 = [];
      let arr6 = [];
      let arr7 = [];
      let arr8 = [];
      let arr9 = [];
      let arr10 = [];
    
      for (let i = 0; i < hun.length; i++) {
        if (i < 10) {
          arr1.push(hun[i]);
        } else if (i < 20) {
          arr2.push(hun[i]);
        } else if (i < 30) {
          arr3.push(hun[i]);
        } else if (i < 40) {
          arr4.push(hun[i]);
        } else if (i < 50) {
          arr5.push(hun[i]);
        } else if (i < 60) {
          arr6.push(hun[i]);
        } else if (i < 70) {
          arr7.push(hun[i]);
        } else if (i < 80) {
          arr8.push(hun[i]);
        } else if (i < 90) {
          arr9.push(hun[i]);
        } else if (i <= 100) {
          arr10.push(hun[i]);
        }
      }
    
      let formattedArr = arr1.concat(
        arr2.reverse(),
        arr3,
        arr4.reverse(),
        arr5,
        arr6.reverse(),
        arr7,
        arr8.reverse(),
        arr9,
        arr10.reverse()
      );
    
      // ==========================================
    
      const S = {};

      S.Container = styled.div`
        width: 100vw;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
      `
    
      S.GridDiv = styled.div`
        width: 95vh;
        height: 95vh;
        display: grid;
    
        grid-template-rows: repeat(10, 1fr);
        grid-template-columns: repeat(10, 1fr);
    
        // grid-auto-flow: dense;
    
        grid-gap: 8px;
    
        div {
          border: solid blue 1px;
          justify-content: center;
          align-items: center;
          clip-path: polygon(78% 0, 100% 53%, 79% 100%, 0 100%, 0 51%, 0 0);
        }
    
        div:nth-child(-n + 20):nth-child(n + 12) {
          border: solid blue 1px;
          display: flex;
          justify-content: center;
          align-items: center;
          clip-path: polygon(100% 0, 100% 78%, 100% 100%, 24% 100%, 0 51%, 23% 0);
        }
    
        div:nth-child(-n + 40):nth-child(n + 32) {
          border: solid blue 1px;
          display: flex;
          justify-content: center;
          align-items: center;
          clip-path: polygon(100% 0, 100% 78%, 100% 100%, 24% 100%, 0 51%, 23% 0);
        }
    
        div:nth-child(-n + 60):nth-child(n + 52) {
          border: solid blue 1px;
          display: flex;
          justify-content: center;
          align-items: center;
          clip-path: polygon(100% 0, 100% 78%, 100% 100%, 24% 100%, 0 51%, 23% 0);
        }
    
        div:nth-child(-n + 80):nth-child(n + 72) {
          border: solid blue 1px;
          display: flex;
          justify-content: center;
          align-items: center;
          clip-path: polygon(100% 0, 100% 78%, 100% 100%, 24% 100%, 0 51%, 23% 0);
        }
    
        div:nth-child(-n + 100):nth-child(n + 92) {
          border: solid blue 1px;
          display: flex;
          justify-content: center;
          align-items: center;
          clip-path: polygon(100% 0, 100% 78%, 100% 100%, 24% 100%, 0 51%, 23% 0);
        }
    
        div:nth-child(20n-10) {
          border: solid blue 1px;
          display: flex;
          justify-content: center;
          align-items: center;
          clip-path: polygon(100% 0, 100% 78%, 48% 100%, 0 81%, 0 51%, 0 0);
        }
        div:nth-child(20n-9) {
          border: solid blue 1px;
          display: flex;
          justify-content: center;
          align-items: center;
          clip-path: polygon(100% 0, 100% 78%, 48% 100%, 0 81%, 0 51%, 0 0);
        }
    
        div:nth-child(91) {
          border: solid blue 1px;
          display: flex;
          justify-content: center;
          align-items: center;
          clip-path: polygon(100% 0, 100% 78%, 100% 100%, 0 100%, 0 51%, 0 0);
        }
    
        div {
          background-color: grey;
          overflow: hidden;
          display: flex;
          justify-content: center;
          align-items: center;

          img {
              width: 100%;
              height: 100%;
          }

          p {
              position: absolute;
              z-index: 100;
              color: white;
              top: 18px;
              font-size: 25px;
        }
      `;
    
      // ==========================================
    
      return (
        <S.Container>
            <S.GridDiv>
            {formattedArr.map(channel => {
                return (
                <div>
                    <img src = {channel.background}/>
                    <p>{channel.channel}</p>
                </div>)
            })}
            </S.GridDiv>
        </S.Container>
      );
    }

export default Map;


// audio: "glitched_tones"
// background: "https://i.imgur.com/WU4JRaN.jpgsomeUrl"
// channel: 0
// geometry: "100"
// glitchtype: "static"