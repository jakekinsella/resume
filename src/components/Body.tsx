import React from 'react';
import styled from '@emotion/styled';

import { colors } from '../constants';

import Header3 from './common/Header3';

const BodyInner = styled.div`
  height: 100%;

  display: flex;
`;

const Left = styled.div`
  width: 70%;
  padding-left: 2%;
  padding-right: 2%;

  display: flex;
  flex-direction: column;
  justify-content: left;

  border-right: 1px ${colors.lightBlack} solid;
`

const Divider = styled.div`
  border-bottom: 1px ${colors.lightBlack} solid;
`

const Right = styled.div`
  width: 30%;
  padding-left: 2%;
  padding-right: 2%;

  display: flex;
  flex-direction: column;
  justify-content: left;
`

function Body() {
  return (
    <BodyInner>
      <Left>
        <Header3>TECHNICAL EXPERIENCE</Header3>

        <Divider />

        <Header3>PERSONAL PROJECTS</Header3>
      </Left>

      <Right>
        <Header3>CONTACT</Header3>

        <Header3>EDUCATION</Header3>

        <Header3>DEV SKILLS</Header3>

        <Header3>INTERESTS</Header3>
      </Right>
    </BodyInner>
  );
}

export default Body;
