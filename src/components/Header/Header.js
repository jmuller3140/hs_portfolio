import React from 'react';
import {Link} from 'react-router-dom';
import Auth from '../Auth/AuthenticationTimeService';

import styled from 'styled-components';

export default class Header extends React.Component{
	constructor(props){
		super(props);
		this.navigation = this.props.navigation
	}

	render(){
		const isLoggedIn = Auth.checkAuthState();
		return(
			<HeaderContainer>
				<Titles>
					<div>HYESEON NA</div>
 					<JobTitle>JEWELRY DESIGNER</JobTitle>
				</Titles>
				{
					isLoggedIn && (
					<Navigation>
						<StyledLink to='/'>MAIN</StyledLink>
						<StyledLink to='/resume'>RESUMÉ</StyledLink>
						<StyledLink to='/projects'>PORTFOLIO</StyledLink>
						<StyledLink to='/contact'>CONTACT</StyledLink>
					</Navigation>
					)}
			</HeaderContainer>
			)
	}
}

const HeaderContainer = styled.div`
width:100%;
padding-top:2em;
padding-bottom:2em;
position: absolute;
display: inline-flex;
justify-content: space-between;
z-index: 1;
border-bottom: 1px solid black;
background-color: #eee;
`;
const Titles = styled.div`
width:15em;
font-size:25pt;
font-family: Lovelyn;
color:black;
letter-spacing: 2px;
   text-align:right;
`;
const JobTitle = styled.div`
font-size:20pt;
`;
const Navigation = styled.div`
width:35%;
padding-right:10%;
display: inline-flex;
justify-content: space-between;
align-items: center;
font-size:20pt;
font-family: Lovelyn;
color:black;
letter-spacing: .1em;
`;
const StyledLink = styled(Link)`
 text-decoration: none;
color:black;

&:hover{
	color:#028474;
}

`;
