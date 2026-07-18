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
        <Block.Title>LatentSpin - Co-Founder + Lead Architect</Block.Title>
        <Block.Subtitle>Boston, MA - August 2025 to present</Block.Subtitle>

        <Block.List>
          <Block.Bullet>Co-founded LatentSpin to solve the core limitation of production AI agents: they don't actually learn. Building Worldview Agents with in-model continual learning that compound operational intelligence through daily work.</Block.Bullet>
          <Block.Bullet>Designed platform enabling domain experts to teach agents through inspectable workflow blocks — capturing corrections, approvals, and outcomes as durable in-model improvements rather than disposable prompt context.</Block.Bullet>
          <Block.Bullet>Architected durable agent execution layer with custom Flows DSL on TypeScript/LangGraph — typesafe reactive workflows with checkpointing and partial execution for production runs over hours and days, not minutes.</Block.Bullet>
          <Block.Bullet>Publishing technical thought leadership on AI agent architecture, drawing on database query planner experience to inform agent execution design and the future of agentic systems.</Block.Bullet>
        </Block.List>
      </Block.Container>

      <Block.Container>
        <Block.Title>ChaosSearch - Engineering Team Lead</Block.Title>
        <Block.Subtitle>Boston, MA - December 2019 to July 2026</Block.Subtitle>

        <Block.List>
          <Block.Bullet>Led engineering for enterprise database customers end-to-end — managing customer acquisition/retention, P1 escalations, and direct ownership of the largest account through three years of &gt;$1M contract renewals.</Block.Bullet>
          <Block.Bullet>Scaled the platform 100x in query volume while doubling daily ingest; architected zero-downtime upgrade paths seamlessly migrating indexing from replica to leader nodes while draining queries.</Block.Bullet>
          <Block.Bullet>Led re-architecture of VPC deployment and built high-availability systems with custom leader election protocol for distributed consensus.</Block.Bullet>
          <Block.Bullet>Applied database internals and distributed systems expertise that now powers LatentSpin's durable agent execution architecture.</Block.Bullet>
        </Block.List>
      </Block.Container>

      <Block.Container>
        <Block.Title>.406 Ventures - Student Fellow</Block.Title>
        <Block.Subtitle>Boston, MA - September 2019 to May 2021</Block.Subtitle>

        <Block.List>
          <Block.Bullet>Selected for two-year entrepreneurship fellowship for student founders — participated in investment committee due diligence, learned from industry practitioners at founder summits, and built network with cohort of student entrepreneurs.</Block.Bullet>
        </Block.List>
      </Block.Container>

      <Block.Container>
        <Block.Title>CandidateXYZ - Founder</Block.Title>
        <Block.Subtitle>Reading, MA - March 2018 to September 2018</Block.Subtitle>

        <Block.List>
          <Block.Bullet>Founded and built a SaaS platform automating campaign finance compliance and administrative filings for municipal candidates — first startup, learned the full founder journey from idea to product.</Block.Bullet>
        </Block.List>
      </Block.Container>

      <Block.Container>
        <Block.Title>Earlier Roles</Block.Title>
        <Block.Subtitle>Boston, MA - 2014 to 2019</Block.Subtitle>

        <Block.List>
          <Block.Bullet>Threat Stack (2019): Redesigned event search with real-time streaming pipelines processing billions of events; owned production deployments.</Block.Bullet>
          <Block.Bullet>Talla (2017): Built data-annotation platform for chatbot ML iteration — early exposure to applied AI/NLP.</Block.Bullet>
          <Block.Bullet>Nutonian, CloudHealth Tech (2014–2016): Software engineering foundations across QA automation and full-stack development.</Block.Bullet>
        </Block.List>
      </Block.Container>

      <Divider />

      <Header3>SIDE PROJECTS</Header3>

      <Block.Container>
        <Block.Title>J-Suite Personal Platform</Block.Title>

        <Block.List>
          <Block.Bullet>Self-hosted Kubernetes platform centralizing deployment, authentication, and object storage for a suite of personal applications — continuously deployed for years with minimal maintenance.</Block.Bullet>
          <Block.Bullet>RSS Reader: Feedly-inspired client with resilient backend architecture designed for long-term autonomous operation.</Block.Bullet>
          <Block.Bullet>Budgeting App: Custom query engine materializing Plaid transactions through user-defined rules into buckets and aggregations; ClojureScript frontend with dynamic financial visualizations.</Block.Bullet>
        </Block.List>
      </Block.Container>
    </Container>
  );
}

export default Experience;
