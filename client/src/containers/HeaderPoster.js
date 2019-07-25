import React, { Component } from "react";
import styled from "styled-components";

const Poster = styled.img`
    width:100%;
    margin-top:70px;
    padding:0;
`

class HeaderPoster extends Component {
    render() {
        return (
            <Poster src="https://raw.githubusercontent.com/JhPlayGround/mppbuild/master/gjsm2.png" />
        );
    }
}

export default HeaderPoster