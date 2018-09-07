import React from 'react';

import styled from 'styled-components';

const Medcab = (props) => {

    const ContainerDiv = styled.div`
        width: 100%;
        height:100%;
        background-color:white;
        color:white;
        font-size:30pt;
        display:flex;
        justify-content:center;
        align-items:center;
        flex-direction:column;
        padding-bottom:10%;
    `;
    const StyledLink= styled.a`
        text-decoration:underline;
        color:black;
        font-family: Raleway-Regular;

    `;
    const DescriptionContainer = styled.div`
        display:flex;
        flex-direction:column;
        align-items:left;
        width:50%;
    `;
    const Description = styled.div`
        color:black;
        font-size:20pt;
        font-family:Raleway-Regular;
    `;
    const location = window.location.origin + '/images/medmock.jpg';
    return(
        <ContainerDiv>
            <img src={location} height='600px' width='800px'alt="Medicine Iphone Picture"/>
            <DescriptionContainer>
            <StyledLink href="https://itunes.apple.com/us/app/ibx/id584785907?mt=8" target="_blank">MEDICINE CABINET</StyledLink><br/>
            <Description>Feature added to the mobile application tracking and storing users medicines. Set alarms for user to take medication on time
            and took stock of user's dosage. Also provided warnings of medications that could be dangerous if consumed simultaneously.</Description><br/>
            <Description>Built in Javascript</Description><br/>
            <Description></Description>
            </DescriptionContainer>
        </ContainerDiv>
    )
}

export default Medcab
