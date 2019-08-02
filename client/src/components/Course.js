import React, { Component } from 'react';
import styled from "styled-components";
import oc from "open-color";

const Wrapper = styled.div`
    width: 25%;
    height: 420px;
    padding: 20px;
    box-sizing: border-box;
    transition: 0.125s all ease-in;

    ${props => props.hover ? `padding-top:15px; padding-bottom:25px` : ``}
`

const WhiteBox = styled.div`
    width:100%;
    height:100%;
    background-color:white;
    transition: 0.125s all ease-in;
    box-shadow: 0px 0px 10px rgba(0,0,0, 0.2);

    &:hover{
        box-shadow: 0px 5px 20px rgba(0,0,0, 0.2);
    }
`

const Image = styled.img`
    width: 100%;
    height: 42%;
`
const InfoSection = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
`

const NameStyle = styled.span`
    font-size: 1.4rem;
    color: ${oc.indigo[4]};
    padding: 5px 0px;
`

const FuckStyle = styled.span`
    font-size: 1.2rem;
`

class Course extends Component {
    state = {
        hover: false
    }

    OnHover = () => {
        console.log("hover");
        this.setState({
            hover: !this.state.hover
        })
    }

    render() {
        const { image, name, number } = this.props;
        return (
            <Wrapper hover={this.state.hover}>
                <WhiteBox onMouseEnter={this.OnHover} onMouseLeave={this.OnHover}>
                    <Image src={image} />
                    <InfoSection>
                        <FuckStyle>Microsoft</FuckStyle>
                        <FuckStyle>{number}</FuckStyle>
                        <NameStyle>{name}</NameStyle>
                    </InfoSection>
                </WhiteBox>
            </Wrapper >
        );
    }
};

export default Course;