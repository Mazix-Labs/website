import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Plus, Minus, Menu, X, ArrowRight, Mail, MapPin } from 'lucide-react';
const BASE = import.meta.env.BASE_URL;
const mazixLogo = `${BASE}images/mazix-logo.png`;
const akselImg = `${BASE}images/team/Aksel.webp`;
const oilidImg = `${BASE}images/team/Oilid.webp`;
const miraImg = `${BASE}images/team/Mira.webp`;
const hichamImg = `${BASE}images/team/Hicham.webp`;
const faroukImg = `${BASE}images/team/Farouk.webp`;
const natixisLogo = `${BASE}images/partners/natixis-clean.png`;
const awsLogo = `${BASE}images/partners/aws-clean.png`;
const engieLogo = `${BASE}images/partners/engie-clean.png`;
const uberLogo = `${BASE}images/partners/uber-clean.png`;

/* ============================================================
   MAZIX. Intelligence Engineering.
   Editorial / kinetic studio landing page.
   Palette (loyal to mazix.io):
     paper  #f7f6f2   ink    #0b0d10
     navy   #12355b   steel  #7fa3d1
     taupe  #4a483f / #6e6c64   border #e2e0d8
   ============================================================ */

const CAL = 'https://cal.com/aksel-bouhachmoud-viznln/30min';
const NAV = [{
  label: 'Services',
  href: '#services'
}, {
  label: 'Approach',
  href: '#approach'
}, {
  label: 'About',
  href: '#about'
}, {
  label: 'Contact',
  href: '#contact'
}];
const SERVICES = [{
  id: '001',
  title: 'Product & Software Engineering',
  blurb: 'Web software, mobile apps and full-stack products designed and built end to end, from the interface people touch to the infrastructure underneath, including turning proprietary expertise into AI-native products people pay for.',
  tags: ['Full-stack products', 'Web & mobile apps', 'Product & UX']
}, {
  id: '002',
  title: 'AI Strategy & Enablement',
  blurb: 'Finding where AI creates the highest value for your business, sequencing it into a fundable roadmap, and bringing your teams along so the capability actually sticks.',
  tags: ['Opportunity mapping', 'Roadmapping & ROI', 'Team enablement']
}, {
  id: '003',
  title: 'AI Engineering & Agents',
  blurb: 'Production-grade AI systems, agents and copilots that take real work off people’s plates: grounded, evaluated and integrated with the tools you already run on.',
  tags: ['LLM systems', 'Agents & copilots', 'Evaluation']
}, {
  id: '004',
  title: 'Intelligent Automation',
  blurb: 'Automating complex workflows and repetitive processes with dependable systems that people across the organisation actually adopt.',
  tags: ['Workflow automation', 'Ops tooling', 'Human-in-the-loop']
}, {
  id: '005',
  title: 'Data, Infrastructure & Governance',
  blurb: 'The pipelines, retrieval and observability foundations intelligence runs on, with EU AI Act readiness, privacy and data residency built in from day one, not bolted on after.',
  tags: ['Pipelines & RAG', 'MLOps & monitoring', 'EU AI Act & GDPR']
}];
const APPROACH = [{
  step: '01',
  title: 'Diagnose',
  body: 'We start with what’s hurting: the bottleneck in your product, your operations or your pipeline. Growth problems are business problems before they are technical ones.'
}, {
  step: '02',
  title: 'Define',
  body: 'We define the fix: the scope, the architecture and the measure of success, so everyone knows exactly what we’re building and why it will move the number that matters.'
}, {
  step: '03',
  title: 'Design',
  body: 'We design the product around the people who will use it: the interfaces, the workflows and the experience that make a system worth adopting.'
}, {
  step: '04',
  title: 'Build',
  body: 'We ship production-grade software that is engineered, observable and maintainable, not experiments that stall after the demo.'
}, {
  step: '05',
  title: 'Unlock',
  body: 'We put the system to work, measure its impact, and keep iterating until the bottleneck is gone and the growth it was holding back compounds.'
}];
const ENGAGEMENTS = [{
  n: '01',
  title: 'Fixed-scope build',
  meta: 'Weeks to months',
  body: 'A defined product or system, delivered end to end for a fixed price and timeline. Best when you know what needs to exist and want it built properly.'
}, {
  n: '02',
  title: 'Embedded team',
  meta: 'Monthly',
  body: 'MAZIX engineers working inside your organisation, shipping alongside your people and leaving real capability behind when we step out.'
}, {
  n: '03',
  title: 'Long-term partner',
  meta: 'Ongoing',
  body: 'We stay accountable after launch: maintaining and extending what we build, on retainer or revenue-share models that align us with your outcome.'
}];
const PILLARS = [{
  n: '01',
  title: 'Mission',
  body: 'Empowering organisations to create meaningful impact and drive positive innovation with intelligent systems.'
}, {
  n: '02',
  title: 'Vision',
  body: 'To be a catalyst for intelligence that advances how organisations, and the people inside them, work and decide.'
}, {
  n: '03',
  title: 'Passion',
  body: 'We are obsessed with building high-quality systems that are meaningful, memorable, and genuinely useful in production.'
}, {
  n: '04',
  title: 'Cause',
  body: 'We prioritise work that empowers society and protects the environment, using intelligence engineering to do measurable good.'
}];
const TEAM = [{
  name: 'Aksel',
  role: 'Founder & Principal Architect',
  img: akselImg,
  credential: ''
}, {
  name: 'Oilid',
  role: 'AI Solutions',
  img: oilidImg,
  credential: ''
}, {
  name: 'Mira',
  role: 'Product Manager',
  img: miraImg,
  credential: ''
}, {
  name: 'Hicham',
  role: 'Sales Growth',
  img: hichamImg,
  credential: ''
}, {
  name: 'Farouk',
  role: 'Full Stack Engineer',
  img: faroukImg,
  credential: ''
}];
const PARTNERS = [{
  name: 'Natixis IM',
  img: natixisLogo,
  h: 'h-9 sm:h-10'
}, {
  name: 'AWS',
  img: awsLogo,
  h: 'h-10 sm:h-11'
}, {
  name: 'ENGIE',
  img: engieLogo,
  h: 'h-9 sm:h-10'
}, {
  name: 'Uber',
  img: uberLogo,
  h: 'h-6 sm:h-7'
}];
const STATS = [{
  value: 12,
  suffix: '+',
  label: 'intelligent systems shipped'
}, {
  value: 5,
  suffix: '',
  label: 'industries served'
}, {
  value: 98,
  suffix: '%',
  label: 'move from pilot to production'
}, {
  value: 12,
  suffix: 'wk',
  label: 'median time to first impact'
}];

/* ---- Animated counter ---- */
function Counter({
  value,
  suffix
}: {
  value: number;
  suffix: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, {
    once: true,
    margin: '-60px'
  });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let raf = 0;
    let start = 0;
    const dur = 1400;
    const tick = (t: number) => {
      if (!start) start = t;
      const p = Math.min((t - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(eased * value));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);
  return <span ref={ref}>
      {n}
      {suffix}
    </span>;
}

/* ---- Brand mark ---- */
function Logo({
  className = ''
}: {
  className?: string;
}) {
  return <a href="#top" className={`flex items-center gap-2.5 text-lg font-semibold tracking-tight ${className}`}>
      <img src={mazixLogo} alt="MAZIX" decoding="async" className="h-8 w-8 object-contain" />
      MAZIX
    </a>;
}

/* ---- Marquee (keywords) ---- */
function Marquee() {
  const items = ['PRODUCT & UX', 'SOFTWARE & APPS', 'AI ENGINEERING', 'INTELLIGENT AUTOMATION', 'DATA ARCHITECTURE', 'INTELLIGENCE ENGINEERING'];
  const loop = [...items, ...items];
  return <div className="relative flex overflow-hidden border-y border-neutral-900/10 bg-[#0b0d10] py-5">
      <motion.div className="flex shrink-0 items-center gap-8 whitespace-nowrap pr-8" animate={{
      x: ['0%', '-50%']
    }} transition={{
      duration: 22,
      ease: 'linear',
      repeat: Infinity
    }}>
        
        {loop.map((it, i) => <span key={i} className="flex items-center gap-8 text-sm font-medium tracking-[0.2em] text-neutral-400">
            {it}
            <span className="text-[#7fa3d1]">✦</span>
          </span>)}
      </motion.div>
    </div>;
}

/* ---- Partner logos (monochrome, slow seamless marquee, pauses on hover) ---- */
function PartnerLogos() {
  const track = [...PARTNERS, ...PARTNERS];
  return <div className="relative mt-10 overflow-hidden">
      <div className="logo-marquee-track flex w-max items-center [animation:logo-marquee_36s_linear_infinite] hover:[animation-play-state:paused]">
        {track.map((p, i) => <div key={i} className="shrink-0 pr-16 sm:pr-24">
            <img src={p.img} alt={p.name} decoding="async" className={`${p.h} w-auto max-w-none object-contain opacity-55 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0`} />
          </div>)}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-[#f7f6f2] to-transparent sm:w-16" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-[#f7f6f2] to-transparent sm:w-16" />
    </div>;
}

/* ---- Section label ---- */
function SectionTag({
  index,
  children,
  dark = false
}: {
  index: string;
  children: React.ReactNode;
  dark?: boolean;
}) {
  return <div className="mb-8 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-neutral-500">
      <span className={dark ? 'text-[#7fa3d1]' : 'text-[#12355b]'}>/{index}</span>
      <span>{children}</span>
    </div>;
}
export const MAZIX: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openService, setOpenService] = useState<string | null>('001');
  const [activeStep, setActiveStep] = useState(0);
  const fade = {
    initial: {
      opacity: 0,
      y: 24
    },
    whileInView: {
      opacity: 1,
      y: 0
    },
    viewport: {
      once: true,
      margin: '-80px'
    },
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const
    }
  };
  return <div className="min-h-screen w-full bg-[#f7f6f2] font-sans text-[#0b0d10] antialiased selection:bg-[#12355b] selection:text-white">
      {/* ---------- NAV ---------- */}
      <header className="sticky top-0 z-50 border-b border-neutral-900/10 bg-[#f7f6f2]/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
          <Logo />
          <nav className="hidden items-center gap-8 md:flex">
            {NAV.map(n => <a key={n.label} href={n.href} className="text-sm text-neutral-600 transition-colors hover:text-[#0b0d10]">
              
                {n.label}
              </a>)}
          </nav>
          <div className="flex items-center gap-3">
            <a href={CAL} target="_blank" rel="noopener noreferrer" className="hidden items-center gap-1.5 rounded-full bg-[#0b0d10] px-4 py-2 text-sm font-medium text-white transition-transform hover:-translate-y-0.5 sm:inline-flex">
              
              Book a call <ArrowUpRight className="h-4 w-4" />
            </a>
            <button aria-label="Toggle menu" onClick={() => setMenuOpen(v => !v)} className="grid h-9 w-9 place-items-center rounded-full border border-neutral-900/15 md:hidden">
              
              {menuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>
        <AnimatePresence>
          {menuOpen && <motion.nav initial={{
          height: 0,
          opacity: 0
        }} animate={{
          height: 'auto',
          opacity: 1
        }} exit={{
          height: 0,
          opacity: 0
        }} className="overflow-hidden border-t border-neutral-900/10 md:hidden">
            
              <div className="flex flex-col gap-1 px-5 py-4">
                {NAV.map(n => <a key={n.label} href={n.href} onClick={() => setMenuOpen(false)} className="rounded-lg px-3 py-3 text-base font-medium hover:bg-neutral-900/5">
                
                    {n.label}
                  </a>)}
                <a href={CAL} target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)} className="mt-2 inline-flex items-center justify-center gap-1.5 rounded-full bg-[#0b0d10] px-4 py-3 text-sm font-medium text-white">
                
                  Book a call <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </motion.nav>}
        </AnimatePresence>
      </header>

      {/* ---------- HERO ---------- */}
      <section id="top" className="mx-auto max-w-7xl px-5 pb-16 pt-16 sm:px-8 sm:pt-24">
        <motion.p {...fade} className="mb-6 inline-flex items-center gap-2 rounded-full border border-neutral-900/15 bg-white/50 px-3.5 py-1.5 font-mono text-xs uppercase tracking-[0.2em] text-neutral-600">
          
          <span className="h-1.5 w-1.5 rounded-full bg-[#12355b]" /> Intelligence Engineering
        </motion.p>
        <motion.h1 {...fade} className="max-w-5xl text-[2.6rem] font-medium leading-[1.02] tracking-[-0.03em] sm:text-6xl lg:text-[5.2rem]">
          
          We <span className="italic text-[#12355b]">unlock growth</span> for
          those building what’s next.
        </motion.h1>
        <motion.p {...fade} transition={{
        ...fade.transition,
        delay: 0.05
      }} className="mt-7 max-w-2xl text-lg text-neutral-600 sm:text-xl">

          MAZIX is the full-stack design &amp; dev partner for anyone who
          wants to elevate their game and stay relevant in the AI era:
          startups, small businesses and global enterprises alike. We diagnose
          what’s hurting, define the fix, and build it with you.
        </motion.p>
        <motion.div {...fade} transition={{
        ...fade.transition,
        delay: 0.1
      }} className="mt-9 flex flex-wrap items-center gap-3">
          <a href={CAL} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-2 rounded-full bg-[#0b0d10] px-6 py-3.5 text-sm font-medium text-white transition-transform hover:-translate-y-0.5">
            
            Book a call
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a href="#services" className="inline-flex items-center gap-2 rounded-full border border-neutral-900/20 px-6 py-3.5 text-sm font-medium text-neutral-800 transition-colors hover:bg-white">
            
            See what we do
          </a>
        </motion.div>

        <motion.div {...fade} transition={{
        ...fade.transition,
        delay: 0.15
      }} className="mt-14 flex items-center gap-4">
          <div className="flex -space-x-2.5">
            {[akselImg, oilidImg, miraImg, hichamImg].map((img, i) => <img key={i} src={img} alt="" decoding="async" className="h-9 w-9 rounded-full border-2 border-[#f7f6f2] bg-[#0b0d10] object-cover" />)}
          </div>
          <p className="text-sm text-neutral-600">
            Trusted by ambitious teams,{' '}
            <span className="font-medium text-[#0b0d10]">from founders and small businesses to global enterprises.</span>
          </p>
        </motion.div>
      </section>

      <Marquee />

      {/* ---------- SERVICES ---------- */}
      <section id="services" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <SectionTag index="01">Our services</SectionTag>
        <motion.h2 {...fade} className="max-w-4xl text-3xl font-medium leading-[1.05] tracking-[-0.02em] sm:text-5xl">
          Intelligence engineering for zero to one, and one to infinity.
        </motion.h2>
        <motion.p {...fade} transition={{
        ...fade.transition,
        delay: 0.05
      }} className="mt-5 max-w-2xl text-neutral-600">
          One team across product, design, software, AI and data, pointed at
          whatever is blocking your growth. From first build to company-wide
          systems.
        </motion.p>
        <div className="mt-12 border-t border-neutral-900/10">
          {SERVICES.map(s => {
          const open = openService === s.id;
          return <div key={s.id} className="border-b border-neutral-900/10">
                <button onClick={() => setOpenService(open ? null : s.id)} className="group flex w-full items-center gap-4 py-6 text-left sm:gap-8 sm:py-7">
                  
                  <span className="font-mono text-xs text-neutral-400 sm:text-sm">//{s.id}</span>
                  <span className="flex-1 text-2xl font-medium tracking-[-0.01em] transition-colors group-hover:text-[#12355b] sm:text-4xl">
                    {s.title}
                  </span>
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-neutral-900/20 transition-colors group-hover:bg-[#0b0d10] group-hover:text-white">
                    {open ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {open && <motion.div initial={{
                height: 0,
                opacity: 0
              }} animate={{
                height: 'auto',
                opacity: 1
              }} exit={{
                height: 0,
                opacity: 0
              }} transition={{
                duration: 0.35,
                ease: [0.22, 1, 0.36, 1]
              }} className="overflow-hidden">
                    
                      <div className="grid gap-6 pb-8 sm:grid-cols-[1fr_auto] sm:gap-12 sm:pl-16">
                        <p className="max-w-xl text-base text-neutral-600 sm:text-lg">{s.blurb}</p>
                        <div className="flex flex-wrap gap-2 sm:flex-col sm:items-end">
                          {s.tags.map(t => <span key={t} className="rounded-full bg-neutral-950/5 px-3 py-1.5 font-mono text-xs text-neutral-600">
                          
                              {t}
                            </span>)}
                        </div>
                      </div>
                    </motion.div>}
                </AnimatePresence>
              </div>;
        })}
        </div>
      </section>

      {/* ---------- APPROACH ---------- */}
      <section id="approach" className="border-y border-neutral-900/10 bg-[#0b0d10] text-neutral-100">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
          <div className="mb-8 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-neutral-500">
            <span className="text-[#7fa3d1]">/02</span>
            <span>How we work</span>
          </div>
          <motion.h2 {...fade} className="max-w-3xl text-3xl font-medium tracking-[-0.02em] sm:text-5xl">
            Diagnose. Define. Design. Build. Unlock.
          </motion.h2>
          <p className="mt-5 max-w-2xl text-neutral-400">
            We stay pointed at the business problem, not the feature list. Five
            steps, one accountable team, from first diagnosis to measurable
            growth.
          </p>

          <div className="mt-14 grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            {/* step selector */}
            <div className="flex flex-col">
              {APPROACH.map((a, i) => <button key={a.step} onMouseEnter={() => setActiveStep(i)} onClick={() => setActiveStep(i)} className={`flex items-center gap-5 border-t border-white/10 py-5 text-left transition-colors ${activeStep === i ? 'text-white' : 'text-neutral-500 hover:text-neutral-300'}`}>
                
                  <span className="font-mono text-sm">{a.step}</span>
                  <span className="text-2xl font-medium tracking-[-0.01em] sm:text-3xl">{a.title}</span>
                  {activeStep === i && <motion.span layoutId="dot" className="ml-auto h-2.5 w-2.5 rounded-full bg-[#7fa3d1]" />}
                </button>)}
            </div>
            {/* detail */}
            <div className="relative flex min-h-[220px] flex-col justify-center rounded-2xl border border-white/10 bg-white/[0.03] p-8 sm:p-12">
              <AnimatePresence mode="wait">
                <motion.div key={activeStep} initial={{
                opacity: 0,
                y: 12
              }} animate={{
                opacity: 1,
                y: 0
              }} exit={{
                opacity: 0,
                y: -12
              }} transition={{
                duration: 0.35
              }}>
                  
                  <span className="font-mono text-6xl font-medium text-[#7fa3d1] sm:text-8xl">
                    {APPROACH[activeStep].step}
                  </span>
                  <h3 className="mt-4 text-2xl font-medium sm:text-3xl">{APPROACH[activeStep].title}</h3>
                  <p className="mt-4 max-w-md text-neutral-400">{APPROACH[activeStep].body}</p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- ENGAGEMENT MODELS ---------- */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <SectionTag index="03">How we engage</SectionTag>
        <motion.h2 {...fade} className="max-w-3xl text-3xl font-medium leading-[1.05] tracking-[-0.02em] sm:text-5xl">
          Three ways of working. One standard of delivery.
        </motion.h2>
        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-neutral-900/10 bg-neutral-900/10 md:grid-cols-3">
          {ENGAGEMENTS.map(e => <div key={e.title} className="flex flex-col gap-8 bg-[#f7f6f2] p-8">
              <div className="flex items-baseline justify-between">
                <span className="font-mono text-sm text-[#7fa3d1]">{e.n}</span>
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-neutral-400">{e.meta}</span>
              </div>
              <div>
                <h3 className="text-xl font-medium tracking-[-0.01em]">{e.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-600">{e.body}</p>
              </div>
            </div>)}
        </div>
      </section>

      {/* ---------- STATS ---------- */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {STATS.map(s => <div key={s.label}>
              <div className="text-4xl font-medium tracking-[-0.02em] sm:text-6xl">
                <Counter value={s.value} suffix={s.suffix} />
              </div>
              <p className="mt-2 text-sm text-neutral-600">{s.label}</p>
            </div>)}
        </div>
      </section>

      {/* ---------- ABOUT US ---------- */}
      <section id="about" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <SectionTag index="04">About us</SectionTag>
        <motion.h2 {...fade} className="max-w-4xl text-3xl font-medium leading-[1.08] tracking-[-0.02em] sm:text-5xl">
          We’re a tight-knit team with high drive and an obsession with quality
          and meaningful collaboration.
        </motion.h2>
        <motion.p {...fade} transition={{
        ...fade.transition,
        delay: 0.05
      }} className="mt-6 max-w-3xl text-lg text-neutral-600">
          In a world obsessed with the quantity of output, we focus on quality,
          collaboration, and building intelligence that leaves things better
          than we found them.
        </motion.p>

        {/* pillars */}
        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-neutral-900/10 bg-neutral-900/10 sm:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map(p => <div key={p.title} className="flex flex-col gap-6 bg-[#f7f6f2] p-7">
              <span className="font-mono text-sm text-[#7fa3d1]">{p.n}</span>
              <div>
                <h3 className="text-xl font-medium tracking-[-0.01em]">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">{p.body}</p>
              </div>
            </div>)}
        </div>

        {/* team — one line, smaller pixelated portraits */}
        <div className="mt-16 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-neutral-500">
          <span className="text-[#12355b]">◇</span>
          <span>The MAZIX team</span>
        </div>
        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5 lg:gap-5">
          {TEAM.map(m => <div key={m.name} className="group">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl bg-neutral-200">
                <img src={m.img} alt={m.name} loading="lazy" decoding="async" className="h-full w-full object-cover object-center grayscale" />
                <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/10" />
              </div>
              <h3 className="mt-3 flex items-center gap-1.5 text-base font-medium tracking-[-0.01em]">
                {m.name}
                {m.credential && <span className="rounded bg-[#12355b]/10 px-1.5 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wider text-[#12355b]">
                    {m.credential}
                  </span>}
              </h3>
              <p className="mt-0.5 text-xs text-neutral-500">{m.role}</p>
            </div>)}
        </div>

        {/* team experience — moving colour logos */}
        <div className="mt-16 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-neutral-500">
          <span className="text-[#12355b]">◇</span>
          <span>Team experience</span>
        </div>
        <p className="mt-4 max-w-2xl text-neutral-600">
          MAZIX is built by engineers and operators with experience scaling
          systems in complex organisations.
        </p>
        <PartnerLogos />
      </section>

      {/* ---------- CTA / CONTACT ---------- */}
      <section id="contact" className="mx-auto max-w-7xl px-5 pb-24 sm:px-8">
        <div className="rounded-[2rem] bg-[#0b0d10] px-7 py-16 text-white sm:px-16 sm:py-24">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-neutral-500">
            Let’s unblock your growth
          </p>
          <h2 className="mt-6 max-w-4xl text-3xl font-medium leading-[1.05] tracking-[-0.02em] sm:text-6xl">
            Something is slowing you down. Let’s find it, and build the fix.
          </h2>
          <p className="mt-6 max-w-2xl text-lg text-neutral-400">
            Our AI-powered software enables intelligent, real-time
            decision-making across critical business operations, from the data
            layer to the front lines of enterprise. We don’t simply build
            software: we identify the bottleneck, design the solution, and
            build the technology that unlocks it.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a href={CAL} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-2 rounded-full bg-[#f7f6f2] px-7 py-3.5 text-sm font-semibold text-[#0b0d10] transition-transform hover:-translate-y-0.5">
              
              Book a call
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            <a href="mailto:contact@mazix.io" className="inline-flex items-center gap-2 text-sm text-neutral-300 transition-colors hover:text-white">
              
              <Mail className="h-4 w-4 text-[#7fa3d1]" /> contact@mazix.io
            </a>
          </div>
          <div className="mt-8 inline-flex items-center gap-2 text-sm text-neutral-400">
            <MapPin className="h-4 w-4 text-[#7fa3d1]" /> 41 Rue de Douai, Paris 9
          </div>
        </div>
      </section>

      {/* ---------- FOOTER ---------- */}
      <footer className="border-t border-neutral-900/10">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-12 sm:px-8 md:grid-cols-3">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm text-neutral-500">
              The design, engineering and AI partner that helps ambitious
              companies unblock growth.
            </p>
          </div>
          <div className="text-sm">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-neutral-400">Contact</p>
            <a href="mailto:contact@mazix.io" className="mt-3 block text-neutral-700 transition-colors hover:text-[#0b0d10]">
              contact@mazix.io
            </a>
            <p className="mt-1 text-neutral-500">41 Rue de Douai, Paris 9</p>
            <a href={CAL} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex items-center gap-1.5 font-medium text-[#12355b] transition-colors hover:text-[#0b0d10]">
              Book a call <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
          <div className="flex flex-col gap-3 text-sm md:items-end">
            <div className="flex flex-wrap gap-x-5 gap-y-2">
              {NAV.map(n => <a key={n.label} href={n.href} className="text-neutral-600 transition-colors hover:text-[#0b0d10]">
                  {n.label}
                </a>)}
            </div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-neutral-400 md:mt-auto">© 2026 MAZIX</p>
          </div>
        </div>
      </footer>
    </div>;
};
export default MAZIX;