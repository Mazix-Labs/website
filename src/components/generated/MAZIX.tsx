import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Plus, Minus, Menu, X, ArrowRight, Mail, MapPin } from 'lucide-react';
const mazixLogo = "https://storage.googleapis.com/storage.magicpath.ai/component-assets/437295741543784448/437328526165839872/dfb07d38a35a847047566c1afde27e1279928271a5c3255b6ae996d09e9892eb.png";
const akselImg = "https://storage.googleapis.com/storage.magicpath.ai/component-assets/437295741543784448/437328526165839872/f716293807ccc1606976c246217cd432d24ce494d779c4102eca52e026bdce0d.jpeg";
const samyImg = "https://storage.googleapis.com/storage.magicpath.ai/component-assets/437295741543784448/437328526165839872/d4ea1386379590190ea5790be74448b877c805a3f3cdd504ad9a10e2161d16d0.jpg";
const oilidImg = "https://storage.googleapis.com/storage.magicpath.ai/component-assets/437295741543784448/437328526165839872/7dfefc1c188b3f1fa89ecae12e4df0f7e16f62d6713aa8d17a6816598c115052.png";
const miraImg = "https://storage.googleapis.com/storage.magicpath.ai/component-assets/437295741543784448/437328526165839872/9727fcd2c8e792559c59e4a8518492403cc334e335c84ccc102ef23659985bab.jpg";
const faroukImg = "https://storage.googleapis.com/storage.magicpath.ai/component-assets/437295741543784448/437328526165839872/a5b1fbd80e1e9d5f484b782d4c2ea271f3abd2d61700305bbcb147edc528884f.png";
const natixisLogo = "https://storage.googleapis.com/storage.magicpath.ai/component-assets/437295741543784448/437328526165839872/a5556351200057620d60b95c3bb3f69ad4e271aa9f229206143891800c840603.jpg";
const awsLogo = "https://storage.googleapis.com/storage.magicpath.ai/component-assets/437295741543784448/437328526165839872/f41466c66be24867207cea99e920899b38d26ace95f3035d856811e224534087.jpg";
const engieLogo = "https://storage.googleapis.com/storage.magicpath.ai/component-assets/437295741543784448/437328526165839872/0608479b8b1648f6cffe6b2939ab3651f81734a056cc40b343d374484447e33f.png";
const uberLogo = "https://storage.googleapis.com/storage.magicpath.ai/component-assets/437295741543784448/437328526165839872/380186d9931b95adcbf90fbe06e32e3b5a3329aed1cd96f40a380ba4d0026de9.png";

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
  title: 'AI Strategy',
  blurb: 'Identifying where artificial intelligence creates the highest value and turning it into a sequenced, fundable roadmap tied to real outcomes.',
  tags: ['Opportunity mapping', 'Roadmapping', 'ROI modelling']
}, {
  id: '002',
  title: 'AI Engineering',
  blurb: 'Designing and building production-grade AI systems and software platforms that are reliable, observable and ready for scale.',
  tags: ['LLM systems', 'Platform build', 'Evaluation']
}, {
  id: '003',
  title: 'Intelligent Automation',
  blurb: 'Automating complex workflows and repetitive processes with dependable systems that people across the organisation actually adopt.',
  tags: ['Workflow automation', 'Ops tooling', 'Human-in-the-loop']
}, {
  id: '004',
  title: 'AI Agents & Copilots',
  blurb: 'Building autonomous agents and copilots that take real work off people’s plates. They stay grounded, safe and integrated with your tools.',
  tags: ['Agents', 'Copilots', 'Tool use']
}, {
  id: '005',
  title: 'Software & App Engineering',
  blurb: 'Designing and building web software, mobile apps and full-stack products end to end, from the interface people touch to the infrastructure underneath.',
  tags: ['Web software / app', 'Mobile software / app', 'Full-stack development']
}, {
  id: '006',
  title: 'Data & AI Architecture',
  blurb: 'Creating the data pipelines, retrieval and governance foundations required for scalable, trustworthy intelligence.',
  tags: ['Pipelines', 'Retrieval / RAG', 'Governance']
}, {
  id: '007',
  title: 'MLOps & Observability',
  blurb: 'Putting the infrastructure in place to ship, monitor and improve AI in production, with evaluation and guardrails built in.',
  tags: ['Deployment', 'Monitoring', 'Guardrails']
}, {
  id: '008',
  title: 'AI Enablement',
  blurb: 'Bringing your teams along with the practices, tooling and training that make intelligent systems part of how you work.',
  tags: ['Workshops', 'Playbooks', 'Change']
}];
const APPROACH = [{
  step: '01',
  title: 'Understand',
  body: 'We start inside your business: the workflows, the constraints, the people. Successful AI adoption is a business problem before it is a technical one.'
}, {
  step: '02',
  title: 'Design',
  body: 'We design the right system for the job: the architecture, the interfaces, and the guardrails that make intelligence trustworthy in production.'
}, {
  step: '03',
  title: 'Build',
  body: 'We ship production-grade software that is engineered, observable and maintainable, not experiments that stall after the demo.'
}, {
  step: '04',
  title: 'Deploy',
  body: 'We put systems into the hands of your teams, measure impact, and iterate until the capability is genuinely part of how you operate.'
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
  name: 'Samy',
  role: 'Head of AI',
  img: samyImg,
  credential: 'PhD'
}, {
  name: 'Oilid',
  role: 'Head of Data',
  img: oilidImg,
  credential: ''
}, {
  name: 'Mira',
  role: 'Head of Growth & Partnerships',
  img: miraImg,
  credential: ''
}, {
  name: 'Farouk',
  role: 'Forward Deployed Engineer',
  img: faroukImg,
  credential: ''
}];
const PARTNERS = [{
  name: 'Natixis IM',
  img: natixisLogo
}, {
  name: 'AWS',
  img: awsLogo
}, {
  name: 'ENGIE',
  img: engieLogo
}, {
  name: 'Uber',
  img: uberLogo
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

/* ---- Pixelated portrait (serious, low-res mosaic; sharpens to colour on hover) ---- */
function PixelPortrait({
  src,
  alt,
  px = 44
}: {
  src: string;
  alt: string;
  px?: number;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const img = new Image();
    img.onload = () => {
      const CW = px;
      const CH = Math.round(px * 5 / 4); // 4:5 portrait
      canvas.width = CW;
      canvas.height = CH;
      const tr = CW / CH;
      const ir = img.width / img.height;
      let sw: number, sh: number, sx: number, sy: number;
      if (ir > tr) {
        sh = img.height;
        sw = sh * tr;
        sx = (img.width - sw) / 2;
        sy = 0;
      } else {
        sw = img.width;
        sh = sw / tr;
        sx = 0;
        sy = (img.height - sh) / 2;
      }
      ctx.imageSmoothingEnabled = false;
      ctx.clearRect(0, 0, CW, CH);
      ctx.drawImage(img, sx, sy, sw, sh, 0, 0, CW, CH);
    };
    img.src = src;
  }, [src, px]);
  return <canvas ref={canvasRef} role="img" aria-label={alt} className="h-full w-full grayscale transition-opacity duration-500 [image-rendering:pixelated] group-hover:opacity-0" />;
}

/* ---- Marquee (keywords) ---- */
function Marquee() {
  const items = ['AI STRATEGY', 'AI ENGINEERING', 'INTELLIGENT AUTOMATION', 'SOFTWARE & APPS', 'DATA ARCHITECTURE', 'INTELLIGENCE ENGINEERING'];
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

/* ---- Partner logo marquee (in colour, always moving) ---- */
function PartnerMarquee() {
  const base = [...PARTNERS, ...PARTNERS, ...PARTNERS];
  const track = [...base, ...base];
  return <div className="relative mt-8 overflow-hidden">
      <motion.div className="flex w-max items-center gap-4 sm:gap-5" animate={{
      x: ['0%', '-50%']
    }} transition={{
      duration: 26,
      ease: 'linear',
      repeat: Infinity
    }}>
        
        {track.map((p, i) => <div key={i} className="flex h-16 w-40 shrink-0 items-center justify-center rounded-2xl border border-neutral-900/10 bg-white px-6 shadow-sm">
          
            <img src={p.img} alt={p.name} decoding="async" className="max-h-9 w-auto max-w-[112px] object-contain" />
          </div>)}
      </motion.div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-14 bg-gradient-to-r from-[#f7f6f2] to-transparent sm:w-24" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-14 bg-gradient-to-l from-[#f7f6f2] to-transparent sm:w-24" />
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
          
          We build the{' '}
          <span className="italic text-[#12355b]">intelligence layer</span> of
          modern organisations.
        </motion.h1>
        <motion.p {...fade} transition={{
        ...fade.transition,
        delay: 0.05
      }} className="mt-7 max-w-2xl text-lg text-neutral-600 sm:text-xl">
          
          We design and build intelligent systems that help organisations
          automate work, improve decisions and create new capabilities, from
          strategy to production.
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
            {['#12355b', '#7fa3d1', '#4a483f', '#0b0d10'].map((c, i) => <span key={i} className="h-9 w-9 rounded-full border-2 border-[#f7f6f2]" style={{
            background: c
          }} />)}
          </div>
          <p className="text-sm text-neutral-600">
            Trusted by teams moving AI from{' '}
            <span className="font-medium text-[#0b0d10]">experimentation to infrastructure.</span>
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
          From the first proof of value to systems running across your whole
          organisation. One team, strategy through production.
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
            Understand. Design. Build. Deploy.
          </motion.h2>
          <p className="mt-5 max-w-2xl text-neutral-400">
            Technology is only valuable when it creates impact. Our process is
            built to get you there, reliably.
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
        <SectionTag index="03">About us</SectionTag>
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
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl bg-[#0b0d10]">
                <PixelPortrait src={m.img} alt={m.name} />
                <img src={m.img} alt="" aria-hidden="true" decoding="async" className="absolute inset-0 h-full w-full object-cover object-center opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              
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
          The people behind MAZIX have built and scaled systems at organisations
          like these.
        </p>
        <PartnerMarquee />
      </section>

      {/* ---------- CTA / CONTACT ---------- */}
      <section id="contact" className="mx-auto max-w-7xl px-5 pb-24 sm:px-8">
        <div className="rounded-[2rem] bg-[#0b0d10] px-7 py-16 text-white sm:px-16 sm:py-24">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-neutral-500">
            Let’s build something intelligent
          </p>
          <h2 className="mt-6 max-w-4xl text-3xl font-medium leading-[1.05] tracking-[-0.02em] sm:text-6xl">
            Want to build real intelligence into your product, operations and
            decisions?
          </h2>
          <p className="mt-6 max-w-2xl text-lg text-neutral-400">
            We’re on the same page, because turning intelligence into systems
            that actually ship is exactly what we love to do.
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
              Building the intelligence layer of modern organisations.
            </p>
          </div>
          <div className="text-sm">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-neutral-400">Contact</p>
            <a href="mailto:contact@mazix.io" className="mt-3 block text-neutral-700 transition-colors hover:text-[#0b0d10]">
              contact@mazix.io
            </a>
            <p className="mt-1 text-neutral-500">41 Rue de Douai, Paris 9</p>
            <a href={CAL} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex items-center gap-1.5 font-medium text-[#12355b] transition-colors hover:text-[#0b0d10]">contact@mazix.io<ArrowUpRight className="h-4 w-4" style={{
              textAlign: "left",
              justifyContent: "flex-start"
            }} />
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