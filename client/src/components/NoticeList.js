import React, { Component } from "react";
import styled from "styled-components";
import oc from "open-color";

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
                <ListText>{this.props.name}</ListText>
                <Spacer/>
                <ListText>{this.props.date}</ListText>
            </Card>
        );
    }
}

export default NoticeList;