import React from 'react';
import styled from '@emotion/styled';

import { colors } from './constants';
import './global-styles';

import Header from './components/Header';
import Body from './components/Body';

const Paper = styled.div`
  width: 8.5in;
  height: 11in;
  border: 1px solid ${colors.red};
`;

const Container = styled.div`
  height: 94.5%;
  padding-left: 1.5%;
  padding-right: 1.5%;
  padding-top: 3%;
  padding-bottom: 3%;
`;

const HeaderContainer = styled.div`
  height: 6%;
  padding-bottom: 5px;

  border-bottom: 1px ${colors.lightBlack} solid;
`;

const BodyContainer = styled.div`
  height: 93%;
  padding-left: 1.5%;
  padding-right: 1.5%;

  margin-top: 1%;
`;

function Main() {
  return (
    <Paper>
      <Container>
        <HeaderContainer>
          <Header />
        </HeaderContainer>

        <BodyContainer>
          <Body />
        </BodyContainer>
      </Container>
    </Paper>
  );
}

export default Main;
