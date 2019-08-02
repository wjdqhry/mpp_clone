import React, { Component } from "react";
import HeaderContainer from "containers/HeaderContainer";
import styled from "styled-components";
import oc from "open-color";

const Card = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    margin-top: 80px;
    width: 80%;
    height: 100%;
`

const NoticeText = styled.h1`
    margin-top: 40px;
    padding-bottom: 10px;
    border-bottom: 1px solid #ccc;
`
const NoticeChart = styled.div`
    width:100%;
    height:350px;
    background-color: white;
`

const FindNotice = styled.div`
    width: 100%;
    height: 80px;
    position: relative;
    display: flex;
    flex-direction: row-reverse;
    background-color:white;
    margin-top: 10px;
`

const SearchButton = styled.button`
    width:50px;
    height:50%;
    background-color: ${oc.indigo[4]};
    border: none; 
    margin-right:30px;   
    border-radius:7px;
`
const SearchInput = styled.input`
    height:47%;
    width:150px;
    background-color: ${oc.gray[3]};
    border:none;
    border-radius:3px;
    margin-right: 10px;
`

const NoticeLists = styled.div`
    height: 260px;
    border-top: 1px solid black;
    border-bottom: 1px solid ${oc.gray[3]};
    display:flex;
    flex-direction: column;
`

const ListInfo = styled.div`
    display:flex;
    height:33%;
    width:100%;
    background-color:${oc.gray[4]};
`
const ListText = styled.p`
    
`

class Notice extends Component {
    render() {
        return (
            <>
                <HeaderContainer/>
                <Card>
                    <NoticeText>공지사항</NoticeText>
                    <NoticeChart>
                        <FindNotice>
                            <SearchButton>검색</SearchButton>
                            <SearchInput></SearchInput>
                        </FindNotice>
                        <NoticeLists>
                            <ListInfo>
                                <ListText>No.</ListText>
                                <ListText>제목</ListText>
                                <ListText>날짜</ListText>
                            </ListInfo>
                        </NoticeLists>
                    </NoticeChart>
                </Card>
            </>
        );
    }
}

export default Notice;