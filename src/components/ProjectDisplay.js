import React from 'react';
import styled from 'styled-components';

import Project from './Project';
import { IntroText } from './introText';

export default class ProjectDisplay extends React.Component {
    constructor(props){
        super(props);
        this.state = {projectSection: ""};
    }

    componentDidMount(){
            let projectArray = {project :
                [{name: "HIGHEND", picturePath: window.location.origin + '/images/ring.jpg', key:0, description:"Responsibly sourced jewels", link:'/projects/highend'},
                {name: "VALANI ATELIER", picturePath: window.location.origin + '/images/braceletsqr.jpg', key:1, description: "A minimalist jewelry brand", link: '/projects/valani'},
                {name: "RENDERING", picturePath: window.location.origin + '/images/drawingsqr.jpg', key:2, description:"Gouache rendering", link: '/projects/rendering'},]};
            let projectSection = projectArray.project.map((post) => {
                    let props = {name: post.name, picturePath: post.picturePath, key: post.key, description: post.description, link:post.link};
                    return (<Project {...props} />)
                });
            this.setState({projectSection: projectSection})
    }

    render(){
        const ProjectContainer = styled.div`
            width:100%;
            display:flex;
            justify-content: center;
            flex-direction: column;
            align-items:center;
            background-color:#eee;
            padding-bottom:3em;
            &.ProjectTransition-appear {
                opacity:.01;

            }
            &.ProjectTransition-appear-active {
            opacity: 1;
            transition: opacity 500ms ease-out;

            }
        `;
        const CenterDiv = styled.div`
            margin-top: 50px;
            width:75%;
            display:flex;
            flex-direction:row;
            justify-content: space-between;
        `;

        const text = "EAch project was very important to me and hopefully dsplays my wide array of skillset."
        return(
                <ProjectContainer>
                    <IntroText text={text}/>
                    <CenterDiv>
                        {this.state.projectSection}
                    </CenterDiv>
                </ProjectContainer>
        )
    }
}
