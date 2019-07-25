import React, { Component } from "react";
import HeaderContainer from "containers/HeaderContainer";
import HeaderPoster from "containers/HeaderPoster";

class Home extends Component {
    render() {
        return (
            <>
                <HeaderContainer />
                <HeaderPoster />
            </>
        );
    }
}

export default Home;