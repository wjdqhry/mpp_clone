import React, { Component } from 'react';
import Course from "components/Course";
import styled from "styled-components"

const courses = [
    {
        name: "(공통) SW기초.1-논리적/컴퓨터적인 사고",
        number: "DEV262x",
        image: "https://mpp.gsm.hs.kr/asset-v1:Microsoft+DEV262x+2018_T4+type@asset+block@DTK.png"
    },
    {
        name: "(공통) SW기초.2-파이썬 소개(완전 초보자)",
        number: "DEV236x",
        image: "https://mpp.gsm.hs.kr/asset-v1:Microsoft+DEV236x+2018_T4+type@asset+block@DEV236xKK.png"
    },
    {
        name: "(공통) SW기초.3-파이썬 입문(기초)",
        number: "DEV274x",
        image: "https://mpp.gsm.hs.kr/asset-v1:Microsoft+DEV274x+2018_T3+type@asset+block@DEV274xK.png"
    },
    {
        name: "(공통) SW기초.4-기술적인 솔루션 설계",
        number: "DEV284x",
        image: "https://mpp.gsm.hs.kr/asset-v1:Microsoft+DEV284x+2018_T4+type@asset+block@DEVxK.png"
    },
    {
        name: "(공통) SW기초.5-JavaScript를 사용하여 대화형 프로토타입 제작",
        number: "DEV279x",
        image: "https://mpp.gsm.hs.kr/asset-v1:Microsoft+DEV279x+2019_T1+type@asset+block@DEV279K.png"
    },
    {
        name: "(공통) SW기초.6-Node.js를 사용하여 기능 프로토 타입 제작",
        number: "DEV280x",
        image: "https://mpp.gsm.hs.kr/asset-v1:Microsoft+DEV280x+2018_T4+type@asset+block@jsK.png"
    },
    {
        name: "(공통) SW기초.7-Java 프로그램 배우기",
        number: "DEV276x",
        image: "https://mpp.gsm.hs.kr/asset-v1:Microsoft+DEV276x+2019_T1+type@asset+block@JvaK.png"
    },
    {
        name: "(공통) SW기초.9-알고리즘과 데이터 구조",
        number: "DEV285x",
        image: "https://mpp.gsm.hs.kr/asset-v1:Microsoft+DEV285x+2018_T4+type@asset+block@ALGO.png"
    },
    {
        name: "(공통) SW기초10-프로페셔널 코드 작성",
        number: "DEV275x",
        image: "https://mpp.gsm.hs.kr/asset-v1:Microsoft+DEV275x+2018_T4+type@asset+block@PRO.png"
    }
]

const Wrapper = styled.div`
    background-color: pink;
    padding: 30px;
    display:flex;
    flex-wrap: wrap;
`

class CourseList extends Component {

    render() {
        return (
            <Wrapper>
                {courses.map((course, index) =>
                    <Course
                        name={course.name}
                        image={course.image}
                        number={course.number}
                    />
                )}
            </Wrapper>
        );
    }
}

export default CourseList;