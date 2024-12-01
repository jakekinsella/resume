import React from 'react';
import styled from '@emotion/styled';

import Header3 from './common/Header3';

const Container = styled.div``;

const TextBlock = styled.div`
  margin-top: 2%;
  margin-bottom: 2%;
`;

const Spacer = styled.div`
  width: 100%;
  height: 5%;
`;

function Other() {
  return (
    <Container>
      <Header3>CONTACT</Header3>
      <TextBlock>jake.kinsella@gmail.com</TextBlock>
      <TextBlock>(+1) 781-315-5580</TextBlock>
      <TextBlock>TheLocust3</TextBlock>
      <TextBlock>jakekinsella.com</TextBlock>
      <TextBlock>34 W Cedar Street, Boston, MA 02108</TextBlock>

      <Spacer />

      
      <Header3>EDUCATION</Header3>
      <TextBlock>BS in Computer Science (2018-2021)</TextBlock>
      <TextBlock>Northeastern University, Boston, MA</TextBlock>
      <TextBlock>GPA: 3.74/4.0</TextBlock>

      <Spacer />

      
      <Header3>TECHNICAL SKILLS</Header3>
      <TextBlock><b>Expert:</b> Scala/Akka, Java, Distributed Systems</TextBlock>
      <TextBlock><b>Proficient:</b> Typescript, React, NodeJS, Python, AWS/GCP</TextBlock>
      <TextBlock><b>Familiar</b>: OCaml, Clojure, Ruby, PostgreSQL, Elasticsearch</TextBlock>

      <Spacer />

      
      <Header3>INTERESTS</Header3>
      <TextBlock>Running marathons, reading classic literature, hiking the NH 48, skiing, classical music</TextBlock>
    </Container>
  );
}

export default Other;
