import React from 'react';

import { Footer, Header } from '../components';
import styled from 'styled-components';

const Home = () => {
    const HomeContainer = styled.div`
        width:100%;
        height:100%;
        display:flex;
        justify-content:center;
        align-items:center;
        padding-bottom:5em;
        line-height:3em;
        background-color: #eee;
    `;
    const Content = styled.div`
        width:24em;
        margin-left:4em;
        padding-top:.5em;
        color:black;
        font-size:20pt;
        font-family: Raleway-Regular;
        background-color: white;
        border-radius: 5px;
        padding: 100px;
    `;

    return(
        <div>
            <HomeContainer>
                <Content>
                Hyeseon Na is a New York based jewelry designer from Republic of Korea. She has studied Art since she was 13 years old. She fell in love with 
                gemstones and diamonds which led her to study Metal Craft with a BFA in Korea and Jewelry Design at the Fashion Institute of Technology, New York.
                    <br/><br/>
                    From her education background in art school and F.I.T, she believes that Jewelry is a form of Art, yet it should be marketable- something people can appreciate 
                    and wear everyday. She enjoys working with precious gemstones to refine them by design with hand sketch or rhino 3D, and hand them over to the right people.
                </Content>
            </HomeContainer>
            <Footer />
        </div>
        )
}

export default Home