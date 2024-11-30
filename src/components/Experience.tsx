import React from 'react';
import styled from '@emotion/styled';

import { colors } from '../constants';

import Header3 from './common/Header3';
import Block from './common/Block';

const Container = styled.div``;

const Divider = styled.div`
  margin-top: 3%;
  margin-bottom: 3%;

  border-bottom: 1px ${colors.lightBlack} solid;
`;

function Experience() {
  return (
    <Container>
      <Header3>TECHNICAL EXPERIENCE</Header3>

      <Block.Container>
        <Block.Title>ChaosSearch - Engineering Team Lead</Block.Title>
        <Block.Subtitle>Boston, MA - December 2019 to present</Block.Subtitle>

        <Block.List>
          <Block.Bullet>Bullet 1.</Block.Bullet>
          <Block.Bullet>Bullet 2.</Block.Bullet>
          <Block.Bullet>Bullet 3.</Block.Bullet>
          <Block.Bullet>Bullet 4.</Block.Bullet>
          <Block.Bullet>Bullet 5.</Block.Bullet>
        </Block.List>
      </Block.Container>

      <Block.Container>
        <Block.Title>Threat Stack - Data Engineering Intern</Block.Title>
        <Block.Subtitle>Boston, MA - May 2019 to August 2019</Block.Subtitle>

        <Block.List>
          <Block.Bullet>Redesigned event search feature using real-time streaming applications processing billions of events, and Elasticsearch with team.</Block.Bullet>
          <Block.Bullet>Refactored critical model library impacting many streaming jobs and worked to rebuild + optimize those jobs.</Block.Bullet>
          <Block.Bullet>Took on the responsibilities of a full software developer, leading production deployments and playing critical roles in production incidents.</Block.Bullet>
        </Block.List>
      </Block.Container>

      <Block.Container>
        <Block.Title>CandidateXYZ - Founder</Block.Title>
        <Block.Subtitle>Reading, MA - March 2018 to September 2018</Block.Subtitle>

        <Block.List>
          <Block.Bullet>Founded candidateXYZ to allow municipal candidates to automate all of the legal + administrative of running a campaign.</Block.Bullet>
          <Block.Bullet>Built a web app designed to remove the bureaucratic barriers of running for local political office.</Block.Bullet>
          <Block.Bullet>Automated campaign nance laws and made it easy to register to run for office.</Block.Bullet>
        </Block.List>
      </Block.Container>

      <Block.Container>
        <Block.Title>Talla - Web Development Intern</Block.Title>
        <Block.Subtitle>Boston, MA - June 2017 to August 2017</Block.Subtitle>

        <Block.List>
          <Block.Bullet>Created a data annotation platform that would allow Talla to import Slack conversations and rate whether the chatbot's response was correct or not and what it should be.</Block.Bullet>
          <Block.Bullet>Facilitated data analysts' ability to rapidly iterate on the ML models powering the product.</Block.Bullet>
          <Block.Bullet>Allowed the company to outsource data annotation to gig-workers.</Block.Bullet>
        </Block.List>
      </Block.Container>

      <Block.Container>
        <Block.Title>Nutonian - QA Engineering Intern</Block.Title>
        <Block.Subtitle>Boston, MA - June 2016 to August 2016</Block.Subtitle>

        <Block.List>
          <Block.Bullet>Automated performance testing, built a suite of tests to track API performance.</Block.Bullet>
          <Block.Bullet>Maintained/upgraded fully automated Selenium tests, and developed strong automated browser tests and testable websites.</Block.Bullet>
        </Block.List>
      </Block.Container>

      <Block.Container>
        <Block.Title>CloudHealth Tech - Software Engineering Intern</Block.Title>
        <Block.Subtitle>Boston, MA - June 2014 to August 2015 (two summers)</Block.Subtitle>

        <Block.List>
          <Block.Bullet>Developed an invoice generator for customers integrated with a Ruby on Rails endpoint.</Block.Bullet>
          <Block.Bullet>Contributed to all phases of software development from implementation to deployment, and participated in an Agile team.</Block.Bullet>
        </Block.List>
      </Block.Container>

      <Divider />

      <Header3>PERSONAL PROJECTS</Header3>

      <Block.Container>
        <Block.Title>RSS Feed Reader</Block.Title>

        <Block.List>
          <Block.Bullet>Bullet 1.</Block.Bullet>
          <Block.Bullet>Bullet 2.</Block.Bullet>
          <Block.Bullet>Bullet 3.</Block.Bullet>
        </Block.List>
      </Block.Container>

      <Block.Container>
        <Block.Title>Budgeting Software</Block.Title>

        <Block.List>
          <Block.Bullet>Bullet 1.</Block.Bullet>
          <Block.Bullet>Bullet 2.</Block.Bullet>
          <Block.Bullet>Bullet 3.</Block.Bullet>
        </Block.List>
      </Block.Container>

      <Block.Container>
        <Block.Title>J-Suite</Block.Title>

        <Block.List>
          <Block.Bullet>Bullet 1.</Block.Bullet>
          <Block.Bullet>Bullet 2.</Block.Bullet>
          <Block.Bullet>Bullet 3.</Block.Bullet>
        </Block.List>
      </Block.Container>
    </Container>
  );
}

export default Experience;
