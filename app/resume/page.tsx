import type { Metadata } from "next";
import Link from "next/link";
import styles from "../portfolio.module.css";

export const metadata: Metadata = {
  title: "Resume | Bradford Allen Rodgers-Farmer",
  description:
    "Resume of Bradford Allen Rodgers-Farmer, Senior Software Engineer at PEI: experience, projects, skills, and education.",
};

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth={2.5} aria-hidden="true">
      <path d="M20 6 9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const ACCOMPLISHMENTS = [
  "Saved $150K per year at Fairygodboss through consolidation of cloud services",
  "Improved page speed of Fairygodboss by 80 percent",
  "Helped design and create the Shoppable Video service, later sold to Unilever and GSK",
  "Worked with large online retailers to integrate their APIs into our checkout flow",
  "Updated Shoppable\u2019s checkout solution to ensure full PCI compliance",
  "Mentored junior developers to level up their skills",
  "Graduated with a master\u2019s degree in Computer Engineering",
];

const PROJECT_LINKS = [
  {
    name: "crawlers.cc",
    badge: "Latest",
    description:
      "Free GM tool for running Dungeon Crawler Carl tabletop RPG sessions: dungeon floor generation, tile-by-tile map reveal, and character, loot, and achievement tracking.",
    tags: ["Next.js", "Cloudflare", "Auth0"],
    href: "https://crawlers.cc",
  },
  {
    name: "TCG Wallet",
    badge: "Live",
    description:
      "Core wallet technology for trading card games, engineered with PCI-grade rigor for real-money flows.",
    tags: ["Next.js", "OAuth", "Google Cloud"],
    href: "https://tcg-wallet.com",
  },
  {
    name: "Cortex AI NPC Generator",
    badge: "AI Tool",
    description:
      "AI-powered non-player character generator for the Cortex Prime tabletop RPG, with backstories, stats, and plot hooks.",
    tags: ["Next.js", "Cloudflare AI"],
    href: "/cortexPrimeCreator",
  },
  {
    name: "Magical Arrival",
    badge: "AI Storytelling",
    description:
      "An AI story-based tabletop RPG with collaborative narrative generation and dynamic story arcs.",
    tags: ["Next.js", "AI"],
    href: "/magicalArrival",
  },
];

export default function Page() {
  return (
    <div className={styles.page}>
      <div className={styles.ambient} aria-hidden="true" />
      <div className={styles.wrap}>
        <div className={styles.resumeHead}>
          <div>
            <Link className={styles.backLink} href="/">
              &#8592; Back to Home
            </Link>
            <h1>Resume</h1>
            <p className={styles.sub}>
              Bradford Allen Rodgers-Farmer | Senior Software Engineer |
              bradfordrodgersfarmer@gmail.com
            </p>
          </div>
        </div>

        <section className={styles.section}>
          <div className={styles.sectionHead}>
            <h2>Key Accomplishments</h2>
          </div>
          <div className={styles.accomplish}>
            {ACCOMPLISHMENTS.map((a) => (
              <div key={a} className={styles.item}>
                <CheckIcon />
                <span>{a}</span>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHead}>
            <h2>Projects I&apos;ve Worked On</h2>
            <p>
              Selected products and tools, from commerce infrastructure to
              AI-powered tabletop experiences.
            </p>
          </div>
          <div className={styles.grid}>
            {PROJECT_LINKS.map((p) => (
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

        <section className={styles.section}>
          <div className={styles.sectionHead}>
            <h2>Jobs</h2>
          </div>

          <article className={styles.job}>
            <div className={styles.jobHead}>
              <h3>
                Senior Software Engineer <span>@ PEI</span>
              </h3>
              <span className={styles.period}>Sep 2026 to Present</span>
            </div>
            <ul>
              <li>Full-time, hybrid role based in New York, United States</li>
            </ul>
          </article>

          <article className={styles.job}>
            <div className={styles.jobHead}>
              <h3>
                Technical Engineering Manager <span>@ Fortune</span>
              </h3>
              <span className={styles.period}>Jul 2025 to Present</span>
            </div>
            <ul>
              <li>
                Promoted from Technical Lead (Mar 2025 to Jul 2025) after joining as
                Senior Software Engineering Consultant (Nov 2024 to Mar 2025, contract)
              </li>
              <li>
                Helping the Fortune Media team modernize with best engineering and
                development practices
              </li>
              <li>
                Improving the core web product and ad product to increase customer
                acquisition and retention rates
              </li>
            </ul>
          </article>

          <article className={styles.job}>
            <div className={styles.jobHead}>
              <h3>
                Principal Software Engineer <span>@ Fairygodboss</span>
              </h3>
              <span className={styles.period}>May 2021 to May 2024</span>
            </div>
            <ul>
              <li>Responsible for managing the development of new features and new products</li>
              <li>
                Choose the technologies that run the company effectively, including
                migrating article and jobs pages to Next.js
              </li>
              <li>Saved the company $150K per year through consolidation of cloud services</li>
              <li>
                Worked with a professional design team and external partners to deliver a
                great user experience
              </li>
              <li>
                Improved the email service with better personalization to lift user retention
              </li>
              <li>
                <strong>Technologies:</strong> Node.js, React, Next.js, NestJS, NX, Airflow,
                Google Cloud Functions, Jenkins, Machine Learning Modeling
              </li>
              <li>
                <strong>Cloud platforms:</strong> AWS, GCP
              </li>
              <li>Trained junior developers and led engineering hiring</li>
            </ul>
          </article>

          <article className={styles.job}>
            <div className={styles.jobHead}>
              <h3>
                Principal Software Engineer <span>@ Shoppable</span>
              </h3>
              <span className={styles.period}>Nov 2016 to May 2021</span>
            </div>
            <ul>
              <li>Joined as Lead Software Developer (Dec 2015 to Nov 2016)</li>
              <li>Developed Shoppable Video, later sold to Unilever and GSK</li>
              <li>Set up microservices to run checkout</li>
              <li>Kept all products PCI compliant and certified</li>
              <li>
                Worked with major brands such as GSK and Unilever to design checkout
                experiences across their brands
              </li>
              <li>
                Integrated retailer APIs from Walmart, Target, and Ulta into the checkout flow
              </li>
              <li>Worked directly with the CEO on business and technical direction</li>
              <li>Used BPMN to design the checkout and fulfillment flow</li>
              <li>
                <strong>Technologies:</strong> Rails, Ruby, Node.js, React, BPMN, AngularJS
              </li>
              <li>
                <strong>Cloud platforms:</strong> Azure, AWS, GCP
              </li>
            </ul>
          </article>

          <article className={styles.job}>
            <div className={styles.jobHead}>
              <h3>
                Lead Developer <span>@ Propeller Communications</span>
              </h3>
              <span className={styles.period}>Dec 2011 to Dec 2015</span>
            </div>
            <ul>
              <li>
                Created specialized iPad sales applications for Johnson and Johnson sales
                teams
              </li>
              <li>Turned client requests into shipped product features</li>
              <li>
                Worked closely with the business team at Johnson and Johnson to design
                products for their sales team
              </li>
              <li>Created documentation for handoffs to business partners</li>
              <li>
                <strong>Technologies:</strong> iOS, HTML5, JavaScript, Unity (C#), PHP
              </li>
            </ul>
          </article>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHead}>
            <h2>Skills</h2>
          </div>
          <div className={styles.skills}>
            {[
              "Node.js",
              "Next.js",
              "NestJS",
              "Go",
              "Ruby on Rails",
              "React",
              "AngularJS",
              "BPMN",
              "Serverless",
              "Behavior Driven Development",
              "Software Engineering Practices",
              "JavaScript",
              "MySQL",
              "UML Documentation",
              "Python",
              "Ajax",
              "Linux",
              "Gantt Chart Creation",
              "Agile Methodologies",
              "AWS",
              "GCP",
              "Azure",
              "LLMs",
            ].map((s) => (
              <span key={s} className={styles.tag}>
                {s}
              </span>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHead}>
            <h2>Education</h2>
          </div>
          <article className={styles.job}>
            <ul>
              <li>
                <strong>M.E. Computer and Electrical Engineering</strong>, Rutgers University,
                2011 | New Brunswick, New Jersey
              </li>
              <li>
                <strong>B.E. Computer and Electrical Engineering</strong>, Rutgers University,
                2007 | New Brunswick, New Jersey
              </li>
            </ul>
          </article>
        </section>

        <footer className={styles.footer}>
          <span>&copy; {new Date().getFullYear()} Bradford Allen Rodgers-Farmer</span>
          <Link className={styles.backLink} href="/">
            &#8592; Back to Home
          </Link>
        </footer>
      </div>
    </div>
  );
}
