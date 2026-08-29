---
title: "Resume"
permalink: /resume/
layout: single
author_profile: false
classes: wide no-page-title
---

<style>
/* Hide the theme's auto page title on this page (we're already on Resume). */
.no-page-title .page__title { display: none; }
</style>

<style>
.resume {
  max-width: 900px;
  margin: 0 auto;
}
.resume-header {
  text-align: center;
  border-bottom: 2px solid #7c3aed;
  padding-bottom: 1rem;
  margin-bottom: 1.5rem;
}
.resume-avatar {
  display: block;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  margin: 0 auto 0.9rem;
  padding: 4px;
  background: linear-gradient(135deg, #7c3aed, #ec4899, #06b6d4);
  box-shadow: 0 8px 24px rgba(124, 58, 237, 0.35);
}
.resume-header h1 { margin-bottom: 0.15rem; }
.resume-header .resume-title {
  font-size: 1.1rem;
  opacity: 0.85;
  margin-bottom: 0.5rem;
}
.resume-contact a { margin: 0 0.4rem; white-space: nowrap; }
.resume section { margin-bottom: 1.75rem; }
.resume h2 {
  border-bottom: 1px solid rgba(128,128,128,0.35);
  padding-bottom: 0.25rem;
  margin-bottom: 0.85rem;
}
.resume-entry { margin-bottom: 1.1rem; }
.resume-entry-head {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 0.25rem;
}
.resume-entry-head .role { font-weight: 700; }
.resume-entry-head .meta { opacity: 0.75; font-size: 0.9rem; }
.resume-entry ul { margin-top: 0.4rem; }
.resume-skills {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 0.75rem 2rem;
}
.resume-tags .tag {
  display: inline-block;
  font-size: 0.78rem;
  padding: 0.12rem 0.55rem;
  margin: 0 0.3rem 0.35rem 0;
  border-radius: 999px;
  background: rgba(82, 173, 200, 0.18);
}
@media (max-width: 600px) {
  .resume-entry-head { flex-direction: column; }
}
</style>

<div class="resume" markdown="0">

  <div class="resume-header">
    <img class="resume-avatar" src="https://avatars.githubusercontent.com/u/40530606?v=4" alt="Praveenkumar Raja" width="120" height="120">
    <h1>Praveenkumar Raja</h1>
    <div class="resume-title">Software Engineer &middot; Java &amp; Backend Developer</div>
    <div class="resume-contact">
      <a href="mailto:ipraveenkumar.raja@gmail.com">ipraveenkumar.raja@gmail.com</a> &middot;
      <a href="https://github.com/praveen-raja">GitHub</a> &middot;
      <a href="https://linkedin.com/in/praveenkumar-raja">LinkedIn</a> &middot;
      <span>Coimbatore, India</span>
    </div>
  </div>

  <section>
    <h2>Summary</h2>
    <p>
      Software Engineer specializing in Java and backend development. I build
      enterprise-scale microservices, REST APIs, and multi-cloud integrations,
      with a focus on secure data workflows, reliability, and observability.
    </p>
  </section>

  <section>
    <h2>Experience</h2>

    <div class="resume-entry">
      <div class="resume-entry-head">
        <span class="role">Software Engineer &mdash; Exterro</span>
        <span class="meta">Feb 2023 &ndash; Present &middot; Coimbatore, IN</span>
      </div>
      <ul>
        <li>Engineered enterprise <strong>In-Place Preservation</strong> workflows
          for secure data retention and governance across distributed datasets.</li>
        <li>Architected multi-cloud enterprise connectors for Google Vault,
          Microsoft 365 eDiscovery, Slack, iManage, Proofpoint, FileNet, CrashPlan,
          and Code42 into the e-Discovery suite.</li>
        <li>Built internal admin frameworks and process-monitoring utilities for
          troubleshooting, diagnostics, and runtime execution tracking.</li>
        <li>Designed automated <strong>ETL data-migration pipelines</strong> into
          enterprise MSSQL databases with strict schema validation.</li>
        <li>Engineered real-time health-monitoring <strong>REST APIs</strong> for
          system metrics and message-queue status, improving observability.</li>
        <li>Managed <strong>L3 production support</strong> under strict SLAs,
          performing root cause analysis and deploying patches.</li>
      </ul>
      <div class="resume-tags">
        <span class="tag">Core Java</span>
        <span class="tag">Spring Boot</span>
        <span class="tag">MSSQL</span>
        <span class="tag">Redis</span>
        <span class="tag">ActiveMQ</span>
        <span class="tag">Jira</span>
        <span class="tag">AWS</span>
        <span class="tag">REST APIs</span>
        <span class="tag">SVN</span>
        <span class="tag">GitHub</span>
      </div>
    </div>

    <div class="resume-entry">
      <div class="resume-entry-head">
        <span class="role">Software Engineer &mdash; Cognizant</span>
        <span class="meta">Oct 2020 &ndash; Feb 2023 &middot; Coimbatore, IN</span>
      </div>
      <ul>
        <li>Maintained and enhanced a high-traffic <strong>Single Sign-On (SSO)</strong>
          authentication and authorization application serving <strong>160K+ users</strong>.</li>
        <li>Administered Jira Cloud, integrated third-party applications, and
          optimized internal Atlassian workflows.</li>
        <li>Built and optimized middleware <strong>REST API</strong> services for
          IVR integration with customer-service operations.</li>
      </ul>
      <div class="resume-tags">
        <span class="tag">Java</span>
        <span class="tag">Spring Boot</span>
        <span class="tag">Microservices</span>
        <span class="tag">REST APIs</span>
        <span class="tag">SQL</span>
        <span class="tag">Git</span>
        <span class="tag">Splunk</span>
        <span class="tag">Jira</span>
      </div>
    </div>

    <div class="resume-entry">
      <div class="resume-entry-head">
        <span class="role">Intern &mdash; Cognizant</span>
        <span class="meta">Dec 2019 &ndash; Apr 2020 &middot; Coimbatore, IN</span>
      </div>
      <ul>
        <li>Trained in core full-stack software development, focusing on Java
          backend frameworks.</li>
      </ul>
    </div>
  </section>

  <section>
    <h2>Skills</h2>
    <div class="resume-skills">
      <div>
        <strong>Proficient</strong>
        <ul>
          <li>Java 8</li>
          <li>Spring Boot</li>
          <li>Microservices</li>
          <li>REST API Development</li>
          <li>SQL</li>
          <li>ActiveMQ / Redis</li>
          <li>Git / SVN</li>
          <li>Jira Administration</li>
        </ul>
      </div>
      <div>
        <strong>Familiar</strong>
        <ul>
          <li>JavaScript / Angular</li>
          <li>AWS Services</li>
          <li>Docker / Kubernetes</li>
        </ul>
      </div>
    </div>
  </section>

  <section>
    <h2>Projects</h2>
    <div class="resume-entry">
      <div class="resume-entry-head">
        <span class="role">Pension Management Application</span>
        <span class="meta">Dec 2022</span>
      </div>
      <p>Microservice application with REST endpoints that calculate pension
        payouts based on user inputs and profile details.</p>
      <div class="resume-tags">
        <span class="tag">Java</span>
        <span class="tag">Spring Boot</span>
        <span class="tag">Microservices</span>
        <span class="tag">Angular</span>
        <span class="tag">Docker</span>
        <span class="tag">MySQL</span>
      </div>
    </div>
    <div class="resume-entry">
      <div class="resume-entry-head">
        <span class="role">TweetApp Application</span>
        <span class="meta">Jan 2022</span>
      </div>
      <p>Microservice application enabling users to create, update, and interact
        with tweets in real time.</p>
      <div class="resume-tags">
        <span class="tag">Java</span>
        <span class="tag">Spring Boot</span>
        <span class="tag">Microservices</span>
        <span class="tag">Angular</span>
        <span class="tag">Docker</span>
        <span class="tag">AWS ECS / ECR / LB</span>
        <span class="tag">MySQL</span>
      </div>
    </div>
  </section>

  <section>
    <h2>Education</h2>
    <div class="resume-entry">
      <div class="resume-entry-head">
        <span class="role">B.E. in Mechatronics &mdash; Hindusthan College</span>
        <span class="meta">May 2020 &middot; Coimbatore, TN</span>
      </div>
      <p>CGPA: 8.75 / 10.0</p>
    </div>
    <div class="resume-entry">
      <div class="resume-entry-head">
        <span class="role">HSC (Bio-Maths) &mdash; NMHSS</span>
        <span class="meta">May 2016 &middot; Erode, TN</span>
      </div>
      <p>Percentage: 84%</p>
    </div>
  </section>

  <section>
    <h2>Awards</h2>
    <ul>
      <li>Received the "Ultimate Contributor" award at Cognizant.</li>
      <li>Top 5% in the CloudSEK CTF event (2,500+ participants).</li>
      <li>Secured 5th place in a national-level Go-Kart championship.</li>
    </ul>
  </section>

  <section>
    <h2>Certifications</h2>
    <ul>
      <li>Junior Software Engineer (FSE)</li>
      <li><a href="https://www.udemy.com/certificate/UC-f1a81cd9-4af4-44dc-8f52-9823aa9e01b9/">AWS Essentials &mdash; Hands-on Learning</a></li>
      <li><a href="https://www.credly.com/badges/89bf4d9b-47d7-4cfd-b656-bba05a26abca/linked_in_profile">Google IT Support Certificate</a></li>
      <li><a href="https://www.coursera.org/account/accomplishments/verify/SMUQEC84QXD7">Intro to Bash Shell Scripting</a></li>
      <li><a href="https://www.coursera.org/account/accomplishments/verify/KWKQ9FCSES3K">Cybersecurity Tools &amp; Attacks</a></li>
      <li><a href="https://kodekloud.com/certificate-verification/83B3A2A1A2-83B97A99FF-83AD6F90FA/">Kubernetes Labs for Beginners</a></li>
    </ul>
  </section>

  <section>
    <h2>Languages</h2>
    <p>English &middot; Tamil</p>
  </section>

</div>
