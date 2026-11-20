import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Download } from 'lucide-react';

const stats = [
  { value: '51% / 99.18%', label: 'automated at accepted accuracy' },
  { value: '421+', label: 'graph detection rules' },
  { value: '5', label: 'domains shipped in' },
];

const focus = [
  {
    n: '01',
    title: 'Evaluation & trust',
    body: 'Human-in-the-loop systems that decide where a model can act on its own and where a person must step in — held-out testing, confidence thresholds, acceptance coverage.',
  },
  {
    n: '02',
    title: 'RAG & LLMs',
    body: 'Conversational retrieval over dense policy and technical documents, grounded generation, and hands-on LLM fine-tuning with LoRA and friends.',
  },
  {
    n: '03',
    title: 'Applied ML',
    body: 'Turning loosely specified problems into working ML and NLP systems — from extreme class imbalance to graph-based attack detection.',
  },
];

const Home = () => {
  return (
    <div>
      {/* Hero */}
      <section className="max-w-5xl mx-auto px-5 sm:px-8 pt-20 pb-16 sm:pt-28">
        <p className="kicker">Applied AI Engineer — Bengaluru, India</p>

        <h1 className="mt-6 max-w-4xl font-display text-[2.6rem] font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl">
          I build AI systems that know
          <br className="hidden sm:block" /> when they can be{' '}
          <span className="italic text-accent">trusted</span>.
        </h1>

        <p className="mt-7 max-w-2xl text-lg leading-relaxed text-stone-400">
          I'm Vikas Srinivasa. I work on conversational RAG, LLM fine-tuning and
          applied ML across health, finance, industrial and security domains. My
          strongest work is the evaluation that decides where a model can act on its
          own — and where a person must step in.
        </p>

        {/* CTAs */}
        <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3">
          <Link
            to="/about"
            className="group inline-flex items-center gap-2 bg-stone-100 px-5 py-2.5 text-sm font-semibold text-stone-950 transition-colors hover:bg-white"
          >
            View my work
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
          <a
            href="/Vikas-Srinivasa-Resume.pdf"
            download
            className="inline-flex items-center gap-2 border border-stone-700 px-5 py-2.5 text-sm font-semibold text-stone-200 transition-colors hover:border-stone-500 hover:text-white"
          >
            <Download className="h-4 w-4" />
            Résumé
          </a>
          <Link
            to="/blog"
            className="text-sm font-medium text-stone-300 underline decoration-stone-700 underline-offset-[6px] transition-colors hover:text-white hover:decoration-accent"
          >
            Read my writing
          </Link>
          <div className="flex items-center gap-4 font-mono text-xs uppercase tracking-[0.15em] text-stone-500">
            <a
              href="https://github.com/vikassrini"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:text-white"
            >
              GitHub <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
            <a
              href="https://www.linkedin.com/in/vikas-srinivasa"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:text-white"
            >
              LinkedIn <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>

        {/* Stat row */}
        <div className="mt-16 grid grid-cols-1 divide-y divide-stone-800/70 border-y hairline sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {stats.map((s) => (
            <div key={s.label} className="py-6 sm:px-6 sm:first:pl-0">
              <div className="font-display text-2xl font-semibold text-white">
                {s.value}
              </div>
              <div className="mt-1 font-mono text-xs uppercase tracking-wider text-stone-500">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Focus */}
      <section className="max-w-5xl mx-auto px-5 sm:px-8 pb-24">
        <p className="kicker">What I focus on</p>
        <div className="mt-8 border-t hairline">
          {focus.map((f) => (
            <div
              key={f.n}
              className="grid grid-cols-1 gap-2 border-b hairline py-7 sm:grid-cols-[4rem_1fr] sm:gap-8"
            >
              <span className="font-mono text-sm text-accent">{f.n}</span>
              <div className="sm:grid sm:grid-cols-[1fr_2fr] sm:gap-8">
                <h3 className="font-display text-xl font-semibold text-white">
                  {f.title}
                </h3>
                <p className="mt-2 text-stone-400 sm:mt-0">{f.body}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Currently */}
        <div className="mt-10 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-stone-400">
            <span className="kicker mr-3">Currently</span>
            <span className="text-stone-200">AI Consultant</span> at Orange Ladders
            &nbsp;·&nbsp; <span className="text-stone-200">Founding Engineer</span> at a
            stealth cybersecurity startup
          </p>
          <Link
            to="/about"
            className="inline-flex items-center gap-1 font-mono text-xs uppercase tracking-[0.15em] text-accent hover:text-accent-soft"
          >
            Full background <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
