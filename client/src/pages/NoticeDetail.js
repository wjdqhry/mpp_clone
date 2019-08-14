import React, { Component } from "react";
import HeaderContainer from "containers/HeaderContainer";
import NoticeDetailCard from "containers/NoticeDetailCard";

class NoticeDetail extends Component {

    render() {
        return (
            <>
                <HeaderContainer/>
                <NoticeDetailCard 
                    name={this.props.location.name} 
                    date={this.props.location.date} 
                    content={this.props.location.content}/>
            </>
        );
    }
}

export default NoticeDetail;