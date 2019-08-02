import React, { Component } from "react";
import HeaderContainer from "containers/HeaderContainer";
import LoginCard from "containers/LoginCard";

class Login extends Component {

    render() {
        return (
            <>
                <HeaderContainer/>
                <LoginCard></LoginCard>
            </>
        );
    }
}

export default Login;