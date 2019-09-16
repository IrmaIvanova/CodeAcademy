import React, { Fragment } from 'react';
import styled from 'styled-components';
import Navbar from './components/Navbar.js';
import LandingHeader from './components/Header.js';
import HeaderBackground from './components/HeaderBackgraund.js';
import Description from './components/Description.js';
import YourPerspective from './components/YourPerspective.js';
import WhyItWorks from './components/WhyItWorks.js';
import AboutPractice from './components/AboutPractice.js';

const AppWrapper = styled.div`
  height: 180vh;
`;
function App() {
  return (
    <Fragment>

      <AppWrapper>
        <Navbar />
        <LandingHeader/>
        <HeaderBackground/>
      </AppWrapper>
      <Description/>
      <YourPerspective/>
      <WhyItWorks/>
      <AboutPractice/>
    </Fragment>
  );
}
export default App;