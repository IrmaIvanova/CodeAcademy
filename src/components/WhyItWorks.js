import React from 'react';
import styled from 'styled-components';
import './YourPerspective.css';
import Paragraf from './Paragraf.js';
import './WhyItWorks.css';
import GreenDots from '../img/greendots.svg'
import TitleH2 from './TitleMidle.js'
import TitleMidle from './TitleMidle.js'

const Container = styled.div`
    width: 1887px;
    padding: 48px 96px;
    margin: 0 0 80px;
    position: relative;
    text-align: center;
`

const Box = styled.div`
    width: 1140px;
    height: 740px;
    text-align: center;
    padding: 48px 96px;
    margin: 0 244px 0;
    position:absolute;
    top: -700px;
    background: #ffffff;

`
const Image = styled.div`
    text-align: left;
    img{
        width: 118px;
        height: 26px;
    }
    
`
const Text = styled.p`
    font-size: 24px;
    line-height: 1.5em;
    font-family: 'Nunito Sans', sans-serif;
    font-weight: 600;
`;
const ReasonWhy = styled.div`
    display:flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 0 35px 0 100px;
`

const SmallBox = styled.div`
    Width:400px;
    text-align: left;
    margin: 80px 0 0;
`
const Underline = styled.div`
    border-bottom: 2px solid #000;
    width: 326px;
    position: relative;
`
class WhyItWorks extends React.Component{
    render(){
        return(
            <Container >
                <Box >
                    <Image className="border"><img src={GreenDots} alt=""/></Image>
                    <TitleH2 text="Why it Works"/>
                    <Text>After 7 years and 45 million learners, 
                    <br/>we know what will help you succeed.
                    </Text>
                <ReasonWhy>
                    <SmallBox>
                        <Underline className="icon1"><TitleMidle text="More Than Syntax"/></Underline>
                        <Paragraf text="Internalize new concepts with additional content and quizzes."/>
                    </SmallBox>
                    <SmallBox>
                        <Underline className="icon1 icon2"><TitleMidle text="More Than Syntax"/></Underline>
                        <Paragraf text="Internalize new concepts with additional content and quizzes."/>
                    </SmallBox>
                    <SmallBox>
                        <Underline className="icon1 icon3"><TitleMidle text="More Than Syntax"/></Underline>
                        <Paragraf text="Internalize new concepts with additional content and quizzes."/>
                    </SmallBox>
                    <SmallBox>
                        <Underline className="icon1 icon4"><TitleMidle text="More Than Syntax"/></Underline>
                        <Paragraf text="Internalize new concepts with additional content and quizzes."/>
                    </SmallBox>
                </ReasonWhy>
                
                    </Box>

            </Container>
        );
    }

}

export default WhyItWorks;