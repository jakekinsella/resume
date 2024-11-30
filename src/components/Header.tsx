import React from 'react';
import styled from '@emotion/styled';

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
`

const FullName = styled.h1`
  font-family: 'Roboto Slab', serif;
  font-size: 48px;
  font-weight: 500;
`;

const Right = styled.div`
  width: 50%;

  display: flex;
  justify-content: right;
  align-items: flex-end;
`

const Title = styled.h2`
  font-family: 'Roboto', sans-serif;
  font-size: 32px;
  font-weight: 500;
`;

function Header() {
  return (
    <HeaderInner>
      <Left>
        <FullName>Jake Kinsella</FullName>
      </Left>

      <Right>
        <Title>SOFTWARE ENGINEER</Title>
      </Right>
    </HeaderInner>
  );
}

export default Header;
