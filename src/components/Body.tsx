import React from 'react';
import styled from '@emotion/styled';

import { colors } from '../constants';

import Experience from './Experience';
import Other from './Other';
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
`;

const Right = styled.div`
  width: 30%;
  padding-left: 2%;
  padding-right: 2%;

  display: flex;
  flex-direction: column;
  justify-content: left;
`;

function Body() {
  return (
    <BodyInner>
      <Left>
        <Experience />
      </Left>

      <Right>
        <Other />
      </Right>
    </BodyInner>
  );
}

export default Body;
