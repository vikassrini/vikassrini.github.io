import React from 'react';
import { ArrowUpRight, Download } from 'lucide-react';

const skillGroups = [
  {
    group: 'AI / LLM',
    items: [
      'LLM fine-tuning',
      'RAG',
      'Conversational AI',
      'Prompt & context engineering',
      'Document intelligence',
      'NLP',
    ],
  },
  {
    group: 'ML & Evaluation',
    items: [
      'Classical ML',
      'Feature engineering',
      'Model evaluation',
      'Human-in-the-loop systems',
    ],
  },
  {
    group: 'Engineering',
    items: [
      'Python',
      'FastAPI',
      'SQL · PostgreSQL',
      'Redis',
      'Neo4j',
      'Vector DBs',
      'Docker',
      'Git · Linux',
    ],
  },
];

type Experience = {
  role: string;
  company: string;
  period: string;
  meta: string;
  summary?: string;
  points: string[];
  subgroups?: { title: string; points: string[] }[];
};

const experience: Experience[] = [
  {
    role: 'AI Consultant (Part-time)',
    company: 'Orange Ladders',
    period: 'Sep 2026 — Present',
    meta: 'Remote · Bengaluru',
    summary:
      'Lead the evaluation and architecture of an AI system that classifies enterprise master data (SKUs) into client-specific product taxonomies.',
    points: [
      'Designed a selective-automation method where predictions are accepted only where validation shows they are reliable — 51.1% automated acceptance at 99.18% accepted accuracy on a 5,460-record held-out benchmark with a hybrid SVM–LLM workflow.',
      'Built the human-in-the-loop evaluation framework: held-out testing, confidence-threshold selection, acceptance coverage, rare-class reliability and forward-batch validation.',
      'Compared classical ML, transformer encoders, commercial and open-weight LLMs, semantic retrieval, RAG and hybrid architectures to choose the production design.',
      'Showed through later-batch evaluation that distribution shift and taxonomy gaps make historical accuracy alone insufficient to justify automation.',
    ],
  },
  {
    role: 'Founding Engineer',
    company: 'Stealth Cybersecurity Startup',
    period: 'Jan 2026 — Present',
    meta: 'Remote · Bengaluru',
    summary:
      'Own the attack-detection logic of a graph-based (Neo4j) security platform that triages alerts and detects multi-stage attack campaigns across endpoint, identity, cloud and SaaS data.',
    points: [
      'Repaired and expanded an inherited library of ~40 mostly non-functional detection patterns into 421+ graph detection rules, against an original target of ~115.',
      'Found that LLM-generated detections looked plausible but did not match the real graph schema; fixed this by grounding generation in explicit entity and relationship contracts, then inspecting and testing every output.',
      'Turned attack scenarios into campaign rules that link alerts through shared entities and time order, returning structured evidence for close / monitor / escalate triage.',
      'Contributed prompts and design ideas to the LLM layer that turns detections into analyst summaries.',
    ],
  },
  {
    role: 'AI Engineer',
    company: 'GrowthArc',
    period: 'May 2025 — Mar 2026',
    meta: 'Hybrid · Bengaluru',
    summary:
      'Turned loosely specified client briefs into working AI/ML proofs of concept, mostly independently and often in domains new to me.',
    points: [],
    subgroups: [
      {
        title: 'Predictive Maintenance for Medical Devices',
        points: [
          'Reframed failure prediction into a 7-day early warning over ~125K daily records from 803 devices with a ~0.08% failure rate; engineered 262 time-aware features.',
          'Compared logistic regression, random forest, XGBoost and LightGBM using PR-AUC with device-level holdout — LightGBM reached ~0.90 PR-AUC on seen devices and ~0.41 on unseen devices, exposing the generalisation gap.',
        ],
      },
      {
        title: 'Facilities Ticket Intelligence — AWS GREF',
        points: [
          'Built an NLP system that routes tickets to ~12 categories and departments, labels topics with Llama 3, and tracks user sentiment from creation to resolution. Demonstrated it to AWS GREF stakeholders.',
        ],
      },
      {
        title: 'CAD Intelligence & Constrained Generative Design — Wabtec',
        points: [
          'Parsed STEP assemblies into point clouds and extracted geometry, topology and face-adjacency metadata (OpenCascade); automated constrained redesign of a fuel tank in FreeCAD and Python.',
        ],
      },
    ],
  },
  {
    role: 'Co-Founder / AI Engineer',
    company: 'IntuitiFi',
    period: '2024 — Present',
    meta: 'India',
    points: [],
    subgroups: [
      {
        title: 'Health-Insurance RAG Assistant',
        points: [
          'Built a conversational assistant so consumers can query dense policy language in plain words: RAG over policy documents with GPT-4 and Weaviate, a FastAPI backend, and responses streamed over WebSockets.',
        ],
      },
      {
        title: 'Event-Driven Market Research System',
        points: [
          'Designing a system in which LLMs turn BSE corporate announcements (2016–present) into structured events to study whether they move prices, with ablations to test whether LLM-derived features beat quantitative baselines.',
        ],
      },
    ],
  },
  {
    role: 'AI Engineering Intern',
    company: 'Toosi',
    period: 'Sep 2023 — Dec 2023',
    meta: 'Remote',
    points: [
      'Fine-tuned Llama 2 with LoRA on RunPod GPUs for travel-domain question answering, using data collected and cleaned with a Scrapy web-crawling pipeline.',
      'Diagnosed catastrophic forgetting in the fine-tuned model and switched to a RAG approach that grounded answers in the collected travel content.',
    ],
  },
];

const projects = [
  {
    title: 'AI Physician Assistant',
    tag: 'GPT-4 · RAG · Speech',
    body: 'Voice-enabled medical-information assistant combining GPT-4 with RAG, speech synthesis and an interactive 3D avatar.',
    href: 'https://github.com/vikassrini/PhysicianAI-Chatbot',
  },
  {
    title: 'FinSight — Finance Assistant',
    tag: 'Winner · PROP’24',
    body: 'RAG app over SEC Form 10-K filings. Conceived the product and the finance-oriented prompting strategy for the team that won the PROP’24 Project Open House.',
    href: 'https://github.com/vishwasg217/fin-sight',
  },
  {
    title: 'LoRA Fine-Tuning for QA',
    tag: 'LLM · LoRA',
    body: 'Experiments fine-tuning language models with LoRA for question answering, including data preparation and evaluation.',
    href: 'https://github.com/vikassrini/Lora-Fine-Tuning-for-QA-',
  },
];

const Section = ({
  n,
  title,
  children,
}: {
  n: string;
  title: string;
  children: React.ReactNode;
}) => (
  <section className="mt-20">
    <div className="flex items-baseline gap-4 border-b hairline pb-4">
      <span className="font-mono text-sm text-accent">{n}</span>
      <h2 className="font-display text-2xl font-semibold text-white">{title}</h2>
    </div>
    <div className="mt-8">{children}</div>
  </section>
);

const Bullets = ({ points }: { points: string[] }) => (
  <ul className="space-y-2.5">
    {points.map((p, i) => (
      <li key={i} className="flex gap-3 text-sm leading-relaxed text-stone-400">
        <span className="mt-2 h-px w-3 flex-none bg-accent/70" />
        <span>{p}</span>
      </li>
    ))}
  </ul>
);

const About = () => {
  return (
    <div className="max-w-5xl mx-auto px-5 sm:px-8 py-20">
      {/* Intro */}
      <p className="kicker">About</p>
      <h1 className="mt-5 max-w-3xl font-display text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
        I build AI systems that know when they can be trusted.
      </h1>
      <p className="mt-7 max-w-2xl text-lg leading-relaxed text-stone-400">
        I'm an Applied AI Engineer based in Bengaluru. My work spans conversational RAG
        over dense policy and technical documents, hands-on LLM fine-tuning, and ML and
        NLP systems across health, finance, industrial and security domains. The part I
        care most about is the evaluation that decides where a model can act on its own
        and where a person must step in — and I want to apply it to AI built for public
        good, where a wrong answer has real consequences for the people relying on it.
      </p>

      <a
        href="/Vikas-Srinivasa-Resume.pdf"
        download
        className="mt-8 inline-flex items-center gap-2 border border-stone-700 px-5 py-2.5 text-sm font-semibold text-stone-200 transition-colors hover:border-stone-500 hover:text-white"
      >
        <Download className="h-4 w-4" />
        Download résumé
      </a>

      {/* Experience */}
      <Section n="01" title="Experience">
        <div className="space-y-12">
          {experience.map((exp) => (
            <div key={`${exp.company}-${exp.role}`}>
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="font-display text-lg font-semibold text-white">
                  {exp.role} <span className="text-stone-500">·</span>{' '}
                  <span className="text-accent">{exp.company}</span>
                </h3>
                <span className="font-mono text-xs uppercase tracking-wider text-stone-500">
                  {exp.period}
                </span>
              </div>
              <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.15em] text-stone-600">
                {exp.meta}
              </p>
              {exp.summary && (
                <p className="mt-4 text-stone-300">{exp.summary}</p>
              )}
              {exp.points.length > 0 && (
                <div className="mt-4">
                  <Bullets points={exp.points} />
                </div>
              )}
              {exp.subgroups && (
                <div className="mt-5 space-y-5 border-l hairline pl-5">
                  {exp.subgroups.map((sg) => (
                    <div key={sg.title}>
                      <h4 className="text-sm font-semibold text-stone-200">
                        {sg.title}
                      </h4>
                      <div className="mt-2">
                        <Bullets points={sg.points} />
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </Section>

      {/* Skills */}
      <Section n="02" title="Skills">
        <div className="space-y-7">
          {skillGroups.map((g) => (
            <div
              key={g.group}
              className="grid grid-cols-1 gap-3 sm:grid-cols-[10rem_1fr] sm:gap-8"
            >
              <h3 className="font-mono text-xs uppercase tracking-[0.15em] text-stone-500">
                {g.group}
              </h3>
              <div className="flex flex-wrap gap-x-5 gap-y-2">
                {g.items.map((s) => (
                  <span key={s} className="text-sm text-stone-300">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Projects */}
      <Section n="03" title="Selected Projects">
        <div className="border-t hairline">
          {projects.map((p) => (
            <a
              key={p.title}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group grid grid-cols-1 gap-2 border-b hairline py-6 transition-colors hover:bg-stone-900/40 sm:grid-cols-[1fr_2fr] sm:gap-8 sm:px-3"
            >
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-display text-lg font-semibold text-white">
                    {p.title}
                  </h3>
                  <ArrowUpRight className="h-4 w-4 text-stone-600 transition-colors group-hover:text-accent" />
                </div>
                <span className="mt-1 block font-mono text-[11px] uppercase tracking-[0.15em] text-accent">
                  {p.tag}
                </span>
              </div>
              <p className="text-sm leading-relaxed text-stone-400">{p.body}</p>
            </a>
          ))}
        </div>
        <p className="mt-5 font-mono text-xs text-stone-500">
          More at{' '}
          <a
            href="https://github.com/vikassrini"
            target="_blank"
            rel="noopener noreferrer"
            className="text-stone-300 underline underline-offset-4 hover:text-accent"
          >
            github.com/vikassrini
          </a>
        </p>
      </Section>

      {/* Awards + Education */}
      <Section n="04" title="Awards & Education">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
          <div>
            <h3 className="font-display text-base font-semibold text-white">
              Winner — PROP’24 Project Open House
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-stone-400">
              For FinSight: conceived the product and the finance-oriented prompting
              strategy for a team-built RAG app over SEC Form 10-K filings.
            </p>
          </div>
          <div>
            <h3 className="font-display text-base font-semibold text-white">
              B.E., Computer Science &amp; Engineering
            </h3>
            <p className="mt-2 text-sm text-stone-300">
              RNS Institute of Technology, Bengaluru
            </p>
            <p className="mt-1 font-mono text-xs uppercase tracking-wider text-stone-500">
              CGPA 7.5 / 10 · 2020 – 2024
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default About;
