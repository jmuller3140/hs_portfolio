import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const Project = (props) => {
    const {name, picturePath, description, link}  = props;

    const ProjectContainer = styled.div`
        display:flex;
        flex-direction: column;
        justify-content: center;
        align-items:center;
        width:30%;
    `;
    const DescriptionContainer = styled.div`
        font-family: Raleway-Regular;
        font-size:15pt;
        text-align:center;;
        color: #333;
        width: 250px;
        margin-top: 10px;
    `;
    const PictureContainer = styled.div`
        width:400px;
        height:400px;
        color:black;
        opacity:1;
        position:relative;
        border-radius: 5px;
        overflow:hidden;
    `;

    const Text = styled.div`
        position:absolute;
        top:120px;
        left:130px;
        width:150px;
        text-align:center;
        z-index:2;
        color: #333;
        font-size:20pt;
        font-family:Moon-Light;
        letter-spacing:.1em;
    `;
    const Image = styled.img`
        position:absolute;
        left:0;
        top:0;
        opacity:.6;
        max-width: 100%;
        -moz-transition: all 0.3s;
        -webkit-transition: all 0.3s;
        transition: all 0.3s;
        &:hover{
            opacity:.4;
            filter:blur(2px);
            -moz-transform: scale(1.1);
            -webkit-transform: scale(1.1);
            transform: scale(1.1);
        }
    `;
    const ProjectWrapper = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
    `;
    return(
        <ProjectWrapper>
            <ProjectContainer>
                <Link to={link}>
                    <PictureContainer>
                        <Text>{name}</Text>
                        <Image src={picturePath}/>
                    </PictureContainer>
                </Link>
            </ProjectContainer>
            <DescriptionContainer>
                {description}
            </DescriptionContainer>
        </ProjectWrapper>

    )


}

export default Project
