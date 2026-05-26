// portfolio.config.ts

const CONFIG = {
  bio: `Graphics engineer and creative technologist specializing in real-time rendering, shader development (HLSL, GLSL), and system architecture in C#. Experienced in building distributed real-time synchronization systems, signal processing pipelines, and large-scale object management. At teamLab, I develop immersive digital contents that integrate graphics, distributed systems, and spatial computing—ensuring seamless visual continuity across multiple PCs and complex geometries such as walls and floors. With a background in architecture and transportation technology from National Chiao Tung University, I bring a human-centered approach to spatial system design. Previously a VR developer at NAXS Corp. Always curious, always building.`,
  github: {
    username: 'tsengkweiming', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/tsengkweiming/tsengkweiming.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/tsengkweiming/portfolio, then set base to '/portfolio/'.
   */
  base: '/portfolio/',
  projects: {
    external: {
      header: '案件 Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'HoiPoiのVJ制作',
          description: 'May 2025, Tokyo, Japan',
          imageUrl:
            'https://tsengkweiming.github.io/portfolio-pages/project-hoipoi-vj/photos/IMG3.jpg',
          link: 'https://tsengkweiming.github.io/portfolio-pages/project-hoipoi-vj/',
        },
        {
          title: '珍珠のVJ制作',
          description: 'Apr 2025, Tokyo, Japan',
          imageUrl:
            'https://tsengkweiming.github.io/portfolio-pages/project-pearl-vj/photos/img3.png',
          link: 'https://tsengkweiming.github.io/portfolio-pages/project-pearl-vj/',
        },
        {
          title: 'Flowers and People, Cannot be Controlled but Live Together',
          description: 'Oct 2025, Kyoto, Japan',
          imageUrl:
            'https://imagedelivery.net/b5EBo9Uo-OK6SM09ZTkEZQ/d53fa366-71ef-4b3c-d72a-ec3025c24600/width=3840,quality=80',
          link: 'https://www.teamlab.art/jp/ew/flowersandpeople-kyoto/kyoto/',
        },
        {
          title: 'Megaliths in the Roots Garden',
          description: 'Dec 2024, Abu Dhabi, UAE',
          imageUrl:
            'https://imagedelivery.net/b5EBo9Uo-OK6SM09ZTkEZQ/cefLMoExSvd8Mocz5H3imF/width=3840,quality=80',
          link: 'https://www.teamlab.art/jp/ew/megaliths-phenomena/phenomena/',
        },
        {
          title: 'Soft Terrain in Granular Topography',
          description: 'May 2024, Jeddah, Saudi Arabia',
          imageUrl:
            'https://imagedelivery.net/b5EBo9Uo-OK6SM09ZTkEZQ/FQqwRLb8U8EuWnBs6P6RWM/width=1920,quality=80',
          link: 'https://www.teamlab.art/jp/ew/softterrain-jeddah/jeddah/',
        },
        {
          title: 'Life is an Ephemeral Light that Blooms in the Dark',
          description: 'May 2024, Jeddah, Saudi Arabia',
          imageUrl:
            'https://imagedelivery.net/b5EBo9Uo-OK6SM09ZTkEZQ/fCk4ndN2jMwkTWYuMcVET4/width=3840,quality=80',
          link: 'https://www.teamlab.art/jp/w/life-ephemerallight-jeddah/jeddah/',
        },
        {
          title: 'Life is an Ephemeral Light that Blooms in the Dark',
          description: 'Feb 2024, Azabudai Tokyo, Japan',
          imageUrl:
            'https://imagedelivery.net/b5EBo9Uo-OK6SM09ZTkEZQ/KFKrRpZk6UdmMhB5pPsZTV/width=3840,quality=80',
          link: 'https://www.teamlab.art/jp/w/life-ephemerallight-azabudai/',
        },
        {
          title: 'Rinkan sauna',
          description:
            'サウナ空間で制作したリアルタイム映像作品。漂うミストにを投影し、没入的な雰囲気を生み出す。 Mar 2021, Roppongi Tokyo, Japan',
          imageUrl:
            'https://imagedelivery.net/b5EBo9Uo-OK6SM09ZTkEZQ/ri8LBVvcb8rAFWy2Drf96/width=3840,quality=80',
          link: 'https://www.teamlab.art/jp/e/reconnect/',
        },
        {
          title: 'Flower Bombing home',
          description:
            'コロナ禍に、美術館での体験がYouTube配信を通じて家庭へと変わっていく過程を探った作品。 Aug 2020',
          imageUrl:
            'https://flowers-bombing-home.teamlab.art/static/media/your-flower-art-PC.e2ffdf79.jpg',
          link: 'https://flowers-bombing-home.teamlab.art/jp/',
        },
        {
          title:
            'つぶつぶの地層のふわふわな地形 / Soft Terrain in Granular Topography',
          description: 'Apr 2020, Fukuoka, Japan',
          imageUrl:
            'https://imagedelivery.net/b5EBo9Uo-OK6SM09ZTkEZQ/YRS4F2bcFFP5fiXfmjw6SB/width=3840,quality=80',
          link: 'https://www.teamlab.art/jp/ew/soft_terrain_forest/',
        },
      ],
    },
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: true, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['tsengkweiming/my-project1', 'tsengkweiming/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: [], // List of repository names to display. example: ['tsengkweiming/my-project1', 'tsengkweiming/my-project2']
      },
    },
  },
  seo: {
    title: 'Tseng KueiMing | Graphics Engineer CV',
    description:
      'Graphics engineer CV covering real-time rendering, shader development, immersive installations, and selected teamLab work.',
    imageURL:
      'https://imagedelivery.net/b5EBo9Uo-OK6SM09ZTkEZQ/d53fa366-71ef-4b3c-d72a-ec3025c24600/width=3840,quality=80',
  },
  social: {
    linkedin: '',
    x: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    discord: '',
    telegram: '',
    website: '',
    phone: '',
    email: '',
  },
  resume: {
    fileUrl:
      'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'HLSL / GLSL',
    'C#',
    'C++',
    'RenderDoc',
    'PIX',
    'Graphics Profiling',
    'Rhino / Grasshopper / Revit',
    'Git',
    'Node.js',
    'Python',
    'MySQL',
  ],
  experiences: [
    {
      company: 'teamLab',
      position: 'graphics engineer',
      from: 'Jan 2020',
      to: 'Present',
      companyLink: 'https://www.teamlab.art',
    },
    {
      company: 'NAXS Corp',
      position: 'VR developer',
      from: 'July 2017',
      to: 'August 2019',
      companyLink: 'https://www.naxs.tech',
    },
  ],
  certifications: [
    {
      name: 'Lorem ipsum',
      body: 'Lorem ipsum dolor sit amet',
      year: 'March 2022',
      link: 'https://example.com',
    },
  ],
  educations: [
    {
      institution: 'National Chiao Tung University',
      degree: 'Master of Science in Architecture',
      from: '2016',
      to: '2018',
    },
    {
      institution: 'National Chiao Tung University',
      degree: 'Bachelor of Transporation Technology',
      from: '2012',
      to: '2016',
    },
  ],
  publications: [],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: { id: '', snippetVersion: 6 },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'caramellatte',
      'abyss',
      'silk',
      'procyon',
    ],
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/tsengkweiming/portfolio"
      target="_blank"
      rel="noreferrer"
    >portfolio</a>`,

  enablePWA: true,
};

export default CONFIG;
