import React, { Component } from "react";
import styled from "styled-components";

const Positioner = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
`;

const Whitebox = styled.div`
  height: 60px;
  background-color: white;
  box-shadow: 0px 0px 4px rgba(0,0,0,0.4);
`;

const HeaderContents = styled.div`
  display: flex;
  max-width:1000px;
  height:100%;
  align-items: center;
  margin: 0 auto;
`

const Logo = styled.h1`
  margin: 0;
  margin-right: 10px;
`
const Notice = styled.p`
  margin: 0;
  margin-right: 10px;
`
const SearchForm = styled.form`
  display: flex;
  margin-right: 10px;
`

const SearchInput = styled.input`
  width: 100px;
`
const SearchButton = styled.button`
  width: 30px;
`

const LoginButton = styled.button`
  width: 100px;
  height: 30px;
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
            <Logo>GSM</Logo>
            <Notice>공지사항</Notice>
            <SearchForm>
              <SearchInput />
              <SearchButton></SearchButton>
            </SearchForm>
            <Spacer />
            <LoginButton>로그인</LoginButton>
          </HeaderContents>
        </Whitebox>
      </Positioner>
    );
  }
}

export default HeaderContainer;
