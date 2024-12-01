import React from 'react';
import styled from '@emotion/styled';

import { colors } from '../constants';

import Header3 from './common/Header3';
import Icon from './common/Icon';

const Container = styled.div``;

const TextBlock = styled.div`
  margin-top: 2%;
  margin-bottom: 2%;

  padding-left: 5px;
`;

const Link = styled.a`
  height: 30px;

  color: ${colors.black};
  text-decoration: none;

  display: flex;
  align-content: center;
`;

const NoLink = styled.div`
  height: 30px;

  display: flex;
  align-content: center;
`;

const LinkInner = styled.div`
  padding-top: 8px;
  padding-left: 4px;
`;

const LinkInnerWrapped = styled.div`
  padding-left: 4px;
`;

const NestedTextBlock = styled.div`
  margin-bottom: 2%;

  padding-left: 5px;
`;

const Spacer = styled.div`
  width: 100%;
  height: 5%;
`;

const List = styled.ul`
  margin-top: 0;
  margin-bottom: 0;
  padding-left: 15px;
`;

const Bullet = styled.li``;

function Other() {
  return (
    <Container>
      <Header3>CONTACT</Header3>
      <TextBlock>
        <Link href="mailto:jake.kinsella@gmail.com">
          <Icon icon="mail" />
          <LinkInner>jake.kinsella@gmail.com</LinkInner>
        </Link>
      </TextBlock>
      <TextBlock>
        <Link href="tel:781-315-5580">
          <Icon icon="call" />
          <LinkInner>(+1) 781-315-5580</LinkInner>
        </Link>
      </TextBlock>
      <TextBlock>
        <Link href="https://github.com/TheLocust3">
          <Icon icon="computer" />
          <LinkInner>github.com/TheLocust3</LinkInner>
        </Link>
      </TextBlock>
      <TextBlock>
        <Link href="http://jakekinsella.com">
          <Icon icon="computer" />
          <LinkInner>jakekinsella.com</LinkInner>
        </Link>
      </TextBlock>
      <TextBlock>
        <NoLink>
          <Icon icon="map" />
          <LinkInnerWrapped>34 W Cedar Street, Boston, MA 02108</LinkInnerWrapped>
        </NoLink>
      </TextBlock>
      <TextBlock>
        <NoLink>
          <Icon icon="calendar_month" />
          <LinkInner>Currently not available</LinkInner>
        </NoLink>
      </TextBlock>

      <Spacer />

      
      <Header3>EDUCATION</Header3>
      <TextBlock>BS in Computer Science (2018-2021)</TextBlock>
      <TextBlock>Northeastern University, Boston, MA</TextBlock>
      <TextBlock>GPA: 3.75/4.0</TextBlock>

      <Spacer />

      
      <Header3>TECHNICAL SKILLS</Header3>
      <TextBlock>
        <b>Expert:</b>
        <br />

        <NestedTextBlock>Scala/Akka, Java, Distributed Systems</NestedTextBlock>
      </TextBlock>
      <TextBlock>
        <b>Proficient:</b>
        <br />

        <NestedTextBlock>Typescript, React, NodeJS, Python, AWS/GCP, Spark</NestedTextBlock>
      </TextBlock>
      <TextBlock>
        <b>Familiar:</b>
        <br />

        <NestedTextBlock>OCaml, Clojure, Ruby, Rust, PostgreSQL, Elasticsearch, Kubernetes, Terraform</NestedTextBlock>
      </TextBlock>

      <Spacer />

      
      <Header3>INTERESTS</Header3>
      <List>
        <Bullet>Running marathons</Bullet>
        <Bullet>Reading classic literature</Bullet>
        <Bullet>Hiking the NH 48</Bullet>
        <Bullet>Skiing</Bullet>
        <Bullet>Classical music</Bullet>
      </List>
    </Container>
  );
}

export default Other;
