import React from 'react';
import styled from "styled-components";
import oc from "open-color";

const Wrapper = styled.div`
    width: 25%;
    height: 360px;
    padding: 20px;
    box-sizing: border-box;
`

const WhiteBox = styled.div`
    width:100%;
    height:100%;
    background-color:white;
    border-bottom: 3px solid ${oc.indigo[6]};
    transition: 0.125s all ease-in;

    &:hover{
        border-bottom: 3px solid white;
    }
`

const Image = styled.img`
    width: 100%;
    height: 40%;
`

const Course = ({ name, image, number }) => {
    return (
        <Wrapper>
            <WhiteBox>
                <Image src={image} />
                {name}
                {number}
            </WhiteBox>
        </Wrapper>
    );
};

export default Course;