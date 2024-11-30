import React from 'react';
import styled from '@emotion/styled';

import Header1 from './common/Header1';
import Header2 from './common/Header2';

const HeaderInner = styled.div`
  width: 98%;
  padding-left: 1%;
  padding-right: 1%;

  display: flex;
`;

const Left = styled.div`
  width: 50%;

  display: flex;
  justify-content: left;
  align-items: flex-start;
`;

const Right = styled.div`
  width: 50%;

  display: flex;
  justify-content: right;
  align-items: flex-end;
`;

function Header() {
  return (
    <HeaderInner>
      <Left>
        <Header1>Jake Kinsella</Header1>
      </Left>

      <Right>
        <Header2>SOFTWARE ENGINEER</Header2>
      </Right>
    </HeaderInner>
  );
}

export default Header;
