import React from 'react';
import styled from '@emotion/styled';

import { colors } from './constants';
import './global-styles';

import Header from './components/Header';

const Body = styled.div`
  width: 8.5in;
  height: 11in;
  border: 1px solid ${colors.red};
`;

const Container = styled.div`
  height: 94.5%;
  padding: 3%;
`;

const HeaderContainer = styled.div`
  padding-bottom: 5px;

  border-bottom: 1px ${colors.lightBlack} solid;
`

const BodyInner = styled.div`

`

function Main() {
  return (
    <Body>
      <Container>
        <HeaderContainer>
          <Header />
        </HeaderContainer>

        <BodyInner>
          Body
        </BodyInner>
      </Container>
    </Body>
  );
}

export default Main;
