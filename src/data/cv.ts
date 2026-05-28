export type CvLink = {
  label: string;
  href: string;
};

export type CvProject = {
  title: string;
  period: string;
  location?: string;
  description: string;
  role?: string;
  challenge: string;
  technologies: string[];
  imageUrl?: string;
  link: string;
};

export type CvRepository = {
  repo: string;
  title: string;
  description: string;
  technologies: string[];
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
  highlights: string[];
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
  githubProjects: CvRepository[];
  experiences: CvExperience[];
  educations: CvEducation[];
  focusAreas: CvFocusArea[];
  technicalNotes: CvFocusArea[];
};

type ProjectProfile = {
  match: string;
  title: string;
  description: string;
  role?: string;
  challenge: string;
  technologies: string[];
  period?: string;
  location?: string;
};

type ExternalProject = NonNullable<ExternalProjects['projects']>[number];
type GithubProjectProfile = Omit<CvRepository, 'repo' | 'link'>;

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
    match: 'flowermountain_macao',
    title: 'Valley of Flowers and People: Lost, Immersed and Reborn',
    description:
      'Immersive teamLab installation centered on generative flower motion and spatial continuity.',
    role: 'Solo engineer for realtime rendering and distributed visual systems.',
    challenge:
      'Supporting seamless visual behavior across large physical surfaces and multi-machine rendering contexts.',
    technologies: [
      'Distributed rendering',
      'Spatial computing',
      'P2P transport',
    ],
    period: 'Mar 2026',
    location: 'Macao',
  },
  {
    match: 'waterparticles-rock-azabudai',
    title: 'Universe of Water Particles on a Rock where People Gather',
    description:
      'Immersive teamLab installation centered on generative flower motion and spatial continuity.',
    role: 'Graphics engineer for spatial rendering, synchronization, and production integration.',
    challenge:
      'Supporting seamless visual behavior across large physical surfaces and multi-machine rendering contexts.',
    technologies: [
      'Distributed rendering',
      'Spatial computing',
      'P2P transport',
    ],
    period: 'Feb 2026',
    location: 'Tokyo',
  },
  {
    match: 'project-clinic',
    title: 'Dong Sheng Clinic Website',
    description:
      'Production clinic website for a Kaohsiung psychiatry, combining service information, health articles, and appointment entry points.',
    role: 'Sole engineer responsible for frontend implementation, appointment workflow and deployment.',
    challenge:
      'Balancing a calm medical brand experience with practical patient workflows, readable bilingual content, lightweight interactive visuals and responsive layout.',
    technologies: [
      'WebGL',
      'Frontend Development',
      'Appointment workflow',
    ],
    period: 'Dec 2025',
    location: 'Kaohsiung, Taiwan',
  },
  {
    match: 'vj-production',
    title: 'VJ Production',
    description: 'Live-performance visual system for a Tokyo VJ context.',
    role: 'Realtime graphics developer for VJ content and performance-ready visual tooling.',
    challenge:
      'Balancing expressive real-time visuals with stable playback and fast iteration during performance preparation.',
    technologies: ['Realtime graphics', 'VJ systems', 'Shader workflow'],
    period: 'Apr~ 2025',
    location: 'Tokyo, Japan',
  },
  {
    match: 'project-hoipoi-vj',
    title: 'HoiPoi VJ Production',
    description: 'Live-performance visual system for a Tokyo VJ context.',
    role: 'Realtime graphics developer for VJ content and performance-ready visual tooling.',
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
    role: 'Realtime graphics developer for VJ content, media preparation, and show iteration.',
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
    role: 'Graphics engineer supporting shaders, spatial playback, and multi-machine visual continuity.',
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
      'Large-scale LED installation for teamLab Phenomena Abu Dhabi.',
    role: 'Sole engineer for realtime rendering, instancing, and installation-scale production constraints.',
    challenge:
      'Maintaining coherent visual presence across architectural scale, complex geometry, and production constraints.',
    technologies: [
      'Realtime rendering',
      'GPU Instancing',
      'Installation systems',
    ],
    period: 'Dec 2024',
    location: 'Abu Dhabi, UAE',
  },
  {
    match: 'softterrain-jeddah',
    title: 'Soft Terrain in Granular Topography',
    description:
      'Interactive terrain-like visual work for teamLab Borderless Jeddah.',
    role: 'Solo engineer for procedural visual behavior, shaders, and runtime performance tuning.',
    challenge:
      'Preserving organic motion and surface readability while keeping runtime performance predictable.',
    technologies: ['Procedural motion', 'Shaders', 'Profiling'],
    period: 'May 2024',
    location: 'Jeddah, Saudi Arabia',
  },
  {
    match: 'spatialcalligraphy',
    title: 'Spatial Calligraphy in the Forest - One Stroke',
    description:
      'A real-time installation featuring multi-layered spatial visuals that rotate, intersect, and dissolve directly into the natural environment.',
    role: 'Solo developer for realtime spatial calligraphy visuals and projection behavior.',
    challenge:
      'Reconstructing the depth, speed, and force of calligraphic ink traces as spatial motion while keeping the projected stroke readable across trees, darkness, and outdoor viewing conditions.',
    technologies: [
      'Spatial calligraphy',
      '3d realtime mapping',
      'Generative motion',
    ],
    period: 'Jul 2022',
    location: 'Osaka, Japan',
  },
  {
    match: 'luxe',
    title: 'LUXE - Ice skate show',
    description:
      'Spatial production for the ice show, using full-rink and dynamic projection to synchronize with performers, scenes, and movement in real time.',
    role: 'Graphics engineer supporting realtime projected environments for a live ice-show stage.',
    challenge:
      'Coordinating large-scale projection across an ice rink and screens while keeping visuals responsive to choreography, scene changes, and live performance timing.',
    technologies: [
      'Spatial production',
      'Realtime visuals',
      'Interactive staging',
    ],
    period: 'May 2021',
    location: 'Yokohama, Japan',
  },
  {
    match: 'reconnect',
    title: 'Rinkan Sauna',
    description:
      'Realtime visual installation developed for a sauna and immersion environment.',
    role: 'Realtime visual developer for atmospheric projection content and installation playback.',
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
    role: 'Web and realtime media developer supporting remote participation and generated visual content.',
    challenge:
      'Connecting audience-generated visual content with a web-delivered, accessible presentation flow.',
    technologies: ['Web experience', 'Realtime media', 'Participatory systems'],
    period: 'Aug 2020',
  },
  {
    match: 'life-ephemerallight-jeddah',
    title: 'Life is an Ephemeral Light that Blooms in the Dark',
    description: 'Immersive light-based teamLab work presented in Jeddah.',
    role: 'Solo engineer supporting realtime graphic behavior, synchronization, and exhibition deployment.',
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
    role: 'Solo engineer supporting spatial adaptation, shaders, and production-ready playback.',
    challenge:
      'Adapting a sensitive visual system to site-specific geometry and viewing conditions.',
    technologies: ['Realtime visuals', 'Spatial adaptation', 'Shaders'],
    period: 'Feb 2024',
    location: 'Azabudai, Tokyo, Japan',
  },
  {
    match: 'soft_terrain_forest',
    title: 'Soft Terrain in Granular Topography',
    description: 'Organic terrain visual installation presented in Fukuoka.',
    role: 'Solo engineer for procedural terrain visuals, shader behavior, and performance tuning.',
    challenge:
      'Producing soft, granular motion with enough performance headroom for exhibition runtime.',
    technologies: ['Procedural visuals', 'Shaders', 'Performance tuning'],
    period: 'Apr 2020',
    location: 'Fukuoka, Japan',
  },
  {
    match: 'render-ghost',
    title: 'Render Ghost',
    description:
      'Immersive VR theater that moves between embodied theater space and a virtual world.',
    role: 'VR developer responsible for shared multiplayer VR behavior and location-based experience integration.',
    challenge:
      'Building a shared location-based VR experience where multiple participants could inhabit the same narrative space while physical movement, headset visuals, theater lighting, sound, and staging stayed synchronized.',
    technologies: ['VR', 'Photon Networking', 'Immersive theater'],
    period: '2017 - 2018',
    location: 'Taiwan & Various Countries',
  },
  {
    match: 'ar-vr-thesis',
    title:
      'Interactive Augmented Reality and Virtual Reality Audio-Visual Performance for Multi-User',
    description:
      'Master thesis research developing a multi-user AR/VR audiovisual performance system with mobile ARKit world tracking, VR interaction, and synchronized virtual events.',
    challenge:
      'Using ARKit world tracking and ARWorldMap-style spatial alignment to let audience members participate in a shared audiovisual performance across mobile AR and VR devices.',
    technologies: [
      'ARKit',
      'Unity',
      'VR',
      'Multi-user interaction',
      'Audio-visual performance',
    ],
    period: 'Oct 2018',
    location: 'Hsinchu, Taiwan',
  },
];

const GITHUB_PROJECT_PROFILES: Record<string, GithubProjectProfile> = {
  'tsengkweiming/unity-oit': {
    title: 'Unity OIT',
    description:
      'Unity rendering prototype focused on order-independent transparency and transparent-surface compositing workflows.',
    technologies: ['Unity', 'HLSL', 'Transparency', 'Rendering'],
  },
  'tsengkweiming/texturesynthesis': {
    title: 'TextureSynthesis',
    description:
      'Texture synthesis experiment exploring example-based image generation and algorithmic texture reconstruction.',
    technologies: ['Texture Synthesis', 'Image Processing', 'Python'],
  },
  'tsengkweiming/DongShengClinic': {
    title: 'DongShengClinic',
    description:
      'Website built with HTML, Tailwind CSS (CDN), custom WebGL, and a lightweight Google Apps Script backend',
    technologies: ['Frontend', 'WebGL', 'Backend'],
  },
};

const FOCUS_AREAS: CvFocusArea[] = [
  {
    title: 'Realtime Rendering',
    body: 'Shader-centered graphics work with attention to frame stability, visual clarity, and production constraints.',
    stack: ['GPGPU', 'HLSL / GLSL', 'Profiling'],
  },
  {
    title: 'Distributed Visual Systems',
    body: 'Multi-PC synchronization and large-scale object management for immersive installations.',
    stack: ['Synchronization', 'System architecture', 'C#'],
  },
  {
    title: 'Spatial Computing',
    body: 'Visual systems shaped around walls, floors, architecture, AR-tracked mobile devices, and human movement through space.',
    stack: ['AR/VR', 'Projection geometry', 'Computational design'],
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

const getProjectProfile = (
  project: ExternalProject,
): ProjectProfile | undefined => {
  const searchableProjectText = [
    project.link,
    project.imageUrl,
    project.title,
    project.description,
  ]
    .filter(Boolean)
    .join(' ');

  return PROJECT_PROFILES.find((profile) =>
    searchableProjectText.includes(profile.match),
  );
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
      label: 'Portfolio',
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
    const profile = getProjectProfile(project);
    const parsed = parsePeriodLocation(project.description);

    return {
      title: profile?.title || cleanText(project.title),
      period: profile?.period || parsed.period,
      location: profile?.location || parsed.location,
      description: profile?.description || cleanText(project.description),
      role: profile?.role,
      challenge:
        profile?.challenge ||
        'Selected graphics project focused on real-time visual quality and production reliability.',
      technologies: profile?.technologies || ['Realtime graphics'],
      imageUrl: project.imageUrl,
      link: project.link,
    };
  });
};

const normalizeRepositoryName = (repository: string, username: string) => {
  const cleanRepository = repository.trim();

  return cleanRepository.includes('/')
    ? cleanRepository
    : `${username}/${cleanRepository}`;
};

const makeGithubProjects = (config: Config): CvRepository[] => {
  const githubConfig = config.projects?.github;

  if (!githubConfig?.display) {
    return [];
  }

  const repositories = githubConfig.manual?.projects || [];

  return repositories.map((repository) => {
    const repo = normalizeRepositoryName(repository, config.github.username);
    const repoKey = repo.toLowerCase();
    const repoName = repo.split('/').pop() || repo;
    const profile = GITHUB_PROJECT_PROFILES[repoKey];

    return {
      repo,
      title: profile?.title || repoName,
      description:
        profile?.description ||
        'Selected public repository focused on graphics engineering, realtime systems, or creative technology.',
      technologies: profile?.technologies || ['GitHub', 'Open source'],
      link: `https://github.com/${repo}`,
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
    highlights: (education.highlights || []).map((highlight) =>
      cleanText(highlight),
    ),
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
    primaryStack: skills.slice(0, 5),
    contactLinks: makeContactLinks(config),
    resumeUrl: isRealResumeUrl(config.resume?.fileUrl)
      ? config.resume?.fileUrl
      : undefined,
    projects: makeProjects(config),
    githubProjects: makeGithubProjects(config),
    experiences: makeExperiences(config),
    educations: makeEducations(config),
    focusAreas: FOCUS_AREAS,
    technicalNotes: TECHNICAL_NOTES,
  };
};
