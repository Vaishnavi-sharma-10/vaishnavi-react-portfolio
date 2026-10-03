import React from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowDownRight, ArrowUpRight, Code2, Layers3, Sparkles, Menu, Mail, Linkedin, Github, MoveUpRight, Monitor, BrainCircuit, Palette } from 'lucide-react';
import './styles.css';

const linkedin = 'https://www.linkedin.com/in/vaishnavi-sharma-4550b83a2/';
const projects = [
  {
    number: '01',
    type: 'AI / WEB EXPERIENCE · IN DEVELOPMENT',
    title: 'Posture AI',
    description: 'A web experience exploring activity and posture classification—sitting, standing, walking and running—with a clear, user-friendly way to understand results.',
    tags: ['AI Concepts', 'Frontend', 'Human-centred UI'],
    visual: 'posture'
  },
  {
    number: '02',
    type: 'WEB APPLICATION',
    title: 'Public Distribution System',
    description: 'A digital interface concept focused on presenting public distribution and ration-card-related information in a structured, approachable way.',
    tags: ['Web App', 'Information Design', 'UI'],
    visual: 'pds'
  },
  {
    number: '03',
    type: 'BRAND WEBSITE CONCEPT · NOT DEPLOYED',
    title: 'Crave & Crumb',
    description: 'A product-focused website concept for a cookie brand, designed around visual storytelling, brand presentation and online product discovery.',
    tags: ['Web Design', 'Branding', 'Product UI'],
    visual: 'crumb'
  },
  {
    number: '04',
    type: 'CREATIVE WEB DESIGN',
    title: '3D Web Experiences',
    description: 'Experimental website concepts that explore depth, layered layouts and motion-led presentation to make digital experiences feel more immersive.',
    tags: ['Creative Coding', '3D-inspired UI', 'Interaction'],
    visual: 'orbit'
  }
];

function ProjectArt({ type }) {
  if (type === 'posture') return <div className="art art-posture"><div className="scan-line"/><div className="person"><span/><i/><b/><em/></div><div className="art-label">POSE / 04 <span>● LIVE CONCEPT</span></div><div className="metric metric-one">POSTURE <strong>ANALYSIS</strong></div><div className="metric metric-two">CONFIDENCE <strong>94.8%</strong></div></div>;
  if (type === 'pds') return <div className="art art-pds"><div className="pds-top">CITIZEN SERVICES <span>↗</span></div><div className="pds-card"><small>RATION CARD</small><strong>Public Distribution<br/>System</strong><div className="pds-lines"><i/><i/><i/></div><span className="pds-dot"/></div><div className="pds-side">ACCESS · INFORMATION · SUPPORT</div></div>;
  if (type === 'crumb') return <div className="art art-crumb"><span className="crumb-stamp">BAKED<br/>WITH JOY</span><div className="cookie cookie-a"/><div className="cookie cookie-b"/><div className="crumb-title">crave <i>&</i><br/>crumb.</div><span className="crumb-caption">A LITTLE BITE OF HAPPY</span></div>;
  return <div className="art art-orbit"><div className="orbit-ring ring-a"/><div className="orbit-ring ring-b"/><div className="orbit-ring ring-c"/><div className="orbit-core">3D<span>WEB</span></div><div className="orbit-tag tag-a">DEPTH</div><div className="orbit-tag tag-b">MOTION</div><div className="orbit-tag tag-c">PLAY</div></div>;
}

function App() {
  return <div className="site-shell">
    <header className="nav">
      <a className="wordmark" href="#home"><span className="mark">V.</span><span>VAISHNAVI<br/><small>SHARMA</small></span></a>
      <nav><a href="#work">Work</a><a href="#about">About</a><a href="#skills">Skills</a></nav>
      <a className="nav-cta" href="mailto:vaishnavi102518@gmail.com">LET'S TALK <ArrowUpRight size={15}/></a>
    </header>

    <main>
      <section className="hero section" id="home">
        <div className="hero-copy">
          <div className="eyebrow"><span className="status-dot"/> AVAILABLE FOR INTERNSHIP OPPORTUNITIES</div>
          <h1>Design-minded.<br/><em>Code-driven.</em><br/>Curious by nature.</h1>
          <p className="hero-text">I’m Vaishnavi — a Computer Science & Design student exploring the space where thoughtful interfaces, creative web design and emerging AI meet.</p>
          <div className="hero-actions"><a className="button button-dark" href="#work">EXPLORE MY WORK <ArrowDownRight size={17}/></a><a className="text-link" href={`mailto:vaishnavi102518@gmail.com`}>Get in touch <ArrowUpRight size={15}/></a></div>
          <div className="hero-meta"><span>BASED IN INDIA</span><span className="meta-line"/><span>FRONTEND · UI/UX · CREATIVE WEB</span></div>
        </div>
        <div className="hero-art">
          <div className="hero-grid"/>
          <div className="floating-note note-top"><Sparkles size={15}/> IDEAS INTO INTERFACES</div>
          <div className="hero-orb"><div className="orb-inner"><span>V</span><i/></div><div className="orb-ring orb-ring-1"/><div className="orb-ring orb-ring-2"/></div>
          <div className="hero-sticker">MAKE IT<br/><em>MEANINGFUL.</em></div>
          <div className="floating-note note-bottom"><span className="tiny-square"/> ALWAYS LEARNING, ALWAYS MAKING</div>
          <span className="hero-index">FIG. 01 — THE CREATIVE PROCESS</span>
        </div>
        <a className="scroll-cue" href="#work"><span>SCROLL TO EXPLORE</span><ArrowDownRight size={17}/></a>
      </section>

      <section className="intro-strip"><span>GOOD DESIGN HAS A POINT OF VIEW.</span><span className="strip-star">✳</span><span>GOOD CODE MAKES IT REAL.</span><span className="strip-star">✳</span><span>STAY CURIOUS.</span></section>

      <section className="work section" id="work">
        <div className="section-heading"><div><div className="eyebrow">01 / SELECTED PROJECTS</div><h2>Things I’m <em>making.</em></h2></div><p>A mix of practical web applications and visual experiments. Each project is a chance to learn by building.</p></div>
        <div className="project-grid">{projects.map(p => <article className="project-card" key={p.number}>
          <ProjectArt type={p.visual}/>
          <div className="project-info"><div className="project-kicker"><span>{p.number}</span>{p.type}</div><div className="project-title-row"><h3>{p.title}</h3><span className="project-arrow"><ArrowUpRight size={19}/></span></div><p>{p.description}</p><div className="tags">{p.tags.map(t => <span key={t}>{t}</span>)}</div></div>
        </article>)}</div>
        <p className="project-note">Project descriptions reflect current concepts and development status. Add verified demos, repositories and implementation details before publishing.</p>
      </section>

      <section className="about section" id="about">
        <div className="about-left"><div className="eyebrow">02 / A LITTLE ABOUT ME</div><h2>Building for<br/>the <em>feeling</em><br/>as much as<br/>the function.</h2><div className="about-doodle">✳</div></div>
        <div className="about-right"><p className="about-lead">I’m a B.Tech Computer Science & Design undergraduate at Madhav Institute of Technology & Science, Gwalior.</p><p>I enjoy turning ideas into responsive interfaces, exploring visual systems and finding ways to make digital experiences feel intuitive and memorable. I’m currently looking for a paid internship in frontend development, web design or UI/UX where I can contribute to real projects and keep growing through hands-on work.</p>
          <div className="education-card"><div className="edu-icon"><Layers3 size={20}/></div><div><span>EDUCATION</span><h3>B.Tech — Computer Science & Design</h3><p>MITS, Gwalior · Expected graduation year to be added</p></div><div className="edu-score"><strong>6.3</strong><small>CGPA / 10<br/>AFTER YEAR 1</small></div></div>
          <div className="semester-row"><span>SEMESTER 01 <strong>6.1 / 10</strong></span><span>SEMESTER 02 <strong>6.6 / 10</strong></span></div>
        </div>
      </section>

      <section className="skills section" id="skills">
        <div className="section-heading"><div><div className="eyebrow">03 / MY TOOLKIT</div><h2>Curiosity, meet <em>craft.</em></h2></div><p>My current foundation, with plenty more to explore.</p></div>
        <div className="skills-grid">
          <div className="skill-block"><div className="skill-icon"><Monitor size={21}/></div><span className="skill-number">01</span><h3>Web development</h3><p>Building the structure and behaviour behind responsive web experiences.</p><div className="skill-chips"><span>HTML</span><span>CSS</span><span>JavaScript</span></div></div>
          <div className="skill-block"><div className="skill-icon"><Code2 size={21}/></div><span className="skill-number">02</span><h3>Programming</h3><p>Strengthening programming fundamentals and problem-solving skills.</p><div className="skill-chips"><span>C</span><span>C++</span></div></div>
          <div className="skill-block"><div className="skill-icon"><Palette size={21}/></div><span className="skill-number">03</span><h3>Design & interaction</h3><p>Exploring responsive layouts, web UI, visual hierarchy and interactive experiences.</p><div className="skill-chips"><span>UI/UX</span><span>Web design</span><span>Creative web</span></div></div>
          <div className="skill-block"><div className="skill-icon"><BrainCircuit size={21}/></div><span className="skill-number">04</span><h3>Emerging ideas</h3><p>Interested in AI-powered web concepts and presenting complex outputs clearly.</p><div className="skill-chips"><span>AI concepts</span><span>Human-centred UI</span></div></div>
        </div>
      </section>

      <section className="contact section" id="contact"><div className="contact-top"><div className="eyebrow">04 / YOUR NEXT COLLABORATOR?</div><span className="contact-spark">✳</span></div><h2>Have a good idea?<br/><em>Let’s make it real.</em></h2><div className="contact-bottom"><p>I’m open to internship opportunities, creative collaborations and projects that let me learn by doing.</p><a className="button button-light" href="mailto:vaishnavi102518@gmail.com">SAY HELLO <ArrowUpRight size={17}/></a></div></section>
    </main>
    <footer className="footer"><a className="wordmark" href="#home"><span className="mark">V.</span><span>VAISHNAVI<br/><small>SHARMA</small></span></a><span className="footer-note">DESIGNED WITH CURIOSITY · BUILT TO KEEP GROWING</span><div className="socials"><a href={linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={17}/></a><a href="mailto:vaishnavi102518@gmail.com" aria-label="Email"><Mail size={17}/></a><a href="#contact" aria-label="Contact"><MoveUpRight size={17}/></a></div><span className="copyright">© 2026</span></footer>
  </div>
}

createRoot(document.getElementById('root')).render(<App />);
