import React from 'react';
import styled from 'styled-components';

const Styling = styled.div`
width: 400px;
height: 300px;
background-color: black;
margin: 40px;
color: yellow;
border: 3px solid blue;
border-radius: 20%;
`
const Ul = styled.ul`
list-style-type: none;
padding: 0;
`
const H1 = styled.h1`
font-size: 2.1rem;
`

const LI = styled.li`
margin: 30px;
`

function CharInfo (props) {

    return (
   <Styling>
       <Ul>
           <LI><H1>{props.char.name}</H1></LI>
           <LI>Gender: {props.char.gender}</LI>
           <LI>Height: {props.char.height}</LI>
           <LI>Mass: {props.char.mass}kg</LI>
           <LI>Hair: {props.char.hair_color}</LI>
           <li></li>
       </Ul>
   </Styling>
    );
}

//     return (
//         <div>
//             {char.map(char => {
//                 return <Styling> 
//                     <Cards>
//                         <setChar/>
//                         <CardTitle>Name: {char.name}</CardTitle>
//                         <CardText>
//                             Gender: {char.gender}
//                         </CardText>
//                         <CardText>
//                             Height: {char.height}
//                         </CardText>
//                         <CardText>
//                             Weight: {char.mass}kg
//                         </CardText>
//                         <CardText>
//                             Hair: {char.hair_color}
//                         </CardText>
//                         <CardText>
//                             Skin: {char.skin_color}
//                         </CardText>
//                     </Cards>
//                 </Styling>
//             })}
//         </div>
//     )
// }

export default CharInfo;