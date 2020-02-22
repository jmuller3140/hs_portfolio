import React from 'react';
import Service from '../components/Auth/AuthenticationTimeService';
import {Redirect} from 'react-router-dom';
import styled from 'styled-components';

export default class Signin extends React.Component {
    constructor(){
        super()
        this.state = {
            password: '',
            username: '',
            isAuth: false
        }
    }

    onChangePassword(input) {
        this.setState({password: input.target.value})
    }

    onChangeUsername(input) {
        this.setState({username: input.target.value})
    }

    onSubmit(e) {
        e.preventDefault()
        const {password, username} = this.state;
        const result = Service.isAuthenticated(password, username)
        this.setState({isAuth: result})
    }
    render() {
        const {username , password, isAuth} = this.state;
        return(
            <SigninContainer>
                {
                    isAuth && <Redirect to="/" />
                }
                <Form onSubmit={(e) => this.onSubmit.call(this, e)}>
                    <TitleContainer><Title>Login</Title></TitleContainer>
                    <Input type='text' value={username} placeholder="Username" onChange={(e) => this.onChangeUsername.call(this, e)}/>
                    <Input type='password' value={password} placeholder="Password" onChange={(e) => this.onChangePassword.call(this, e)}/>
                    <SubmitBtn type="submit" value="Submit" />
                </Form>
            </SigninContainer>
        )
    }

}

const SigninContainer = styled.div`
  position: absolute;
  top: -200px;
  left: 0;
  width: 100%;
  height: 100vh;
  display:flex;
  justify-content: center;
  background: url('../images/intro.jpg') center center;
  background-attachment: fixed;
  align-items:center;
  z-index:0;
`;
const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;
    background-color: #EEE;
    height: 250px;
    width:200px;
    padding:5rem;
    border-radius: 5px;
    border: 1px solid #028474;
`;
const Input = styled.input`
    margin-bottom: 15px;
    padding: 1rem;
    border-radius: 5px;
    border: 1px solid #333;
    outline: none;
    font-family: Raleway-Regular;
    width: 200px;
`;

const SubmitBtn = styled.input`
    width:200px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Raleway-Regular;
    padding: 10px 30px 10px 30px;
    border-radius: 5px;
    border: 1px solid #333;
    background-color:white;
    cursor: pointer;

    &:hover{
        background-color: #white;
        transition: .3s;
    }
`;
const TitleContainer = styled.div`
    width:230px;
    display:flex;
    justify-content: flex-start;
`;
const Title = styled.p`
    font-family: Raleway-Bold;
    font-size:16pt;
    text-align:left;
    color: #444;
    letter-spacing: .1rem;
`;