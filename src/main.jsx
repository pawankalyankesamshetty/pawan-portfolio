import React from "react";
import { createRoot } from "react-dom/client";
import { motion } from "framer-motion";
import {
  ArrowRight, Github, Linkedin, Mail, Download, ExternalLink, Code2,
  Database, BrainCircuit, Server, Sparkles, Menu, X, ChevronDown,
  Terminal, Layers3, Send, GraduationCap, UsersRound, Globe2, FileText,
  Moon, Sun, BriefcaseBusiness
} from "lucide-react";
import "./styles.css";

const profile = {
  name: "Pawan Kalyan",
  role: "Python Full Stack Developer",
  email: "pawankalyankesamshetty@gmail.com",
  github: "https://github.com/pawankalyan2424",
  linkedin: "https://www.linkedin.com/in/pawankesam",
  resume: "/Pawan-Kalyan-Resume.pdf"
};

const skills = [
  { name: "Python", level: 92, icon: Code2, tone: "blue" },
  { name: "Django", level: 88, icon: Server, tone: "gold" },
  { name: "React.js", level: 84, icon: Layers3, tone: "violet" },
  { name: "JavaScript", level: 82, icon: Terminal, tone: "gold" },
  { name: "PostgreSQL", level: 80, icon: Database, tone: "blue" },
  { name: "HTML", level: 92, icon: Code2, tone: "gold" },
  { name: "CSS", level: 90, icon: Code2, tone: "violet" },
  { name: "REST APIs", level: 82, icon: Server, tone: "blue" },
  { name: "Agentic AI", level: 74, icon: BrainCircuit, tone: "gold" }
];

const projects = [
  { title: "CodeLevels", category: "Developer Platform", description: "A full-stack Python assessment platform with level-based quizzes, progress tracking and a clean learning experience.", tags: ["Python", "Django", "JavaScript"], icon: Terminal, accent: "blue", live: "https://pawanshetty.pythonanywhere.com", code: "https://github.com/pawankalyan2424/codelevels" },
  { title: "AI Chat Assistant", category: "Generative AI", description: "A personal assistant direction exploring local LLM workflows, conversational interfaces and private AI experimentation.", tags: ["Python", "LLM", "Ollama"], icon: BrainCircuit, accent: "violet", live: "#", code: "#" },
  { title: "Student Management", category: "Full Stack", description: "A Django CRUD application demonstrating database operations, structured backend architecture and practical UI flows.", tags: ["Django", "PostgreSQL", "HTML/CSS"], icon: Database, accent: "gold", live: "#", code: "#" },
  { title: "Voice Assistant", category: "Python + AI", description: "A Python voice assistant exploring speech interaction, commands and useful desktop automation workflows.", tags: ["Python", "Voice", "Automation"], icon: Sparkles, accent: "blue", live: "#", code: "#" },
  { title: "SecureStream", category: "Web Application", description: "A security-focused web concept with protected flows, authentication thinking and a polished user experience.", tags: ["React", "Security", "Web"], icon: Layers3, accent: "violet", live: "#", code: "#" },
  { title: "Medhara AI", category: "AI Product", description: "An AI-oriented product concept combining a practical user workflow with a clean, modern application interface.", tags: ["AI", "React", "Python"], icon: BrainCircuit, accent: "gold", live: "#", code: "#" }
];

const nav = ["Home", "About", "Skills", "Projects", "Experience", "Contact"];

function App() {
  const [open, setOpen] = React.useState(false);
  const [dark, setDark] = React.useState(false);
  const words = ["code", "intelligence"];
  const [typedWord, setTypedWord] = React.useState("");
  const [wordIndex, setWordIndex] = React.useState(0);
  const [typingMode, setTypingMode] = React.useState("typing");

  React.useEffect(() => {
    const current = words[wordIndex];
    const delay = typingMode === "typing"
      ? (typedWord === current ? 1350 : 85)
      : (typedWord === "" ? 260 : 48);
    const timer = window.setTimeout(() => {
      if (typingMode === "typing") {
        if (typedWord.length < current.length) setTypedWord(current.slice(0, typedWord.length + 1));
        else setTypingMode("deleting");
      } else if (typedWord.length > 0) {
        setTypedWord(current.slice(0, typedWord.length - 1));
      } else {
        setWordIndex((i) => (i + 1) % words.length);
        setTypingMode("typing");
      }
    }, delay);
    return () => window.clearTimeout(timer);
  }, [typedWord, wordIndex, typingMode]);

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <div className={`app ${dark ? "theme-dark" : ""}`}>
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <div className="ambient ambient-three" />
      <div className="grid-overlay" />

      <header className="navbar glass-nav">
        <button className="brand" onClick={() => scrollTo("Home")} aria-label="Go home">
          <span className="brand-mark"><i>P</i><b>K</b></span>
          <span className="brand-copy"><strong>Pawan Kalyan</strong><small>Full Stack Developer</small></span>
        </button>

        <nav className={open ? "nav-links open" : "nav-links"}>
          {nav.map((item) => <button key={item} onClick={() => scrollTo(item)} className={item === "Home" ? "active" : ""}>{item}</button>)}
        </nav>

        <div className="nav-actions">
          <a className="nav-resume" href={profile.resume} target="_blank" rel="noreferrer"><Download size={15} /> Download Resume</a>
          <button className="theme-btn" onClick={() => setDark(!dark)} aria-label="Toggle theme">{dark ? <Sun size={17} /> : <Moon size={17} />}</button>
          <button className="mobile-menu" onClick={() => setOpen(!open)} aria-label="Menu">{open ? <X /> : <Menu />}</button>
        </div>
      </header>

      <main>
        <section id="home" className="hero section editorial-hero">
          <motion.div className="hero-copy editorial-copy" initial={{ opacity: 0, x: -35 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: .8 }}>
            <div className="editorial-availability"><span className="status-dot" /> Available for Opportunities</div>
            <h1><span className="hero-line-black">Full Stack</span><span className="hero-line-gold">Developer</span></h1>
            <p className="editorial-intro">I build modern web applications with clean code,<br className="desktop-break" /> great user experiences and real world solutions.<br />Turning ideas into <strong>impactful digital products.</strong></p>

            <div className="hero-buttons editorial-buttons">
              <button className="primary-btn editorial-primary" onClick={() => scrollTo("Projects")}><Code2 size={17} /> View My Work <ArrowRight size={17} /></button>
              <a className="ghost-btn editorial-resume" href={profile.resume} target="_blank" rel="noreferrer"><FileText size={17} /> Download Resume</a>
            </div>

            <div className="editorial-stats">
              <div className="editorial-stat"><div className="stat-icon purple"><GraduationCap size={20} /></div><div><strong>2025</strong><b>Graduate</b><small>B.Tech ECE</small></div></div>
              <div className="editorial-stat"><div className="stat-icon gold"><Layers3 size={20} /></div><div><strong>6+</strong><b>Projects</b><small>Built & deployed</small></div></div>
              <div className="editorial-stat"><div className="stat-icon lavender"><UsersRound size={20} /></div><div><strong>8+</strong><b>Technologies</b><small>Across my stack</small></div></div>
            </div>

            <div className="editorial-socials">
              <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={19} /></a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={19} /></a>
              <a href={`mailto:${profile.email}`} aria-label="Email"><Mail size={19} /></a>
              <button onClick={() => scrollTo("Contact")} aria-label="Contact"><Globe2 size={19} /></button>
              <span className="connect-label">Connect with me</span>
            </div>
          </motion.div>

          <motion.div className="hero-visual editorial-visual" initial={{ opacity: 0, x: 35, scale: .96 }} animate={{ opacity: 1, x: 0, scale: 1 }} transition={{ duration: .9, delay: .08 }}>
            <div className="portrait-aura aura-one" />
            <div className="portrait-aura aura-two" />
            <div className="portrait-card">
              <div className="portrait-bg-glow" />
              <div className="portrait-signature">Blue<br />Eyes</div>
              <div className="portrait-code-badge">&lt;/&gt;</div>
              <div className="portrait-image-wrap"><img src="/pawan_photo.png.png" alt="Pawan Kalyan" /></div>
              <motion.div className="portrait-chip frontend" animate={{ y: [0, -8, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}><span />Frontend<br />Developer</motion.div>
              <motion.div className="portrait-chip backend" animate={{ y: [0, 7, 0] }} transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}><span />Backend<br />Developer</motion.div>
              <motion.div className="portrait-chip solver" animate={{ y: [0, -6, 0] }} transition={{ duration: 4.4, repeat: Infinity, ease: "easeInOut" }}><span />AI<br />Explorer</motion.div>
              <div className="portrait-bottom-tag"><Sparkles size={19} /><span>Turning Ideas into<br /><b>Real World Solutions</b></span></div>
              <div className="code-mini"><span><i /> <i /> <i /></span><code>Building with<br /><b>code</b> <em>|</em> <strong>{typedWord || "code"}</strong><em>|</em></code></div>
              <div className="portrait-dots" />
            </div>
          </motion.div>

          <div className="hero-techbar glass-panel">
            <span className="tech-title">TECHNOLOGIES I WORK WITH</span>
            <span>React</span><i /><span>Python</span><i /><span>Django</span><i /><span>PostgreSQL</span><i /><span>JavaScript</span>
          </div>
          <div className="scroll-indicator"><span className="mouse-icon" /><small>Scroll Down</small></div>
        </section>

        <section id="about" className="section about">
          <div className="section-heading"><span>01 — ABOUT</span><h2>A developer who enjoys <em>building.</em></h2></div>
          <div className="about-grid">
            <div className="about-main glass"><p className="lead">I’m a 2025 B.Tech ECE graduate and software-development fresher who moved deeply into modern web development and AI.</p><p>My learning path has been hands-on: Python fundamentals, Django backends, REST APIs, PostgreSQL, React interfaces and AI experiments. I care about more than making an app work — I want the product to feel intentional, responsive and professional.</p><div className="principles"><div><span>01</span><b>Clean engineering</b><small>Readable, maintainable code</small></div><div><span>02</span><b>Product thinking</b><small>UX before unnecessary complexity</small></div><div><span>03</span><b>Continuous learning</b><small>Web, backend & AI together</small></div></div></div>
            <div className="about-side"><div className="stat glass"><strong>2025</strong><span>B.Tech ECE Graduate</span></div><div className="stat glass"><strong>8+</strong><span>Core technologies</span></div><div className="stat glass"><strong>6</strong><span>Featured projects</span></div></div>
          </div>
        </section>

        <section id="skills" className="section">
          <div className="section-heading"><span>02 — SKILLS</span><h2>My technical <em>toolkit.</em></h2></div>
          <div className="skills-grid">{skills.map((s, i) => { const Icon = s.icon; return <motion.div className="skill-card glass" key={s.name} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * .04 }}><div className={`skill-icon ${s.tone}`}><Icon size={20} /></div><div className="skill-info"><div><b>{s.name}</b><span>{s.level}%</span></div><div className="bar"><i style={{ width: `${s.level}%` }} /></div></div></motion.div>; })}</div>
          <div className="tech-strip glass"><span>STACK</span><b>Python</b><i /><b>Django</b><i /><b>React.js</b><i /><b>JavaScript</b><i /><b>HTML</b><i /><b>CSS</b><i /><b>PostgreSQL</b><i /><b>Git</b><i /><b>REST API</b><i /><b>Agentic AI</b></div>
        </section>

        <section id="projects" className="section projects">
          <div className="section-heading row-heading"><div><span>03 — SELECTED WORK</span><h2>Projects with a <em>purpose.</em></h2></div><span className="project-note">Built to learn. Designed to ship.</span></div>
          <div className="projects-grid">{projects.map((p, i) => { const Icon = p.icon; return <motion.article className={`project-card glass ${p.accent}`} key={p.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: (i % 3) * .07 }}><div className="project-head"><div className="project-icon"><Icon size={22} /></div><span>{String(i + 1).padStart(2, "0")}</span></div><span className="project-category">{p.category}</span><h3>{p.title}</h3><p>{p.description}</p><div className="tags">{p.tags.map(t => <span key={t}>{t}</span>)}</div><div className="project-links"><a href={p.live} target={p.live === "#" ? undefined : "_blank"} rel={p.live === "#" ? undefined : "noreferrer"}>View project <ExternalLink size={15} /></a><a href={p.code} target={p.code === "#" ? undefined : "_blank"} rel={p.code === "#" ? undefined : "noreferrer"} aria-label="Source code"><Github size={17} /></a></div></motion.article>; })}</div>
        </section>

        <section id="experience" className="section journey">
          <div className="section-heading"><span>04 — JOURNEY</span><h2>From electronics to <em>software.</em></h2></div>
          <div className="timeline"><div className="timeline-item"><span>2025</span><div><b>B.Tech — ECE</b><p>Graduated and began focusing on software engineering, web development and developer tooling.</p></div></div><div className="timeline-item"><span>2025+</span><div><b>Full Stack Development</b><p>Built with Python, Django, REST APIs, PostgreSQL, HTML, CSS, JavaScript and React.</p></div></div><div className="timeline-item"><span>Now</span><div><b>AI + Product Engineering</b><p>Exploring LLM applications, Ollama, agentic AI and polished production-style interfaces.</p></div></div></div>
        </section>

        <section id="contact" className="section contact"><div className="contact-card"><div className="contact-glow" /><span>05 — CONTACT</span><h2>Have an opportunity?<br /><em>Let’s build something.</em></h2><p>I’m open to software engineering, Python/Django, full-stack and AI-focused opportunities.</p><a className="primary-btn" href={`mailto:${profile.email}`}>Start a conversation <Send size={17} /></a><div className="contact-links"><a href={`mailto:${profile.email}`}><Mail size={17} />{profile.email}</a><a href={profile.github} target="_blank" rel="noreferrer"><Github size={17} />GitHub</a><a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={17} />LinkedIn</a></div></div></section>
      </main>

      <footer><span>© {new Date().getFullYear()} Pawan Kalyan</span><span>Designed & built with React</span><button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}><ChevronDown size={16} className="up" /> Back to top</button></footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
