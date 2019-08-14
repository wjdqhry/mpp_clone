import React, { Component } from "react";
import styled from "styled-components";
import oc from "open-color";
import { Link } from "react-router-dom";

const Card = styled.div`
    display: flex;
    border-bottom: 1px solid ${oc.gray[3]};
    height: 50%;
`

const ListText = styled.p`
    text-align: left;
    margin: auto 10%;
    margin-right: 200px;
    margin-left: 11%;
`

const Spacer = styled.div`
  flex:1;
`

class NoticeList extends Component {
    render() {
        return (
            <Card>
                <ListText>{this.props.number}</ListText>
                <Spacer/>
                <Link to={{
                    pathname: "/noticedetail",
                    state: {
                        name: this.props.name,
                        date: this.props.date,
                        content: this.props.content,
                        number: this.props.number
                    }
                }} 
                style={{textDecoration: 'none', color:'black', marginTop:20, marginLeft:140}}>
                    <ListText>{this.props.name}</ListText>
                </Link>
                <Spacer/>
                <ListText>{this.props.date}</ListText>
            </Card>
        );
    }
}

export default NoticeList;