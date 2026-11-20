import { ArrowUpRight } from 'lucide-react';
import { writingSeries } from '../data/blogPosts';

const Blog = () => {
  return (
    <div className="max-w-5xl mx-auto px-5 sm:px-8 py-20">
      <p className="kicker">Writing</p>
      <h1 className="mt-5 max-w-3xl font-display text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
        Explaining the intuition behind complex AI.
      </h1>
      <p className="mt-7 max-w-2xl text-lg leading-relaxed text-stone-400">
        I write so these ideas click for anyone, not just specialists. These are my
        in-depth series — start anywhere.
      </p>

      <div className="mt-14 border-t hairline">
        {writingSeries.map((series) => (
          <a
            key={series.id}
            href={series.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group grid grid-cols-1 gap-5 border-b hairline py-10 transition-colors hover:bg-stone-900/40 sm:grid-cols-[1fr_1.4fr] sm:gap-12 sm:px-3"
          >
            <div>
              <div className="flex items-start justify-between gap-3">
                <h2 className="font-display text-2xl font-semibold text-white">
                  {series.title}
                </h2>
                <ArrowUpRight className="h-5 w-5 flex-none text-stone-600 transition-colors group-hover:text-accent" />
              </div>
              <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1">
                {series.tags.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-[11px] uppercase tracking-[0.15em] text-accent"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <p className="mt-5 font-mono text-xs text-stone-600">
                {series.platform}
              </p>
            </div>

            <div>
              <p className="text-stone-300">{series.description}</p>
              <ul className="mt-5 space-y-2">
                {series.highlights.map((h) => (
                  <li
                    key={h}
                    className="flex gap-3 text-sm leading-relaxed text-stone-400"
                  >
                    <span className="mt-2 h-px w-3 flex-none bg-accent/70" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Blog;
