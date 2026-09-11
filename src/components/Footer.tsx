import { Heart } from "lucide-react";

const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t-3 border-dashed border-pencil/20">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              {/* <span
                className="inline-flex items-center justify-center w-10 h-10 border-2 border-pencil rough-circle bg-postit text-xl font-heading font-bold text-pencil select-none"
                style={{ transform: "rotate(-3deg)" }}
              >
                YK
              </span> */}
              <span className="text-xl font-heading font-bold text-pencil">
                Yogesh Kumar
              </span>
            </div>
            <p className="text-base font-body text-pencil/50 leading-relaxed">
              GIS &amp; Full-Stack Software Engineer building and maintaining production systems.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-heading font-bold text-pencil mb-3 wavy-underline inline-block">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-base font-body text-pencil/60 no-underline hover:text-accent hover:line-through transition-all"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Doodle */}
          <div className="flex items-center justify-center md:justify-end">
            <div
              className="p-4 border-2 border-dashed border-pencil/30 text-center"
              style={{
                borderRadius: "255px 15px 225px 15px / 15px 225px 15px 255px",
                transform: "rotate(2deg)",
              }}
            >
              <p className="text-4xl mb-1">✏️</p>
              <p className="text-sm font-body text-pencil/40 italic">
                &quot;Keep sketching,
                <br />
                keep building&quot;
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t-2 border-dashed border-pencil/15 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-sm font-body text-pencil/40">
            © {new Date().getFullYear()} Yogesh Kumar. Scribbled with care.
          </p>
          <p className="text-sm font-body text-pencil/40 flex items-center gap-1">
            Made with <Heart size={14} className="text-accent" fill="#ff4d4d" />
            and lots of ☕
          </p>
        </div>
      </div>
    </footer>
  );
}
