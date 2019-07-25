import React, { Component } from "react";
import HeaderContainer from "containers/HeaderContainer";
import HeaderPoster from "containers/HeaderPoster";
import CourseList from "containers/CourseList";

class Home extends Component {

    render() {
        return (
            <>
                <HeaderContainer />
                <HeaderPoster />
                <CourseList />
            </>
        );
    }
}

export default Home;