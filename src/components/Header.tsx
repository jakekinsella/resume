import React from 'react';
import styled from '@emotion/styled';

import Header1 from './common/Header1';
import Header2 from './common/Header2';

const HeaderInner = styled.div`
  height: 100%;
  width: 98%;
  padding-left: 1%;
  padding-right: 1%;

  display: flex;
  align-items: flex-end;
`;

const Left = styled.div`
  height: 100%;
  width: 56%;

  display: flex;
  justify-content: left;
  align-items: flex-end;
  vertical-align: bottom;
`;

const Right = styled.div`
  width: 44%;

  display: flex;
  flex-direction: column;
  justify-content: right;
  align-items: flex-start;
`;

function Header() {
  return (
    <HeaderInner>
      <Left>
        <Header1>Jake Kinsella</Header1>
      </Left>

      <Right>
        <Header2>SR. SOFTWARE ENGINEER</Header2>
        <Header2>TEAM LEAD</Header2>
      </Right>
    </HeaderInner>
  );
}

export default Header;
