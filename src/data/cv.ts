export type CvLink = {
  label: string;
  href: string;
};

export type CvProject = {
  title: string;
  period: string;
  location?: string;
  description: string;
  challenge: string;
  technologies: string[];
  imageUrl?: string;
  link: string;
};

export type CvExperience = {
  company: string;
  position: string;
  period: string;
  companyLink?: string;
  bullets: string[];
};

export type CvEducation = {
  institution: string;
  degree: string;
  period: string;
};

export type CvFocusArea = {
  title: string;
  body: string;
  stack: string[];
};

export type CvData = {
  name: string;
  role: string;
  summary: string;
  headline: string;
  location: string;
  skills: string[];
  primaryStack: string[];
  contactLinks: CvLink[];
  resumeUrl?: string;
  projects: CvProject[];
  experiences: CvExperience[];
  educations: CvEducation[];
  focusAreas: CvFocusArea[];
  technicalNotes: CvFocusArea[];
};

type ProjectProfile = {
  match: string;
  title: string;
  description: string;
  challenge: string;
  technologies: string[];
  period?: string;
  location?: string;
};

const DEFAULT_NAME = 'Tseng KueiMing';
const ROLE = 'Graphics Engineer / Creative Technologist';
const LOCATION = 'Tokyo, Japan';

const EXPERIENCE_BULLETS: Record<string, string[]> = {
  teamlab: [
    'Develops immersive digital content across real-time graphics, distributed systems, and spatial computing.',
    'Builds visual continuity across multiple PCs and complex surfaces including walls and floors.',
    'Works across shader development, profiling, synchronization, and large-scale object management.',
  ],
  'naxs corp': [
    'Built VR experiences and interactive real-time content.',
    'Worked on production C# workflows for spatial and immersive applications.',
  ],
};

const PROJECT_PROFILES: ProjectProfile[] = [
  {
    match: 'project-hoipoi-vj',
    title: 'HoiPoi VJ Production',
    description: 'Live-performance visual system for a Tokyo VJ context.',
    challenge:
      'Balancing expressive real-time visuals with stable playback and fast iteration during performance preparation.',
    technologies: ['Realtime graphics', 'VJ systems', 'Shader workflow'],
    period: 'May 2025',
    location: 'Tokyo, Japan',
  },
  {
    match: 'project-pearl-vj',
    title: 'Pearl VJ Production',
    description: 'Realtime visual production for a Tokyo VJ performance.',
    challenge:
      'Designing responsive visual material that stays legible under changing live-show timing and venue conditions.',
    technologies: ['Realtime graphics', 'Visual tooling', 'Media pipeline'],
    period: 'Apr 2025',
    location: 'Tokyo, Japan',
  },
  {
    match: 'flowersandpeople-kyoto',
    title: 'Flowers and People, Cannot be Controlled but Live Together',
    description:
      'Immersive teamLab installation centered on generative flower motion and spatial continuity.',
    challenge:
      'Supporting seamless visual behavior across large physical surfaces and multi-machine rendering contexts.',
    technologies: ['Distributed rendering', 'Spatial computing', 'Shaders'],
    period: 'Oct 2025',
    location: 'Kyoto, Japan',
  },
  {
    match: 'megaliths-phenomena',
    title: 'Megaliths in the Roots Garden',
    description:
      'Large-scale immersive installation for teamLab Phenomena Abu Dhabi.',
    challenge:
      'Maintaining coherent visual presence across architectural scale, complex geometry, and production constraints.',
    technologies: ['Realtime rendering', 'Installation systems', 'C#'],
    period: 'Dec 2024',
    location: 'Abu Dhabi, UAE',
  },
  {
    match: 'softterrain-jeddah',
    title: 'Soft Terrain in Granular Topography',
    description:
      'Interactive terrain-like visual work for teamLab Borderless Jeddah.',
    challenge:
      'Preserving organic motion and surface readability while keeping runtime performance predictable.',
    technologies: ['Procedural motion', 'Shaders', 'Profiling'],
    period: 'May 2024',
    location: 'Jeddah, Saudi Arabia',
  },
  {
    match: 'life-ephemerallight-jeddah',
    title: 'Life is an Ephemeral Light that Blooms in the Dark',
    description: 'Immersive light-based teamLab work presented in Jeddah.',
    challenge:
      'Coordinating luminous, time-sensitive visual behavior with stable multi-display execution.',
    technologies: ['Realtime visuals', 'Synchronization', 'Rendering'],
    period: 'May 2024',
    location: 'Jeddah, Saudi Arabia',
  },
  {
    match: 'life-ephemerallight-azabudai',
    title: 'Life is an Ephemeral Light that Blooms in the Dark',
    description:
      'Tokyo presentation of an immersive light and motion installation.',
    challenge:
      'Adapting a sensitive visual system to site-specific geometry and viewing conditions.',
    technologies: ['Realtime visuals', 'Spatial adaptation', 'Shaders'],
    period: 'Feb 2024',
    location: 'Azabudai, Tokyo, Japan',
  },
  {
    match: 'reconnect',
    title: 'Rinkan Sauna',
    description:
      'Realtime visual installation developed for a sauna and immersion environment.',
    challenge:
      'Creating atmospheric real-time imagery that remains calm, responsive, and production-stable.',
    technologies: [
      'Realtime rendering',
      'Projection content',
      'Interactive media',
    ],
    period: 'Mar 2021',
    location: 'Roppongi, Tokyo, Japan',
  },
  {
    match: 'flowers-bombing-home',
    title: 'Flower Bombing Home',
    description:
      'Remote participatory artwork that brought a museum experience into the home.',
    challenge:
      'Connecting audience-generated visual content with a web-delivered, accessible presentation flow.',
    technologies: ['Web experience', 'Realtime media', 'Participatory systems'],
    period: 'Aug 2020',
  },
  {
    match: 'soft_terrain_forest',
    title: 'Soft Terrain in Granular Topography',
    description: 'Organic terrain visual installation presented in Fukuoka.',
    challenge:
      'Producing soft, granular motion with enough performance headroom for exhibition runtime.',
    technologies: ['Procedural visuals', 'Shaders', 'Performance tuning'],
    period: 'Apr 2020',
    location: 'Fukuoka, Japan',
  },
];

const FOCUS_AREAS: CvFocusArea[] = [
  {
    title: 'Realtime Rendering',
    body: 'Shader-centered graphics work with attention to frame stability, visual clarity, and production constraints.',
    stack: ['HLSL / GLSL', 'RenderDoc', 'PIX'],
  },
  {
    title: 'Distributed Visual Systems',
    body: 'Multi-PC synchronization and large-scale object management for immersive installations.',
    stack: ['C#', 'Networking', 'System architecture'],
  },
  {
    title: 'Spatial Computing',
    body: 'Visual systems shaped around walls, floors, architecture, and human movement through space.',
    stack: ['Rhino', 'Grasshopper', 'Projection geometry'],
  },
];

const TECHNICAL_NOTES: CvFocusArea[] = [
  {
    title: 'Profiling First',
    body: 'Rendering work is evaluated through GPU captures, timing budgets, and targeted reductions before visual compromises.',
    stack: ['RenderDoc', 'PIX', 'Frame timing'],
  },
  {
    title: 'Shader Clarity',
    body: 'Shader code is kept modular enough to survive iteration while preserving the math behind the visual behavior.',
    stack: ['GLSL', 'HLSL', 'Procedural motion'],
  },
  {
    title: 'Installation Robustness',
    body: 'Production systems favor deterministic behavior, graceful constraints, and clear operational boundaries.',
    stack: ['C#', 'Distributed runtime', 'Tooling'],
  },
];

const cleanText = (value?: string): string => {
  return (value || '').replace(/窶覇/g, ', ').replace(/\s+/g, ' ').trim();
};

const getDisplayName = (config: Config): string => {
  const title = cleanText(config.seo?.title);
  const portfolioPrefix = 'Portfolio of ';

  if (title.startsWith(portfolioPrefix)) {
    return title.slice(portfolioPrefix.length).trim() || DEFAULT_NAME;
  }

  return DEFAULT_NAME;
};

const getProjectProfile = (link: string): ProjectProfile | undefined => {
  return PROJECT_PROFILES.find((profile) => link.includes(profile.match));
};

const parsePeriodLocation = (
  description?: string,
): { period: string; location?: string } => {
  const cleanDescription = cleanText(description);
  const match = cleanDescription.match(
    /([A-Z][a-z]{2,8}\s+\d{4})(?:,\s*(.+))?$/,
  );

  return {
    period: match?.[1] || 'Selected work',
    location: match?.[2],
  };
};

const isRealResumeUrl = (url?: string): url is string => {
  return !!url && !url.includes('dummy.pdf');
};

const makeContactLinks = (config: Config): CvLink[] => {
  const social = config.social || {};
  const links: CvLink[] = [
    {
      label: 'GitHub',
      href: `https://github.com/${config.github.username}`,
    },
  ];

  if (social.website) {
    links.push({
      label: 'Website',
      href: social.website.startsWith('http')
        ? social.website
        : `https://${social.website}`,
    });
  }

  if (social.linkedin) {
    links.push({
      label: 'LinkedIn',
      href: `https://www.linkedin.com/in/${social.linkedin}`,
    });
  }

  if (social.email) {
    links.push({
      label: 'Email',
      href: `mailto:${social.email}`,
    });
  }

  return links;
};

const makeProjects = (config: Config): CvProject[] => {
  const externalProjects = config.projects?.external?.projects || [];

  return externalProjects.map((project) => {
    const profile = getProjectProfile(project.link);
    const parsed = parsePeriodLocation(project.description);

    return {
      title: profile?.title || cleanText(project.title),
      period: profile?.period || parsed.period,
      location: profile?.location || parsed.location,
      description: profile?.description || cleanText(project.description),
      challenge:
        profile?.challenge ||
        'Selected graphics project focused on real-time visual quality and production reliability.',
      technologies: profile?.technologies || ['Realtime graphics'],
      imageUrl: project.imageUrl,
      link: project.link,
    };
  });
};

const makeExperiences = (config: Config): CvExperience[] => {
  return (config.experiences || []).map((experience) => {
    const company = cleanText(experience.company);
    const position = cleanText(experience.position);
    const key = company.toLowerCase();

    return {
      company,
      position,
      period: `${experience.from} - ${experience.to}`,
      companyLink: experience.companyLink,
      bullets: EXPERIENCE_BULLETS[key] || [
        'Contributed to real-time graphics, interactive systems, and production engineering.',
      ],
    };
  });
};

const makeEducations = (config: Config): CvEducation[] => {
  return (config.educations || []).map((education) => ({
    institution: cleanText(education.institution),
    degree: cleanText(education.degree),
    period: `${education.from} - ${education.to}`,
  }));
};

export const buildCvData = (config: Config): CvData => {
  const skills = config.skills || [];

  return {
    name: getDisplayName(config),
    role: ROLE,
    summary:
      cleanText(config.bio) ||
      'Graphics engineer focused on real-time rendering, shader development, and immersive spatial systems.',
    headline:
      'Realtime rendering, shader systems, and immersive spatial engineering for large-scale digital experiences.',
    location: LOCATION,
    skills,
    primaryStack: skills.slice(0, 6),
    contactLinks: makeContactLinks(config),
    resumeUrl: isRealResumeUrl(config.resume?.fileUrl)
      ? config.resume?.fileUrl
      : undefined,
    projects: makeProjects(config),
    experiences: makeExperiences(config),
    educations: makeEducations(config),
    focusAreas: FOCUS_AREAS,
    technicalNotes: TECHNICAL_NOTES,
  };
};
