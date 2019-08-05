import React, { Component } from "react";
import HeaderContainer from "containers/HeaderContainer";
import NoticeDetailCard from "containers/NoticeDetailCard";

class NoticeDetail extends Component {

    render() {
        return (
            <>
                <HeaderContainer/>
                <NoticeDetailCard/>
            </>
        );
    }
}

export default NoticeDetail;