import React, { Component } from "react";
import HeaderContainer from "containers/HeaderContainer";
import NoticeCard from "containers/NoticeCard";



class Notice extends Component {
    render() {
        return (
            <>
                <HeaderContainer/>
                <NoticeCard/>
            </>
        );
    }
}

export default Notice;