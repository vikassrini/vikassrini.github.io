import { Github, Linkedin, Mail } from 'lucide-react';

const socials = [
  { href: 'https://github.com/vikassrini', label: 'GitHub', Icon: Github },
  { href: 'https://www.linkedin.com/in/vikas-srinivasa', label: 'LinkedIn', Icon: Linkedin },
  { href: 'mailto:vikas.srinivasa@intuitifi.com', label: 'Email', Icon: Mail },
];

const Footer = () => {
  return (
    <footer className="border-t hairline">
      <div className="max-w-5xl mx-auto px-5 sm:px-8 py-12">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-display text-lg font-semibold text-white">
              Let's build something trustworthy.
            </p>
            <a
              href="mailto:vikas.srinivasa@intuitifi.com"
              className="mt-2 inline-block font-mono text-sm text-stone-400 underline-offset-4 hover:text-accent hover:underline"
            >
              vikas.srinivasa@intuitifi.com
            </a>
          </div>

          <div className="flex items-center gap-5">
            {socials.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                aria-label={label}
                className="text-stone-500 transition-colors hover:text-white"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-1 border-t hairline pt-6 font-mono text-xs text-stone-600 sm:flex-row sm:justify-between">
          <span>© {new Date().getFullYear()} Vikas Srinivasa</span>
          <span>Applied AI Engineer · Bengaluru, India</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
