import React from 'react';
import styled from '@emotion/styled';

import { colors } from '../constants';

import Header3 from './common/Header3';
import Block from './common/Block';

const Container = styled.div``;

const Divider = styled.div`
  margin-top: 2%;
  margin-bottom: 2%;

  border-bottom: 1px ${colors.lightBlack} solid;
`;

function Experience() {
  return (
    <Container>
      <Header3>PROFESSIONAL EXPERIENCE</Header3>

      <Block.Container>
        <Block.Title>ChaosSearch - Engineering Team Lead</Block.Title>
        <Block.Subtitle>Boston, MA - December 2019 to present</Block.Subtitle>

        <Block.List>
          <Block.Bullet>Responsible for all engineering work for new and existing SaaS/VPC customers.</Block.Bullet>
          <Block.Bullet>Experience directly managing business customers, handling P1 issues/escalations.</Block.Bullet>
          <Block.Bullet>Leading a team to support engineering objectives in customer acquisition and retention.</Block.Bullet>
          <Block.Bullet>Personally handled engineering work for largest customer, leading to three years of renewals of contracts &gt;$1 million. Doubled daily ingest scale, 100x query volume, while improving query performance + product stability.</Block.Bullet>
          <Block.Bullet>Built zero-downtime upgrade solution, seamlessly migrating indexing from replica to leader nodes while draining queries.</Block.Bullet>
          <Block.Bullet>Lead the effort to re-architect VPC solution + build high availability solutions with custom leader election protocol.</Block.Bullet>
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
          <Block.Bullet>Built a web app with microservice backend, designed to remove the bureaucratic barriers of running for local political office.</Block.Bullet>
          <Block.Bullet>Automated campaign finance laws and made it easy to register to run for office.</Block.Bullet>
        </Block.List>
      </Block.Container>

      <Block.Container>
        <Block.Title>Talla - Web Development Intern</Block.Title>
        <Block.Subtitle>Boston, MA - June 2017 to August 2017</Block.Subtitle>

        <Block.List>
          <Block.Bullet>Created a data annotation platform to import Slack conversations and rate whether the chatbot's response was correct or not and what it should be.</Block.Bullet>
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
          <Block.Bullet>Developed a custom RSS feed reader inspired by Feedly for personal use.</Block.Bullet>
          <Block.Bullet>Resilient backend, continuously deployed for years with little maintenance required.</Block.Bullet>
        </Block.List>
      </Block.Container>

      <Block.Container>
        <Block.Title>J-Suite</Block.Title>

        <Block.List>
          <Block.Bullet>Microservice backend for all my personal applications.</Block.Bullet>
          <Block.Bullet>Centralizes deployment + configuration in single Kubernetes cluster with custom authentication + object storage services to optimize development velocity.</Block.Bullet>
          <Block.Bullet>My home for the internet. Hosting my RSS Feed Reader, Notes, Budgeting, and Search applications.</Block.Bullet>
        </Block.List>
      </Block.Container>

      <Block.Container>
        <Block.Title>Budgeting App</Block.Title>

        <Block.List>
          <Block.Bullet>Built custom query engine to materialize raw transactions through user-defined rules into buckets + performing dynamic aggregations to produce financial visualizations.</Block.Bullet>
          <Block.Bullet>Integrated with Plaid APIs + Clojurescript frontend.</Block.Bullet>
        </Block.List>
      </Block.Container>
    </Container>
  );
}

export default Experience;
