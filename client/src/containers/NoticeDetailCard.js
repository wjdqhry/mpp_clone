import React, { Component } from "react";
import styled from "styled-components";
import oc from "open-color";
import {Link} from "react-router-dom";

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

const Spacer = styled.div`
  flex:1;
`

const NoticeLists = styled.div`
    height: 260px;
    border-top: 1px solid black;
    border-bottom: 1px solid ${oc.gray[3]};
    display:flex;
    flex-direction: column;
`

class NoticeDetailCard extends Component {
  render() {
    return (
        <Card>
            <NoticeText>공지사항상세</NoticeText>
            <NoticeLists></NoticeLists>
        </Card>
    );
  }
}

export default NoticeDetailCard;
