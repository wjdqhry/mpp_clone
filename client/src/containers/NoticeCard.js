import React, { Component } from "react";
import styled from "styled-components";
import oc from "open-color";
import NoticeList from "components/NoticeList"

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
    text-align: left;
    margin: auto 10%;
    margin-right: 200px;
`

const Spacer = styled.div`
  flex:1;
`

const notices = [
    {
        name: "MPP 학습 매뉴얼",
        number: "1",
        date: "2019-04-26",
        content: "광주소프트웨어마이스터고등학교 MPP 학습사이트에 오신걸 환영합니다. 학습 매뉴얼을 통해 기본적인 학습 방법을 살펴보시고, 비밀번호 재설정 기능을 통해 초기 비밀번호를 변경하여 주시기 바랍니다. -MPP운영팀-"
    },
    {
        name: "MPP 브라우저 자동번역기 활용 방법",
        number: "2",
        date: "2019-04-26",
        content: "브라우저에서 자동으로 한글 번역기를 활용할 수 있는 방법을 안내합니다. -MPP 운영팀-"
    }
]

class NoticeCard extends Component {
    render() {
        return (
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
                                <Spacer/>
                                <ListText>제목</ListText>
                                <Spacer/>
                                <ListText>날짜</ListText>
                            </ListInfo>
                            {notices.map((notice)=>
                                    <NoticeList name={notice.name} date={notice.date} number={notice.number} content={notice.content} key={notice.number} />
                                )}
                        </NoticeLists>
                    </NoticeChart>
                </Card>
        );
    }
}

export default NoticeCard

