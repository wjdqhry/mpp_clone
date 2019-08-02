import React, { Component } from "react";
import styled from "styled-components";
import oc from "open-color";

const Wrapper = styled.div`
    display:flex;
    flex-direction: column;
    flex-wrap: wrap;
`

const Card = styled.div`
    display: flex;
    flex-direction: column;
    height: 330px;
    width: 35%;
    margin: 0 auto;
    margin-top: 25px;
    border-radius: 10px;
    background-color: ${oc.violet[1]};
    padding: 0 50px;
    padding-top: 50px
`

const LoginTitle = styled.span`
    margin: 0 auto;
    margin-top:90px;
    font-size: 1.8rem;
    color: ${oc.indigo[6]};
`
const LoginQuery = styled.span`
    font-size: 1.2rem;
    color: ${oc.indigo[4]};
`

const LoginInput = styled.input`
    height: 15%;
    margin: 20px 0;
    border: none;
    border-radius: 5px;
    background-color: ${oc.violet[0]};
    padding: 0 10px;

    &::placeholder{
        color: ${oc.gray[5]};
        font-size: 1.1rem;
    }
`

const Submit = styled.button`
    margin: 0 auto;
    height: 20%;
    width: 50%;
    background-color: ${oc.indigo[2]};
    border: none;
    border-radius: 7px;
    font-size: 2rem;
    color: ${oc.gray[1]};
`


class LoginCard extends Component {
    render() {
        return (
            <Wrapper>
                <LoginTitle>Welcome</LoginTitle>
                <Card>
                    <LoginQuery>이메일</LoginQuery>
                    <LoginInput placeholder="username@domain.com"></LoginInput>
                    <LoginQuery>비밀번호</LoginQuery>
                    <LoginInput></LoginInput>
                    <Submit>Login</Submit>
                </Card>
            </Wrapper>
        );
    }
}

export default LoginCard;