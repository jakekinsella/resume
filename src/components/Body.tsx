import React from 'react';
import styled from '@emotion/styled';

import { colors } from '../constants';

import Experience from './Experience';
import Other from './Other';

const BodyInner = styled.div`
  height: 100%;

  display: flex;
`;

const Left = styled.div`
  width: 75%;
  padding-right: 2%;

  display: flex;
  flex-direction: column;
  justify-content: left;

  border-right: 1px ${colors.lightBlack} solid;
`;

const Right = styled.div`
  width: 25%;
  padding-left: 2%;

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
