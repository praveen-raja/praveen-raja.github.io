---
title: "Projects"
permalink: /projects/
layout: single
author_profile: true
---

A selection of projects and repositories. These lean toward backend and
microservice work in Java and Spring Boot. To add a new project, copy one of
the `project-card` blocks below and update the details.

<style>
.project-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.25rem;
  margin: 1.5rem 0;
}
.project-card {
  border: 1px solid #2a3441;
  border-radius: 8px;
  padding: 1.1rem 1.25rem;
  display: flex;
  flex-direction: column;
}
.project-card h3 { margin-top: 0; margin-bottom: 0.35rem; }
.project-card .project-meta { font-size: 0.8rem; opacity: 0.75; margin-bottom: 0.6rem; }
.project-card .project-desc { flex: 1 1 auto; margin-bottom: 0.75rem; }
.project-tags { margin-bottom: 0.75rem; }
.project-tag {
  display: inline-block;
  font-size: 0.72rem;
  padding: 0.12rem 0.5rem;
  margin: 0 0.3rem 0.3rem 0;
  border-radius: 999px;
  background: rgba(82, 173, 200, 0.18);
}
.project-featured { border-width: 2px; border-color: #52adc8; }
.project-featured-tag {
  display: inline-block;
  font-size: 0.7rem;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: #52adc8;
  margin-bottom: 0.4rem;
}
</style>

<div class="project-grid">

  <div class="project-card project-featured">
    <span class="project-featured-tag">Featured</span>
    <h3>Add your featured project</h3>
    <div class="project-meta">Pick one to highlight</div>
    <div class="project-desc">
      Reserved slot for a headline project. Replace this card with the work
      you most want visitors to see first.
    </div>
    <div class="project-tags">
      <span class="project-tag">Coming soon</span>
    </div>
  </div>

  <div class="project-card">
    <h3>Pension Management Application</h3>
    <div class="project-meta">Dec 2022</div>
    <div class="project-desc">
      A microservice-based application exposing REST endpoints that calculate
      pension payouts from user inputs and profile details.
    </div>
    <div class="project-tags">
      <span class="project-tag">Java</span>
      <span class="project-tag">Spring Boot</span>
      <span class="project-tag">Microservices</span>
      <span class="project-tag">Angular</span>
      <span class="project-tag">Docker</span>
      <span class="project-tag">MySQL</span>
    </div>
  </div>

  <div class="project-card">
    <h3>TweetApp Application</h3>
    <div class="project-meta">Jan 2022</div>
    <div class="project-desc">
      A microservice application that lets users create, update, and interact
      with tweets in real time, deployed on AWS.
    </div>
    <div class="project-tags">
      <span class="project-tag">Java</span>
      <span class="project-tag">Spring Boot</span>
      <span class="project-tag">Microservices</span>
      <span class="project-tag">Angular</span>
      <span class="project-tag">Docker</span>
      <span class="project-tag">AWS ECS/ECR</span>
      <span class="project-tag">MySQL</span>
    </div>
    <div>
      <a href="https://github.com/praveen-raja/tweetapp-backend">Backend</a> ·
      <a href="https://github.com/praveen-raja/tweet-app-frontend">Frontend</a>
    </div>
  </div>

  <div class="project-card">
    <h3>Spring Boot Microservices Demo</h3>
    <div class="project-meta">Reference project</div>
    <div class="project-desc">
      A demo showcasing Spring Boot microservice patterns and service
      composition.
    </div>
    <div class="project-tags">
      <span class="project-tag">Java</span>
      <span class="project-tag">Spring Boot</span>
      <span class="project-tag">Microservices</span>
    </div>
    <div>
      <a href="https://github.com/praveen-raja/springboot-microservice-demo">View on GitHub</a>
    </div>
  </div>

  <div class="project-card">
    <h3>Spring Data REST Demo</h3>
    <div class="project-meta">Reference project</div>
    <div class="project-desc">
      A demo application exploring Spring Data REST for rapid, hypermedia-driven
      API development.
    </div>
    <div class="project-tags">
      <span class="project-tag">Java</span>
      <span class="project-tag">Spring Data REST</span>
    </div>
    <div>
      <a href="https://github.com/praveen-raja/spring-data-rest-demo">View on GitHub</a>
    </div>
  </div>

  <div class="project-card">
    <h3>Learn-DSA</h3>
    <div class="project-meta">Learning</div>
    <div class="project-desc">
      My data-structures-and-algorithms practice in Java.
    </div>
    <div class="project-tags">
      <span class="project-tag">Java</span>
      <span class="project-tag">DSA</span>
    </div>
    <div>
      <a href="https://github.com/praveen-raja/Learn-DSA">View on GitHub</a>
    </div>
  </div>

</div>

Want to see everything? Browse all repositories on
[GitHub](https://github.com/praveen-raja?tab=repositories).
