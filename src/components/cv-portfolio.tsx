import type { ReactElement } from 'react';
import { AiFillGithub } from 'react-icons/ai';
import {
  MdArticle,
  MdCode,
  MdDownload,
  MdLocationOn,
  MdOpenInNew,
  MdPrint,
  MdSchool,
  MdWork,
} from 'react-icons/md';
import {
  buildCvData,
  type CvEducation,
  type CvExperience,
  type CvFocusArea,
  type CvLink,
  type CvProject,
  type CvRepository,
} from '../data/cv';

type CvPortfolioProps = {
  config: Config;
};

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  body?: string;
};

const SectionHeader = ({ eyebrow, title, body }: SectionHeaderProps) => (
  <div className="mb-8 max-w-3xl">
    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
      {eyebrow}
    </p>
    <h2 className="text-3xl font-semibold text-white sm:text-4xl">{title}</h2>
    {body && <p className="mt-4 text-base leading-7 text-zinc-300">{body}</p>}
  </div>
);

const ChipList = ({ items }: { items: string[] }) => (
  <div className="flex flex-wrap gap-2">
    {items.map((item) => (
      <span
        className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium text-zinc-200"
        key={item}
      >
        {item}
      </span>
    ))}
  </div>
);

const ContactLink = ({ link }: { link: CvLink }) => (
  <a
    className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm font-medium text-zinc-100 transition hover:border-cyan-300/60 hover:text-cyan-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
    href={link.href}
    rel="noreferrer"
    target={link.href.startsWith('mailto:') ? undefined : '_blank'}
  >
    {link.label === 'GitHub' && <AiFillGithub aria-hidden="true" />}
    {link.label}
    {!link.href.startsWith('mailto:') && <MdOpenInNew aria-hidden="true" />}
  </a>
);

const HeroVisual = ({ projects }: { projects: CvProject[] }) => {
  const visualProjects = projects.slice(0, 4);

  return (
    <div className="cv-hero-visual relative overflow-hidden rounded-lg border border-white/10 bg-zinc-950/80 p-3 shadow-2xl shadow-black/40">
      <div className="cv-visual-grid">
        {visualProjects.map((project, index) => (
          <a
            className="group relative isolate overflow-hidden rounded-md border border-white/10 bg-zinc-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
            href={project.link}
            key={`${project.title}-${project.period}`}
            rel="noreferrer"
            target="_blank"
          >
            {project.imageUrl && (
              <img
                alt={`${project.title} visual`}
                className="h-full w-full object-cover opacity-80 transition duration-500 group-hover:scale-[1.03] group-hover:opacity-100"
                decoding="async"
                loading={index === 0 ? 'eager' : 'lazy'}
                src={project.imageUrl}
              />
            )}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/70 to-transparent p-3">
              <p className="text-sm font-semibold text-white">
                {project.title}
              </p>
              <p className="mt-1 text-xs text-zinc-300">{project.period}</p>
            </div>
          </a>
        ))}
      </div>
      <div className="mt-3 grid grid-cols-3 gap-2 text-xs text-zinc-300">
        <div className="cv-meter">
          <span className="text-cyan-300">GPU</span>
          <strong>stable</strong>
        </div>
        <div className="cv-meter">
          <span className="text-amber-300">SYNC</span>
          <strong>multi-PC</strong>
        </div>
        <div className="cv-meter">
          <span className="text-rose-300">SPACE</span>
          <strong>site-fit</strong>
        </div>
      </div>
    </div>
  );
};

const ProjectCard = ({ project }: { project: CvProject }) => (
  <a
    className="group block overflow-hidden rounded-lg border border-white/10 bg-white/[0.035] transition hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-white/[0.055] focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
    href={project.link}
    rel="noreferrer"
    target="_blank"
  >
    <div className="aspect-[16/10] overflow-hidden bg-zinc-950">
      {project.imageUrl && (
        <img
          alt={`${project.title} project`}
          className="h-full w-full object-cover opacity-80 transition duration-500 group-hover:scale-[1.03] group-hover:opacity-100"
          decoding="async"
          loading="lazy"
          src={project.imageUrl}
        />
      )}
    </div>
    <div className="p-5">
      <div className="mb-3 flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
            {project.period}
            {project.location ? ` / ${project.location}` : ''}
          </p>
          <h3 className="mt-2 text-xl font-semibold text-white">
            {project.title}
          </h3>
        </div>
        <MdOpenInNew
          aria-hidden="true"
          className="mt-1 shrink-0 text-zinc-500 transition group-hover:text-cyan-300"
        />
      </div>
      <p className="text-sm leading-6 text-zinc-300">{project.description}</p>
      {project.role && (
        <p className="mt-4 text-sm leading-6 text-zinc-400">
          <span className="font-semibold text-zinc-200">Role: </span>
          {project.role}
        </p>
      )}
      <p className="mt-4 text-sm leading-6 text-zinc-400">
        <span className="font-semibold text-zinc-200">Challenge: </span>
        {project.challenge}
      </p>
      <div className="mt-4">
        <ChipList items={project.technologies} />
      </div>
    </div>
  </a>
);

const GithubProjectCard = ({ project }: { project: CvRepository }) => (
  <a
    className="group flex h-full flex-col rounded-lg border border-white/10 bg-white/[0.035] p-5 transition hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-white/[0.055] focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
    href={project.link}
    rel="noreferrer"
    target="_blank"
  >
    <div className="mb-5 flex items-start justify-between gap-4">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
          {project.repo}
        </p>
        <h3 className="mt-2 text-xl font-semibold text-white">
          {project.title}
        </h3>
      </div>
      <AiFillGithub
        aria-hidden="true"
        className="mt-1 shrink-0 text-2xl text-zinc-500 transition group-hover:text-cyan-300"
      />
    </div>
    <p className="flex-1 text-sm leading-6 text-zinc-300">
      {project.description}
    </p>
    <div className="mt-5">
      <ChipList items={project.technologies} />
    </div>
  </a>
);

const ExperienceItem = ({ experience }: { experience: CvExperience }) => (
  <article className="rounded-lg border border-white/10 bg-white/[0.035] p-5">
    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
      <div>
        <p className="text-sm font-medium uppercase tracking-[0.18em] text-cyan-300">
          {experience.period}
        </p>
        <h3 className="mt-2 text-2xl font-semibold text-white">
          {experience.position}
        </h3>
        {experience.companyLink ? (
          <a
            className="mt-1 inline-flex items-center gap-2 text-zinc-300 transition hover:text-cyan-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
            href={experience.companyLink}
            rel="noreferrer"
            target="_blank"
          >
            {experience.company}
            <MdOpenInNew aria-hidden="true" />
          </a>
        ) : (
          <p className="mt-1 text-zinc-300">{experience.company}</p>
        )}
      </div>
      <MdWork
        aria-hidden="true"
        className="hidden text-3xl text-zinc-600 sm:block"
      />
    </div>
    <ul className="mt-5 space-y-3 text-sm leading-6 text-zinc-300">
      {experience.bullets.map((bullet) => (
        <li className="flex gap-3" key={bullet}>
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-300" />
          <span>{bullet}</span>
        </li>
      ))}
    </ul>
  </article>
);

const EducationItem = ({ education }: { education: CvEducation }) => (
  <article className="rounded-lg border border-white/10 bg-white/[0.03] p-5">
    <div className="mb-4 flex items-center justify-between gap-4">
      <p className="text-sm font-medium uppercase tracking-[0.18em] text-zinc-500">
        {education.period}
      </p>
      <MdSchool aria-hidden="true" className="text-2xl text-zinc-600" />
    </div>
    <h3 className="text-xl font-semibold text-white">{education.degree}</h3>
    <p className="mt-2 text-sm text-zinc-300">{education.institution}</p>
  </article>
);

const FocusCard = ({
  focus,
  icon,
}: {
  focus: CvFocusArea;
  icon: ReactElement;
}) => (
  <article className="rounded-lg border border-white/10 bg-white/[0.035] p-5">
    <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-md border border-white/10 bg-white/[0.05] text-cyan-300">
      {icon}
    </div>
    <h3 className="text-xl font-semibold text-white">{focus.title}</h3>
    <p className="mt-3 text-sm leading-6 text-zinc-300">{focus.body}</p>
    <div className="mt-5">
      <ChipList items={focus.stack} />
    </div>
  </article>
);

const CvPortfolio = ({ config }: CvPortfolioProps) => {
  const data = buildCvData(config);
  const githubLink = data.contactLinks.find((link) => link.label === 'GitHub');

  return (
    <main className="cv-shell min-h-screen overflow-hidden bg-[#08090a] text-zinc-100">
      <a
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:text-zinc-950"
        href="#content"
      >
        Skip to content
      </a>
      <div aria-hidden="true" className="cv-backdrop" />

      <header className="relative border-b border-white/10">
        <nav
          aria-label="Primary"
          className="no-print mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-5 sm:px-8"
        >
          <a
            className="text-sm font-semibold uppercase tracking-[0.24em] text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
            href="#content"
          >
            {data.name}
          </a>
          <div className="hidden items-center gap-6 text-sm text-zinc-300 md:flex">
            <a className="transition hover:text-white" href="#work">
              Work
            </a>
            {data.githubProjects.length > 0 && (
              <a className="transition hover:text-white" href="#github">
                GitHub
              </a>
            )}
            <a className="transition hover:text-white" href="#experience">
              Experience
            </a>
            <a className="transition hover:text-white" href="#writing">
              Notes
            </a>
            <a className="transition hover:text-white" href="#contact">
              Contact
            </a>
          </div>
          <div className="flex items-center gap-2">
            {githubLink && (
              <a
                aria-label="GitHub profile"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-xl text-zinc-100 transition hover:border-cyan-300/60 hover:text-cyan-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
                href={githubLink.href}
                rel="noreferrer"
                target="_blank"
              >
                <AiFillGithub aria-hidden="true" />
              </a>
            )}
            <button
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-xl text-zinc-100 transition hover:border-amber-300/60 hover:text-amber-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-300"
              onClick={() => window.print()}
              type="button"
            >
              <span className="sr-only">Print CV</span>
              <MdPrint aria-hidden="true" />
            </button>
          </div>
        </nav>

        <section
          className="mx-auto grid min-h-[calc(100svh-82px)] max-w-7xl items-center gap-12 px-5 py-14 sm:px-8 lg:grid-cols-[1fr_0.86fr] lg:py-20"
          id="content"
        >
          <div>
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">
              <MdLocationOn aria-hidden="true" />
              {data.location}
            </p>
            <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] text-white sm:text-6xl lg:text-7xl">
              {data.name}
            </h1>
            <p className="mt-5 text-xl font-medium text-zinc-200 sm:text-2xl">
              {data.role}
            </p>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-300">
              {data.headline}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                className="inline-flex items-center gap-2 rounded-full bg-cyan-300 px-5 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-cyan-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-100"
                href="#work"
              >
                Selected Work
                <MdOpenInNew aria-hidden="true" />
              </a>
              {data.resumeUrl && (
                <a
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-3 text-sm font-semibold text-zinc-100 transition hover:border-amber-300/60 hover:text-amber-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-300"
                  href={data.resumeUrl}
                  rel="noreferrer"
                  target="_blank"
                >
                  CV PDF
                  <MdDownload aria-hidden="true" />
                </a>
              )}
            </div>
            <div className="mt-10">
              <ChipList items={data.primaryStack} />
            </div>
          </div>

          <HeroVisual projects={data.projects} />
        </section>
      </header>

      <section className="relative border-b border-white/10 px-5 py-16 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <SectionHeader
              body="A focused overview of graphics engineering work, production roles, and visual systems."
              eyebrow="About"
              title="Engineering for immersive visual spaces."
            />
            <p className="text-base leading-8 text-zinc-300">{data.summary}</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-lg border border-white/10 bg-white/[0.035] p-5">
              <p className="text-3xl font-semibold text-white">
                {data.projects.length}
              </p>
              <p className="mt-2 text-sm text-zinc-400">selected works</p>
            </div>
            <div className="rounded-lg border border-white/10 bg-white/[0.035] p-5">
              <p className="text-3xl font-semibold text-white">2020</p>
              <p className="mt-2 text-sm text-zinc-400">teamLab start</p>
            </div>
            <div className="rounded-lg border border-white/10 bg-white/[0.035] p-5">
              <p className="text-3xl font-semibold text-white">
                {data.skills.length}
              </p>
              <p className="mt-2 text-sm text-zinc-400">core skills</p>
            </div>
          </div>
        </div>
      </section>

      <section
        className="relative border-b border-white/10 px-5 py-16 sm:px-8"
        id="work"
      >
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            body="Selected installations, performance visuals, and realtime media projects ported from the existing GitProfile configuration."
            eyebrow="Featured Projects"
            title="Realtime work at architectural scale."
          />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {data.projects.map((project) => (
              <ProjectCard
                key={`${project.title}-${project.period}-${project.location || ''}`}
                project={project}
              />
            ))}
          </div>
        </div>
      </section>

      {data.githubProjects.length > 0 && (
        <section
          className="relative border-b border-white/10 px-5 py-16 sm:px-8"
          id="github"
        >
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              body="Pinned public repositories and graphics programming experiments."
              eyebrow="GitHub Projects"
              title="Open-source rendering and image experiments."
            />
            <div className="grid gap-5 md:grid-cols-2">
              {data.githubProjects.map((project) => (
                <GithubProjectCard key={project.repo} project={project} />
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="relative border-b border-white/10 px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            body="The work sits between renderer implementation, production tooling, and spatial system design."
            eyebrow="Graphics Experiments"
            title="Focused technical territory."
          />
          <div className="grid gap-5 md:grid-cols-3">
            {data.focusAreas.map((focus) => (
              <FocusCard
                focus={focus}
                icon={<MdCode aria-hidden="true" />}
                key={focus.title}
              />
            ))}
          </div>
        </div>
      </section>

      <section
        className="relative border-b border-white/10 px-5 py-16 sm:px-8"
        id="experience"
      >
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.75fr_1.25fr]">
          <SectionHeader
            body="Production experience carried over from the existing profile, expanded into CV-readable responsibilities."
            eyebrow="Experience"
            title="Graphics production and VR systems."
          />
          <div className="space-y-5">
            {data.experiences.map((experience) => (
              <ExperienceItem
                experience={experience}
                key={`${experience.company}-${experience.period}`}
              />
            ))}
          </div>
        </div>
      </section>

      <section
        className="relative border-b border-white/10 px-5 py-16 sm:px-8"
        id="writing"
      >
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <SectionHeader
              body="Concise technical notes for reviewers scanning the CV. These can become deeper writeups later."
              eyebrow="Technical Writeups"
              title="Renderer-minded engineering notes."
            />
            <div className="grid gap-5 md:grid-cols-3 lg:grid-cols-1">
              {data.technicalNotes.map((focus) => (
                <FocusCard
                  focus={focus}
                  icon={<MdArticle aria-hidden="true" />}
                  key={focus.title}
                />
              ))}
            </div>
          </div>
          <div>
            <SectionHeader
              eyebrow="Education"
              title="Architecture, systems, and spatial thinking."
            />
            <div className="space-y-5">
              {data.educations.map((education) => (
                <EducationItem
                  education={education}
                  key={`${education.degree}-${education.period}`}
                />
              ))}
            </div>
            <div className="mt-8">
              <h3 className="mb-4 text-lg font-semibold text-white">Skills</h3>
              <ChipList items={data.skills} />
            </div>
          </div>
        </div>
      </section>

      <section className="relative px-5 py-16 sm:px-8" id="contact">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
              Contact
            </p>
            <h2 className="max-w-3xl text-3xl font-semibold text-white sm:text-4xl">
              Graphics engineering, realtime rendering, and immersive systems.
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {data.contactLinks.map((link) => (
              <ContactLink key={link.label} link={link} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default CvPortfolio;
