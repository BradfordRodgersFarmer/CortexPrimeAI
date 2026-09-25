import type { Metadata } from "next";
import Image from "next/image";
import Script from "next/script";
import styles from "./portfolio.module.css";
import { SocialLinks } from "./socials";

export const metadata: Metadata = {
  title: "Bradford Allen Rodgers-Farmer | Principal Software Engineer",
  description:
    "Portfolio of Bradford Allen Rodgers-Farmer, Principal Software Engineer specializing in Next.js, cloud architecture, PCI-compliant checkout systems, and AI-powered tools.",
};

const PROJECTS = [
  {
    name: "crawlers.cc",
    badge: "Latest",
    description:
      "Free GM tool for running Dungeon Crawler Carl tabletop RPG sessions. Generates dungeon floors, reveals maps tile-by-tile, and tracks characters, loot, and achievements.",
    tags: ["Next.js", "Cloudflare", "Auth0", "GA4", "SEO"],
    href: "https://crawlers.cc",
  },
  {
    name: "TCG Wallet",
    badge: "Live",
    description:
      "Core wallet technology for trading card games, built to handle real-money flows with the same rigor as PCI-certified checkout systems.",
    tags: ["Next.js", "OAuth", "Google Cloud"],
    href: "https://tcg-wallet.com",
  },
  {
    name: "Cortex AI NPC Generator",
    badge: "AI Tool",
    description:
      "AI-powered non-player character generator for the Cortex Prime tabletop RPG. Creates rich characters with backstories, stats, and plot hooks in seconds.",
    tags: ["Next.js", "Cloudflare AI", "TypeScript"],
    href: "/cortexPrimeCreator",
  },
  {
    name: "Magical Arrival",
    badge: "AI Storytelling",
    description:
      "An AI story-based tabletop RPG experience. Collaborative narrative generation with dynamic story arcs that adapt to player choices.",
    tags: ["Next.js", "AI", "Storytelling"],
    href: "/magicalArrival",
  },
];

const SKILLS = [
  "Node.js",
  "React",
  "Next.js",
  "NestJS",
  "TypeScript",
  "Python",
  "Go",
  "Ruby on Rails",
  "AWS",
  "GCP",
  "Azure",
  "PCI DSS",
  "Machine Learning",
  "Airflow",
  "Jenkins",
  "Agile Leadership",
];

const EXPERIENCE = [
  {
    title: "Principal Software Engineer",
    company: "The Muse (formerly Fairygodboss)",
    period: "May 2020 to Present",
    bullets: [
      "Lead development of new features and products, choosing the technologies that run the company effectively",
      "Migrated article and jobs pages to Next.js, improving page speed by 80 percent",
      "Saved the company $150K per year through cloud service consolidation",
      "Rebuilt email services for deeper personalization and better user retention",
      "Mentor junior developers and lead engineering hiring",
    ],
  },
  {
    title: "Principal Software Engineer",
    company: "Shoppable",
    period: "2015 to May 2020",
    bullets: [
      "Designed and built Shoppable Video, a product later sold to Unilever and GSK",
      "Architected microservices powering PCI-compliant checkout flows",
      "Integrated retailer APIs from Walmart, Target, and Ulta into the checkout experience",
      "Worked directly with the CEO on business and technical direction",
    ],
  },
  {
    title: "Lead Mobile Developer",
    company: "Propeller Communications",
    period: "2011 to 2014",
    bullets: [
      "Built specialized iPad sales applications for Johnson and Johnson sales teams",
      "Turned client requests into shipped product features",
      "Created documentation for smooth handoffs to business partners",
    ],
  },
];

export default function Page() {
  return (
    <div className={styles.page}>
      <Script src="https://www.tiktok.com/embed.js" strategy="beforeInteractive" />
      <div className={styles.ambient} aria-hidden="true" />
      <div className={styles.wrap}>
        <nav className={styles.nav}>
          <span className={styles.brand}>B. Rodgers-Farmer</span>
          <div className={styles.navLinks}>
            <a href="#projects">Projects</a>
            <a href="#experience">Experience</a>
            <a href="#tiktok">TikTok</a>
            <a href="/resume">Resume</a>
          </div>
        </nav>

        <header className={styles.hero}>
          <div className={styles.photoCol}>
            <div className={styles.photoRing}>
              <Image
                src="/headshot.png"
                alt="Bradford Allen Rodgers-Farmer"
                width={200}
                height={200}
                priority
              />
            </div>
          </div>
          <div>
            <span className={styles.eyebrow}>Principal Software Engineer</span>
            <h1>
              Bradford Allen <span className={styles.gradient}>Rodgers-Farmer</span>
            </h1>
            <p className={styles.role}>
              Building fast, secure, and scalable web platforms for nearly two decades
            </p>
            <p className={styles.bio}>
              I am a professional software engineer with a master&apos;s degree in computer
              engineering and business. My passion is developing new tools and business
              methods that sharpen a company&apos;s marketability and streamline its
              workflow. I specialize in PCI security practices, cloud architecture, and
              leading teams that ship.
            </p>
            <div className={styles.ctaRow}>
              <a className={`${styles.btn} ${styles.btnPrimary}`} href="/resume">
                View Resume
              </a>
              <a
                className={`${styles.btn} ${styles.btnGhost}`}
                href="mailto:bradfordrodgersfarmer@gmail.com"
              >
                Get in Touch
              </a>
            </div>
            <SocialLinks />
          </div>
        </header>

        <div className={styles.stats}>
          <div className={styles.stat}>
            <div className={styles.statNum}>18+</div>
            <div className={styles.statLabel}>Years building software</div>
          </div>
          <div className={styles.stat}>
            <div className={styles.statNum}>$150K</div>
            <div className={styles.statLabel}>Saved yearly via cloud consolidation</div>
          </div>
          <div className={styles.stat}>
            <div className={styles.statNum}>80%</div>
            <div className={styles.statLabel}>Page-speed improvement at The Muse</div>
          </div>
          <div className={styles.stat}>
            <div className={styles.statNum}>PCI</div>
            <div className={styles.statLabel}>Certified secure checkout systems</div>
          </div>
        </div>

        <section className={styles.section} id="projects">
          <div className={styles.sectionHead}>
            <h2>Projects</h2>
            <p>
              A selection of products and tools I have designed and built, from
              PCI-certified commerce platforms to AI-powered tabletop experiences.
            </p>
          </div>
          <div className={styles.grid}>
            {PROJECTS.map((p) => (
              <a
                key={p.name}
                className={styles.card}
                href={p.href}
                target={p.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
              >
                <div className={styles.cardTop}>
                  <span className={styles.badge}>{p.badge}</span>
                  <span className={styles.arrow} aria-hidden="true">
                    &#8599;
                  </span>
                </div>
                <h3>{p.name}</h3>
                <p>{p.description}</p>
                <div className={styles.tags}>
                  {p.tags.map((t) => (
                    <span key={t} className={styles.tag}>
                      {t}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </section>

        <section className={styles.section} id="experience">
          <div className={styles.sectionHead}>
            <h2>Experience</h2>
            <p>
              Two decades across startups and growth-stage companies, from mobile
              apps to commerce infrastructure to media platforms.
            </p>
          </div>
          {EXPERIENCE.map((job) => (
            <article key={job.company} className={styles.job}>
              <div className={styles.jobHead}>
                <h3>
                  {job.title} <span>@ {job.company}</span>
                </h3>
                <span className={styles.period}>{job.period}</span>
              </div>
              <ul>
                {job.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </article>
          ))}
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHead}>
            <h2>Skills</h2>
          </div>
          <div className={styles.skills}>
            {SKILLS.map((s) => (
              <span key={s} className={styles.tag}>
                {s}
              </span>
            ))}
          </div>
        </section>

        <section className={styles.section} id="tiktok">
          <div className={styles.sectionHead}>
            <h2>On TikTok</h2>
            <p>
              I post about software engineering, tabletop gaming, and the tools I
              build. Follow along at <strong>@truebelvira</strong>.
            </p>
          </div>
          <div className={styles.tiktok}>
            <div className={styles.tiktokCopy}>
              <p>
                Short videos on engineering craft, AI experiments, and behind the
                scenes of projects like crawlers.cc and the Cortex AI NPC
                Generator. New videos drop regularly.
              </p>
              <div className={styles.ctaRow}>
                <a
                  className={`${styles.btn} ${styles.btnPrimary}`}
                  href="https://www.tiktok.com/@truebelvira"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Follow @truebelvira
                </a>
              </div>
              <SocialLinks compact />
            </div>
            <div className={styles.embedBox}>
              <iframe
                src="https://www.tiktok.com/embed/7349690896402763038"
                style={{ maxWidth: "605px", minWidth: "305px", height: "600px" }}
                allowFullScreen
                allow="encrypted-media;"
                title="TikTok video by @truebelvira"
              />
            </div>
          </div>
        </section>

        <footer className={styles.footer}>
          <span>&copy; {new Date().getFullYear()} Bradford Allen Rodgers-Farmer</span>
          <span>Built with Next.js on Cloudflare</span>
        </footer>
      </div>
    </div>
  );
}
