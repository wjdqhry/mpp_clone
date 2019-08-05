import React, { Component } from "react";
import styled from "styled-components";
import oc from "open-color";
import {Link} from "react-router-dom";

const Positioner = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
`;

const Whitebox = styled.div`
  height: 70px;
  background-color: white;
  box-shadow: 0px 0px 4px rgba(0,0,0,0.4);
`;

const HeaderContents = styled.div`
  display: flex;
  max-width:1200px;
  height:100%;
  align-items: center;
  margin: 0 auto;
`

const Logo = styled.h1`
  margin: 0;
  margin-right: 30px;
  @media (max-width: 700px){
    margin-right: 10px;
  }
`
const Notice = styled.p`
  margin: 0;
  margin-right: 30px;
  @media (max-width: 700px){
    display: none;
  }
`
const SearchForm = styled.form`
  display: flex;
  margin-right: 10px;
`

const SearchInput = styled.input`
  width: 150px;
  height: 30px;
  background-color: ${oc.gray[0]};
  border: 1px solid ${oc.gray[5]};
  margin-right: 3px;
  border-radius: 3px;

  &::placeholder{
    font-style:italic;
  }
`
const SearchButton = styled.button`
  width: 50px;
  border: none;
  background-color: ${oc.indigo[5]};
  color: white;
  font-size: 1rem;
  cursor: pointer;
  
  &:hover {
    background-color: ${oc.indigo[7]}
  }
`

const LoginButton = styled.button`
  width: 100px;
  height: 40px;
  background-color: ${oc.indigo[0]};
  border: 1px solid ${oc.indigo[7]};
  color: ${oc.indigo[8]};
  border-radius: 30px;

  font-size:1rem;
  cursor: pointer;
  
  &:hover {
    background-color: ${oc.indigo[7]};
    color: white;
  }
`

const Spacer = styled.div`
  flex:1;
`

class HeaderContainer extends Component {
  render() {
    return (
      <Positioner>
        <Whitebox>
          <HeaderContents>
            <Link to="/" style={{textDecoration: 'none', color:'black'}}>
              <Logo>GSM</Logo>
            </Link>
            <Link to="/notice" style={{textDecoration: 'none', color:'black'}}>
              <Notice>공지사항</Notice>
            </Link>
            <SearchForm>
              <SearchInput placeholder="강좌찾기" />
              <SearchButton>검색</SearchButton>
            </SearchForm>
            <Spacer />
            <Link to="/Login">
              <LoginButton>
                로그인
              </LoginButton>
            </Link>
          </HeaderContents>
        </Whitebox>
      </Positioner>
    );
  }
}

export default HeaderContainer;
