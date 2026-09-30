import React, { useEffect, useState } from "react";
import "./styles.css";

const GITHUB = "https://github.com/Parmeet3342";
const LINKEDIN = "https://www.linkedin.com/in/parmeet-singh-0ab088296/";
const EMAIL = "parmeetsingh.indulhi@gmail.com";

const navItems = ["about", "stack", "experience", "projects", "achievements", "contact"];

const skills = [
  { title: "Languages", items: ["Java", "Python", "SQL"] },
  { title: "Frontend", items: ["React", "HTML5", "CSS3", "Tailwind CSS", "Redux"] },
  { title: "Backend", items: ["Node.js", "Express.js", "REST APIs", "JWT", "bcrypt"] },
  { title: "Databases", items: ["MongoDB", "MySQL", "Mongoose"] },
  { title: "Enterprise Security", items: ["Vulnerability Management", "Claroty", "Nozomi", "Microsoft Defender for IoT"] },
  { title: "Tools", items: ["Power BI", "Git", "GitHub"] }
];

const projects = [
  {
    number: "01",
    label: "FULL-STACK · EDTECH",
    title: "Study Notion",
    description: "A MERN-based EdTech platform with secure JWT authentication, role-based access for Admin, Instructor and Student users, course management and progress tracking.",
    tags: ["React", "Node.js", "Express.js", "MongoDB", "JWT"],
    kind: "study"
  },
  {
    number: "02",
    label: "FULL-STACK · NETWORKING",
    title: "DevTinder",
    description: "A developer networking application for profiles, discovery and connection requests, backed by secure Node/Express REST APIs and MongoDB.",
    tags: ["React", "Node.js", "Express.js", "MongoDB", "Mongoose", "JWT"],
    kind: "dev"
  }
];

const achievements = [
  ["01", "Accenture Innovator Award", "Enterprise application development & automation"],
  ["02", "Best Emerging Fresher", "Accenture recognition"],
  ["03", "Rank 1 — Mathematics Olympiad", "1500+ participants"],
  ["04", "3rd Position — Inter-school Debate", "50+ schools"]
];

function App() {
  const [dark, setDark] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [progress, setProgress] = useState(0);

  const go = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? (window.scrollY / max) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = ["home", ...navItems].map(id => document.getElementById(id)).filter(Boolean);
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter(e => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) setActive(visible.target.id);
    }, { rootMargin: "-35% 0px -55% 0px", threshold: [0.05, 0.2, 0.5] });
    sections.forEach(s => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });
    elements.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className={dark ? "app dark" : "app light"}>
      <div className="progress"><span style={{ width: `${progress}%` }} /></div>
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <header className="nav">
        <button className="brand" onClick={() => go("home")}>PARMEET<span>.</span></button>
        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          {navItems.map(item => (
            <button key={item} className={active === item ? "active" : ""} onClick={() => go(item)}>{item}</button>
          ))}
        </nav>
        <div className="nav-actions">
          <button className="theme" onClick={() => setDark(!dark)} aria-label="Toggle theme">{dark ? "☼" : "☾"}</button>
          <a href={GITHUB} target="_blank" rel="noreferrer">GitHub ↗</a>
          <button className="menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Open menu">{menuOpen ? "×" : "☰"}</button>
        </div>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="hero-copy">
            <div className="availability"><span /> AVAILABLE FOR SOFTWARE ENGINEERING OPPORTUNITIES</div>
            <p className="eyebrow">SOFTWARE ENGINEER · ACCENTURE</p>
            <h1>Engineering ideas<br /><em>into digital products.</em></h1>
            <p className="hero-text">I build scalable web applications and enterprise solutions with React, Node.js, REST APIs and modern data systems — with a strong focus on clean engineering.</p>
            <div className="hero-actions">
              <button className="primary" onClick={() => go("projects")}>View selected work <b>↘</b></button>
              <a className="secondary" href="/resume.pdf" target="_blank" rel="noreferrer">View resume ↗</a>
            </div>
            <div className="hero-meta"><span>INDIA</span><span>ACCENTURE</span><span>MERN STACK</span><span>127.0.0.1</span></div>
          </div>

          <div className="hero-art">
            <div className="art-frame">
              <img src="/hero-ps.png" alt="Abstract PS monogram artwork" />
              <div className="art-overlay" />
              <div className="art-top"><span>01</span><strong>BUILD</strong><small>SHIP WITH INTENT</small></div>
              <div className="art-bottom"><b>PS</b><div><strong>PARMEET SINGH</strong><span>SOFTWARE ENGINEER</span></div></div>
            </div>
            <div className="art-caption"><span>01</span><span>CODE · CREATE · ITERATE</span><span>SCROLL ↓</span></div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="section-tag">01 / ABOUT</div>
          <div className="about-grid reveal">
            <h2>Curious by nature.<br /><em>Precise by craft.</em></h2>
            <div className="about-copy">
              <p className="lead">I'm Parmeet Singh, a Software Engineer experienced in developing scalable web applications and enterprise solutions using the MERN stack.</p>
              <p>I work across React interfaces, RESTful APIs, authentication, databases and security-focused applications. I also enjoy data structures, algorithms and turning complex requirements into maintainable software.</p>
              <a href={LINKEDIN} target="_blank" rel="noreferrer" className="line-link">Connect on LinkedIn ↗</a>
            </div>
          </div>
          <div className="metrics reveal">
            <div><strong>700<span>+</span></strong><small>TOTAL CODING PROBLEMS</small></div>
            <div><strong>450<span>+</span></strong><small>LEETCODE</small></div>
            <div><strong>60<span>%</span></strong><small>LESS MANUAL EFFORT</small></div>
            <div><strong>20<span>%</span></strong><small>FEWER FALSE POSITIVES</small></div>
          </div>
        </section>

        <section id="stack" className="section band">
          <div className="section-tag">02 / STACK</div>
          <div className="section-head reveal"><h2>My toolkit.</h2><p>Technologies reflected in my professional work and projects.</p></div>
          <div className="skill-grid reveal">
            {skills.map((group, index) => (
              <article key={group.title} className="skill-card">
                <div className="card-index">0{index + 1}</div>
                <h3>{group.title}</h3>
                <div className="chips">{group.items.map(item => <span key={item}>{item}</span>)}</div>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="section">
          <div className="section-tag">03 / EXPERIENCE</div>
          <div className="section-head reveal"><h2>Professional<br /><em>experience.</em></h2><p>Building enterprise software and working at the intersection of application development and security.</p></div>
          <div className="jobs">
            <article className="job reveal">
              <div className="job-time">OCT 2025 — PRESENT</div>
              <div className="job-body">
                <div className="job-company">ACCENTURE · GURUGRAM <span>01</span></div>
                <h3>Associate Software Engineer</h3>
                <ul>
                  <li>Built frontend modules for a MERN-based Vulnerability Management Tool using React, Redux and REST APIs.</li>
                  <li>Worked with PLC/sensor log data for vulnerability analysis, helping reduce manual operational effort by 60%.</li>
                  <li>Developed and optimized detection rules across Claroty, Nozomi and Microsoft Defender for IoT, contributing to a 20% reduction in false positives.</li>
                </ul>
                <div className="chips">{["React", "Redux", "REST APIs", "Claroty", "Nozomi", "Defender for IoT"].map(x => <span key={x}>{x}</span>)}</div>
              </div>
            </article>
            <article className="job reveal">
              <div className="job-time">FEB 2025 — JUN 2025</div>
              <div className="job-body">
                <div className="job-company">ACCENTURE · GURUGRAM <span>02</span></div>
                <h3>Trainee</h3>
                <ul>
                  <li>Assisted in alert analysis and incident handling to reduce false positives.</li>
                  <li>Built Power BI dashboards for vulnerability tracking and reporting.</li>
                </ul>
                <div className="chips">{["Alert Analysis", "Incident Handling", "Power BI"].map(x => <span key={x}>{x}</span>)}</div>
              </div>
            </article>
          </div>
        </section>

        <section id="projects" className="section band projects-section">
          <div className="section-tag">04 / PROJECTS</div>
          <div className="section-head reveal"><h2>Selected<br /><em>work.</em></h2><p>Two full-stack builds that show product thinking, authentication, APIs and data modeling.</p></div>
          <div className="project-grid">
            {projects.map(project => (
              <article className="project reveal" key={project.number}>
                <div className="project-meta"><span>{project.number}</span><span>{project.label}</span></div>
                <div className={`project-preview ${project.kind}`}>
                  <div className="preview-browser"><i /><i /><i /><span>{project.kind === "study" ? "study-notion / dashboard" : "devtinder / discover"}</span></div>
                  {project.kind === "study" ? (
                    <div className="study-ui">
                      <aside><b>SN</b><span>Dashboard</span><span>Courses</span><span>Progress</span></aside>
                      <div className="dash"><small>WELCOME BACK</small><strong>Keep learning.</strong><div className="dash-bars"><i /><i /><i /></div><div className="dash-cards"><b>82%<small>Progress</small></b><b>12<small>Courses</small></b><b>07<small>Completed</small></b></div></div>
                    </div>
                  ) : (
                    <div className="dev-ui">
                      <div className="profile-mini"><span>PS</span><div><b>Software Engineer</b><small>React · Node · MongoDB</small></div></div>
                      <div className="dev-actions"><button>×</button><button>Connect</button></div>
                      <div className="dev-lines"><i /><i /><i /></div>
                    </div>
                  )}
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="chips">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
                <div className="project-links"><a href={GITHUB} target="_blank" rel="noreferrer">GitHub profile ↗</a><span>Live URL not supplied</span></div>
              </article>
            ))}
          </div>
          <p className="fine-print">Project visuals above are portfolio previews, not claimed screenshots of the live applications. Exact repository/live links can be swapped in when available.</p>
        </section>

        <section id="achievements" className="section">
          <div className="section-tag">05 / ACHIEVEMENTS</div>
          <div className="section-head reveal"><h2>Milestones<br /><em>along the way.</em></h2><p>Recognition for engineering, analytical and communication skills.</p></div>
          <div className="achievement-list">
            {achievements.map(([n, title, meta]) => <article className="achievement reveal" key={n}><span>{n}</span><div><h3>{title}</h3><p>{meta}</p></div><b>↗</b></article>)}
          </div>
        </section>

        <section className="section problem-section">
          <div className="section-tag">06 / PROBLEM SOLVING</div>
          <div className="problem-box reveal"><div><p className="eyebrow">CONSISTENT PRACTICE</p><h2>Strong fundamentals.<br /><em>Better engineering.</em></h2></div><div className="problem-stats"><div><strong>700+</strong><span>CODING PROBLEMS</span></div><div><strong>450+</strong><span>LEETCODE</span></div></div></div>
        </section>

        <section id="contact" className="section contact">
          <div className="section-tag">07 / CONTACT</div>
          <div className="contact-main reveal"><p className="eyebrow">HAVE AN IDEA OR OPPORTUNITY?</p><h2>Let's build something<br /><em>worth talking about.</em></h2><a className="email" href={`mailto:${EMAIL}`}>{EMAIL} ↗</a><div className="socials"><a href={GITHUB} target="_blank" rel="noreferrer">GitHub ↗</a><a href={LINKEDIN} target="_blank" rel="noreferrer">LinkedIn ↗</a></div></div>
        </section>
      </main>

      <footer><span>PARMEET SINGH © {new Date().getFullYear()}</span><span>THERE IS NO PLACE LIKE 127.0.0.1</span><button onClick={() => go("home")}>BACK TO TOP ↑</button></footer>
    </div>
  );
}

export default App;
