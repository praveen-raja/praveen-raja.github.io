---
layout: landing
permalink: /
title: "Praveenkumar Raja — Software Engineer"
---

<link rel="stylesheet" href="{{ '/assets/css/landing.css' | relative_url }}">

<div class="lp">

  <!-- Navbar -->
  <nav class="lp-nav">
    <a href="/" class="lp-brand">praveen-raja</a>
    <div class="lp-links">
      <a href="#about" class="lp-hide-sm">About</a>
      <a href="#skills" class="lp-hide-sm">Skills</a>
      <a href="#projects">Projects</a>
      <a href="/blog/">Blog</a>
      <a href="/resume/">Resume</a>
    </div>
  </nav>

  <!-- Hero -->
  <header class="lp-hero">
    <div class="lp-container">
      <img class="lp-avatar" src="https://avatars.githubusercontent.com/u/40530606?v=4" alt="Praveenkumar Raja" width="140" height="140" loading="eager">
      <span class="lp-eyebrow">&lt;/&gt; Hello, World</span>
      <h1>I'm <span class="lp-gradient-text">Praveenkumar Raja</span></h1>
      <div class="lp-typed-wrap">
        <span class="lp-typed" data-typed='["Software Engineer","Java Developer","Backend Engineer","Tech Enthusiast"]'></span><span class="lp-cursor">&nbsp;</span>
      </div>
      <p class="lp-lead">
        I build enterprise-scale backend systems, microservices, and multi-cloud
        integrations. Currently engineering e-Discovery and data-governance
        platforms at <strong>Exterro</strong>.
      </p>
      <div class="lp-actions">
        <a class="lp-btn lp-btn-primary" href="#projects">View my work</a>
        <a class="lp-btn lp-btn-ghost" href="/resume/">Resume</a>
      </div>
      <div class="lp-social">
        <a href="https://github.com/praveen-raja" aria-label="GitHub"><i class="fab fa-github"></i></a>
        <a href="https://linkedin.com/in/praveenkumar-raja" aria-label="LinkedIn"><i class="fab fa-linkedin"></i></a>
        <a href="mailto:ipraveenkumar.raja@gmail.com" aria-label="Email"><i class="fas fa-envelope"></i></a>
      </div>
    </div>
    <a href="#about" class="lp-scroll-cue" aria-label="Scroll down"><i class="fas fa-chevron-down"></i></a>
  </header>

  <!-- About -->
  <section class="lp-section lp-section-alt" id="about">
    <div class="lp-container lp-reveal">
      <span class="lp-kicker">01 — About</span>
      <h2>Backend engineer, tech enthusiast</h2>
      <p class="lp-section-sub">
        I'm a Software Engineer with a backend-first mindset and a soft spot for
        clean architecture and reliable systems.
      </p>
      <p style="max-width:720px;color:var(--lp-muted);">
        At <strong>Exterro</strong> I engineer In-Place Preservation workflows,
        multi-cloud enterprise connectors (Google Vault, Microsoft 365 eDiscovery,
        Slack, and more), automated ETL pipelines into MSSQL, and real-time
        health-monitoring REST APIs. Previously at <strong>Cognizant</strong>, I
        maintained a Single Sign-On platform serving 160K+ users. I care about
        observability, root cause analysis, and shipping things that hold up in
        production.
      </p>
      <p style="margin-top:1.2rem;">
        <a class="lp-btn lp-btn-ghost" href="/about/">Full story &rarr;</a>
      </p>
    </div>
  </section>

  <!-- Skills -->
  <section class="lp-section" id="skills">
    <div class="lp-container lp-reveal">
      <span class="lp-kicker">02 — Skills</span>
      <h2>Tools of the trade</h2>
      <p class="lp-section-sub">The stack I reach for, day to day.</p>

      <div class="lp-skill-group">
        <h4>Proficient</h4>
        <div class="lp-skills">
          <span class="lp-skill">Java 8</span>
          <span class="lp-skill">Spring Boot</span>
          <span class="lp-skill">Microservices</span>
          <span class="lp-skill">REST APIs</span>
          <span class="lp-skill">SQL</span>
          <span class="lp-skill">ActiveMQ / Redis</span>
          <span class="lp-skill">Git / SVN</span>
          <span class="lp-skill">Jira Administration</span>
        </div>
      </div>

      <div class="lp-skill-group">
        <h4>Familiar</h4>
        <div class="lp-skills">
          <span class="lp-skill">JavaScript / Angular</span>
          <span class="lp-skill">AWS</span>
          <span class="lp-skill">Docker / Kubernetes</span>
        </div>
      </div>
    </div>
  </section>

  <!-- Projects -->
  <section class="lp-section lp-section-alt" id="projects">
    <div class="lp-container lp-reveal">
      <span class="lp-kicker">03 — Projects</span>
      <h2>Things I've built</h2>
      <p class="lp-section-sub">A few highlights. More on my GitHub.</p>

      <div class="lp-cards">
        <div class="lp-card">
          <h3>Pension Management</h3>
          <div class="lp-card-meta">Dec 2022</div>
          <p>Microservice app exposing REST endpoints that calculate pension
             payouts from user inputs and profile details.</p>
          <div class="lp-card-tags">
            <span>Java</span><span>Spring Boot</span><span>Microservices</span>
            <span>Angular</span><span>Docker</span><span>MySQL</span>
          </div>
        </div>

        <div class="lp-card">
          <h3>TweetApp</h3>
          <div class="lp-card-meta">Jan 2022</div>
          <p>Real-time microservice app to create, update, and interact with
             tweets, deployed on AWS ECS/ECR.</p>
          <div class="lp-card-tags">
            <span>Java</span><span>Spring Boot</span><span>Angular</span>
            <span>AWS</span><span>Docker</span><span>MySQL</span>
          </div>
          <a class="lp-card-link" href="https://github.com/praveen-raja/tweetapp-backend">Backend &rarr;</a>
          &nbsp;
          <a class="lp-card-link" href="https://github.com/praveen-raja/tweet-app-frontend">Frontend &rarr;</a>
        </div>

        <div class="lp-card">
          <h3>Spring Boot Microservices</h3>
          <div class="lp-card-meta">Reference</div>
          <p>A demo showcasing Spring Boot microservice patterns and service
             composition.</p>
          <div class="lp-card-tags">
            <span>Java</span><span>Spring Boot</span><span>Microservices</span>
          </div>
          <a class="lp-card-link" href="https://github.com/praveen-raja/springboot-microservice-demo">View on GitHub &rarr;</a>
        </div>
      </div>

      <p style="margin-top:1.6rem;">
        <a class="lp-btn lp-btn-ghost" href="/projects/">All projects &rarr;</a>
      </p>
    </div>
  </section>

  <!-- CTA -->
  <section class="lp-cta">
    <div class="lp-container lp-reveal">
      <h2>Let's build something</h2>
      <p>Open to interesting backend and platform work. Say hi.</p>
      <div class="lp-actions">
        <a class="lp-btn lp-btn-primary" href="mailto:ipraveenkumar.raja@gmail.com">Get in touch</a>
        <a class="lp-btn lp-btn-ghost" href="https://linkedin.com/in/praveenkumar-raja">LinkedIn</a>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="lp-footer">
    <p>&copy; 2026 Praveenkumar Raja &middot;
       <a href="https://github.com/praveen-raja">GitHub</a> &middot;
       <a href="/blog/">Blog</a> &middot;
       <a href="/resume/">Resume</a>
    </p>
    <p style="margin-top:0.4rem;opacity:0.7;">Built with Jekyll. Themed with care.</p>
  </footer>

</div>

<script src="{{ '/assets/js/landing.js' | relative_url }}"></script>
